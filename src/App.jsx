
import React from "react";
import { Phone, MapPin, Clock, Utensils, Facebook, Instagram, Mail } from "lucide-react";

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 sm:py-20">
    <Container>
      {(title || subtitle) && (
        <div className="mb-8 sm:mb-12 text-center">
          {subtitle && (
            <p className="text-sm uppercase tracking-widest text-neutral-500">{subtitle}</p>
          )}
          {title && (
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          )}
        </div>
      )}
      {children}
    </Container>
  </section>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-sm ring-1 ring-black/5 bg-white ${className}`}>{children}</div>
);

const ButtonA = ({ href = "#", children, className = "", target }) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noreferrer" : undefined}
    className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold ring-1 ring-inset transition hover:shadow ${className}`}
  >
    {children}
  </a>
);

const site = {
  brand: {
    name: "Bimi Thai",
    tagline: "Bold Thai flavors. Fresh, fast, unforgettable.",
    logoText: "Bimi Thai",
  },
  cta: {
    orderPickup: "tel:+16515004080",
    orderDelivery: "tel:+16515004080",
    phone: "tel:+16515004080",
  },
  locations: [
    {
      name: "Bimi Thai Express — Red Wing",
      address: "287 Main St, Red Wing, MN 55066",
      phone: "(651) 500-4080",
      hours: "Mon–Sat 11:00–9:00, Sun 12:00–8:00",
      maps: "https://maps.google.com/?q=287+Main+St,+Red+Wing,+MN+55066",
    },
    {
      name: "Lily Thai — River Falls",
      address: "127 W Main St, River Falls, WI 54022",
      phone: "(715) 000-0000",
      hours: "Mon–Sat 11:00–9:00, Sun 12:00–8:00",
      maps: "https://maps.google.com/?q=127+W+Main+St,+River+Falls,+WI+54022",
    },
    {
      name: "Hasu Japanese — Hastings",
      address: "1309 Vermillion St, Hastings, MN 55033",
      phone: "(651) 000-0000",
      hours: "Mon–Sat 11:00–9:00, Sun 12:00–8:00",
      maps: "https://maps.google.com/?q=1309+Vermillion+St,+Hastings,+MN+55033",
    },
  ],
  featured: [
    {
      name: "Pad Thai",
      desc: "Rice noodles, tamarind, egg, scallions, crushed peanuts.",
      img: "https://images.unsplash.com/photo-1617196034796-73dfa7f8d8d5?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Green Curry",
      desc: "Coconut milk, Thai basil, bamboo shoots, seasonal veggies.",
      img: "https://images.unsplash.com/photo-1604908554027-0924b8a2c16b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Drunken Noodles",
      desc: "Wok-fired wide rice noodles with chilies, basil, garlic.",
      img: "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  email: "hello@bimithai.com",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};

export default function BimiThaiLanding() {
  return (
    <div className="min-h-screen scroll-smooth bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 ring-1 ring-black/5">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2 font-bold tracking-tight text-xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">BT</span>
              {site.brand.logoText}
            </a>
            <div className="hidden gap-6 md:flex">
              <a className="hover:opacity-70" href="#menu">Menu</a>
              <a className="hover:opacity-70" href="#locations">Locations</a>
              <a className="hover:opacity-70" href="#about">About</a>
              <a className="hover:opacity-70" href="#contact">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <ButtonA href={site.cta.orderPickup} className="bg-neutral-900 text-white ring-neutral-900">Call Now</ButtonA>
              <ButtonA href={site.cta.phone} className="hidden sm:inline-flex ring-neutral-300">Call</ButtonA>
              <ButtonA href="#" className="hidden sm:inline-flex pointer-events-none opacity-50 ring-neutral-200" target="_self" aria-disabled="true">Order Online (coming soon)</ButtonA>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-100">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1920&auto=format&fit=crop"
            alt="Thai food table spread"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-500">Authentic • Fast • Friendly</p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
                {site.brand.tagline}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-neutral-600">
                From classic Pad Thai to vibrant curries and wok-fired noodles, we serve Thai comfort food made fresh — perfect for dine-in, pickup, or delivery.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonA href="#menu" className="bg-emerald-500 text-white ring-emerald-500">View Menu</ButtonA>
                <ButtonA href="#locations" className="ring-neutral-300">Find a Location</ButtonA>
                <ButtonA href="#" className="pointer-events-none opacity-50 ring-neutral-200" target="_self" aria-disabled="true">Order Online (coming soon)</ButtonA>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-neutral-600">
                <Utensils className="h-4 w-4" />
                <span>Vegan + Gluten-free friendly options</span>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {site.featured.map((f, i) => (
                  <Card key={i} className="overflow-hidden">
                    <img src={f.img} alt={f.name} className="h-40 w-full object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold">{f.name}</h3>
                      <p className="mt-1 text-sm text-neutral-600">{f.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="menu" title="Signature Dishes" subtitle="Menu Highlights">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.featured.map((f, i) => (
            <Card key={i} className="overflow-hidden">
              <img src={f.img} alt={f.name} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{f.name}</h3>
                <p className="mt-1 text-neutral-600">{f.desc}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ButtonA href={site.cta.phone} className="bg-neutral-900 text-white ring-neutral-900">Call to Order</ButtonA>
          <div className="mt-3">
            <ButtonA href="#" className="pointer-events-none opacity-50 ring-neutral-200" target="_self" aria-disabled="true">Order Online (coming soon)</ButtonA>
          </div>
        </div>
      </Section>

      <Section id="locations" title="Visit Us" subtitle="Locations & Hours">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.locations.map((loc, i) => (
            <Card key={i} className="p-5">
              <h3 className="text-lg font-semibold">{loc.name}</h3>
              <div className="mt-3 flex items-start gap-2 text-sm text-neutral-700">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a className="hover:underline" href={loc.maps} target="_blank" rel="noreferrer">{loc.address}</a>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-neutral-700">
                <Clock className="h-4 w-4" />
                <span>{loc.hours}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-neutral-700">
                <Phone className="h-4 w-4" />
                <a className="hover:underline" href={`tel:${loc.phone.replace(/[^\\d]/g, "")}`}>{loc.phone}</a>
              </div>
              <div className="mt-4">
                <ButtonA href={`tel:${loc.phone.replace(/[^\\d]/g, "")}`} className="bg-neutral-900 text-white ring-neutral-900">Call Store</ButtonA>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="about" title="Our Story" subtitle="Made with Heart">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-neutral-700">
            We started Bimi Thai with a simple promise: great Thai food, served fast, by people who care. From Red Wing to
            River Falls and Hastings, our kitchens balance bold flavors with fresh ingredients and genuine hospitality.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Fresh Ingredients", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop" },
            { label: "Wok-Fired Flavor", img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop" },
            { label: "Friendly Service", img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop" },
          ].map((g, i) => (
            <Card key={i} className="overflow-hidden">
              <img src={g.img} alt={g.label} className="h-48 w-full object-cover" />
              <div className="p-4 text-center font-medium">{g.label}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Questions or Catering?">
        <div className="mx-auto max-w-2xl">
          <Card className="p-6">
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent("Website Inquiry — Bimi Thai");
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\\nEmail: ${data.get("email")}\\nMessage: ${data.get("message")}`
                );
                window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Name</label>
                  <input name="name" required className="w-full rounded-xl border border-neutral-300 px-3 py-2" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <input name="email" type="email" required className="w-full rounded-xl border border-neutral-300 px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <textarea name="message" rows={4} required className="w-full rounded-xl border border-neutral-300 px-3 py-2" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <Mail className="h-4 w-4" />
                  <span>{site.email}</span>
                </div>
                <button type="submit" className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white">Send</button>
              </div>
            </form>
          </Card>
        </div>
      </Section>

      <footer className="border-t border-neutral-200 bg-white py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <div className="text-lg font-bold">{site.brand.name}</div>
              <div className="text-sm text-neutral-600">© {new Date().getFullYear()} {site.brand.name}. All rights reserved.</div>
            </div>
            <div className="flex items-center gap-4">
              <a href={site.socials.facebook} target="_blank" rel="noreferrer" className="rounded-full p-2 ring-1 ring-neutral-300 hover:bg-neutral-50">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="rounded-full p-2 ring-1 ring-neutral-300 hover:bg-neutral-50">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
