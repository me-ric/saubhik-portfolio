
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/Button";

export default function App() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-400">Saubhik Roy Creative</h1>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {['About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((link) => (
            <a href={`#${link.toLowerCase()}`} className="hover:text-yellow-400 transition" key={link}>{link}</a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-extrabold mb-4">
          Saubhik Roy Creative
        </motion.h1>
        <p className="text-gray-300 mb-6">Crafting Bold Edits That Tell Unforgettable Stories.</p>
        <Button>View Portfolio</Button>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">About Me</h2>
        <p className="text-lg text-zinc-300 leading-relaxed">
          I’m Saubhik Roy — a passionate video editor and graphic designer from Agartala with 4+ years of experience at Trinity Gaming India. I bring creativity and rhythm together to craft engaging edits that resonate, whether it’s reels, long-form, YouTube intros, or podcast cuts.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-zinc-900">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          {['Reel Editing', 'Vlog Highlights', 'Logo Animation', 'Cash Cow Videos', 'Podcast Cuts', 'Thumbnail Design'].map((service, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
              <h3 className="text-xl font-semibold text-white">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">My Edits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'https://www.youtube.com/embed/dQw4w9WgXcQ',
            'https://www.youtube.com/embed/3tmd-ClpJxA',
            'https://www.youtube.com/embed/kXYiU_JCYtU'
          ].map((link, i) => (
            <div key={i} className="aspect-video overflow-hidden rounded-xl border border-zinc-700">
              <iframe src={link} className="w-full h-full" title={`Video ${i}`} allowFullScreen />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-zinc-900 text-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">Client Words</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          {['Marcus', 'Peter', 'Jane'].map((name, i) => (
            <div key={i} className="bg-zinc-800 p-6 rounded-xl text-left border border-zinc-700">
              <h4 className="text-lg font-bold mb-2">{name}</h4>
              <p className="text-sm text-zinc-300">“Working with Saubhik was amazing — fast, stylish and professional results every time.”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">Let’s Work Together</h2>
        <p className="text-zinc-300 mb-6">Send a message or connect on socials below</p>
        <Button as='a' href='mailto:videosaubhik@gmail.com'>Message Me</Button>
      </section>

      {/* Footer */}
      <footer className="text-sm text-center py-6 text-zinc-500">
        © {new Date().getFullYear()} Saubhik Roy. All rights reserved.
      </footer>
    </div>
  );
}
