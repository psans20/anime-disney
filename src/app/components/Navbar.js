"use client";
import { useState } from "react";
import Tab from "./Tab";

export default function Navbar({ updateNavSection }) {
  const [navSection, setNavSection] = useState('Chat');



  const getFontWeight = (section) => {
    return section === navSection ? 800 : 'normal';
  };

  const handleNavClick = (section) => {
    setNavSection(section);
    updateNavSection(section); // Call the prop to update the parent state
  };

  return (
    <nav className="p-4 flex flex-row text-white justify-center items-center">
      <div className="flex flex-row md:gap-36 gap-4 p-4">
        <h2
          className="cursor-pointer"
          style={{ fontWeight: getFontWeight('Chat') }}
          onClick={() =>  handleNavClick('Chat')}
        >
          Chat
        </h2>
        <h2
          className="cursor-pointer"
          style={{ fontWeight: getFontWeight('Gif') }}
          onClick={() =>  handleNavClick('Gif')}
        >
          Gif
        </h2>
        <h2
          className="cursor-pointer"
          style={{ fontWeight: getFontWeight('Picture') }}
          onClick={() => handleNavClick('Picture')}
        >
          Picture
        </h2>
        <h2
          className="cursor-pointer"
          style={{ fontWeight: getFontWeight('Video') }}
          onClick={() => handleNavClick('Video')}
        >
          Video
        </h2>
        <h2
          className="cursor-pointer"
          style={{ fontWeight: getFontWeight('Music') }}
          onClick={() => handleNavClick('Music')}
        >
          Music
        </h2>
        <h2
          className="cursor-pointer"
          style={{ fontWeight: getFontWeight('User') }}
          onClick={() => handleNavClick('User')}
        >
          User
        </h2>
      </div>


    </nav>
  );
}
