
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function PortfolioSite() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-between items-center p-6 sticky top-0 bg-black z-50 shadow-lg">
        <h1 className="text-2xl font-bold">VideoXSaubhik</h1>
        <nav className="hidden md:flex gap-6">
          {['Home', 'About', 'Portfolio', 'Testimonials', 'Contact'].map(link => (
            <a href={`#${link.toLowerCase()}`} className="hover:text-purple-400 transition" key={link}>{link}</a>
          ))}
        </nav>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
        </button>
      </header>

      <section id="home" className="h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-purple-900 to-black">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Professional Video Editor</h2>
        <p className="max-w-xl text-lg text-gray-300 mb-8">
          Any Type of Editing | Gaming | YouTube | Socials
        </p>
        <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition">Let’s Talk</a>
      </section>

      <section id="about" className="py-20 text-center bg-black">
        <h3 className="text-4xl font-semibold mb-6">About Me</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-400">
          Hi, I'm Saubhik Roy — a video editor & graphic designer from Agartala with 4+ years of experience at Trinity Gaming India. I specialize in:
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
          {['Cash Cow Editing', 'Reels', 'Vlogs', 'Thumbnail Design', 'Logo Animation', 'Podcast Edits'].map(item => (
            <span key={item} className="bg-purple-800/40 px-4 py-2 rounded-xl border border-purple-500">{item}</span>
          ))}
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <h3 className="text-4xl font-semibold text-center mb-10">My Best Edits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/embed/3tmd-ClpJxA", "https://www.youtube.com/embed/kXYiU_JCYtU"].map((url, i) => (
            <div key={i} className="bg-zinc-800 rounded-xl overflow-hidden">
              <iframe className="w-full aspect-video" src={url} title={`YouTube Video ${i + 1}`} frameBorder="0" allowFullScreen></iframe>
              <div className="p-4 text-center font-semibold">Project {i + 1}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-20 text-center bg-black">
        <h3 className="text-4xl font-semibold mb-10">Testimonials</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
          {['Marcus', 'Peter', 'Jane'].map((name, i) => (
            <div key={i} className="bg-purple-700 text-white px-6 py-8 rounded-xl w-full md:w-1/4">
              <h4 className="text-lg font-bold mb-2">{name}</h4>
              <p className="text-sm">Loved the creativity and precision in the work. Definitely recommending!</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 text-center bg-zinc-900">
        <h3 className="text-4xl font-semibold mb-6">I Am Ready to Consult You</h3>
        <form className="max-w-lg mx-auto flex flex-col gap-4 text-left">
          <input type="text" placeholder="Your Name" className="bg-zinc-800 text-white p-3 rounded-md border border-zinc-600" required />
          <input type="email" placeholder="Your Email" className="bg-zinc-800 text-white p-3 rounded-md border border-zinc-600" required />
          <textarea placeholder="Your Message" rows={5} className="bg-zinc-800 text-white p-3 rounded-md border border-zinc-600" required></textarea>
          <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition">
            Send Message
          </button>
        </form>
        <div className="mt-10 text-sm text-zinc-300">
          <p>📧 videosaubhik@gmail.com</p>
          <p>📱 +91 87878 61554</p>
        </div>
      </section>

      <footer className="text-center text-xs py-4 text-zinc-500 bg-black">
        © {new Date().getFullYear()} Saubhik Roy. All rights reserved.
      </footer>
    </div>
  );
}
