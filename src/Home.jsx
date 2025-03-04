import React, { useState, useEffect } from "react";

const Home = () => {
  const text = "Loading...";

  // Define an array of hex colors corresponding to Tailwind colors
  const generateRandomColor = () => {
    const colors = [
      "#ef4444", // red-600
      "#3b82f6", // blue-600
      "#10b981", // green-600
      "#f59e0b", // yellow-600
      "#8b5cf6", // purple-600
      "#ec4899", // pink-600
      "#6366f1", // indigo-600
      "#14b8a6", // teal-600
      "#f97316", // orange-600
      "#06b6d4", // cyan-600
      "#f43f5e", // rose-600
      "#059669", // emerald-600
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Generate initial colors
  const initialColors = text.split("").map(() => generateRandomColor());
  const [textColors, setTextColors] = useState(initialColors);

  // Track if animation has been applied
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger the fade-in animation when mounted
  }, []);

  // Function to change text colors
  const changeTextColors = () => {
    const newColors = text.split("").map(() => generateRandomColor());
    setTextColors(newColors);
  };

  return (
    <div className="container flex min-h-screen max-w-full flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="font-times text-center text-9xl transition-colors duration-300 select-none">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="cursor-pointer wave"
            onClick={changeTextColors} // Change colors on click
            style={{ 
              color: textColors[index], // Apply inline color
              animationDelay: `${index * 0.1}s` // Add delay for wave effect
            }} 
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Home;