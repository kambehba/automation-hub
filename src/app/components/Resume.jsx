import React from "react";
import {
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  Wrench,
} from "lucide-react";

export default function Resume() {
  const resumeData = {
    contact: {
      email: "arashnoorali@myyahoo.com",
      phone: "+374 93 751081",
    },
    skills:
      "Over 10 years of hands-on experience in PLC automation, specializing in the design, programming, and implementation of automated industrial systems.",
    experience: [
      {
        company: "Pooshesh Fam, Tehran",
        role: "Electrical Supervisor",
        period: "Feb 2020 - PRESENT",
        responsibilities: [
          "Designed and built custom industrial machinery, including paint mixers, extruders, plastic injection machines, and industrial ovens for MDF paint lines.",
          "Proficient in electrical control panel design, PLC programming (Siemens, Allen-Bradley, etc.), HMI development, and system diagnostics.",
          "Experience collaborating with cross-functional teams to streamline production workflows and reduce downtime through automation.",
        ],
      },
      {
        company: "Goleposh, Kashan",
        role: "Automation Systems Consultant",
        period: "July 2021 - PRESENT",
        responsibilities: [
          "Delivered full-cycle industrial automation projects---from concept and design to installation, testing, and operator training.",
        ],
      },
      {
        company: "Fam Powder, Tehran",
        role: "Automation Systems Consultant",
        period: "July 2020 - PRESENT",
        responsibilities: [
          "Served as a trusted automation and electrical consultant, delivering tailored solutions across manufacturing and production environments.",
        ],
      },
      {
        company: "Aria Dej, Tehran",
        role: "Part Time Electrician",
        period: "2009 - 2012",
        responsibilities: [
          "Delivered full-cycle industrial automation projects---from concept and design to installation, testing, and operator training.",
        ],
      },
      {
        company: "Electrical Systems Contractor, Tehran",
        role: "Part Time Electrician",
        period: "2013 - 2018",
        responsibilities: [
          "Led multiple residential electrical projects, ensuring safe, code-compliant installations for new construction, remodeling, and system upgrades.",
        ],
      },
    ],
    education: {
      title: "Industrial Electronics Certificates",
      description:
        "Equipped with solid foundational knowledge in electrical systems, circuit design, and electronic control systems.",
      details: [
        "Completed specialized training in Automation Systems and PLC Programming from a leading Vocational School in Tehran, with hands-on experience in industrial control technologies.",
        "Academic focus included power electronics, digital and analog systems, industrial instrumentation, and control system design.",
      ],
    },
    awards:
      "Developed and implemented project-based automation solutions during vocational training, simulating real factory environments.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Arash Noorali</h1>
          <div className="flex flex-col sm:flex-row gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="hover:text-white transition"
              >
                {resumeData.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>{resumeData.contact.phone}</span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="px-8 py-8 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{resumeData.skills}</p>
        </div>

        {/* Experience Section */}
        <div className="px-8 py-8 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
          </div>
          <div className="space-y-6">
            {resumeData.experience.map((job, idx) => (
              <div
                key={idx}
                className="relative pl-6 border-l-2 border-blue-200"
              >
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {job.role}
                  </h3>
                  <p className="text-blue-600 font-medium">{job.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{job.period}</p>
                </div>
                <ul className="space-y-2 mt-3">
                  {job.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="text-gray-700 text-sm leading-relaxed flex"
                    >
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="px-8 py-8 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {resumeData.education.title}
          </h3>
          <p className="text-gray-700 mb-3">
            {resumeData.education.description}
          </p>
          <ul className="space-y-2">
            {resumeData.education.details.map((detail, idx) => (
              <li
                key={idx}
                className="text-gray-700 text-sm leading-relaxed flex"
              >
                <span className="text-blue-600 mr-2">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Awards Section */}
        <div className="px-8 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Awards & Achievements
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{resumeData.awards}</p>
        </div>
      </div>
    </div>
  );
}
