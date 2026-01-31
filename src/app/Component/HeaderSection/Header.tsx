"use client";

import homeIcon from "../../../../public/Icon/home.svg";
import missionIcon from "../../../../public/Icon/rocket.svg";
import productIcon from "../../../../public/Icon/Vector.svg";
import blogIcon from "../../../../public/Icon/write.svg";
import vanishIcon from "../../../../public/Icon/gitlab.svg";
import contactIcon from "../../../../public/Icon/phone-call.svg";
import { ChevronDown, User, X } from "lucide-react";
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

/** Library icon (solar_library-broken) - use className e.g. text-white, hover:text-white to change color */
const LibraryIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M16.3016 5.83333C16.3464 5.57795 16.3347 5.31586 16.2674 5.06547C16.2001 4.81508 16.0788 4.58246 15.912 4.38393C15.7453 4.1854 15.5371 4.02577 15.3021 3.91626C15.067 3.80675 14.8109 3.75 14.5516 3.75H5.4483C5.18902 3.75 4.93289 3.80675 4.69787 3.91626C4.46286 4.02577 4.25466 4.1854 4.0879 4.38393C3.92113 4.58246 3.79984 4.81508 3.73253 5.06547C3.66523 5.31586 3.65354 5.57795 3.6983 5.83333M14.5833 3.75C14.6066 3.53333 14.6191 3.42583 14.6191 3.33666C14.62 2.92474 14.4684 2.52708 14.1934 2.22038C13.9184 1.91369 13.5395 1.7197 13.13 1.67583C13.0416 1.66666 12.9333 1.66666 12.7166 1.66666H7.2833C7.06663 1.66666 6.95746 1.66666 6.86913 1.67583C6.45955 1.7197 6.08072 1.91369 5.80573 2.22038C5.53074 2.52708 5.37906 2.92474 5.37996 3.33666C5.37996 3.42583 5.39163 3.53416 5.4158 3.75"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12.5 15H7.49999M17.6617 13.9942C17.37 16.0608 17.2242 17.095 16.4767 17.7142C15.7292 18.3333 14.6267 18.3333 12.4208 18.3333H7.57916C5.37416 18.3333 4.27082 18.3333 3.52332 17.7142C2.77582 17.095 2.62999 16.0617 2.33832 13.9942L1.98666 11.4942C1.61416 8.85749 1.42832 7.53999 2.21832 6.68583C3.00832 5.83333 4.41499 5.83333 7.22666 5.83333H12.7733C15.585 5.83333 16.9917 5.83333 17.7817 6.68666C18.405 7.36083 18.4208 8.32499 18.2158 9.99999"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
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
      {/* Desktop menu bar: always narrower than viewport. At 1024px viewport = 1000px bar (100vw - 24px); max 1153px */}
      <nav
        className="hidden min-[1024px]:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 rounded-3xl min-[1200px]:rounded-4xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-lg animate-water"
        style={{ width: "min(calc(95vw - 24px), 1153px)" }}
      >
        <div className="flex items-center justify-between w-full min-w-0 overflow-hidden px-3 py-2.5 min-[1100px]:px-6 min-[1200px]:px-8 min-[1200px]:py-3 gap-1.5 min-[1100px]:gap-2.5 min-[1200px]:gap-4">
          {/* Logo - scales with viewport */}
          <button
            onClick={() => handleNavClick("/")}
            className="hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              className="w-12 h-8 min-[1100px]:w-14 min-[1100px]:h-9 min-[1200px]:w-[70px] min-[1200px]:h-10 object-cover transition-all duration-200"
              src="/Img/whatsapp-image-2025-11-15-at-21-02-1.png"
              alt="Logo"
            />
          </button>

          {/* Navigation - shrinks to fit so bar never overflows */}
          <div className="flex items-center justify-center min-w-0 flex-1 gap-1 min-[1100px]:gap-2.5 min-[1200px]:gap-4 flex-nowrap overflow-hidden">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.path)}
                className={`flex-shrink min-w-0 px-1.5 py-1.5 min-[1100px]:px-3 min-[1100px]:py-2 min-[1200px]:px-4 rounded-lg transition-all duration-200 font-medium text-xs min-[1100px]:text-base min-[1200px]:text-lg whitespace-nowrap overflow-hidden text-ellipsis ${
                  activePath === item.path
                    ? "text-[#FF8000]"
                    : "hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Section - always visible */}
          <div className="flex items-center flex-shrink-0 gap-1 min-[1100px]:gap-3 min-[1200px]:gap-4">
            <button className="flex items-center gap-0.5 min-[1100px]:gap-1 px-2 min-[1100px]:px-3 py-1 rounded-lg hover:bg-white/10 transition-colors text-sm min-[1100px]:text-base">
              Eng
              <ChevronDown className="w-3.5 h-3.5 min-[1100px]:w-4 min-[1100px]:h-4" />
            </button>
            <button
              type="button"
              className="p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="User account"
            >
              <User className="w-5 h-5 min-[1100px]:w-6 min-[1100px]:h-6 hover:text-white transition-colors cursor-pointer" />
            </button>
            {/* Checkout button */}
            <button
              type="button"
              onClick={() => handleNavClick("/checkout")}
              className="p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Checkout"
            >
              <LibraryIcon className="w-5 h-5 min-[1100px]:w-6 min-[1100px]:h-6 hover:text-white transition-colors cursor-pointer" />
            </button>
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

      {/* Mobile Header - visible when width < 1024px (hamburger) */}
      <header className="min-[1024px]:hidden fixed top-0 left-0 w-full z-50 h-[60px]">
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
      <div className="min-[1024px]:hidden h-[30px]" /> {/* 60px header + 20px gap */}

      {/* Mobile Slide-Out Menu */}
      <div
        ref={menuRef}
        className={`min-[1024px]:hidden fixed top-0 right-0 h-full w-[70%] z-50 transition-transform duration-300 ${
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
                  className={`w-5 h-5 min-[1024px]:hidden ml-[30px] ${
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
