import React, { useState } from 'react';
import Head from 'next/head';

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    if (!validate()) {
      setStatus('error');
      return;
    }

    const body = encode({ 'form-name': 'contact', ...form });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Jason Kester Hanani</title>
        <meta 
          name="description" 
          content="Get in touch for systems diagnostics, operational consulting, or technical project management inquiries." 
        />
        <meta property="og:title" content="Contact Jason Kester Hanani" />
        <meta property="og:url" content="https://jasonkhanani.com/contact/" />
        <link rel="canonical" href="https://jasonkhanani.com/contact/" />
      </Head>
      
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-24">

      <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-700 p-12 rounded-md">
        <h1 className="text-3xl font-serif mb-4 text-ricePaper">Contact</h1>
        <p className="text-sm text-ricePaper/60 mb-8">Send a short note — I typically reply within a few business days.</p>

        <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />

          <label className="block mb-4">
            <span className="text-sm text-ricePaper/70">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-3 bg-transparent border border-zinc-700 rounded text-ricePaper focus:ring-0"
            />
            {errors.name && <div className="text-foxOrange text-xs mt-1">{errors.name}</div>}
          </label>

          <label className="block mb-4">
            <span className="text-sm text-ricePaper/70">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-3 bg-transparent border border-zinc-700 rounded text-ricePaper focus:ring-0"
            />
            {errors.email && <div className="text-foxOrange text-xs mt-1">{errors.email}</div>}
          </label>

          <label className="block mb-6">
            <span className="text-sm text-ricePaper/70">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="mt-2 w-full px-4 py-3 bg-transparent border border-zinc-700 rounded text-ricePaper focus:ring-0 resize-none"
            />
            {errors.message && <div className="text-foxOrange text-xs mt-1">{errors.message}</div>}
          </label>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-hankoRust text-ricePaper font-bold uppercase tracking-widest text-[12px] rounded shadow-sm hover:bg-foxOrange transition-all"
            >
              Send
            </button>

            {status === 'success' && <div className="text-sm text-foxOrange">Thanks — message sent.</div>}

            {status === 'error' && <div className="text-sm text-foxOrange">There was a problem. Please try again.</div>}
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;
