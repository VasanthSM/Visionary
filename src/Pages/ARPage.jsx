import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { load as loadFaceMesh } from '@tensorflow-models/facemesh';

const ARPage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [faceMesh, setFaceMesh] = useState(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // Array of glasses products (image URLs)
  const glassesProducts = [
    { id: 1, img: '/glasses-overlay-1.png' }, // Replace with your actual image paths
    { id: 2, img: '/glasses-overlay-2.png' },
    { id: 3, img: '/glasses-overlay-3.png' },
    // Add more products as needed
  ];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setIsCameraActive(true);
    } catch (error) {
      console.error('Error accessing the camera', error);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    setIsCameraActive(false);
  };

  useEffect(() => {
    const runFaceMesh = async () => {
      try {
        const model = await loadFaceMesh();
        setFaceMesh(model);

        const ctx = canvasRef.current.getContext('2d');
        const detectFace = async () => {
          if (!isCameraActive) return;

          const predictions = await model.estimateFaces(videoRef.current);
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

          if (predictions.length > 0) {
            predictions.forEach(prediction => {
              drawGlasses(prediction, ctx);
            });
          }

          requestAnimationFrame(detectFace);
        };
        detectFace();
      } catch (error) {
        console.error('Error running face mesh model', error);
      }
    };

    if (isCameraActive) {
      runFaceMesh();
    }

    return () => {
      if (faceMesh && typeof faceMesh.dispose === 'function') {
        faceMesh.dispose();
      }
    };
  }, [isCameraActive, faceMesh]);

  const drawGlasses = (prediction, ctx) => {
    const leftEye = prediction.annotations.leftEye;
    const rightEye = prediction.annotations.rightEye;
    const noseBridge = prediction.annotations.noseBridge;

    if (!leftEye || !rightEye || !noseBridge) {
      console.error('Face prediction does not have necessary annotations');
      return;
    }

    // Calculate the average position of both eyes
    const eyeCenterX = (leftEye[0][0] + rightEye[0][0]) / 2;
    const eyeCenterY = (leftEye[0][1] + rightEye[0][1]) / 2;

    // Calculate the position for the nose bridge
    const noseY = noseBridge[0][1];

    // Calculate the distance between eyes to dynamically size the glasses
    const eyeDistance = Math.sqrt(
      Math.pow(rightEye[0][0] - leftEye[0][0], 2) +
      Math.pow(rightEye[0][1] - leftEye[0][1], 2)
    );

    // Scale glasses width based on eye distance
    const glassesWidth = eyeDistance * 2; // Adjust multiplier for better fit
    const glassesHeight = glassesWidth * (100 / 250); // Maintain aspect ratio

    // Center the glasses over the eyes and slightly above the nose
    const positionX = eyeCenterX - glassesWidth / 2;
    const positionY = noseY - glassesHeight / 2.5; // Adjust for better positioning

    ctx.drawImage(
      document.getElementById('glasses-image'),
      positionX,
      positionY,
      glassesWidth,
      glassesHeight
    );
  };

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % glassesProducts.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex - 1 + glassesProducts.length) % glassesProducts.length);
  };

  return (
    <div className="container mx-auto py-4 px-4 md:px-8 lg:px-16 bg-[#F8F8FF]">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-black">Try Glasses On (AR)</h2>
      <div className="flex flex-col items-center">
        {/* Camera Toggle Button */}
        {!isCameraActive ? (
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded mb-4 hover:bg-blue-600 transition duration-300"
            onClick={startCamera}
          >
            Start Camera
          </button>
        ) : (
          <button
            className="bg-red-500 text-white px-6 py-2 rounded mb-6 hover:bg-red-600 transition duration-300"
            onClick={stopCamera}
          >
            Stop Camera
          </button>
        )}

        <div className="relative w-full max-w-md">
          <video
            ref={videoRef}
            className="w-full h-64 object-cover border border-gray-300 rounded-lg"
          ></video>
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-64 border border-gray-300 rounded-lg"
          />
          <img
            id="glasses-image"
            src={glassesProducts[currentProductIndex].img} // Use the current product's image
            alt="Glasses"
            style={{ display: 'none' }} // Hide this image
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mx-2 hover:bg-gray-600 transition duration-300"
            onClick={prevProduct}
          >
            Previous
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mx-2 hover:bg-gray-600 transition duration-300"
            onClick={nextProduct}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ARPage;
