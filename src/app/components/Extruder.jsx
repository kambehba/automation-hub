import Image from "next/image";
import i2 from "../assets/images/i26.jpg";
import i3 from "../assets/images/i4.jpg";
import i4 from "../assets/images/i37.jpg";
import i5 from "../assets/images/i38.jpg";

export default function ImageTextLayout() {
  const sections = [
    {
      id: 2,
      image: i2,
      text: " PID Control for Paint Chips Production from Paint Powder. Collaborative teamwork is at the heart of everything I do. I believe in fostering environments where creativity and innovation thrive.",
    },
    {
      id: 3,
      image: i3,
      text: "Data-driven insights power smarter business decisions. We analyze complex datasets to uncover valuable patterns and opportunities. Our analytics platform provides real-time visibility into key performance metrics. Transform raw data into actionable intelligence that propels your business forward.",
    },
    {
      id: 4,
      image: i4,
      text: "Controlling Temperature of Extruder Machine using PLC and SCADA System",
    },
    {
      id: 5,
      image: i5,
      text: "Automation of Extruder Machine for Plastic Industry using PLC and SCADA System.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16 leading-tight">
          Empowering Innovation
          <br />
          Through Technology
          <br />
          Excellence and Vision
          <br />
          For Tomorrow's Success
        </h1>

        {/* Image-Text Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={section.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={section.image}
                    alt={`Feature ${section.id}`}
                    className="w-full md:w-80 h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-210"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </div>

              {/* Separator - only show if not the last item */}
              {index < sections.length - 1 && (
                <div className="flex items-center justify-center my-12">
                  <div className="flex-1 border-t-2 border-gray-300"></div>
                  <div className="mx-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 border-t-2 border-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
