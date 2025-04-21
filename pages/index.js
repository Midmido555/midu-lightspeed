import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl font-bold mb-4">⚡ Midu Lightspeed</h1>
        <p className="text-xl max-w-xl">
          The fastest way to create cinematic scripts, videos, voices, and books — powered by AI.
        </p>
      </motion.div>
    </main>
  );
}
