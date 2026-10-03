import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";

export default function Contact() {
  return (
    <footer
      id="Contact"
      className="w-full bg-black text-gray-300 border-t border-gray-700 font-TurretRoad"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-extrabold text-white tracking-wide mb-3">
            Shriya Panda
          </h2>
          <p className="text-sm text-gray-400 font-mono">
            Designing experiences that bridge creativity and technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-400 font-mono">
            <li>
              <a href="#Home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#Services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-400 font-mono">
            <li>
              Email:{" "}
              <a
                href="mailto:pandashriya7@gmail.com"
                className="hover:text-white transition-colors"
              >
                pandashriya7@gmail.com
              </a>
            </li>
            <li>Phone: +91 7855003375</li>
            <li>Bhubaneswar, India</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
            Social Links
          </h3>

          <div className="flex flex-col gap-4  text-gray-400 text-xl">
            <a
              href="mailto:pandashriya7@gmail.com"
              className="hover:text-white transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/shriya-panda-8bb5802a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/shriyartss?igsh=OTVkaWRxeHF4Mmk1"
              className="hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.behance.net/shriyapanda"
              className="hover:text-white transition-colors"
            >
              <ImBehance2 />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Bottom Note */}
      <div className="text-center py-5 text-xs text-gray-500 font-mono">
        © {new Date().getFullYear()} Shriya Panda Portfolio. All rights
        reserved.
      </div>
    </footer>
  );
}

// import React, { useState } from "react";
// import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

// const contacts = [
//   { icon: Mail, link: "mailto:shriyadev@gmail.com", label: "Email", value: "shriyadev@gmail.com" },
//   { icon: Phone, link: "tel:+919507250528", label: "Phone", value: "+91 9507250528" },
//   { icon: MapPin, label: "Location", value: "Bhubaneswar, Odisha, India" }
// ];

// const socials = [
//   { icon: <i className="fa-brands fa-github fa-lg"></i>, href: "#" },
//   { icon: <i className="fa-brands fa-linkedin-in fa-lg"></i>, href: "#" },
//   { icon: <i className="fa-brands fa-twitter fa-lg"></i>, href: "#" },
// ];

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [sent, setSent] = useState(false);

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     setSent(true);
//     setTimeout(() => setSent(false), 1600);
//     setForm({ name: "", email: "", message: "" });
//   }

//   return (
//     <main className="relative min-h-screen bg-gradient-to-br from-[#15151C] to-[#232536] pt-24 pb-10 px-4 md:px-12 flex flex-col items-center justify-start font-TurretRoad overflow-hidden">
//       {/* Curved top edge that dips into the section */}
//       <svg
//         className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none"
//         viewBox="0 0 1440 140"
//         preserveAspectRatio="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Fill should match the page background ABOVE this section (usually white) */}
//         <path
//           d="
//             M0,140
//             L0,40
//             C240,0 1200,180 1440,40
//             L1440,140
//             Z
//           "
//           fill="#ffffff"
//         />
//       </svg>

//       <h1 className="text-5xl md:text-7xl text-center font-black text-white mb-2">Get In Touch</h1>
//       <p className="text-lg md:text-xl text-gray-400 text-center mb-12 border-b-2 border-violet-500 max-w-xl mx-auto pb-1">
//         Have a project or want to collaborate? Feel free to reach out!
//       </p>

//       <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Info Panel */}
//         <section>
//           <h2 className="text-2xl font-extrabold text-white mb-6">Contact Information</h2>
//           <ul className="flex flex-col gap-5">
//             {contacts.map(({ icon: Icon, link, label, value }) => (
//               <li
//                 key={label}
//                 className="flex items-center gap-4 bg-white/[0.07] border border-white/10 rounded-2xl p-5 hover:border-violet-400/40 transition-all"
//               >
//                 <span className="p-3 rounded-full bg-white text-violet-300">
//                   <Icon className="w-7 h-7" />
//                 </span>
//                 <div>
//                   <div className="text-lg font-bold text-white">{label}</div>
//                   {link ? (
//                     <a
//                       href={link}
//                       className="text-base text-gray-300 hover:text-violet-400 transition-all"
//                       target="_blank"
//                       rel="noopener"
//                     >
//                       {value}
//                     </a>
//                   ) : (
//                     <span className="text-base text-gray-300">{value}</span>
//                   )}
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="flex gap-4 mt-12">
//             {socials.map((s, i) => (
//               <a
//                 href={s.href}
//                 key={i}
//                 className="rounded-full border border-white/10 bg-white/10 p-3 text-gray-300 hover:bg-violet-600/40 hover:border-violet-500 hover:text-white transition"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* Contact Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/7.5 backdrop-blur-[2px] border border-white/10 rounded-3xl shadow-2xl flex flex-col gap-6 p-8"
//         >
//           <div className="text-2xl font-bold text-white mb-8">Send a Message</div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-300 text-sm mb-1">Your Name</label>
//               <input
//                 name="name"
//                 required
//                 value={form.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-900/10 bg-gray-900/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 outline-none"
//                 placeholder="John Doe"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-300 text-sm mb-1">Your Email</label>
//               <input
//                 name="email"
//                 required
//                 type="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-900/10 bg-gray-900/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 outline-none"
//                 placeholder="john@example.com"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-gray-300 text-sm mb-1">Your Message</label>
//             <textarea
//               name="message"
//               required
//               value={form.message}
//               onChange={handleChange}
//               rows={4}
//               className="w-full px-4 py-3 rounded-lg border border-gray-900/10 bg-gray-900/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 outline-none resize-none"
//               placeholder="Hi, I'd like to talk about..."
//             />
//           </div>
//           <button
//             type="submit"
//             className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl border border-violet-700 bg-violet-600 text-white font-bold text-base transition hover:scale-105 hover:bg-violet-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
//           >
//             {sent ? "Message Sent!" : "Send Message"} <ArrowUpRight className="w-4 h-4" />
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }
