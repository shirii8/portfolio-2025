import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "motion/react";

const Navbar = () => {
  return (
       <motion.nav className="nav flex w-full flex-row justify-between bg-white px-4 py-4">
      <a href="#" className="flex space-x-2 text-sm font-normal text-gray-950">
        <span className="text-4xl font-Digitall letter-spacing-4 ml-4">SHRIYA</span>
      </a>
      <div className="nav-section-elements text-2xl  text-gray-950 font-TurretRoad font-semibold flex justify-between gap-4"
      whilehover={{y: 2, scale:1.1}}
      transition={{type: "spring", stiffness:300}}>
        <a className="hover:text-gray-400" href="#Home">[Home]</a>
        <a className="hover:text-gray-400" href="#About">[About]</a>
        <a className="hover:text-gray-400" href="#Techstack">[Techstack]</a>
        <a className="hover:text-gray-400" href="#Projects">[Projects]</a>
        <a className="hover:text-gray-400" href="#Contact">[Contact]</a>
      </div>

      {/* Nav social links */}

      <div className="nav-socials-elements text-gray-950 font-TurretRoad font-semibold flex justify-between gap-1">
        <a className="h-8 w-8 flex justify-center items-center border-2 p-1 border-gray-600 rounded-full hover:bg-gray-400" href="https://www.instagram.com/shriyartss?igsh=OTVkaWRxeHF4Mmk1"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWluc3RhZ3JhbS1pY29uIGx1Y2lkZS1pbnN0YWdyYW0iPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMiIgeT0iMiIgcng9IjUiIHJ5PSI1Ii8+PHBhdGggZD0iTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3oiLz48bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUxIiB5MT0iNi41IiB5Mj0iNi41Ii8+PC9zdmc+" alt=""  className="hover:text-gray-400"/></a>

        <a className="h-8 w-8 flex justify-center items-center border-2 p-1 border-gray-600 rounded-full hover:bg-gray-400" href="https://www.linkedin.com/in/shriya-panda-8bb5802a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmtlZGluLWljb24gbHVjaWRlLWxpbmtlZGluIj48cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiLz48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgeD0iMiIgeT0iOSIvPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PC9zdmc+" alt=""  /></a>

        <a className="h-8 w-8 flex justify-center items-center border-2 p-1 border-gray-600 rounded-full hover:bg-gray-400" href="mailto:pandashriya7@gmail.com">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1haWwtaWNvbiBsdWNpZGUtbWFpbCI+PHBhdGggZD0ibTIyIDctOC45OTEgNS43MjdhMiAyIDAgMCAxLTIuMDA5IDBMMiA3Ii8+PHJlY3QgeD0iMiIgeT0iNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiByeD0iMiIvPjwvc3ZnPg==" alt=""  className="hover:text-gray-400"/></a>

        <a className="h-8 w-8 flex justify-center items-center border-2 p-1 border-gray-600 rounded-full hover:bg-gray-400" href="https://github.com/shirii8">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdpdGh1Yi1pY29uIGx1Y2lkZS1naXRodWIiPjxwYXRoIGQ9Ik0xNSAyMnYtNGE0LjggNC44IDAgMCAwLTEtMy41YzMgMCA2LTIgNi01LjUuMDgtMS4yNS0uMjctMi40OC0xLTMuNS4yOC0xLjE1LjI4LTIuMzUgMC0zLjUgMCAwLTEgMC0zIDEuNS0yLjY0LS41LTUuMzYtLjUtOCAwQzYgMiA1IDIgNSAyYy0uMyAxLjE1LS4zIDIuMzUgMCAzLjVBNS40MDMgNS40MDMgMCAwIDAgNCA5YzAgMy41IDMgNS41IDYgNS41LS4zOS40OS0uNjggMS4wNS0uODUgMS42NS0uMTcuNi0uMjIgMS4yMy0uMTUgMS44NXY0Ii8+PHBhdGggZD0iTTkgMThjLTQuNTEgMi01LTItNy0yIi8+PC9zdmc+" alt=""   className="hover:text-gray-400"/></a>
      </div>

      {/* Hire Me Button */}
      <div className="btn">
        <button className="btn text-2xl border-2 px-4 border-gray-600 rounded-full text-gray-950 items-center font-TurretRoad font-semibold hover:text-gray-200 hover:bg-gray-950 mr-4">
          <a href="#Contact">Hire Me</a>
          </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
