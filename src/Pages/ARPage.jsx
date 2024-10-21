import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';

const ARPage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [model, setModel] = useState(null);

  const glassesProducts = [
    {
      id: 1,
      name: 'Stylish Glasses',
      image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/black-gold-black-full-rim-round-john-jacobs-tr-flex-jj-e14410-c6-eyeglasses__dsc7005_20_06_2024.jpg',
      price: '$50',
    },
    {
      id: 2,
      name: 'Retro Glasses',
      image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg',
      price: '$70',
    },
    {
      id: 3,
      name: 'Classic Glasses',
      image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/copper-brown-full-rim-round-vincent-chase-sleek-steel-vc-e15069-c2-eyeglasses_g_3676_10_14_22.jpg',
      price: '$60',
    },
    {
      id: 4,
      name: 'Sunglasses',
      image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-brown-gradient-full-rim-aviator-vincent-chase-polarized-vintage-vc-s11075-c11-sunglasses_g_3377_6_02_22.jpg',
      price: '$80',
    },
  ];

  const startCamera = async () => {
    try {
      const constraints = {
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setIsCameraActive(true);
      
      // Ensure model is loaded before starting detection
      const loadedModel = await loadModel();
      setModel(loadedModel);
      videoRef.current.addEventListener('loadeddata', () => {
        detectFace(loadedModel);
      });
    } catch (error) {
      console.error('Error accessing the camera:', error);
      alert(`Error accessing the camera: ${error.message}`);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setIsCameraActive(false);
  };

  const loadModel = async () => {
    await tf.ready();
    const model = await blazeface.load();
    return model;
  };

  const detectFace = async (model) => {
    const video = videoRef.current;

    const detect = async () => {
      if (video && model) {
        const predictions = await model.estimateFaces(video, false);
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        console.log('Predictions:', predictions); // Log predictions

        if (predictions.length > 0) {
          const { landmarks } = predictions[0];

          // Load glasses image
          const glassesImage = new Image();
          glassesImage.src = glassesProducts[currentProductIndex].image;

          // Log the current product being displayed
          console.log('Current Product:', glassesProducts[currentProductIndex]);

          // Ensure the image is loaded before drawing
          glassesImage.onload = () => {
            const leftEye = landmarks[1]; // Left eye landmark
            const rightEye = landmarks[4]; // Right eye landmark

            // Adjust glasses size and position
            const glassesWidth = rightEye[0] - leftEye[0] + 50; // Adjust width
            const glassesHeight = glassesWidth / 2.5; // Aspect ratio

            // Calculate position for glasses
            const eyeCenterX = (leftEye[0] + rightEye[0]) / 2;
            const eyeCenterY = (leftEye[1] + rightEye[1]) / 2;

            ctx.drawImage(
              glassesImage,
              eyeCenterX - glassesWidth / 2,
              eyeCenterY - glassesHeight / 1.5, // Position a bit higher to sit on the eyes
              glassesWidth,
              glassesHeight
            );

            console.log('Glasses drawn on canvas'); // Confirm glasses were drawn
          };
        } else {
          console.log('No face detected'); // Log if no face is detected
        }
      }
      requestAnimationFrame(() => detectFace(model));
    };
    detect();
  };

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % glassesProducts.length;
      console.log('Product changed to:', glassesProducts[nextIndex]); // Log the next product
      return nextIndex;
    });
  };

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) => {
      const prevIndexValue = (prevIndex - 1 + glassesProducts.length) % glassesProducts.length;
      console.log('Product changed to:', glassesProducts[prevIndexValue]); // Log the previous product
      return prevIndexValue;
    });
  };

  return (
    <div className="container mx-auto py-4 px-4">
      <h2 className="text-xl font-bold mb-6 text-center">Try Glasses On (AR)</h2>
      <div className="flex flex-col items-center">
        {!isCameraActive ? (
          <button className="bg-blue-500 text-white px-6 py-2 rounded mb-4" onClick={startCamera}>
            Start Camera
          </button>
        ) : (
          <button className="bg-red-500 text-white px-6 py-2 rounded mb-6" onClick={stopCamera}>
            Stop Camera
          </button>
        )}

        <div className="relative w-full max-w-md">
          <video ref={videoRef} className="w-full h-64 object-cover border border-gray-300 rounded-lg" />
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-64 border border-gray-300 rounded-lg" />
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded mx-2" onClick={prevProduct}>
            Previous
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded mx-2" onClick={nextProduct}>
            Next
          </button>
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">{glassesProducts[currentProductIndex].name}</h3>
          <p className="text-md">{glassesProducts[currentProductIndex].price}</p>
        </div>
      </div>
    </div>
  );
};

export default ARPage;
