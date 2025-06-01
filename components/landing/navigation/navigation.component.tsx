"use client";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Briefcase, FileText, Home, User } from "lucide-react";

export function Navigation() {
  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "About", url: "#", icon: User },
    { name: "Projects", url: "#", icon: Briefcase },
    { name: "Resume", url: "#", icon: FileText },
  ];

  return <NavBar items={navItems} />;
}
