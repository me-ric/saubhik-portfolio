
import { motion } from 'framer-motion';
import { Button } from './components/Button';

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Saubhik Roy Creative
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-xl text-lg text-gray-300 mb-6"
      >
        Crafting Bold Edits That Tell Unforgettable Stories.
      </motion.p>
      <Button>View Portfolio</Button>
    </main>
  );
}
