<<<<<<< HEAD
import React, { useState } from 'react';
import './Home.css';

function Home() {
  // State to store the uploaded images
  const [uploadedImages, setUploadedImages] = useState([]);

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = [];

    // Check if the number of files exceeds 4
    if (files.length + uploadedImages.length > 4) {
      alert('You can only upload a maximum of 4 images');
      return; // Prevent uploading more than 4 images
    }

    // Process each file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        newImages.push({ src: reader.result, name: file.name });
        // Update the state with the new images list after reading the file
        if (newImages.length === files.length) {
          setUploadedImages((prevImages) => [...prevImages, ...newImages]);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle image deletion
  const handleImageDelete = (index) => {
    setUploadedImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>RESILIENT ROOTS AI</h1>
        </div>
        <nav className="nav">
          <a href="/">HOME</a>
          <a href="#">RESULTS</a>
          <a href="/about">ABOUT</a>
          <a href="/profile">
            <img
              src="src/assets/profile-icon.png.png" // Corrected image path
              alt="Profile"
              className="profile-icon"
            />
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="upload-box">
          <input
            type="file"
            id="imageUpload"
            className="upload-input"
            onChange={handleImageUpload}
            multiple
          />
          <label htmlFor="imageUpload" className="upload-label">
            <div className="upload-icon">
              <img src="src/assets/upload-icon.png" alt="Upload Icon" />
              <p>Upload images here</p>
            </div>
          </label>
          <button className="submit-btn">SUBMIT</button>
        </div>

        {/* Display uploaded images */}
        <div className="image-display-container">
          {uploadedImages.map((image, index) => (
            <div key={index} className="image-display-box">
              <img src={image.src} alt={image.name} className="uploaded-image" />
              <div className="image-name">
                {image.name}
                <button
                  className="delete-btn"
                  onClick={() => handleImageDelete(index)}
                >
                  X
                </button>
              </div>
            </div>
          ))}

          {/* Show Generate Report button if at least one image is uploaded */}
          {uploadedImages.length > 0 && (
            <div className="generate-report-btn-container">
              <button className="generate-report-btn">GENERATE REPORT</button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p><b>Contact No:</b> +91 9876543210</p>
        <p><b>Email id: </b>detect@gmail.com</p>
        <a href="#">Instagram</a>
        <p><b>Location: </b>Bengaluru</p>
      </footer>

      {/* Chat-bot Image */}
      <img src="src/assets/chat-bot.png" alt="Chat Bot" className="chat-bot" />
    </div>
  );
}

export default Home;
=======
import React, { useState } from 'react';
import './Home.css';

function Home() {
  // State to store the uploaded images
  const [uploadedImages, setUploadedImages] = useState([]);

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = [];

    // Check if the number of files exceeds 4
    if (files.length + uploadedImages.length > 4) {
      alert('You can only upload a maximum of 4 images');
      return; // Prevent uploading more than 4 images
    }

    // Process each file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        newImages.push({ src: reader.result, name: file.name });
        // Update the state with the new images list after reading the file
        if (newImages.length === files.length) {
          setUploadedImages((prevImages) => [...prevImages, ...newImages]);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle image deletion
  const handleImageDelete = (index) => {
    setUploadedImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>RESILIENT ROOTS AI</h1>
        </div>
        <nav className="nav">
          <a href="/">HOME</a>
          <a href="#">RESULTS</a>
          <a href="/about">ABOUT</a>
          <a href="/profile">
            <img
              src="src/assets/profile-icon.png.png" // Corrected image path
              alt="Profile"
              className="profile-icon"
            />
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="upload-box">
          <input
            type="file"
            id="imageUpload"
            className="upload-input"
            onChange={handleImageUpload}
            multiple
          />
          <label htmlFor="imageUpload" className="upload-label">
            <div className="upload-icon">
              <img src="src/assets/upload-icon.png" alt="Upload Icon" />
              <p>Upload images here</p>
            </div>
          </label>
          <button className="submit-btn">SUBMIT</button>
        </div>

        {/* Display uploaded images */}
        <div className="image-display-container">
          {uploadedImages.map((image, index) => (
            <div key={index} className="image-display-box">
              <img src={image.src} alt={image.name} className="uploaded-image" />
              <div className="image-name">
                {image.name}
                <button
                  className="delete-btn"
                  onClick={() => handleImageDelete(index)}
                >
                  X
                </button>
              </div>
            </div>
          ))}

          {/* Show Generate Report button if at least one image is uploaded */}
          {uploadedImages.length > 0 && (
            <div className="generate-report-btn-container">
              <button className="generate-report-btn">GENERATE REPORT</button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p><b>Contact No:</b> +91 9876543210</p>
        <p><b>Email id: </b>detect@gmail.com</p>
        <a href="#">Instagram</a>
        <p><b>Location: </b>Bengaluru</p>
      </footer>

      {/* Chat-bot Image */}
      <img src="src/assets/chat-bot.png" alt="Chat Bot" className="chat-bot" />
    </div>
  );
}

export default Home;
>>>>>>> master
