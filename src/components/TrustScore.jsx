import React from 'react';
import { ShieldCheck, Clock, Repeat } from 'lucide-react';

export default function TrustScore() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 text-white ring-1 ring-white/5">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-lg bg-emerald-500/15 p-2 ring-1 ring-emerald-400/20">
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Verified & Trusted</h3>
              <p className="mt-1 text-sm text-slate-300">
                Reputation grows with completed, on-time returns. High scorers get priority on requests.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-lg bg-emerald-500/15 p-2 ring-1 ring-emerald-400/20">
              <Clock className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Time Windows</h3>
              <p className="mt-1 text-sm text-slate-300">
                Borrow with clear start and end times. Automatic reminders help everyone stay on track.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-lg bg-emerald-500/15 p-2 ring-1 ring-emerald-400/20">
              <Repeat className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Returns Made Simple</h3>
              <p className="mt-1 text-sm text-slate-300">
                Easy check-ins and confirmations. Every successful return boosts your score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
