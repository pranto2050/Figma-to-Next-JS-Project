"use client";

import homeIcon from "../../../../public/Icon/home.svg";
import missionIcon from "../../../../public/Icon/rocket.svg";
import productIcon from "../../../../public/Icon/Vector.svg";
import blogIcon from "../../../../public/Icon/write.svg";
import vanishIcon from "../../../../public/Icon/gitlab.svg";
import contactIcon from "../../../../public/Icon/phone-call.svg";

import { ChevronDown, User, Library, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

/** Hamburger icon (align-justify) - use className e.g. text-black, text-white to change color */
const HamburgerIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 11.6667H30C30.4421 11.6667 30.866 11.8423 31.1786 12.1548C31.4911 12.4674 31.6667 12.8913 31.6667 13.3333C31.6667 13.7754 31.4911 14.1993 31.1786 14.5118C30.866 14.8244 30.4421 15 30 15H10C9.55801 15 9.13409 14.8244 8.82153 14.5118C8.50897 14.1993 8.33337 13.7754 8.33337 13.3333C8.33337 12.8913 8.50897 12.4674 8.82153 12.1548C9.13409 11.8423 9.55801 11.6667 10 11.6667V11.6667ZM10 25H30C30.4421 25 30.866 25.1756 31.1786 25.4882C31.4911 25.8007 31.6667 26.2246 31.6667 26.6667C31.6667 27.1087 31.4911 27.5326 31.1786 27.8452C30.866 28.1577 30.4421 28.3333 30 28.3333H10C9.55801 28.3333 9.13409 28.1577 8.82153 27.8452C8.50897 27.5326 8.33337 27.1087 8.33337 26.6667C8.33337 26.2246 8.50897 25.8007 8.82153 25.4882C9.13409 25.1756 9.55801 25 10 25ZM10 18.3333H30C30.4421 18.3333 30.866 18.5089 31.1786 18.8215C31.4911 19.134 31.6667 19.558 31.6667 20C31.6667 20.442 31.4911 20.8659 31.1786 21.1785C30.866 21.4911 30.4421 21.6667 30 21.6667H10C9.55801 21.6667 9.13409 21.4911 8.82153 21.1785C8.50897 20.8659 8.33337 20.442 8.33337 20C8.33337 19.558 8.50897 19.134 8.82153 18.8215C9.13409 18.5089 9.55801 18.3333 10 18.3333Z"
      fill="currentColor"
    />
  </svg>
);

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
      <nav className="hidden lg:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1153px] rounded-4xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-lg animate-water">
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
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <HamburgerIcon className="w-6 h-6" />}
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
