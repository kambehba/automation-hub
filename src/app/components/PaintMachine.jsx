import Image from "next/image";
import i1 from "../assets/images/i2.jpg";
import i2 from "../assets/images/i3.jpg";
import i3 from "../assets/images/i4.jpg";
import i4 from "../assets/images/i5.jpg";

export default function ImageTextLayout() {
  const sections = [
    {
      id: 1,
      image: i1,
      text: "Innovative technology solutions that transform the way businesses operate. Water Pumps and Lighting Automation for Paint Machine",
    },
    {
      id: 2,
      image: i2,
      text: "Collaborative teamwork is at the heart of everything we do. We believe in fostering environments where creativity and innovation thrive. Our approach combines strategic thinking with hands-on execution. Together, we build solutions that make a lasting impact on your organization.",
    },
    {
      id: 3,
      image: i3,
      text: "Data-driven insights power smarter business decisions. We analyze complex datasets to uncover valuable patterns and opportunities. Our analytics platform provides real-time visibility into key performance metrics. Transform raw data into actionable intelligence that propels your business forward.",
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
