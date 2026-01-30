"use client";

import {
  ChevronDown,
  User,
  Library,
  Menu,
  X,
  Home,
  Target,
  Package,
  FileText,
  Eye,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const navigationItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Our Mission", icon: Target, path: "/our-mission" },
  { label: "Products", icon: Package, path: "/products" },
  { label: "Blog", icon: FileText, path: "/blog" },
  { label: "Vanish", icon: Eye, path: "/vanish" },
  { label: "Contact Us", icon: Mail, path: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleNavClick = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="">
      <header className="relative w-full px-4 md:px-[65px] py-2">
        <div className="relative w-full bg-[#00000000] md:rounded-[100px] md:overflow-visible md:backdrop-blur-[0.2px] md:backdrop-brightness-[110%] md:[-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] md:shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] z-30">
          <div className="relative w-full min-h-[88px] bg-[#ffffff03] rounded-[100px] md:shadow-[inset_1px_2px_2px_#ffffff4c,inset_-1px_-2px_2px_#ffffff1a,inset_0px_0px_10px_#ffffff4c]">
            <div className="flex items-center justify-between h-full px-4 md:px-[65px] py-4">
              {/* Logo */}
              <button
                onClick={() => handleNavClick("/")}
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  className="w-[60px] h-8 md:w-[78px] md:h-10 object-cover"
                  alt="Whatsapp image"
                  src="/Img/whatsapp-image-2025-11-15-at-21-02-1.png"
                />
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-0.5">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item.path)}
                    className="px-4 py-2 rounded-lg hover:bg-black/5 transition-colors"
                  >
                    <span className="[font-family:'Salsa',Helvetica] font-normal text-lg text-center tracking-[0] leading-[20.0px]">
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Desktop Right Section */}
              <div className="hidden lg:flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-black/5 transition-colors">
                  <span className="[font-family:'Salsa',Helvetica] font-normal text-lg text-center tracking-[0] leading-[20.0px]">
                    Eng
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-5">
                  <button className="w-[22px] h-[22px] p-0 hover:opacity-80 transition-opacity">
                    <User className="w-[22px] h-[22px] " />
                  </button>

                  <button className="w-5 h-5 p-0 hover:opacity-80 transition-opacity">
                    <Library className="w-5 h-5 " />
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:opacity-80 transition-opacity z-50"
                type="button"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu-panel"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-black" />
                ) : (
                  <Menu className="w-6 h-6 text-black" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay - Click to close */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Slide Panel - Glassmorphism */}
        <div
          id="mobile-menu-panel"
          className={`lg:hidden fixed top-0 right-0 z-50 w-[250px] sm:w-[280px] h-screen transform transition-transform duration-300 ease-in-out border-l border-white/40 bg-white/25 backdrop-blur-[40px] backdrop-saturate-[180%] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] ${
            isMobileMenuOpen
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }`}
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 1px rgba(255, 255, 255, 0.5), inset 1px 0 1px rgba(255, 255, 255, 0.4)",
          }}
        >
          <div className="flex flex-col h-full p-6">
            {/* Mobile Menu Header */}
            <div className="flex items-center mb-8">
              <button
                onClick={() => handleNavClick("/")}
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  className="w-[60px] h-8 object-cover"
                  alt="Logo"
                  src="/Img/whatsapp-image-2025-11-15-at-21-02-1.png"
                />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-1 flex-1">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item.path)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-black/5 transition-colors text-left"
                  >
                    <Icon className="w-5 h-5 text-black" />
                    <span className="[font-family:'Salsa',Helvetica] font-normal text-black text-lg tracking-[0] leading-[20.0px]">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Bottom Section */}
            <div className="flex items-center justify-between pt-6 border-t border-black/10">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-black/5 transition-colors">
                <span className="[font-family:'Salsa',Helvetica] font-normal text-black text-base tracking-[0] leading-[20.0px]">
                  Eng
                </span>
                <ChevronDown className="w-4 h-4 text-black" />
              </button>

              <div className="flex items-center gap-5">
                <button className="w-[22px] h-[22px] p-0 hover:opacity-80 transition-opacity">
                  <User className="w-[22px] h-[22px] text-black" />
                </button>

                <button className="w-5 h-5 p-0 hover:opacity-80 transition-opacity">
                  <Library className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
