import React from 'react';
import Hero from './components/Hero';
import ResourceList from './components/ResourceList';
import ListResourceForm from './components/ListResourceForm';
import TrustScore from './components/TrustScore';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-sm text-slate-400">
      Built for students to share smarter. © {new Date().getFullYear()} Campus Resource Sharing
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <Hero />
      <ResourceList />
      <ListResourceForm />
      <TrustScore />
      <Footer />
    </div>
  );
}
