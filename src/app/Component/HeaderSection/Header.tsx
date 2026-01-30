"use client";

import homeIcon from "../../../../public/Icon/home.svg";
import missionIcon from "../../../../public/Icon/rocket.svg";
import productIcon from "../../../../public/Icon/Vector.svg";
import blogIcon from "../../../../public/Icon/write.svg";
import vanishIcon from "../../../../public/Icon/gitlab.svg";
import contactIcon from "../../../../public/Icon/phone-call.svg";

import { ChevronDown, User, Library, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const navigationItems = [
  { label: "Home", icon: homeIcon, path: "/" },
  { label: "Our Mission", icon: missionIcon, path: "/our-mission" },
  { label: "Products", icon: productIcon, path: "/products" },
  { label: "Blog", icon: blogIcon, path: "/blog" },
  { label: "Vanish", icon: vanishIcon, path: "/vanish" },
  { label: "Contact Us", icon: contactIcon, path: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  const router = useRouter();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (path: string) => {
    router.push(path);
    setActivePath(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Desktop Water Effect Navbar */}
      <nav className="hidden lg:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1400px] rounded-4xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-lg animate-water">
        <div className="flex items-center justify-between w-full px-8 py-3">
          {/* Logo */}
          <button onClick={() => handleNavClick("/")} className="hover:opacity-80 transition-opacity">
            <img
              className="w-[70px] h-10 object-cover"
              src="/Img/whatsapp-image-2025-11-15-at-21-02-1.png"
              alt="Logo"
            />
          </button>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 rounded-lg transition-colors font-medium text-lg ${
                  activePath === item.path
                    ? "text-[#FF8000]"
                    : " hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-white/10 transition-colors">
              Eng
              <ChevronDown className="w-4 h-4" />
            </button>
            <User className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
            <Library className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Water effect animation */}
        <style jsx>{`
          @keyframes waterMove {
            0% { background-position: 0 0; }
            50% { background-position: 200px 100px; }
            100% { background-position: 0 0; }
          }
          .animate-water {
            background-image: url('/Img/water-texture.png');
            background-size: cover;
            background-repeat: repeat;
            animation: waterMove 10s linear infinite;
          }
        `}</style>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 h-[60px]">
        <div className="flex items-center justify-between px-5 py-3 h-full">
          {/* Logo */}
          <button onClick={() => handleNavClick("/")} className="hover:opacity-80 transition-opacity">
            <img
              className="w-[60px] h-8 object-cover"
              src="/Img/whatsapp-image-2025-11-15-at-21-02-1.png"
              alt="Logo"
            />
          </button>

          {/* Hamburger */}
          <button
            ref={buttonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>
      </header>

      {/* Top padding for content */}
      <div className="lg:hidden h-[30px]" /> {/* 60px header + 20px gap */}

      {/* Mobile Slide-Out Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-[70%] z-50 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffe6c9]/80 via-[#f7d6d6]/80 to-[#d9efe7]/80 backdrop-blur-md" />

        <div className="relative h-full flex flex-col items-end px-6 pt-20">
          {/* Logo inside menu */}
          <img
            src="/Img/whatsapp-image-2025-11-15-at-21-02-1.png"
            alt="Logo"
            className="w-[100px] mb-14"
          />

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-4 w-full">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.path)}
                className={`flex items-center justify-end w-full px-6 py-4 rounded-full transition-colors ${
                  activePath === item.path ? "bg-[#FF8000] text-white" : "text-black hover:bg-black/5"
                }`}
              >
                <span className="[font-family:'Salsa',Helvetica] text-lg text-right">{item.label}</span>
                <img
                  src={item.icon.src}
                  alt={item.label}
                  className={`w-5 h-5 lg:hidden ml-[30px] ${
                    activePath === item.path ? "filter brightness-0 invert" : ""
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
