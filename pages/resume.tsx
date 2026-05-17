
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Download, Mail, Linkedin, ArrowRight } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

const ResumePage = () => {
  return (
    <>
      <Head>
        <title>Resume | Jason K Hanani</title>
        <meta
          name="description"
          content="Business Analyst & Systems Designer with €1.5M+ documented impact. Specializing in diagnostic thinking, requirements design, and operational systems across multi-market e-commerce platforms."
        />
        <meta property="og:title" content="Resume - Jason K Hanani" />
        <meta property="og:url" content="https://jasonkhanani.com/resume/" />
        <link rel="canonical" href="https://jasonkhanani.com/resume/" />
      </Head>

      <div className="min-h-screen p-4 md:p-8 lg:p-12 animate-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-4xl mx-auto border border-darkText/8 p-8 md:p-16 bg-white rounded-3xl shadow-lg relative overflow-hidden">

          {/* Header */}
          <header className="border-b border-darkText/10 pb-10 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h1 className="text-5xl font-sans font-bold tracking-tight mb-4">JASON K HANANI</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-darkText/70">
                  <a href="mailto:contact@jasonkhanani.com" className="flex items-center gap-2 hover:text-warmAmber transition-colors">
                    <Mail size={14} /> contact@jasonkhanani.com
                  </a>
                  <a href="https://www.linkedin.com/in/jasonkhanani/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-warmAmber transition-colors">
                    <Linkedin size={14} /> jasonkhanani
                  </a>
                </div>
              </div>
              <a
                href="/jasonkhanani-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-warmAmber text-cardBg text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-diagnosticBlue transition-colors"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-12">
            <SectionLabel label="Summary" color="amber" />
            <p className="text-base leading-relaxed text-darkText/80 max-w-2xl">
              Business analyst and systems designer with €1.5M+ in documented impact across product operations, marketplace architecture, and operational systems. Specializes in diagnosing root problems, designing structured solutions, and building scalable systems that measurably improve revenue and customer experience.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <div className="mb-8">
              <SectionLabel label="Experience" color="amber" />
            </div>

            {/* Commercial PMO */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                <h3 className="text-lg font-sans font-bold text-darkText">Commercial PMO — ZALORA Group</h3>
                <span className="text-xs font-bold text-darkText/50 uppercase tracking-widest shrink-0">Apr 2025 – Present</span>
              </div>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Designed and deployed a unified regional operating model for seller onboarding across 6 markets, consolidating fragmented workflows into a single global system to eliminate operational friction.</span>
                </li>
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Engineered data-driven frameworks to analyze cross-border route eligibility and inventory constraints, optimizing stock readiness and assortment coverage.</span>
                </li>
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Directed commercial feasibility studies and logic-modeling for multi-warehouse fulfillment initiatives, projecting €300K ARR (~10% growth).</span>
                </li>
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Leveraged AI-driven logic-prototyping (Python/LLMs) to accelerate the design and iteration of internal business rules and automated tagging systems.</span>
                </li>
              </ul>
            </div>

            {/* Operations Manager */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                <h3 className="text-lg font-sans font-bold text-darkText">Operations Manager — ZALORA Group</h3>
                <span className="text-xs font-bold text-darkText/50 uppercase tracking-widest shrink-0">Oct 2024 – Apr 2025</span>
              </div>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Modeled margin sensitivity and redesigned marketplace fee structures, delivering a projected €200K annual revenue uplift.</span>
                </li>
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Integrated a third-party AI chatbot into seller support workflows via Intercom, achieving 68% ticket deflection and 24/7 autonomous coverage.</span>
                </li>
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Managed 3 direct reports within an 8-person cross-functional operating group, coordinating operational changes across marketplace, payments, and support teams across regions.</span>
                </li>
              </ul>
            </div>

            {/* Associate Project Manager */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                <h3 className="text-lg font-sans font-bold text-darkText">Associate Project Manager — ZALORA Group</h3>
                <span className="text-xs font-bold text-darkText/50 uppercase tracking-widest shrink-0">Nov 2022 – Sep 2024</span>
              </div>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Diagnosed logistics subsidy leakage via SKU and lane-level analysis and redesigned shipping fee models, reducing costs by €520K annually.</span>
                </li>
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Designed and architected the logic for a fraud-resistant, cashless return system, migrating return logistics to an automated chargeback workflow.</span>
                </li>
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Analyzed pricing, inventory, and logistics data using SQL, Python, Tableau, Looker, and Excel to support logistics and warehouse performance decisions.</span>
                </li>
              </ul>
            </div>

            {/* Graduate Management Trainee */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                <h3 className="text-lg font-sans font-bold text-darkText">Graduate Management Trainee — ZALORA Group</h3>
                <span className="text-xs font-bold text-darkText/50 uppercase tracking-widest shrink-0">Nov 2021 – Oct 2022</span>
              </div>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Coordinated the Indonesia rollout of an exchange feature, converting ~15% of returns into exchanges and preserving €695K in revenue.</span>
                </li>
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Synthesized NPS scores and customer feedback into actionable insights, informing short and long-term improvements to marketplace and support workflows.</span>
                </li>
              </ul>
            </div>

            {/* Paxel */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                <h3 className="text-lg font-sans font-bold text-darkText">Product Operations — Paxel</h3>
                <span className="text-xs font-bold text-darkText/50 uppercase tracking-widest shrink-0">Jan 2020 – Oct 2021</span>
              </div>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Designed the logic-architecture for a new nationwide routing engine, partnering with engineering to deliver a 60% reduction in activation lead time (5 days → 2 days).</span>
                </li>
                <li className="flex gap-3 text-sm text-darkText/75 leading-relaxed">
                  <span className="text-warmAmber shrink-0 mt-0.5 font-bold">—</span>
                  <span>Optimized a 130-node logistics network via capacity and throughput modeling, achieving hub relocation payback in under one year.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="border-t border-darkText/10 pt-12 mb-12">
            <div className="mb-6">
              <SectionLabel label="Education &amp; Certifications" color="amber" />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-sm text-darkText">B.S.E. Industrial &amp; Operations Engineering (Cum Laude)</h4>
                <p className="text-sm text-darkText/60">University of Michigan — Ann Arbor</p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-darkText">Six Sigma Green Belt — Certification No. 2558-18401</h4>
                <p className="text-sm text-darkText/60">Institute of Industrial and Systems Engineers</p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-darkText">Google Project Management Professional Certificate</h4>
                <p className="text-sm text-darkText/60">Google</p>
              </div>
            </div>
          </section>

          {/* Tools & Methods */}
          <section className="border-t border-darkText/10 pt-12 mb-12">
            <div className="mb-6">
              <SectionLabel label="Tools &amp; Methods" color="amber" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'SQL (Advanced)',
                'Python',
                'Tableau & Looker',
                'Excel Modeling',
                'Lean Six Sigma (DMAIC)',
                'BRD / PRD Development',
                'Workflow Automation',
                'Intercom / Freshdesk',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-warmAmber/20 text-warmAmber/80 bg-warmAmber/5 hover:bg-warmAmber/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Case Studies CTA */}
          <section className="border-t border-darkText/10 pt-12">
            <div className="mb-4">
              <SectionLabel label="Case Studies" color="amber" />
            </div>
            <p className="text-sm text-darkText/60 leading-relaxed mb-6 max-w-lg">
              Selected platform initiatives with measurable impact across revenue, cost structure, automation, and multi-market operations.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-bold text-warmAmber hover:text-darkText transition-colors group uppercase tracking-wider"
            >
              <span>View Work</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </section>

        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media print {
            nav, footer { display: none !important; }
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
