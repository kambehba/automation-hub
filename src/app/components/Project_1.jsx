"use client";
import Image from "next/image";
import i1 from "../assets/images/i2.jpg";
import i2 from "../assets/images/i3.jpg";
import i3 from "../assets/images/i4.jpg";
import i4 from "../assets/images/i5.jpg";
export default function Project_1() {
  // Sample images - replace with your actual image URLs
  //const images2 = [i1];
  const images = [
    {
      id: 1,
      url: i1,
      alt: "Mountain landscfgape",
    },
    {
      id: 2,
      url: i2,
      alt: "Forest path",
    },
    {
      id: 3,
      url: i3,
      alt: "Nature scene",
    },
    {
      id: 4,
      url: i4,
      alt: "Lake view",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to My Gallery
        </h1>

        {/* Text Area */}
        <div className="text-center mb-8 px-4">
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Design and implement a web-based interface for monitoring and
            controlling a paint machine. The interface should provide real-time
            updates on the machine's status, allow users to adjust settings, and
            display alerts for maintenance or errors. Ensure the design is
            user-friendly and responsive across different devices.
          </p>
        </div>
        {/* <Image src={i1} alt="Sample" className="mb-8 rounded-lg shadow-md" /> */}

        {/* Scrollable Image Frame */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="h-120 overflow-y-auto border-2 border-gray-200 rounded-lg">
            <div className="space-y-4 p-4">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    // className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
