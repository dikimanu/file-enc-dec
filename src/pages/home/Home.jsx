import "../../index.css";  // global styles
import "./Home.css";       // page-specific
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaLock, FaDesktop, FaCloud, FaShieldAlt, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const featuresData = [
  { 
    icon: <FaLock />,
    title: "Strong File Encryption",
    short: "Protects files using modern, industry-standard cryptography.",
    long: "All files are encrypted using AES-based encryption algorithms that transform readable data into secure ciphertext. Without proper authorization, encrypted files cannot be accessed or understood."
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Key Handling",
    short: "Encryption keys are never stored in plaintext.",
    long: "The desktop application derives encryption keys from user passwords using secure key-derivation techniques, while the web application uses a securely managed server-side key stored in environment variables. Keys are protected at all times."
  },
  {
    icon: <FaDesktop />,
    title: "Privacy-First Desktop Application",
    short: "Password-based encryption with no server trust.",
    long: "The desktop application performs all encryption and decryption locally on the user’s machine. Files never leave the system, passwords are never stored, and the application works entirely offline."
  },
  {
    icon: <FaCloud />,
    title: "Convenient Web Application",
    short: "Browser-based encryption with simplified access.",
    long: "The web application allows users to encrypt and decrypt files without installation. Files are uploaded temporarily, processed using a securely managed server key, and deleted immediately after download."
  },
  {
    icon: <FaShieldAlt />,
    title: "Tamper Detection & Integrity",
    short: "Detects modified or corrupted encrypted files.",
    long: "Authenticated encryption ensures that any modification to encrypted data is detected automatically. If a file is altered or an incorrect key is used, decryption fails safely."
  },
  {
    icon: <FaLock />,
    title: "Temporary & Safe File Handling",
    short: "No permanent storage of decrypted files.",
    long: "Files are processed in memory or temporary storage only for the duration of encryption or decryption. Decrypted files are never retained unless explicitly downloaded by the user."
  }
];


const Home = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="home-hero">
        <h1>Secure File Encryption Suite</h1>
        <p>
          A security-focused file encryption system designed to protect sensitive
          data using modern cryptography. Choose between a privacy-first desktop
          application or a fast and convenient web-based encryption tool.
        </p>

        <div className="home-hero-button1">
          <button onClick={() => navigate("/desktop")}>
            Desktop Application
          </button>
        </div>

        <div className="home-hero-button2">
          <button onClick={() => navigate("/web")}>
            Web Application
          </button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="home-features">
        <h2>Core Features</h2>

        <div className="home-feature-grid">
          {featuresData.map((feature, index) => (
            <div key={index} className="home-feature-card">
              <div className="home-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.short}</p>

              {expandedIndex === index && (
                <p className="home-read-more">{feature.long}</p>
              )}

              <button
                className="home-read-more-btn"
                onClick={() => toggleReadMore(index)}
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DESKTOP OVERVIEW */}
      <section className="home-h">
         <h2>Desktop Application – Overview</h2>
  <ul className="home-hl">
    <li>
      <h3>Offline & Local Processing:</h3>
      All encryption and decryption operations occur entirely on the user’s
      machine. No files, passwords, or encryption keys are transmitted over
      the internet, ensuring complete privacy and control.
    </li>

    <li>
      <h3>Password-Based Security:</h3>
      Files are protected with a user-provided password, which is securely
      converted into an encryption key. Passwords are never stored, giving
      users full control over their data.
    </li>

    <li>
      <h3>High Performance:</h3>
      Optimized for desktop environments, the application efficiently handles
      multiple files simultaneously and supports large files (up to 100MB per
      operation) without compromising speed.
    </li>

    <li>
      <h3>Integrity Protection:</h3>
      Encrypted files include built-in tamper detection. If a file is modified
      or an incorrect password is used, decryption fails safely, preventing
      accidental data corruption.
    </li>

    <li>
      <h3>Recommended Use Cases:</h3>
      Ideal for sensitive data, personal backups, large files, and offline
      environments. Supports all common file types including .txt, .pdf,
      .jpg, .png, .docx, .mp4, and more.
    </li>
  </ul><div className="home-hero-button1">
         <button><a className="at" href="/FileEncryptor.exe" download>
            <FaDownload /> Install Now
          </a></button>
        </div>
        <div className="home-hero-button1">
          <button onClick={() => navigate("/desktop")}>
See More Info          </button>
        </div>
      </section>
      

      {/* WEB OVERVIEW */}
      <section className="home-a">
       <h2>Web Application – Overview</h2>
  <ul className="home-a2">
    <li>
      <h3>Online Processing:</h3>
      The web application requires an active internet connection. Files are
      uploaded temporarily for encryption or decryption and never stored
      permanently on the server.
    </li>

    <li>
      <h3>Server-Managed Encryption Key:</h3>
      Encryption is performed using a securely stored server-side AES key.
      Users do not manage passwords or cryptographic keys, simplifying the
      process while maintaining strong security.
    </li>

    <li>
      <h3>Lightweight & Fast:</h3>
      Designed for quick, browser-based operations. Supports multiple files
      with recommended sizes up to 10MB per processing session.
    </li>

    <li>
      <h3>Temporary File Handling:</h3>
      Uploaded files exist only for the duration of processing and are
      automatically deleted after the user downloads the processed result,
      ensuring minimal exposure of sensitive data.
    </li>

    <li>
      <h3>Recommended Use Cases:</h3>
      Ideal for quick encryption tasks, shared devices, and users who prefer
      browser-based tools without installing software. Supports all common
      file types.
    </li>
  </ul>
   <div className="home-hero-button2">
          <button>
            <a className="at"
                      href="https://enc-dec-wew6.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Visit Now
                    </a>  
          </button>
        </div>
         <div className="home-hero-button2">
          <button onClick={() => navigate("/web")}>
See More Info          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
