import { useState } from "react";
import Image from "next/image";

import i1 from "../assets/images/cert-1.png";
import i2 from "../assets/images/cert-2.png";
import i3 from "../assets/images/cert-3.png";
import i4 from "../assets/images/cert-4.png";
import i5 from "../assets/images/cert-5.png";
import i6 from "../assets/images/cert-6.png";
import i7 from "../assets/images/cert-7.png";

const certificates = [
  {
    id: 1,
    title: "PLC Core – S7-Logo Course Certificate",
    subtitle: "Tehran Institute of Technology",
    date: "July 6, 2008",
    src: i1,
  },
  {
    id: 2,
    title: "Certificate of Technical & Vocational Training Skill",
    subtitle: "Industry Electrician (2)",
    date: "February 17, 2007",
    src: i2,
  },
  {
    id: 3,
    title: "Robotics – 8051-AVR Course Certificate",
    subtitle: "Tehran Institute of Technology",
    date: "July 6, 2008",
    src: i3,
  },
  {
    id: 4,
    title: "Specialized Electronics Course Skill Certificate",
    subtitle: "Pishro Noavaran Kavosh",
    date: "October 29, 2007",
    src: i4,
  },
  {
    id: 5,
    title: "Vocational Training Skill – Official Translation",
    subtitle:
      "Ministry of Labor & Social Affairs — Translated by Parviz Farrokhi",
    date: "Certified July 8, 2012",
    src: i5,
  },
  {
    id: 6,
    title: "P.L.C-Core-S7-Logo – Official English Translation",
    subtitle: "Tehran Institute of Technology — Translated by Parviz Farrokhi",
    date: "Certified July 8, 2012",
    src: i6,
  },
  {
    id: 7,
    title: "Robotic-8051-AVR – Official English Translation",
    subtitle: "Tehran Institute of Technology — Translated by Parviz Farrokhi",
    date: "Certified July 8, 2012",
    src: i7,
  },
];

const roman = ["I", "II", "III", "IV", "V", "VI", "VII"];

export default function CertificatesGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "linear-gradient(160deg, #f5f0e8 0%, #ede8dc 100%)",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 24px 40px",
          borderBottom: "1px solid #c9b99a",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#8a7560",
            marginBottom: "12px",
          }}
        >
          Professional Portfolio
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "normal",
            color: "#2c2416",
            letterSpacing: "1px",
            margin: "0 0 12px",
          }}
        >
          Arash Noorali
        </h1>
        <div
          style={{
            width: "60px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #8a7560, transparent)",
            margin: "0 auto 14px",
          }}
        />
        <p
          style={{
            fontSize: "14px",
            color: "#6b5a45",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Certificates & Credentials
        </p>
      </div>

      {/* Certificate list */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px" }}>
        {certificates.map((cert, idx) => (
          <div key={cert.id}>
            {/* Divider with roman numeral */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "48px 0 28px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, #c9b99a)",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "3px",
                  color: "#9e8a72",
                  fontStyle: "italic",
                }}
              >
                {roman[idx]}
              </span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "linear-gradient(90deg, #c9b99a, transparent)",
                }}
              />
            </div>

            {/* Header text */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <h2
                style={{
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  fontWeight: "normal",
                  color: "#2c2416",
                  letterSpacing: "0.5px",
                  margin: "0 0 6px",
                  lineHeight: 1.4,
                }}
              >
                {cert.title}
              </h2>
              <p
                style={{
                  fontSize: "12px",
                  color: "#8a7560",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  margin: "0 0 4px",
                }}
              >
                {cert.subtitle}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#a8957e",
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                {cert.date}
              </p>
            </div>

            {/* Certificate image */}
            <div
              onClick={() => setLightbox(cert)}
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "zoom-in",
              }}
            >
              <div
                style={{
                  position: "relative",
                  boxShadow:
                    "0 8px 40px rgba(44,36,22,0.18), 0 2px 8px rgba(44,36,22,0.10)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  maxWidth: "600px",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-4px) scale(1.01)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 56px rgba(44,36,22,0.24), 0 4px 16px rgba(44,36,22,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 40px rgba(44,36,22,0.18), 0 2px 8px rgba(44,36,22,0.10)";
                }}
              >
                <Image
                  src={cert.src}
                  alt={cert.title}
                  style={{ width: "100%", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Final divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "48px 0 0",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(90deg, transparent, #c9b99a)",
            }}
          />
          <span style={{ fontSize: "18px", color: "#c9b99a" }}>✦</span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(90deg, #c9b99a, transparent)",
            }}
          />
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(20,16,10,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "24px",
            cursor: "zoom-out",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              position: "relative",
            }}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.title}
              style={{
                maxWidth: "100%",
                maxHeight: "88vh",
                borderRadius: "4px",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
                display: "block",
              }}
            />
            <p
              style={{
                textAlign: "center",
                color: "#c9b99a",
                fontSize: "13px",
                marginTop: "16px",
                letterSpacing: "1px",
              }}
            >
              {lightbox.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
