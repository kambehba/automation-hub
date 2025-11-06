import { Mail, MessageCircle, Send, Phone } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Send me an email anytime",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Chat with me on WhatsApp",
      value: "+1 234 567 8900",
      link: "https://wa.me/1234567890",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Telegram",
      description: "Message me on Telegram",
      value: "@yourusername",
      link: "https://t.me/yourusername",
      color: "from-sky-500 to-sky-600",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      description: "Call me directly",
      value: "+1 234 567 8900",
      link: "tel:+1234567890",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out
            through any of these channels.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {method.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <p className="text-gray-900 font-medium">{method.value}</p>
              </div>
              <div
                className={`h-1 bg-gradient-to-r ${method.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              ></div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            I typically respond within 24 hours. Looking forward to hearing from
            you!
          </p>
        </div>
      </div>
    </div>
  );
}
