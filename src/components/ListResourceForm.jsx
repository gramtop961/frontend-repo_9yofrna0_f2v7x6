import React, { useState } from 'react';
import { Upload, Calendar, Tag, FileText, Shield } from 'lucide-react';

export default function ListResourceForm() {
  const [form, setForm] = useState({
    title: '',
    category: 'Books',
    condition: 'Like New',
    description: '',
    availableFrom: '',
    availableTo: '',
    deposit: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Resource submitted: ${form.title}\n(Stub UI – backend will handle persistence and trust rules)`);
  };

  return (
    <section id="list" className="relative mx-auto max-w-4xl px-6 py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">List a Resource</h2>
        <p className="mt-1 text-sm text-slate-400">
          Set a time window and optional deposit. Your trust score improves with successful returns.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm text-slate-200">
            Title
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="e.g., Scientific Calculator"
              className="mt-1 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-200">
            Category
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option>Books</option>
              <option>Electronics</option>
              <option>Sports</option>
              <option>Tools</option>
              <option>Other</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-200">
            Condition
            <select
              name="condition"
              value={form.condition}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option>Like New</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-200">
            Deposit (optional)
            <input
              type="number"
              name="deposit"
              min="0"
              step="1"
              value={form.deposit}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </label>
        </div>

        <label className="flex flex-col gap-1 text-sm text-slate-200">
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="Key details students should know..."
            className="mt-1 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </label>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm text-slate-200">
            Available From
            <input
              type="datetime-local"
              name="availableFrom"
              value={form.availableFrom}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-200">
            Available Until
            <input
              type="datetime-local"
              name="availableTo"
              value={form.availableTo}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-lg bg-emerald-500/5 p-3 text-sm text-emerald-200 ring-1 ring-emerald-500/20">
          <Shield className="h-4 w-4" />
          Time windows and deposits help protect owners. Your trust score grows with timely returns.
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Upload className="h-4 w-4" /> Add photos after creating the listing
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            Publish Listing
          </button>
        </div>
      </form>
    </section>
  );
}
