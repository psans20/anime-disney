"use client";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Tab from "./components/Tab"
import Users from "./components/Users";
import { useState } from "react";

export default function Home() {
  const [navSection, setNavSection] = useState('Chat');

  const updateNavSection = (section) => {
    setNavSection(section);
  };

  return (
    <main>
     <Navbar updateNavSection={updateNavSection}/>
     <Tab navSection={navSection}/>
     <Sidebar/>
     <Users/>
    </main>
  )
}
