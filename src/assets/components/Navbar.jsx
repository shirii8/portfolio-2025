import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Techstack", href: "#Techstack" },
  { label: "Projects", href: "#Projects" },
  { label: "Contact", href: "#Contact" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/shriyartss?igsh=OTVkaWRxeHF4Mmk1", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shriya-panda-8bb5802a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", Icon: FaLinkedinIn },
  { label: "Email", href: "mailto:pandashriya7@gmail.com", Icon: FiMail },
  { label: "GitHub", href: "https://github.com/shirii8", Icon: FaGithub },
];

const Socials = () => (
  <div className="flex gap-1">
    {socials.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        aria-label={label}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="h-8 w-8 flex justify-center items-center border-2 border-gray-600 rounded-full text-gray-950 hover:bg-gray-950 hover:text-white hover:border-gray-950 transition-colors"
      >
        <Icon className="h-4 w-4" />
      </a>
    ))}
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav relative w-full bg-white">
      <div className="flex h-[72px] items-center justify-between gap-4 px-4 lg:px-8">
        <a href="#Home" onClick={close} className="text-3xl sm:text-4xl font-Digitall text-gray-950">
          SHRIYA
        </a>

        <div className="hidden lg:flex gap-3 xl:gap-4 text-lg xl:text-2xl text-gray-950 font-TurretRoad font-semibold">
          {links.map(link => (
            <a key={link.href} className="hover:text-gray-400 transition-colors" href={link.href}>
              [{link.label}]
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Socials />
          <a
            href="#Contact"
            className="text-lg xl:text-2xl border-2 px-4 border-gray-600 rounded-full text-gray-950 font-TurretRoad font-semibold hover:text-gray-200 hover:bg-gray-950 transition-colors"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full border-2 border-gray-600 text-gray-950"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-lg px-4 pb-6"
          >
            <div className="flex flex-col font-TurretRoad font-semibold text-2xl text-gray-950">
              {links.map(link => (
                <a key={link.href} href={link.href} onClick={close} className="py-3 border-b border-gray-100 hover:text-gray-400">
                  [{link.label}]
                </a>
              ))}
            </div>
            <div className="flex items-center justify-between gap-4 mt-5">
              <Socials />
              <a
                href="#Contact"
                onClick={close}
                className="text-lg border-2 px-4 py-1 border-gray-600 rounded-full text-gray-950 font-TurretRoad font-semibold hover:text-gray-200 hover:bg-gray-950"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
