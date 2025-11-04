import React from 'react';
import { Book, Camera, Laptop, Drill, Dumbbell, Clock, Shield, Star } from 'lucide-react';

const demoResources = [
  {
    id: 1,
    title: 'Linear Algebra Textbook',
    category: 'Books',
    icon: Book,
    condition: 'Like New',
    available: 'Today 3pm – Fri 6pm',
    ownerScore: 4.8,
  },
  {
    id: 2,
    title: 'Mirrorless Camera Kit',
    category: 'Electronics',
    icon: Camera,
    condition: 'Good',
    available: 'This weekend',
    ownerScore: 4.6,
  },
  {
    id: 3,
    title: 'Laptop (Note-taking)',
    category: 'Electronics',
    icon: Laptop,
    condition: 'Fair',
    available: 'Weekdays after 5pm',
    ownerScore: 4.2,
  },
  {
    id: 4,
    title: 'Power Drill Set',
    category: 'Tools',
    icon: Drill,
    condition: 'Good',
    available: 'By request',
    ownerScore: 4.4,
  },
  {
    id: 5,
    title: 'Dumbbells (10kg pair)',
    category: 'Sports',
    icon: Dumbbell,
    condition: 'Like New',
    available: 'Evenings only',
    ownerScore: 4.9,
  },
];

function TrustBadge({ score }) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/20">
      <Shield className="h-3 w-3" />
      {score.toFixed(1)}
    </div>
  );
}

function ResourceCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-emerald-400/30 hover:bg-white/10">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/70 ring-1 ring-white/10">
            <Icon className="h-5 w-5 text-emerald-300" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{item.title}</h3>
            <p className="text-xs text-slate-400">{item.category} • {item.condition}</p>
          </div>
        </div>
        <TrustBadge score={item.ownerScore} />
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
        <Clock className="h-3.5 w-3.5 text-slate-400" />
        <span>Available: {item.available}</span>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-3 py-2 text-xs font-medium text-white shadow-emerald-500/20 hover:bg-emerald-400">
          Request to Borrow
        </button>
        <button className="inline-flex items-center justify-center rounded-md bg-white/10 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/15 hover:bg-white/20">
          View Details
        </button>
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-xl transition group-hover:scale-150" />
    </div>
  );
}

export default function ResourceList() {
  return (
    <section id="browse" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Browse Popular Resources</h2>
          <p className="mt-1 text-sm text-slate-400">Time-based borrowing with trusted peers across campus.</p>
        </div>
        <div className="hidden gap-1 text-amber-300 sm:flex">
          <Star className="h-4 w-4 fill-amber-300/20" />
          <Star className="h-4 w-4 fill-amber-300/30" />
          <Star className="h-4 w-4 fill-amber-300/40" />
          <Star className="h-4 w-4 fill-amber-300/50" />
          <Star className="h-4 w-4 fill-amber-300/60" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {demoResources.map((r) => (
          <ResourceCard key={r.id} item={r} />
        ))}
      </div>
    </section>
  );
}
