import "../../index.css";
import "./Desktop.css";
import { useState } from "react";
import { 
  FaDesktop,
  FaLock, 
  FaShieldAlt,
  FaBolt,
  FaDownload
} from "react-icons/fa";

const desktopFeatures = [
  {
    icon: <FaLock />,
    title: "Password-Based Encryption",
    short: "Encrypt files using a password you control.",
    long: "The desktop app converts your password into a secure encryption key using PBKDF2 and a unique random salt for each file. This ensures that even if two files are encrypted with the same password, the resulting keys and encrypted data are different."
  },
  {
    icon: <FaShieldAlt />,
    title: "Authenticated Encryption",
    short: "Detects tampering and ensures data integrity.",
    long: "Files are encrypted using Fernet (AES + HMAC) which provides built-in integrity verification. Any modification to the encrypted file or an incorrect password will cause decryption to fail safely, preventing corrupted or tampered files from being used."
  },
  {
    icon: <FaBolt />,
    title: "High Performance Processing",
    short: "Optimized for large files and multiple file operations.",
    long: "The desktop application efficiently handles multiple files and large file sizes (up to 100MB per operation) by processing files locally in memory. This design minimizes delays and ensures fast encryption and decryption without writing unnecessary temporary files to disk."
  },
  {
    icon: <FaDesktop />,
    title: "Offline-First Design",
    short: "No internet connection required.",
    long: "All operations occur entirely on the user's machine. Files, passwords, and encryption keys are never transmitted over the internet, ensuring full privacy even in air-gapped or highly secure environments."
  },
  {
    icon: <FaDownload />,
    title: "Safe File Handling",
    short: "Files are only written when explicitly downloaded.",
    long: "Decrypted or encrypted files are stored in memory until the user chooses to download them. This prevents accidental plaintext storage and reduces potential exposure of sensitive data on disk."
  },
  {
    icon: <FaShieldAlt />,
    title: "Security Trade-Offs & Limitations",
    short: "Know what to expect from desktop encryption.",
    long: "The security of your files depends entirely on your password strength. There is no password recovery mechanism, so if the password is lost, the files cannot be recovered. Users must manage their passwords carefully."
  }
];

const Desktop = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="desktop-page">
      <div className="desktop-overlay">

        {/* HERO */}
        <section className="desktop-hero">
          <FaDesktop className="hero-icon" />
          <h1>Desktop Encryption Application</h1>
          <p>
            A privacy-focused desktop encryption tool designed for users who want
            full control over their data. All encryption and decryption processes
            happen locally using password-based security, with no server involvement
            and no internet dependency.
          </p>
        </section>

        {/* FEATURES */}
        <section className="desktop-features">
          <h2>Desktop Features</h2>
          <div className="feature-grid">
            {desktopFeatures.map((feature, index) => (
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

        {/* DOWNLOAD */}
        <section className="desktop-action">
          <a href="/FileEncryptor.exe" download>
            <FaDownload /> Download Desktop Application (.exe)
          </a>
          <p className="note">
            Windows compatible • Fully offline • No server trust required
          </p>
        </section>

        {/* HOW TO USE */}
       <section className="desktop-how">
  <h2>How to Use the Desktop Encryption Tool</h2>
  <ol className="how-list">
    <li>Download and install the desktop application (.exe) and launch it on your system.</li>
    <li>Select one or more files you want to encrypt or decrypt.</li>
    <li><strong>To Encrypt:</strong>
      <ol>
        <li>Choose the files.</li>
        <li>Enter a strong password you can remember.</li>
        <li>Click the <em>Encrypt</em> button.</li>
        <li>The encrypted files will be generated and automatically downloaded.</li>
      </ol>
    </li>
    <li><strong>To Decrypt:</strong>
      <ol>
        <li>Select the encrypted files.</li>
        <li>Enter the correct password used during encryption.</li>
        <li>Click the <em>Decrypt</em> button.</li>
        <li>The original files will be restored and automatically downloaded.</li>
      </ol>
    </li>
    <li>If an incorrect password is entered or the file has been tampered with, decryption will fail safely.</li>
    <li>Always remember your password; lost passwords cannot be recovered.</li>
  </ol>
</section>

      </div>
    </div>
  );
};

export default Desktop;
