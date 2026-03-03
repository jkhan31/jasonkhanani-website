
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Download, Mail, Linkedin, ArrowRight } from 'lucide-react';

const ResumePage = () => {
  const colors = {
    paper: '#FAF5F0',
    ink: '#1A1A1A',
    rust: '#802B0A',
    orange: '#F07F2E',
    sage: '#4D6B57',
  };

  return (
    <>
      <Head>
        <title>Resume | Jason K Hanani</title>
        <meta
          name="description"
          content="Operations & Product Analytics leader with 6+ years delivering €1.5M+ in quantified impact across multi-market e-commerce platforms."
        />
        <meta property="og:title" content="Resume - Jason K Hanani" />
        <meta property="og:url" content="https://jasonkhanani.com/resume/" />
        <link rel="canonical" href="https://jasonkhanani.com/resume/" />
      </Head>

      <div className="min-h-screen p-4 md:p-8 lg:p-12 animate-in slide-in-from-bottom-4 duration-700">
        <div
          className="max-w-4xl mx-auto border-0.5 p-8 md:p-16 shadow-2xl bg-white relative overflow-hidden"
          style={{ borderColor: `${colors.rust}20` }}
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"></div>

          {/* Header */}
          <header className="relative z-10 border-b-0.5 pb-10 mb-12" style={{ borderColor: `${colors.ink}10` }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h1 className="text-5xl font-serif font-bold tracking-tight mb-2">JASON K HANANI</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm font-medium opacity-80">
                  <a href="mailto:contact@jasonkhanani.com" className="flex items-center gap-2 hover:text-foxOrange transition">
                    <Mail size={14} /> contact@jasonkhanani.com
                  </a>
                  <a href="https://www.linkedin.com/in/jasonkhanani/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foxOrange transition">
                    <Linkedin size={14} /> jasonkhanani
                  </a>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1M0PIV5PrjMEQj6eHwWteO-9LILUQ2wOp/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-lg bg-hankoRust text-ricePaper text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-foxOrange transition-all shadow-xl active:scale-95"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-12 relative z-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-foxOrange">Summary</h2>
            <p className="text-lg leading-relaxed font-serif opacity-80 border-l-2 pl-6" style={{ borderColor: colors.orange }}>
              Operations &amp; Product Analytics leader with 6+ years delivering €1.5M+ in quantified impact across multi-market e-commerce platforms. Translates customer friction and operational inefficiencies into scalable workflow redesign and automation, driving measurable performance improvements across regions.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-12 relative z-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-foxOrange">Experience</h2>

            {/* Commercial PMO */}
            <div className="mb-10 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Commercial PMO — ZALORA Group</h3>
                <span className="text-xs font-bold text-foxOrange/70 uppercase tracking-widest shrink-0">Apr 2025 – Present</span>
              </div>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Developed business cases and authored BRDs for multi-warehouse fulfillment, aligning cross-functional stakeholders on investment decisions and projecting €300K annual revenue uplift.</span>
                </li>
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Led redesign of regional seller onboarding into a unified global model, reducing cross-functional friction and lowering support ticket volume.</span>
                </li>
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Analyzed cross-border route eligibility and inventory constraints to improve SKU readiness and regional assortment coverage.</span>
                </li>
              </ul>
            </div>

            {/* Operations Manager */}
            <div className="mb-10 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Operations Manager — ZALORA Group</h3>
                <span className="text-xs font-bold text-foxOrange/70 uppercase tracking-widest shrink-0">Oct 2024 – Apr 2025</span>
              </div>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Led end-to-end regional pilot of AI chatbot integration, defining scope, KPIs, and rollout strategy; achieved 68% ticket deflection and expanded 24/7 self-service support without additional headcount.</span>
                </li>
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Managed 3 direct reports and led cross-functional implementation across Marketplace Operations, Seller Support, PMO, and Payments.</span>
                </li>
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Modeled margin sensitivity and redesigned marketplace fee structure, delivering €200K projected annual revenue uplift.</span>
                </li>
              </ul>
            </div>

            {/* Associate Project Manager */}
            <div className="mb-10 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Associate Project Manager — ZALORA Group</h3>
                <span className="text-xs font-bold text-foxOrange/70 uppercase tracking-widest shrink-0">Nov 2022 – Sep 2024</span>
              </div>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Diagnosed €520K annual logistics subsidy leakage through SKU- and lane-level cost modeling; redesigned shipping fee logic to restore margin discipline within system constraints.</span>
                </li>
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Re-engineered return logistics payment workflows, migrating to a cashless chargeback system and reducing fraud, failed pickups, and customer friction.</span>
                </li>
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Built diagnostic dashboards using SQL, Python, and Tableau to provide executive-level visibility into operational KPIs and cost performance.</span>
                </li>
              </ul>
            </div>

            {/* Graduate Management Trainee */}
            <div className="mb-10 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Graduate Management Trainee — ZALORA Group</h3>
                <span className="text-xs font-bold text-foxOrange/70 uppercase tracking-widest shrink-0">Nov 2021 – Oct 2022</span>
              </div>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Led Indonesia rollout of exchange feature, converting ~15% of returns into exchanges and preserving €695K in revenue.</span>
                </li>
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Synthesized weekly NPS and qualitative feedback into actionable product and operational improvements, informing roadmap decisions.</span>
                </li>
              </ul>
            </div>

            {/* Product Operations – Paxel */}
            <div className="mb-10 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Product Operations — Paxel</h3>
                <span className="text-xs font-bold text-foxOrange/70 uppercase tracking-widest shrink-0">Jan 2020 – Oct 2021</span>
              </div>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Designed and implemented planflow routing system with engineering, reducing route activation lead time by 60%.</span>
                </li>
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Optimized a 130-node logistics network through cost and throughput modeling, achieving payback in under one year.</span>
                </li>
                <li className="flex gap-3 text-base opacity-80 leading-relaxed">
                  <span className="text-foxOrange shrink-0 mt-0.5">—</span>
                  <span>Authored PRDs and BRDs for field sorting system enabling real-time package scanning and routing alignment.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="relative z-10 border-t-0.5 pt-12 mb-12" style={{ borderColor: `${colors.ink}20` }}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-foxOrange">Education &amp; Certifications</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-base">B.S.E. Industrial &amp; Operations Engineering (Cum Laude)</h4>
                <p className="shrink-0 opacity-80">University of Michigan — Ann Arbor</p>
              </div>
              <div>
                <h4 className="font-bold text-base">Six Sigma Green Belt</h4>
                <p className="shrink-0 opacity-80">Institute of Industrial and Systems Engineers</p>
              </div>
              <div>
                <h4 className="font-bold text-base">Google Project Management Professional Certificate</h4>
                <p className="shrink-0 opacity-80">Google</p>
              </div>
            </div>
          </section>

          {/* Tools & Methods */}
          <section className="relative z-10 border-t-0.5 pt-12" style={{ borderColor: `${colors.ink}20` }}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-foxOrange">Tools &amp; Methods</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'SQL',
                'Python',
                'Tableau & Looker',
                'Advanced Excel Modeling',
                'Lean Six Sigma (DMAIC)',
                'BRD / PRD Development',
                'Workflow Automation (Python, n8n)',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border-0.5 border-hankoRust/30 text-hankoRust/80 bg-hankoRust/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Case Studies CTA */}
          <section className="relative z-10 border-t-0.5 pt-12 mt-12" style={{ borderColor: `${colors.ink}10` }}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-foxOrange">Case Studies</h2>
            <p className="text-base opacity-70 leading-relaxed mb-6 max-w-lg">
              Selected platform initiatives with measurable impact across revenue, cost structure, automation, and multi-market operations.
            </p>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-hankoRust hover:text-sumiInk transition-colors group uppercase tracking-wider"
            >
              <span>View Case Studies</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </section>

        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media print {
            nav, footer, .bg-noise, .bg-grid { display: none !important; }
            body { background-color: white !important; }
            .min-h-screen { padding: 0 !important; margin: 0 !important; }
            .max-w-4xl { border: none !important; box-shadow: none !important; width: 100% !important; max-width: 100% !important; padding: 0 !important; }
            button { display: none !important; }
          }
        `}} />
      </div>
    </>
  );
};

export default ResumePage;
