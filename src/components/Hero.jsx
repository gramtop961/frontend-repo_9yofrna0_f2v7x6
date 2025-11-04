import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-4 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10 backdrop-blur">
          Campus Resource Sharing Portal
        </span>
        <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Share. Borrow. Thrive on Campus.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
          Discover books, electronics, and sports gear from fellow students. Borrow with time windows
          and build a trusted reputation with every successful return.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#list"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            List a Resource
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 transition group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a
            href="#browse"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            Browse Resources
          </a>
        </div>
      </div>
    </section>
  );
}
