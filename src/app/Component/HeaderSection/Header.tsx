"use client";

import homeIcon from "../../../../public/Icon/home.svg";
import missionIcon from "../../../../public/Icon/rocket.svg";
import productIcon from "../../../../public/Icon/Vector.svg";
import blogIcon from "../../../../public/Icon/write.svg";
import vanishIcon from "../../../../public/Icon/gitlab.svg";
import contactIcon from "../../../../public/Icon/phone-call.svg";

import { ChevronDown, User, Library, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
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
  const pathname = usePathname(); // current page path
  const [activePath, setActivePath] = useState(pathname); // initialize with current page
  const router = useRouter();

  // Update activePath when route changes
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleNavClick = (path: string) => {
    router.push(path);
    setActivePath(path); // Set active button immediately
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <header className="relative w-full px-4 md:px-[65px] py-2">
        <div className="relative w-full bg-[#00000000] md:rounded-[100px] md:overflow-visible md:backdrop-blur-[0.2px] md:backdrop-brightness-[110%] md:shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] z-30">
          <div className="relative w-full  bg-[#ffffff03] rounded-[100px]">
            <div className="flex items-center justify-between h-full px-4 md:px-[65px] py-4">
              {/* Logo */}
              <button
                onClick={() => handleNavClick("/")}
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  className="w-[60px] h-8 md:w-[78px] md:h-10 object-cover"
                  src="/Img/whatsapp-image-2025-11-15-at-21-02-1.png"
                  alt="Logo"
                />
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-0.5">
                {navigationItems.map((item, index) => {
                  const isActive = activePath === item.path;
                  return (
                    <button
                      key={index}
                      onClick={() => handleNavClick(item.path)}
                      className={`px-4 py-2 rounded-lg flex items-center
                      `}
                    >
                      <span className="[font-family:'Salsa',Helvetica] font-normal text-lg">
                        {item.label}
                      </span>
                      {/* No icons on desktop */}
                    </button>
                  );
                })}
              </nav>

              {/* Desktop Right Section */}
              <div className="hidden lg:flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-black/5 transition-colors">
                  <span className="[font-family:'Salsa',Helvetica] font-normal text-lg">
                    Eng
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-5">
                  <button className="w-[22px] h-[22px] p-0">
                    <User className="w-[22px] h-[22px]" />
                  </button>
                  <button className="w-5 h-5 p-0">
                    <Library className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 z-50" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-black" />
                ) : (
                  <Menu className="w-6 h-6 text-black" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-[70%] z-50 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffe6c9]/80 via-[#f7d6d6]/80 to-[#d9efe7]/80 backdrop-blur-md" />

          <div className="relative h-full flex flex-col items-end px-6 pt-20">
            {/* Logo */}
            <img
              src="/Img/whatsapp-image-2025-11-15-at-21-02-1.png"
              alt="Logo"
              className="w-[100px] mb-14"
            />

            {/* Mobile Navigation */}
            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-4 w-full max-w-[260px]">
              {navigationItems.map((item, index) => {
                const isActive = activePath === item.path;
                return (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item.path)}
                    className={`flex items-center justify-end w-full px-6 py-4 rounded-full transition-colors
          ${isActive ? "bg-[#FF8000] text-white" : "text-black hover:bg-black/5"}
        `}
                  >
                    <span className="[font-family:'Salsa',Helvetica] text-lg text-right">
                      {item.label}
                    </span>
                    {/* Mobile-only icon with 20px gap */}
                    <img
                      src={item.icon.src}
                      alt={item.label}
                      className={`w-5 h-5 lg:hidden ml-[30px] ${isActive ? "filter brightness-0 invert" : ""}`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
