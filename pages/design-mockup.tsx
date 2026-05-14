import React from 'react';
import { ArrowRight, TrendingUp, MessageSquare, Zap } from 'lucide-react';

const DesignMockup = () => {
  return (
    <div className="min-h-screen bg-creamBg pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-5xl md:text-6xl font-sans font-bold text-chocolateBrown mb-4">
            Warm Earthy Design System
          </h1>
          <p className="text-lg text-warmBrown60 max-w-2xl">
            Complete redesign with warm earthy tones. Professional, high-contrast, naturally sophisticated.
          </p>
        </div>

        {/* Color Palette Reference */}
        <section className="mb-24 bg-warmStone border-2 border-ochreAccent rounded-xl p-12">
          <h2 className="text-3xl font-sans font-bold text-chocolateBrown mb-8">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="w-full h-24 rounded-lg mb-3 border-2 border-warmBrown20" style={{ backgroundColor: '#FBF9F4' }}></div>
              <p className="font-bold text-warmBrown">Cream BG</p>
              <p className="text-xs text-warmBrown60">#FBF9F4</p>
            </div>
            <div>
              <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#5A4A40' }}></div>
              <p className="font-bold text-warmBrown">Warm Brown</p>
              <p className="text-xs text-warmBrown60">#5A4A40</p>
            </div>
            <div>
              <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#B8654C' }}></div>
              <p className="font-bold text-warmBrown">Ochre Accent</p>
              <p className="text-xs text-warmBrown60">#B8654C</p>
            </div>
            <div>
              <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#C89D6E' }}></div>
              <p className="font-bold text-warmBrown">Golden Sand</p>
              <p className="text-xs text-warmBrown60">#C89D6E</p>
            </div>
            <div>
              <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#F5EFE7' }}></div>
              <p className="font-bold text-warmBrown">Warm Stone</p>
              <p className="text-xs text-warmBrown60">#F5EFE7</p>
            </div>
            <div>
              <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#EBE3D8' }}></div>
              <p className="font-bold text-warmBrown">Light Stone</p>
              <p className="text-xs text-warmBrown60">#EBE3D8</p>
            </div>
            <div>
              <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#483936' }}></div>
              <p className="font-bold text-warmBrown">Chocolate</p>
              <p className="text-xs text-warmBrown60">#483936</p>
            </div>
            <div>
              <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#8B7A6F' }}></div>
              <p className="font-bold text-warmBrown">Taupe</p>
              <p className="text-xs text-warmBrown60">#8B7A6F</p>
            </div>
          </div>
        </section>

        {/* Section 1: Hero */}
        <section className="mb-32">
          <h2 className="text-3xl font-sans font-bold text-warmBrown mb-12 pb-6 border-b-2 border-ochreAccent/30">
            1. Hero Section – Professional, Warm Entry
          </h2>
          <div className="bg-gradient-to-b from-creamBg to-warmStone rounded-xl overflow-hidden border-2 border-ochreAccent">
            <div className="px-6 py-20 md:py-28">
              <p className="text-ochreAccent font-bold tracking-[0.3em] text-xs uppercase mb-8">
                Business Analyst &amp; Systems Designer
              </p>
              <h1 className="text-5xl md:text-6xl font-sans font-bold leading-tight mb-8 tracking-tight text-chocolateBrown">
                <span className="text-ochreAccent">Jason</span> K<br /><span className="text-ochreAccent">Hanani</span>
              </h1>
              <div className="max-w-2xl mb-12">
                <div className="border-l-4 border-ochreAccent pl-6 mb-6">
                  <p className="text-lg md:text-xl text-warmBrown leading-relaxed font-semibold">
                    I help businesses figure out what's actually broken — and design what needs to be built to fix it.
                  </p>
                </div>
                <div className="text-base text-warmBrown60 leading-relaxed">
                  <span className="text-ochreAccent font-bold">€</span><span className="text-warmBrown font-bold">1.5M+</span> in quantified impact across e-commerce operations and logistics.
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-ochreAccent text-creamBg text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-ochreAccent85 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-102">
                  See My Work
                </button>
                <button className="px-8 py-4 border-2 border-warmBrown60 text-warmBrown60 text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-warmStone hover:text-warmBrown hover:border-warmBrown transition-all duration-300">
                  Work With Me
                </button>
              </div>
            </div>
            <div className="bg-warmStone px-6 py-4 border-t-2 border-ochreAccent/20">
              <p className="text-xs text-ochreAccent font-mono font-bold">✓ NEW WARM EARTHY DESIGN</p>
            </div>
          </div>
          <div className="mt-8 bg-lightStone border-l-4 border-ochreAccent rounded-lg p-6">
            <p className="text-sm text-warmBrown60"><strong>Design Features:</strong> Warm cream background with golden stone gradient, chocolate brown typography, ochre accents for emphasis, professional left border frame, natural color hierarchy through warm tones</p>
          </div>
        </section>

        {/* Section 2: Methodology */}
        <section className="mb-32">
          <h2 className="text-3xl font-sans font-bold text-warmBrown mb-12 pb-6 border-b-2 border-ochreAccent/30">
            2. Methodology Section – Warm, Structured Process
          </h2>
          <div className="bg-warmStone rounded-xl overflow-hidden border-2 border-ochreAccent p-8">
            <div className="mb-12 max-w-xl">
              <h3 className="text-4xl font-sans font-bold text-chocolateBrown mb-4">How I Work</h3>
              <p className="text-base text-warmBrown60">My approach to solving complex problems and designing solutions that actually work.</p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Diagnose', bg: 'warmStone', num: '01' },
                { title: 'Define', bg: 'lightStone', num: '02' },
                { title: 'Design', bg: 'warmStone', num: '03' },
                { title: 'Deliver', bg: 'lightStone', num: '04' }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[4rem_1fr] gap-8 px-6 py-8 rounded-lg border-l-4 border-ochreAccent ${item.bg === 'lightStone' ? 'bg-lightStone' : 'bg-creamBg'}`}
                >
                  <span className="text-3xl font-sans font-bold text-ochreAccent/40 leading-none pt-1">{item.num}</span>
                  <div>
                    <h4 className="text-xl font-sans font-bold text-ochreAccent mb-2">{item.title}</h4>
                    <p className="text-sm text-warmBrown60">Description of how this step in the methodology helps solve complex business problems.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 bg-lightStone border-l-4 border-ochreAccent rounded-lg p-6">
            <p className="text-sm text-warmBrown60"><strong>Design Features:</strong> Warm stone section background creates visual break, alternating cream/light stone cards, ochre left borders for visual flow, chocolate brown titles, professional warm color progression</p>
          </div>
        </section>

        {/* Section 3: Featured Work */}
        <section className="mb-32">
          <h2 className="text-3xl font-sans font-bold text-warmBrown mb-12 pb-6 border-b-2 border-ochreAccent/30">
            3. Featured Work – Proven Results, Warm & Bold
          </h2>
          <div className="bg-lightStone rounded-xl overflow-hidden border-2 border-ochreAccent p-8">
            <div className="mb-12 max-w-xl">
              <h3 className="text-4xl font-sans font-bold text-chocolateBrown mb-4">Outcomes</h3>
              <p className="text-base text-warmBrown60">Recent projects where diagnostic thinking delivered measurable results.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Featured Card */}
              <div className="md:col-span-2 bg-ochreAccent text-creamBg rounded-lg p-8 hover:shadow-lg hover:scale-102 transition-all duration-300 shadow-md">
                <p className="text-xs font-bold uppercase tracking-wider mb-3 text-creamBg/80">Featured Case Study</p>
                <h4 className="text-2xl font-bold mb-4">Revenue Preservation</h4>
                <p className="text-creamBg/90 mb-6 text-sm leading-relaxed">Returns were treated as a cost center. We redesigned the system to treat returns as a retention opportunity instead.</p>
                <div className="flex items-center justify-between pt-4 border-t border-creamBg/20">
                  <span className="font-bold text-lg">€695K Revenue Preserved</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Secondary Cards */}
              {[
                { title: 'Cost Optimization', icon: Zap, impact: '€520K Savings' },
                { title: 'Support Automation', icon: MessageSquare, impact: '68% Deflection' }
              ].map((card, i) => (
                <div key={i} className="bg-creamBg border-2 border-warmBrown20 rounded-lg p-6 hover:border-ochreAccent hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <card.icon className="w-5 h-5 text-ochreAccent mt-1" />
                    <h4 className="text-lg font-bold text-warmBrown">{card.title}</h4>
                  </div>
                  <p className="text-sm text-warmBrown60 mb-4">Description of how this project delivered measurable impact through systematic thinking.</p>
                  <p className="text-ochreAccent font-bold">{card.impact}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 bg-lightStone border-l-4 border-ochreAccent rounded-lg p-6">
            <p className="text-sm text-warmBrown60"><strong>Design Features:</strong> Light stone section background creates clear visual separation, featured card promoted with warm ochre background (high contrast), secondary cards maintain clean aesthetic with visible borders, consistent color language throughout</p>
          </div>
        </section>

        {/* Section 4: Footer */}
        <section className="mb-32">
          <h2 className="text-3xl font-sans font-bold text-warmBrown mb-12 pb-6 border-b-2 border-ochreAccent/30">
            4. Footer – Sophisticated Close
          </h2>
          <div className="bg-chocolateBrown text-creamBg rounded-xl overflow-hidden border-2 border-ochreAccent p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-3xl font-sans font-bold mb-3">Jason K Hanani</h3>
                <p className="text-xs font-bold tracking-widest text-goldenSand mb-6">BUSINESS ANALYST &amp; SYSTEMS DESIGNER</p>
                <p className="text-creamBg/70 text-sm">For inquiries, reach out via email or LinkedIn.</p>
              </div>
              <div className="pt-4">
                <p className="text-xs font-bold tracking-widest text-goldenSand mb-6">GET IN TOUCH</p>
                <a href="mailto:" className="text-creamBg text-lg hover:text-goldenSand hover:underline transition-all flex items-center gap-2 group font-semibold mb-8">
                  <span>contact@jasonkhanani.com</span>
                  <ArrowRight className="w-5 h-5 opacity-60" />
                </a>
                <p className="text-xs font-bold tracking-widest text-goldenSand mb-3">CONNECT</p>
                <a href="#" className="text-goldenSand text-sm hover:text-creamBg transition-all flex items-center gap-2">
                  <span>LinkedIn</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="pt-6 border-t border-creamBg/10 text-[10px] text-creamBg/40">
              <p>© 2026 Jason K Hanani • Business Analyst &amp; Systems Designer</p>
            </div>
          </div>
          <div className="mt-8 bg-lightStone border-l-4 border-ochreAccent rounded-lg p-6">
            <p className="text-sm text-warmBrown60"><strong>Design Features:</strong> Chocolate brown background (warm dark tone), cream text (high contrast), golden sand accents (warm secondary color), consistent typography and spacing, professional closure with multiple contact options</p>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-warmStone border-2 border-ochreAccent rounded-xl p-12">
          <h2 className="text-3xl font-sans font-bold text-chocolateBrown mb-8">Design System Summary</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-warmBrown text-lg mb-4">Color Psychology</h3>
              <ul className="text-sm text-warmBrown60 space-y-3">
                <li><strong className="text-warmBrown">Warm Cream:</strong> Inviting, natural, sophisticated background</li>
                <li><strong className="text-warmBrown">Warm Brown:</strong> Trustworthy, professional, readable text</li>
                <li><strong className="text-warmBrown">Ochre Accent:</strong> Warm, energetic, calls to action</li>
                <li><strong className="text-warmBrown">Golden Sand:</strong> Secondary accent, warm credibility</li>
                <li><strong className="text-warmBrown">Chocolate Brown:</strong> Strong emphasis, footer, headers</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-warmBrown text-lg mb-4">Key Advantages</h3>
              <ul className="text-sm text-warmBrown60 space-y-3">
                <li>✓ <strong className="text-warmBrown">High Contrast:</strong> Warm brown on cream = excellent readability</li>
                <li>✓ <strong className="text-warmBrown">Professional:</strong> Sophisticated earthy palette feels refined</li>
                <li>✓ <strong className="text-warmBrown">Warm & Inviting:</strong> Natural tones build trust</li>
                <li>✓ <strong className="text-warmBrown">Cohesive:</strong> All colors work together harmoniously</li>
                <li>✓ <strong className="text-warmBrown">Distinctive:</strong> Warm palette stands out from tech defaults</li>
              </ul>
            </div>
          </div>

          <div className="bg-creamBg border-l-4 border-ochreAccent p-6 rounded">
            <p className="text-sm text-warmBrown"><strong>Overall Feel:</strong> The warm earthy palette creates a sophisticated, professional aesthetic that feels natural and trustworthy. Unlike the previous cooler palette, these warm tones convey expertise and warmth simultaneously—ideal for a business analyst positioning that combines analytical rigor with human-centered problem solving.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignMockup;
