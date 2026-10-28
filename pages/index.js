import React from 'react';
import { Droplets, Flame, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-orange-900 text-white font-sans">
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/5 z-0" />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <div className="flex space-x-4 mb-8">
          <Droplets className="w-12 h-12 text-blue-400 animate-pulse" />
          <Flame className="w-12 h-12 text-orange-500 animate-pulse" />
        </div>
        <h1 className="text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-500">
          IGNA YARA
        </h1>
        <p className="text-xl italic mb-12 text-gray-300">
          "La pasión de tu vida - Fuego y Agua Eterno"
        </p>
        <button className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-full hover:bg-white/20 transition-all group">
          <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
        </button>
        <footer className="mt-24 text-sm text-gray-500">
          © {new Date().getFullYear()} IGNA YARA | Argentina
        </footer>
      </main>
    </div>
  );
}
