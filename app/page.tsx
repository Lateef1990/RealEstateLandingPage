"use client";

import Image from "next/image";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Check,
  Clock,
  Facebook,
  Heart,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  Users,
  Youtube,
  X
} from "lucide-react";

const navItems = ["Home", "Properties", "About Us", "Services", "Contact"];

const properties = [
  {
    title: "4 Bedroom Detached Duplex",
    location: "Lekki, Lagos",
    price: "₦85,000,000",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    beds: 4,
    baths: 5,
    area: "4,200 sqft"
  },
  {
    title: "3 Bedroom Apartment",
    location: "Ikoyi, Lagos",
    price: "₦2,500,000/year",
    status: "For Rent",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    beds: 3,
    baths: 3,
    area: "2,150 sqft"
  },
  {
    title: "3 Bedroom Bungalow",
    location: "Abuja",
    price: "₦45,000,000",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    beds: 3,
    baths: 4,
    area: "3,000 sqft"
  },
  {
    title: "2 Bedroom Apartment",
    location: "Victoria Island",
    price: "₦1,200,000/year",
    status: "For Rent",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    beds: 2,
    baths: 2,
    area: "1,650 sqft"
  }
];

const heroTrustItems: Array<[string, LucideIcon]> = [
  ["Trusted & Secure Transactions", ShieldCheck],
  ["Professional Support", Users],
  ["Wide Range of Properties", Home]
];

const services: Array<[string, string, LucideIcon]> = [
  ["Property Sales", "Buy premium homes and investment-ready properties with expert guidance.", Home],
  ["Property Rentals", "Find flexible rental homes, apartments, and serviced residences faster.", Building2],
  ["Property Management", "Protect your assets with tenant support, maintenance, and reporting.", ShieldCheck],
  ["Investment Advisory", "Discover high-growth property opportunities with practical market insight.", Sparkles],
  ["Real Estate Consulting", "Get clear direction for valuation, acquisition, selling, and leasing.", Users]
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24">
        <a href="#" className="flex items-center gap-3" aria-label="GreenHome home">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-white">
            <Home size={22} />
          </span>
          <span>
            <span className="block text-xl font-extrabold leading-5 text-ink">GreenHome</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-leaf">Real Estate</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map((item) => (
            <a
              className={item === "Home" ? "border-b-2 border-leaf pb-1 text-forest" : "hover:text-forest"}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <button aria-label="Open search" className="rounded-full p-3 text-ink hover:bg-mint">
            <Search size={20} />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-bold text-white transition hover:bg-[#14482c]"
          >
            Get Started <ArrowRight size={17} />
          </a>
        </div>
        <button
          aria-label="Open menu"
          className="rounded-full p-3 text-forest lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu />}
        </button>
      </div>
      <div className={`lg:hidden mobile-menu bg-white border-b border-slate-100 ${menuOpen ? "open" : ""}`}>
        <div className="flex flex-col gap-1 px-6 py-4 text-sm font-semibold text-slate-600">
          {navItems.map((item) => (
            <a
              className={`border-b border-slate-50 py-3 ${item === "Home" ? "text-forest" : "hover:text-forest"}`}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4">
            <button aria-label="Open search" className="rounded-full p-3 text-ink hover:bg-mint">
              <Search size={20} />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Get Started <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute right-0 top-0 hidden h-full w-[45%] bg-forest lg:block [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-14 md:px-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-24 lg:pb-36">
        <div className="relative z-10 flex flex-col justify-center">
          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.22em] text-leaf">Your Dream Home Awaits</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] text-ink md:text-6xl">
            Find the Perfect Property for a <span className="text-leaf">Better Tomorrow</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
            We help you buy, sell and rent properties with ease. Discover the best homes, apartments, and
            investment opportunities across the city.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-bold text-white hover:bg-[#14482c]" href="#properties">
              Browse Properties <ArrowRight size={18} />
            </a>
            <a className="inline-flex items-center justify-center rounded-full border border-forest px-7 py-4 font-bold text-forest hover:bg-mint" href="#contact">
              Contact Us
            </a>
          </div>
          <div className="mt-9 grid gap-4 text-sm font-semibold text-slate-600 sm:grid-cols-3">
            {heroTrustItems.map(([text, Icon]) => (
              <div className="flex items-center gap-3" key={text}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mint text-leaf">
                  <Icon size={19} />
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1100&q=90"
              alt="Modern luxury house with palm trees and a driveway"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-7 right-5 max-w-[260px] rounded-2xl bg-white p-4 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint text-forest">
                <Home size={21} />
              </span>
              <p className="text-sm font-extrabold leading-5 text-ink">Your Perfect Home Is Just a Click Away</p>
              <button aria-label="Open featured property" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-leaf text-white">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <SearchBar />
    </section>
  );
}

function SearchBar() {
  return (
    <div className="relative z-20 mx-auto -mb-12 max-w-6xl px-6 md:px-12 lg:px-24">
      <form className="grid gap-4 rounded-2xl bg-white p-4 shadow-soft md:grid-cols-[1fr_1fr_1fr_auto] md:items-center">
        {[
          ["Property Type", "Any Type"],
          ["Location", "Any Location"],
          ["Price Range", "Any Price"]
        ].map(([label, value]) => (
          <label className="border-slate-100 px-3 md:border-r" key={label}>
            <span className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{label}</span>
            <select className="mt-1 w-full bg-transparent py-2 font-bold text-ink">
              <option>{value}</option>
            </select>
          </label>
        ))}
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest px-8 py-4 font-bold text-white hover:bg-[#14482c]">
          <Search size={18} /> Search
        </button>
      </form>
    </div>
  );
}

function PropertyCard({ property }: { property: (typeof properties)[number] }) {
  const sale = property.status === "For Sale";
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[1.18]">
        <Image src={property.image} alt={property.title} fill className="object-cover" />
        <span className={`absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-extrabold text-white ${sale ? "bg-forest" : "bg-leaf"}`}>
          {property.status}
        </span>
        <button aria-label={`Save ${property.title}`} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-forest shadow">
          <Heart size={18} />
        </button>
      </div>
      <div className="p-5">
        <p className="text-xl font-black text-leaf">{property.price}</p>
        <h3 className="mt-2 text-lg font-extrabold text-ink">{property.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={16} className="text-leaf" /> {property.location}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-slate-500">
          <span className="flex items-center gap-1"><BedDouble size={17} /> {property.beds}</span>
          <span className="flex items-center gap-1"><Bath size={17} /> {property.baths}</span>
          <span>{property.area}</span>
        </div>
      </div>
    </article>
  );
}

function FeaturedProperties() {
  return (
    <section id="properties" className="bg-mint px-6 pb-20 pt-28 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-leaf">Featured Properties</p>
            <h2 className="mt-3 text-4xl font-black text-ink">Discover Our Best Properties</h2>
          </div>
          <a className="inline-flex items-center gap-2 font-bold text-forest" href="#properties">View All Properties <ArrowRight size={18} /></a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {properties.map((property) => <PropertyCard key={property.title} property={property} />)}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about-us" className="bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative aspect-[1.12] overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1000&q=90" alt="Elegant residential property exterior" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-7 left-6 rounded-2xl bg-forest p-5 text-white shadow-soft">
            <Heart className="mb-3 text-leaf" />
            <p className="max-w-[220px] text-lg font-extrabold">Trusted Real Estate Partner</p>
            <p className="mt-1 flex items-center gap-2 text-sm text-white/80"><Check size={16} /> Since 2015</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-leaf">About Us</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-ink">Building Dreams, One Property at a Time</h2>
          <p className="mt-5 leading-8 text-slate-500">
            GreenHome Real Estate combines local market expertise with a service-first approach, helping families,
            professionals, and investors move with clarity from search to closing.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {["10+|Years Experience", "500+|Happy Clients", "1,000+|Properties Sold & Rented"].map((item) => {
              const [num, label] = item.split("|");
              return <div key={label}><p className="text-3xl font-black text-leaf">{num}</p><p className="mt-1 text-sm font-semibold text-slate-500">{label}</p></div>;
            })}
          </div>
          <a className="mt-9 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 font-bold text-white hover:bg-[#14482c]" href="#services">
            Learn More <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-leaf">Our Services</p>
            <h2 className="mt-3 text-4xl font-black text-ink">What We Offer</h2>
          </div>
          <p className="leading-8 text-slate-500">From acquisition to management, our team keeps every property decision organized, transparent, and aligned with your goals.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {services.map(([title, description, Icon]) => (
            <article className="rounded-2xl bg-mint p-6 transition hover:-translate-y-1 hover:shadow-soft" key={title}>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-leaf"><Icon size={24} /></span>
              <h3 className="mt-5 text-lg font-extrabold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#eef8f0] px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-leaf">Testimonials</p>
          <h2 className="mt-3 text-4xl font-black text-ink">What Our Clients Say</h2>
          <p className="mt-5 leading-8 text-slate-500">Real stories from people who trusted GreenHome to guide their next move.</p>
        </div>
        <div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ["Emmanuel Okafor", "Home Buyer", "GreenHome made the entire buying process clear, fast, and surprisingly calm.", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&q=85"],
              ["Blessing Adamu", "Tenant", "I found an apartment that matched my budget and location needs within days.", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=220&q=85"]
            ].map(([name, role, quote, avatar]) => (
              <article className="rounded-2xl bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.07)]" key={name}>
                <div className="mb-5 flex gap-1 text-leaf">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} fill="currentColor" />)}</div>
                <p className="leading-7 text-slate-600">"{quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <Image src={avatar} alt={name} width={52} height={52} className="h-[52px] w-[52px] rounded-full object-cover" />
                  <div><p className="font-extrabold text-ink">{name}</p><p className="text-sm text-slate-500">{role}</p></div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7 flex justify-center gap-2">
            <span className="h-3 w-8 rounded-full bg-leaf" />
            <span className="h-3 w-3 rounded-full bg-white" />
            <span className="h-3 w-3 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-2xl bg-gradient-to-r from-forest to-leaf p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
        <div className="flex items-center gap-5">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-forest"><Home size={29} /></span>
          <div><h2 className="text-3xl font-black">Ready to Find Your Dream Property?</h2><p className="mt-2 text-white/80">Talk to our team and start your next property journey today.</p></div>
        </div>
        <a className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-forest hover:bg-mint" href="#contact">
          Contact Us <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#10251c] px-6 pt-16 text-white md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1.1fr_1.1fr]">
        <div>
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf"><Home /></span><div><p className="text-xl font-black">GreenHome</p><p className="text-xs font-bold uppercase tracking-[0.18em] text-leaf">Real Estate</p></div></div>
          <p className="mt-5 max-w-xs leading-7 text-white/70">Your trusted partner in real estate. Buy. Sell. Rent. Invest.</p>
        </div>
        <div>
          <h3 className="font-extrabold">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-white/70">{navItems.map((item) => <a className="hover:text-white" href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>{item}</a>)}</div>
        </div>
        <div>
          <h3 className="font-extrabold">Contact Us</h3>
          <div className="mt-5 grid gap-4 text-sm text-white/70">
            <p className="flex gap-3"><Phone size={18} className="text-leaf" /> +234 800 123 4567</p>
            <p className="flex gap-3"><Mail size={18} className="text-leaf" /> hello@greenhome.ng</p>
            <p className="flex gap-3"><MapPin size={18} className="text-leaf" /> Victoria Island, Lagos</p>
            <p className="flex gap-3"><Clock size={18} className="text-leaf" /> Mon - Sat, 9am - 6pm</p>
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">Newsletter</h3>
          <p className="mt-5 text-sm leading-7 text-white/70">Get new listings and market insights in your inbox.</p>
          <form className="mt-5 flex rounded-full bg-white p-1">
            <input aria-label="Email address" className="min-w-0 flex-1 rounded-full px-4 text-sm text-ink" placeholder="Email address" type="email" />
            <button className="rounded-full bg-leaf px-5 py-3 text-sm font-bold text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-5 border-t border-white/10 py-7 text-sm text-white/60 md:flex-row md:items-center md:justify-center">
        <p>Copyright 2026 GreenHome Real Estate. All rights reserved.</p>
        <span className="text-white/40">|</span>
        <span>Developed by Al-Mansur Software Technology | 07063970588</span>
        <span className="text-white/40">|</span>
        <div className="flex gap-4 text-white">
          {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => <a href="#" aria-label={`Social link ${index + 1}`} key={index}><Icon size={19} /></a>)}
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProperties />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
