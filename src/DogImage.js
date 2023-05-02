import React, { useState, useEffect } from "react";

const DogImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setImageUrl(data.message);
    };

    fetchDogImage();
  }, []);

  return (
    <div className="dog-image-container">
      <img src={imageUrl} alt="A cute dog" />
    </div>
  );
};

export default DogImage;
