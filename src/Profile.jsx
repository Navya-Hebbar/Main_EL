// Profile.js
import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="ProfilePage">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>RESILIENT ROOTS AI</h1>
        </div>
        <nav className="nav">
          <a href="/">HOME</a>
          <a href="/results">RESULTS</a>
          <a href="/about">ABOUT</a>
          <a href="/profile">
            <img
              src="src/assets/profile-icon.png.png" // Fixed the image path
              alt="Profile"
              className="profile-icon"
            />
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="profile-main">
        <section className="profile-section">
          <h2 className="profile-title">USER PROFILE</h2>
          <div className="profile-info">
            <div className="profile-pic">
              <img src="src/assets/profile-picture.jpg" alt="Profile" />
            </div>
            <div className="profile-details">
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Role:</strong> Data Scientist</p>
              <p><strong>Bio:</strong> Passionate about AI and machine learning with a focus on agriculture technology.</p>
              <p><strong>Email:</strong> johndoe@gmail.com</p>
              <p><strong>Location:</strong> Bengaluru, India</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p><b>Contact No:</b> +91 9876543210</p>
        <p><b>Email id:</b> detect@gmail.com</p>
        <a href="#">Instagram</a>
        <p><b>Location:</b> Bengaluru</p>
      </footer>

      <img src="src/assets/chat-bot.png" alt="Chat Bot" className="chat-bot" />
    </div>
  );
}

export default Profile;
