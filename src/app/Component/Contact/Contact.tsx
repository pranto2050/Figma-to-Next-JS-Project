"use client";

import Header from "../HeaderSection/Header";
import { FooterSection } from "../FooterSection/FooterSection";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      "Minar Ease",
      "Stationsstraat 12",
      "1234 AB Amsterdam",
      "Netherlands",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+31 20 123 4567", "+880 1898-753003"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["contact@minarease.com", "support@minarease.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [
      "Mon – Fri: 9:00 AM – 6:00 PM",
      "Sat: 10:00 AM – 4:00 PM",
      "Sun: Closed",
    ],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: add your form submission logic (e.g. API, email service)
  };

  return (
    <div
      className="text-black min-h-screen bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url('/Vanish/vanish%20main%20background.png')`,
      }}
    >
      <div className="min-h-screen">
        <Header />

        {/* Hero - responsive padding & typography */}
        <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-[#FF8000] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Get in Touch
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Contact Us
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto text-black/80">
              Have a question or want to work together? We&apos;d love to hear from you.
              Reach out and we&apos;ll respond as soon as we can.
            </p>
          </div>
        </section>

        {/* Contact info cards - 1 col mobile, 2 col tablet, 4 col desktop */}
        <section className="px-4 sm:px-6 md:px-8 pb-10 sm:pb-12 md:pb-14 lg:pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl sm:rounded-2xl border border-[#FF8000] bg-white/50 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.25)] p-4 sm:p-5 md:p-6 transition-all duration-300 min-w-0"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#FF8000]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#FF8000]/30 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8000]" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">{card.title}</h3>
                  <ul className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm leading-relaxed break-words">
                    {card.lines.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Form + Side panel - stack on mobile/tablet, side-by-side on desktop */}
        <section className="px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
            {/* Contact form - full width on small screens */}
            <div className="flex-1 min-w-0 rounded-xl sm:rounded-2xl border border-[#FF8000] bg-white/50 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.25)] p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FF8000]/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold">Send a Message</h2>
                  <p className="text-xs sm:text-sm mt-0.5">
                    Fill out the form and we&apos;ll get back to you shortly.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="min-w-0">
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/10 border border-black/10 placeholder-black/40 focus:border-[#FF8000] focus:ring-1 focus:ring-[#FF8000] outline-none transition-colors text-sm sm:text-base"
                    />
                  </div>
                  <div className="min-w-0">
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/10 border border-black/10 placeholder-black/40 focus:border-[#FF8000] focus:ring-1 focus:ring-[#FF8000] outline-none transition-colors text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="subject"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/10 border border-black/10 focus:border-[#FF8000] focus:ring-1 focus:ring-[#FF8000] outline-none transition-colors text-sm sm:text-base"
                  >
                    <option value="" className="bg-[#1a1a1a] text-white">
                      Select a topic
                    </option>
                    <option value="general" className="bg-[#1a1a1a] text-white">
                      General Inquiry
                    </option>
                    <option value="products" className="bg-[#1a1a1a] text-white">
                      Products
                    </option>
                    <option value="support" className="bg-[#1a1a1a] text-white">
                      Support
                    </option>
                    <option value="partnership" className="bg-[#1a1a1a] text-white">
                      Partnership
                    </option>
                  </select>
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/10 border border-black/10 placeholder-black/40 focus:border-[#FF8000] focus:ring-1 focus:ring-[#FF8000] outline-none transition-colors resize-y min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#FF8000] text-white font-semibold hover:bg-[#e67300] transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 flex-shrink-0" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Side panel - full width on mobile/tablet, fixed width on desktop */}
            <div className="w-full lg:w-[340px] xl:w-[360px] flex-shrink-0 space-y-4 sm:space-y-6">
              <div className="rounded-xl sm:rounded-2xl border border-[#FF8000] bg-white/50 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.25)] p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FF8000]/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8000]" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg">Head Office</h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Minar Ease brings back the simple things that make you feel human
                  again — quiet moments, creativity, and space for your mind to rest.
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-[#FF8000] bg-white/50 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.25)] overflow-hidden aspect-[4/3] min-h-[180px] sm:min-h-[200px] flex items-center justify-center">
                <div className="text-center p-4 sm:p-6 text-xs sm:text-sm">
                  Map or office image can go here
                </div>
              </div>
            </div>
          </div>
        </section>

      <FooterSection />
      </div>
    </div>
  );
}
