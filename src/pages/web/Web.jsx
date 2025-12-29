import "../../index.css";
import "./Web.css";
import { useState } from "react";
import { 
  FaCloud,
  FaGlobe,
  FaLock,
  FaUserShield, 
  FaExternalLinkAlt,
  FaBolt
} from "react-icons/fa";

const webFeatures = [
  {
    icon: <FaCloud />,
    title: "Server-Side Encryption",
    short: "Files are encrypted on the server using a securely managed key.",
    long: "The web application uses a centrally stored AES key (kept in environment variables) to encrypt and decrypt files. Users do not need to manage passwords or keys, simplifying the encryption workflow while ensuring strong cryptography."
  },
  {
    icon: <FaLock />,
    title: "Secure Transmission",
    short: "Data is protected during upload and download.",
    long: "All files are transmitted over secure HTTPS connections. Encryption operations also use authenticated encryption (AES-GCM) to guarantee confidentiality and detect tampering during transit and processing."
  },
  {
    icon: <FaBolt />,
    title: "Fast & Lightweight",
    short: "Optimized for small and medium files.",
    long: "The web app is designed for quick, browser-based operations. Recommended file size per upload is up to 10MB to ensure fast processing. Large files may take longer due to network latency and browser memory limitations."
  },
  {
    icon: <FaUserShield />,
    title: "User-Friendly Interface",
    short: "Simple and intuitive for all experience levels.",
    long: "The web interface features a clean layout, responsive design, and guided workflows. Users can encrypt or decrypt files without needing technical knowledge or installing software."
  },
  {
    icon: <FaGlobe />,
    title: "Cross-Platform Access",
    short: "Use from any device with a modern browser.",
    long: "The application works on desktops, laptops, tablets, and smartphones. This ensures flexibility and convenience for users who need quick encryption tools without installing software."
  },
  {
    icon: <FaLock />,
    title: "Temporary File Handling",
    short: "Files are never stored permanently on the server.",
    long: "Uploaded files exist only during the encryption or decryption process. Once the operation is complete and the user downloads the processed file, all server copies are deleted, minimizing exposure of sensitive data."
  },
  {
    icon: <FaUserShield />,
    title: "Security Trade-Offs",
    short: "Understand the limitations of web encryption.",
    long: "Because encryption is performed on the server, users must trust the server operator. Unlike the desktop version, there is no offline operation or personal password control. For sensitive or high-risk data, the desktop application is recommended."
  }
];

const Web = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="web-page">
      <div className="web-overlay">

        {/* HERO */}
        <section className="web-hero">
          <FaCloud className="hero-icon" />
          <h1>Web Encryption Application</h1>
          <p>
            A browser-based encryption solution for users who want convenience and
            speed. Files are processed on the server using strong AES encryption,
            with temporary storage and secure download.
          </p>
        </section>

        {/* FEATURES */}
        <section className="web-features">
          <h2>Web Application Features</h2>
          <div className="feature-grid">
            {webFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.short}</p>

                {expandedIndex === index && (
                  <p className="read-more-text">{feature.long}</p>
                )}

                <button
                  className="read-more-btn"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ACTION */}
        <section className="web-action">
          <a
            href="https://enc-dec-wew6.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> Open Web Application
          </a>
          <p className="note">
            Internet connection required • No installation needed
          </p>
        </section>

        {/* HOW TO USE */}
       <section className="web-how">
  <h2>How to Use the Web Encryption Tool</h2>
  <ol className="how-list">
    <li>Open the web application using the "Open Web Application" button above.</li>
    <li>Select one or more files to encrypt or decrypt. <em>(Recommended ≤10MB per file for fast processing.)</em></li>
    <li><strong>To Encrypt:</strong>
      <ol>
        <li>Choose the files.</li>
        <li>Click the <em>Encrypt</em> button.</li>
        <li>Wait for the process to complete, then download the encrypted files.</li>
      </ol>
    </li>
    <li><strong>To Decrypt:</strong>
      <ol>
        <li>Select the encrypted files.</li>
        <li>Click the <em>Decrypt</em> button.</li>
        <li>Wait for the process to complete, then download the decrypted files.</li>
      </ol>
    </li>
    <li>Files are processed temporarily on the server and deleted immediately after download.</li>
    <li>For large files, processing may take longer due to network or CPU limitations.</li>
  </ol>
</section>

      </div>
    </div>
  );
};

export default Web;
