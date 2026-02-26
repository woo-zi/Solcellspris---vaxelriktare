import React, { useState } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Star,
  ChevronDown,
  Home,
  Building2,
  Leaf,
  Clock,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Smartphone,
  Activity,
} from 'lucide-react';

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const C = {
  primary: '#188a00',
  primaryHover: '#146e00',
  primaryFg: '#fafaf5',
  secondary: '#e2fadd',
  bg: '#fafaf5',
  white: '#ffffff',
  fg: '#0a0a0a',
  muted: '#737373',
  border: '#e5e5e5',
  dark: '#0a2810',
  darkText: '#d1fae5',
  r: '12px',
  font: "'Poppins', sans-serif",
};

const btnStyle = (override: React.CSSProperties = {}): React.CSSProperties => ({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
  backgroundColor: C.primary, color: C.primaryFg,
  padding: '0.9rem 2rem', borderRadius: C.r, fontWeight: 700,
  fontSize: '1rem', textDecoration: 'none', border: 'none', cursor: 'pointer',
  fontFamily: C.font, boxShadow: '0 4px 16px rgba(24,138,0,0.28)',
  transition: 'background-color 0.2s, transform 0.15s',
  ...override,
});

const Stars = ({ count = 5, size = 14 }: { count?: number; size?: number }) => (
  <span style={{ display: 'inline-flex', gap: '2px' }}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={size} color="#f59e0b" fill="#f59e0b" />
    ))}
  </span>
);

const FaqItem = ({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) => (
  <div style={{ border: `1px solid ${C.border}`, borderRadius: C.r, overflow: 'hidden' }}>
    <button
      onClick={onToggle}
      style={{
        width: '100%', padding: '1.125rem 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: C.font, backgroundColor: open ? C.secondary : C.white,
      }}
      onMouseEnter={e => { if (!open) (e.currentTarget as HTMLElement).style.backgroundColor = C.bg; }}
      onMouseLeave={e => { if (!open) (e.currentTarget as HTMLElement).style.backgroundColor = C.white; }}
    >
      <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: C.fg, paddingRight: '2rem' }}>{q}</span>
      <ChevronDown
        size={18} color={C.muted}
        style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}
      />
    </button>
    {open && (
      <div style={{ padding: '0 1.5rem 1.25rem', backgroundColor: C.secondary }}>
        <p style={{ color: C.muted, fontSize: '0.9375rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
      </div>
    )}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<'privat' | 'foretag'>('privat');
  const [propertyType, setPropertyType] = useState('');
  const [formStep, setFormStep] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const privOptions = ['Villa', 'Fritidshus', 'Bostadsrätt'];
  const bizOptions = ['Företag', 'BRF / Samfällighet', 'Lantbruk'];
  const options = activeTab === 'privat' ? privOptions : bizOptions;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: C.bg, fontFamily: C.font, color: C.fg }}>

      {/* ══ HEADER ══════════════════════════════════════════════════════════ */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${C.border}`, boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem',
          height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="https://www.solcellspris.se/">
            <img src="/solcellspris-logo-accent.webp" alt="Solcellspris" style={{ height: '20px', width: 'auto' }} />
          </a>
          <nav style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            {[
              { label: 'Hem', href: 'https://www.solcellspris.se/' },
              { label: 'Solceller', href: 'https://www.solcellspris.se/solceller' },
              { label: 'Om oss', href: 'https://www.solcellspris.se/om-oss' },
              { label: 'Blogg', href: 'https://www.solcellspris.se/blogg' },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                padding: '0.5rem 0.875rem', borderRadius: C.r, fontSize: '0.9375rem',
                fontWeight: 600, color: C.muted, textDecoration: 'none', transition: 'all 0.15s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.fg; (e.currentTarget as HTMLElement).style.backgroundColor = C.secondary; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.muted; (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
              >{l.label}</a>
            ))}
          </nav>
          <a href="#offert" style={btnStyle({ padding: '0.5rem 1.25rem', fontSize: '0.875rem', boxShadow: 'none' })}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = C.primaryHover}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = C.primary}
          >Begär offert</a>
        </div>
      </header>

      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <style>{`
          @media (max-width: 700px) {
            .hero-headline { display: none !important; }
            .hero-form-mobile-header { display: block !important; }
          }
          @media (min-width: 701px) {
            .hero-form-mobile-header { display: none !important; }
          }
        `}</style>
        <section style={{
          background: `linear-gradient(135deg, ${C.dark} 0%, #0d3d18 60%, #1a5c0a 100%)`,
          padding: 'clamp(0.75rem, 3vw, 3.5rem) 1.25rem',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'rgba(24,138,0,0.12)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', backgroundColor: 'rgba(24,138,0,0.08)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'flex-start', justifyContent: 'center' }}>

              {/* Left — headline (hidden on mobile) */}
              <div className="hero-headline" style={{ flex: '1 1 320px', color: C.white }}>
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(24,138,0,0.35)', color: '#86efac', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '999px', marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Växelriktare för solceller
                </div>
                <h1 style={{ fontSize: 'clamp(1.625rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                  Jämför växelriktare och<br />
                  <span style={{ color: '#86efac' }}>få rätt pris direkt</span>
                </h1>
                <p style={{ fontSize: '0.9375rem', color: C.darkText, lineHeight: 1.6, marginBottom: '0.875rem', maxWidth: '480px' }}>
                  Upp till 3 gratis offerter från certifierade installatörer. Rätt växelriktare avgör hur mycket el dina solceller faktiskt producerar.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Stars count={5} size={15} />
                  <span style={{ color: C.white, fontWeight: 700, fontSize: '0.9rem' }}>4.8</span>
                  <span style={{ color: C.darkText, fontSize: '0.8125rem' }}>Baserat på omdömen från våra kunder</span>
                </div>
              </div>

              {/* Right — form */}
              <div id="offert" style={{
                flex: '1 1 300px', maxWidth: '420px',
                backgroundColor: C.white, borderRadius: '1.25rem',
                padding: '1.25rem', boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
              }}>
                {formStep === 1 && (
                  <>
                    <div className="hero-form-mobile-header" style={{ marginBottom: '0.875rem' }}>
                      <div style={{ display: 'inline-block', backgroundColor: C.secondary, color: C.primary, fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.625rem', borderRadius: '999px', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        Växelriktare för solceller
                      </div>
                      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.375rem', letterSpacing: '-0.02em', color: C.fg }}>
                        Jämför växelriktare och{' '}
                        <span style={{ color: C.primary }}>få rätt pris direkt</span>
                      </h1>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
                        <Stars count={5} size={13} />
                        <span style={{ fontWeight: 700, fontSize: '0.8125rem', color: C.fg }}>4.8</span>
                        <span style={{ color: C.muted, fontSize: '0.75rem' }}>Baserat på omdömen</span>
                      </div>
                    </div>
                    <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem', color: C.fg }}>Få kostnadsfria offerter</p>
                    <p style={{ fontSize: '0.8125rem', color: C.muted, marginBottom: '0.75rem' }}>Välj fastighetstyp för att komma igång</p>
                    <div style={{ display: 'flex', backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '3px', marginBottom: '0.75rem' }}>
                      {(['privat', 'foretag'] as const).map(tab => (
                        <button key={tab} onClick={() => { setActiveTab(tab); setPropertyType(''); }} style={{
                          flex: 1, padding: '0.625rem', borderRadius: '6px', border: 'none', cursor: 'pointer',
                          fontFamily: C.font, fontWeight: 600, fontSize: '0.875rem',
                          backgroundColor: activeTab === tab ? C.white : 'transparent',
                          color: activeTab === tab ? C.primary : C.muted,
                          boxShadow: activeTab === tab ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem',
                        }}>
                          {tab === 'privat' ? <Home size={14} /> : <Building2 size={14} />}
                          {tab === 'privat' ? 'Privat' : 'Företag / BRF'}
                        </button>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', marginBottom: '0.75rem' }}>
                      {options.map(opt => (
                        <label key={opt} style={{
                          display: 'flex', alignItems: 'center', gap: '0.75rem',
                          padding: '0.5rem 0.875rem', borderRadius: '8px',
                          border: `2px solid ${propertyType === opt ? C.primary : C.border}`,
                          backgroundColor: propertyType === opt ? C.secondary : C.white,
                          cursor: 'pointer', transition: 'all 0.15s',
                        }}>
                          <input type="radio" name="property" value={opt} checked={propertyType === opt} onChange={() => setPropertyType(opt)} style={{ display: 'none' }} />
                          <div style={{
                            width: '18px', height: '18px', borderRadius: '50%',
                            border: `2px solid ${propertyType === opt ? C.primary : C.border}`,
                            backgroundColor: propertyType === opt ? C.primary : 'transparent',
                            flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            {propertyType === opt && <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: C.white }} />}
                          </div>
                          <span style={{ fontWeight: propertyType === opt ? 600 : 400, color: propertyType === opt ? C.primary : C.fg, fontSize: '0.9375rem' }}>{opt}</span>
                        </label>
                      ))}
                    </div>
                    <button onClick={() => propertyType && setFormStep(2)} disabled={!propertyType} style={btnStyle({ width: '100%', opacity: propertyType ? 1 : 0.5, cursor: propertyType ? 'pointer' : 'not-allowed', padding: '0.75rem 1.5rem' })}
                      onMouseEnter={e => propertyType && ((e.currentTarget as HTMLElement).style.backgroundColor = C.primaryHover)}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = C.primary}
                    >
                      Jämför växelriktare gratis <ArrowRight size={16} />
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <ShieldCheck size={14} color={C.muted} />
                      <span style={{ fontSize: '0.75rem', color: C.muted }}>Gratis · Ingen bindning · GDPR-säkert</span>
                    </div>
                  </>
                )}

                {formStep === 2 && (
                  <>
                    <p style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.375rem' }}>Dina kontaktuppgifter</p>
                    <p style={{ fontSize: '0.875rem', color: C.muted, marginBottom: '1.25rem' }}>Vi skickar dina uppgifter till max 3 installatörer</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.25rem' }}>
                      {[
                        { label: 'Förnamn', type: 'text', placeholder: 'Anna' },
                        { label: 'Efternamn', type: 'text', placeholder: 'Svensson' },
                        { label: 'E-postadress', type: 'email', placeholder: 'anna@exempel.se' },
                        { label: 'Telefonnummer', type: 'tel', placeholder: '070 000 00 00' },
                        { label: 'Postnummer', type: 'text', placeholder: '123 45' },
                      ].map(f => (
                        <div key={f.label}>
                          <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.3rem', color: C.fg }}>{f.label}</label>
                          <input type={f.type} placeholder={f.placeholder} style={{
                            width: '100%', padding: '0.625rem 0.875rem', borderRadius: '8px',
                            border: `1.5px solid ${C.border}`, fontSize: '0.9375rem',
                            fontFamily: C.font, outline: 'none', boxSizing: 'border-box', color: C.fg,
                          }}
                            onFocus={e => (e.currentTarget.style.borderColor = C.primary)}
                            onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                          />
                        </div>
                      ))}
                    </div>
                    <button onClick={() => setFormStep(3)} style={btnStyle({ width: '100%' })}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = C.primaryHover}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = C.primary}
                    >
                      Skicka förfrågan <ArrowRight size={16} />
                    </button>
                    <button onClick={() => setFormStep(1)} style={{ marginTop: '0.625rem', background: 'none', border: 'none', color: C.muted, cursor: 'pointer', fontSize: '0.8125rem', fontFamily: C.font, display: 'block', width: '100%', textAlign: 'center' }}>← Tillbaka</button>
                  </>
                )}

                {formStep === 3 && (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <div style={{ width: '64px', height: '64px', backgroundColor: C.secondary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                      <CheckCircle2 size={32} color={C.primary} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Tack!</h3>
                    <p style={{ color: C.muted, lineHeight: 1.6, fontSize: '0.9375rem' }}>Du kontaktas av upp till 3 certifierade installatörer inom kort. Tjänsten är helt gratis.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. PROBLEM AWARE ════════════════════════════════════════════ */}
        <section style={{ backgroundColor: C.white, padding: 'clamp(3rem, 5vw, 4.5rem) 1.25rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Känner du igen dig?</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Fel växelriktare kostar dig<br />tusentals kronor i förlorad el
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: Activity, title: 'Lägre produktion än utlovat', desc: 'En underdimensionerad eller felkonfigurerad växelriktare kan kapa upp till 20% av din solcellsproduktion. Det märks inte förrän du granskar statistiken.' },
                { icon: AlertTriangle, title: 'Svårt att jämföra modeller', desc: 'Strängväxelriktare, hybridväxelriktare, mikroinverter — skillnaderna är stora men marknadsföringen är snarlik. Hur vet du vad du faktiskt behöver?' },
                { icon: Clock, title: 'Priserna varierar kraftigt', desc: 'Samma effekt kan kosta dubbelt så mycket beroende på installatör. Utan att jämföra offerter riskerar du att betala för mycket.' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.75rem', borderRadius: '1rem', backgroundColor: '#fff8f8', border: '1px solid #fde8e8' }}>
                  <div style={{ width: '44px', height: '44px', backgroundColor: '#fee2e2', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <item.icon size={20} color="#dc2626" />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: C.muted, fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. SOLUTION AWARE ════════════════════════════════════════════ */}
        <section style={{ backgroundColor: C.bg, padding: 'clamp(3rem, 5vw, 4.5rem) 1.25rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 380px' }}>
                <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Lösningen</p>
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Rätt växelriktare maximerar din solcellsproduktion
                </h2>
                <p style={{ color: C.muted, lineHeight: 1.7, marginBottom: '1.75rem', fontSize: '1.0625rem' }}>
                  Växelriktaren omvandlar solcellernas likström till växelström som kan användas i hemmet. Rätt modell och rätt dimensionering är avgörande för hur mycket el du faktiskt producerar och kan lagra.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {[
                    { label: 'Maximalt utbyte av solcellerna', sub: 'Rätt effektanpassning ger full produktion' },
                    { label: 'Möjlighet att lagra överskottsel', sub: 'Hybridväxelriktare kopplas direkt till batteri' },
                    { label: 'Realtidsövervakning via app', sub: 'Se din produktion och förbrukning live' },
                    { label: 'Lång livslängd', sub: 'Kvalitetsväxelriktare håller 15–25 år' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                      <CheckCircle2 size={20} color={C.primary} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{item.label}</span>
                        <span style={{ color: C.muted, fontSize: '0.875rem' }}> — {item.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ flex: '1 1 320px' }}>
                <div style={{ backgroundColor: C.white, borderRadius: '1.25rem', padding: '2rem', border: `1px solid ${C.border}`, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '1.25rem', color: C.fg }}>Tre typer av växelriktare</p>
                  {[
                    { name: 'Strängväxelriktare', note: 'Vanligast, kostnadseffektiv', tag: 'Populär' },
                    { name: 'Hybridväxelriktare', note: 'Inkl. batteristyrning', tag: 'Rekommenderas' },
                    { name: 'Mikroinverter', note: 'En per panel, max utbyte', tag: 'Premium' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '0.875rem 0',
                      borderBottom: i < 2 ? `1px solid ${C.border}` : 'none',
                    }}>
                      <div>
                        <p style={{ fontWeight: 600, fontSize: '0.9375rem', margin: 0 }}>{item.name}</p>
                        <p style={{ color: C.muted, fontSize: '0.8125rem', margin: 0 }}>{item.note}</p>
                      </div>
                      <span style={{ backgroundColor: C.secondary, color: C.primary, fontSize: '0.8125rem', fontWeight: 700, padding: '0.25rem 0.625rem', borderRadius: '999px' }}>{item.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. OFFER AWARE ════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: C.secondary, padding: 'clamp(3rem, 5vw, 4.5rem) 1.25rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Varför Solcellspris.se?</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Vi gör det enkelt att hitta rätt
            </h2>
            <p style={{ color: C.muted, fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 3rem' }}>
              Istället för att ringa runt och jämföra priser på egen hand — låt installatörerna komma till dig.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { icon: Zap, title: 'Snabbt', desc: 'Fyll i formuläret på 2 minuter. Installatörerna hör av sig inom 24 timmar.' },
                { icon: BadgeCheck, title: 'Certifierade', desc: 'Alla installatörer i vårt nätverk är behöriga elektriker med rätt certifieringar.' },
                { icon: ShieldCheck, title: 'Tryggt', desc: 'Tjänsten är gratis. Ingen bindningstid. Du väljer själv om du vill gå vidare.' },
                { icon: Smartphone, title: 'Enkelt', desc: 'Jämför offerter och välj den som passar dig bäst — allt på ett ställe.' },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: C.white, borderRadius: '1rem', padding: '1.75rem', border: `1px solid ${C.border}`, textAlign: 'left' }}>
                  <div style={{ width: '44px', height: '44px', backgroundColor: C.secondary, borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <item.icon size={20} color={C.primary} />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: C.muted, fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: C.white, borderRadius: '1rem', border: `1px solid ${C.border}`, overflow: 'hidden' }}>
              {[
                { step: '1', title: 'Fyll i formuläret', desc: 'Välj fastighetstyp och lämna dina kontaktuppgifter. Det tar 2 minuter.' },
                { step: '2', title: 'Få offerter', desc: 'Upp till 3 certifierade installatörer kontaktar dig med sina bästa priser.' },
                { step: '3', title: 'Välj & spara', desc: 'Jämför och välj den installatör som passar dig. Ingen bindning.' },
              ].map((item, i) => (
                <div key={i} style={{ flex: '1 1 220px', padding: '2rem', borderRight: i < 2 ? `1px solid ${C.border}` : 'none', textAlign: 'center' }}>
                  <div style={{ width: '44px', height: '44px', backgroundColor: C.secondary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontWeight: 800, fontSize: '1.125rem', color: C.primary }}>{item.step}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: C.muted, fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. SOCIAL PROOF ══════════════════════════════════════════════ */}
        <section style={{ backgroundColor: C.white, padding: 'clamp(3rem, 5vw, 4.5rem) 1.25rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Stars count={5} size={20} />
                <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>4.8</span>
              </div>
              <p style={{ color: C.muted, fontSize: '0.9375rem' }}>Baserat på omdömen från kunder som fått växelriktare via Solcellspris.se</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {[
                { name: 'Peter Lindqvist', city: 'Stockholm', text: 'Fick tre offerter och valde en hybridväxelriktare. Installatören förklarade skillnaderna tydligt. Produktionen är 15% högre än med den gamla enheten.' },
                { name: 'Maria Holm', city: 'Göteborg', text: 'Visste inte vilken typ av växelriktare jag behövde. Installatören rekommenderade rätt modell och installationen gick snabbt. Mycket nöjd.' },
                { name: 'Anders Björk', city: 'Malmö', text: 'Sparade 6 000 kr genom att jämföra tre offerter. Samma märke, samma effekt — men priset skilde sig kraftigt mellan installatörerna.' },
                { name: 'Karin Eriksson', city: 'Uppsala', text: 'Kombinerade ny växelriktare med batteri. Installatören hjälpte mig med hela systemet. Nu lagrar vi överskottet och säljer resten till nätet.' },
                { name: 'Thomas Svensson', city: 'Linköping', text: 'Snabb och professionell service. Appen som följde med växelriktaren är utmärkt — jag kan följa produktionen i realtid.' },
                { name: 'Eva Karlsson', city: 'Örebro', text: 'Min gamla växelriktare gick sönder. Genom Solcellspris fick jag en ny installerad inom en vecka till ett bra pris. Rekommenderar starkt.' },
              ].map((review, i) => (
                <div key={i} style={{ backgroundColor: C.bg, borderRadius: '1rem', padding: '1.5rem', border: `1px solid ${C.border}` }}>
                  <Stars count={5} size={14} />
                  <p style={{ color: C.fg, fontSize: '0.9rem', lineHeight: 1.7, margin: '0.75rem 0 1rem', fontStyle: 'italic' }}>"{review.text}"</p>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.875rem', margin: 0 }}>{review.name}</p>
                    <p style={{ color: C.muted, fontSize: '0.8125rem', margin: 0 }}>{review.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 6. PRICE ANCHOR ══════════════════════════════════════════════ */}
        <section style={{ backgroundColor: C.dark, padding: 'clamp(3rem, 5vw, 4.5rem) 1.25rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 340px', color: C.white }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(24,138,0,0.35)', color: '#86efac', fontSize: '0.8125rem', fontWeight: 700, padding: '0.35rem 0.875rem', borderRadius: '999px', marginBottom: '1.25rem' }}>
                  <Leaf size={14} />
                  Skattereduktion
                </div>
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Sänk kostnaden med skattereduktion
                </h2>
                <p style={{ color: C.darkText, lineHeight: 1.7, fontSize: '1.0625rem' }}>
                  Installation av solceller och tillhörande växelriktare berättigar till{' '}
                  <strong style={{ color: C.white }}>skattereduktion på 15% av materialkostnaden</strong>.
                  Väljer du en hybridväxelriktare med batteri gäller dessutom{' '}
                  <strong style={{ color: C.white }}>grönt avdrag på 50%</strong> för batteridelen.
                </p>
              </div>
              <div style={{ flex: '1 1 280px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '1rem', padding: '1.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ color: C.darkText, fontSize: '0.875rem', marginBottom: '1.25rem', fontWeight: 600 }}>Räkneexempel — Villa</p>
                  {[
                    { label: 'Hybridväxelriktare + installation', value: '25 000 kr', green: false, bold: false },
                    { label: 'Skattereduktion (15%)', value: '− 3 750 kr', green: true, bold: false },
                    { label: 'Din kostnad', value: '21 250 kr', green: false, bold: true },
                  ].map((row, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '0.75rem 0',
                      borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    }}>
                      <span style={{ color: C.darkText, fontSize: '0.9rem' }}>{row.label}</span>
                      <span style={{ fontWeight: row.bold ? 800 : 600, fontSize: row.bold ? '1.125rem' : '0.9rem', color: row.green ? '#86efac' : C.white }}>{row.value}</span>
                    </div>
                  ))}
                  <p style={{ color: C.darkText, fontSize: '0.8125rem', marginTop: '1rem', lineHeight: 1.5 }}>Installatören hanterar avdraget åt dig. Du ser rabatten direkt på fakturan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 7. MOST AWARE — Final CTA ════════════════════════════════════ */}
        <section style={{ backgroundColor: C.primary, padding: 'clamp(3rem, 5vw, 4.5rem) 1.25rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: C.white, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Redo att maximera din solcellsproduktion?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Det tar 2 minuter att fylla i formuläret. Tjänsten är gratis och du förbinder dig inte till något.
            </p>
            <a href="#offert" style={btnStyle({ backgroundColor: C.white, color: C.primary, boxShadow: '0 4px 16px rgba(0,0,0,0.15)' })}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = C.secondary}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = C.white}
            >
              Jämför växelriktare gratis <ArrowRight size={16} />
            </a>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              {['Gratis tjänst', 'Ingen bindningstid', 'Certifierade installatörer', 'GDPR-säkert'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={14} color="rgba(255,255,255,0.7)" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 8. FAQ ════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: C.white, padding: 'clamp(3rem, 5vw, 4.5rem) 1.25rem' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
              Vanliga frågor om växelriktare
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { q: 'Vad kostar en växelriktare inklusive installation?', a: 'En strängväxelriktare med installation kostar vanligtvis 15 000–30 000 kr beroende på effekt och märke. En hybridväxelriktare kostar 25 000–50 000 kr. Med skattereduktion sänks kostnaden ytterligare.' },
                { q: 'Vad är skillnaden mellan strängväxelriktare och hybridväxelriktare?', a: 'En strängväxelriktare omvandlar solcellernas likström till växelström. En hybridväxelriktare gör samma sak men kan dessutom styra ett batteri — vilket gör att du kan lagra överskottselen och använda den på kvällen.' },
                { q: 'Hur länge håller en växelriktare?', a: 'En kvalitetsväxelriktare håller 15–25 år. De flesta tillverkare erbjuder 10–12 års garanti. Märken som SolarEdge, Fronius, SMA och Huawei är vanliga i Sverige och kända för lång livslängd.' },
                { q: 'Kan jag byta växelriktare utan att byta solcellerna?', a: 'Ja, i de flesta fall. Installatören kontrollerar att den nya växelriktaren är kompatibel med dina befintliga paneler och anläggningens effekt. Det är ett vanligt uppgraderingsscenario.' },
                { q: 'Vad är skattereduktion för solceller?', a: 'Installation av solceller berättigar till skattereduktion på 15% av materialkostnaden. Väljer du en hybridväxelriktare med batteri gäller dessutom grönt avdrag på 50% för batteridelen, upp till 50 000 kr per person och år.' },
                { q: 'Kostar det något att använda Solcellspris.se?', a: 'Nej, tjänsten är helt gratis för dig som konsument. Du förbinder dig inte till något och kan tacka nej till alla offerter utan kostnad.' },
              ].map((faq, i) => (
                <div key={i}><FaqItem q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} /></div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ══ FOOTER ══════════════════════════════════════════════════════════ */}
      <footer style={{ backgroundColor: C.white, borderTop: `1px solid ${C.border}`, padding: '3rem 1.25rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div style={{ flex: '1 1 200px' }}>
              <a href="https://www.solcellspris.se/">
                <img src="/solcellspris-logo-accent.webp" alt="Solcellspris" style={{ height: '18px', width: 'auto', marginBottom: '0.75rem', display: 'block' }} />
              </a>
              <p style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.6 }}>Hitta och jämför lokala leverantörer av solceller, laddboxar och batterier.</p>
            </div>
            <div style={{ flex: '1 1 140px' }}>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.75rem' }}>Snabblänkar</p>
              {[
                { label: 'Hem', href: 'https://www.solcellspris.se/' },
                { label: 'Solceller', href: 'https://www.solcellspris.se/solceller' },
                { label: 'Blogg', href: 'https://www.solcellspris.se/blogg' },
                { label: 'Elpris', href: 'https://www.solcellspris.se/elpris' },
                { label: 'Om oss', href: 'https://www.solcellspris.se/om-oss' },
              ].map(l => (
                <a key={l.label} href={l.href} style={{ display: 'block', fontSize: '0.875rem', color: C.muted, textDecoration: 'none', marginBottom: '0.375rem' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = C.primary}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = C.muted}
                >{l.label}</a>
              ))}
            </div>
            <div style={{ flex: '1 1 140px' }}>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.75rem' }}>Kontakt</p>
              {[
                { label: 'Kontaktformulär', href: 'https://www.solcellspris.se/kontakt' },
                { label: 'info@solcellspris.se', href: 'mailto:info@solcellspris.se' },
                { label: 'Personuppgiftspolicy', href: 'https://www.solcellspris.se/personuppgiftspolicy' },
              ].map(l => (
                <a key={l.label} href={l.href} style={{ display: 'block', fontSize: '0.875rem', color: C.muted, textDecoration: 'none', marginBottom: '0.375rem' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = C.primary}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = C.muted}
                >{l.label}</a>
              ))}
            </div>
            <div style={{ flex: '1 1 220px' }}>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Nyhetsbrev</p>
              <p style={{ fontSize: '0.8125rem', color: C.muted, marginBottom: '0.75rem', lineHeight: 1.5 }}>Få senaste nyheterna om solenergi direkt till din e-post.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input type="email" placeholder="Din e-postadress" style={{ flex: 1, padding: '0.5rem 0.75rem', borderRadius: '8px', border: `1px solid ${C.border}`, fontSize: '0.875rem', fontFamily: C.font, outline: 'none' }}
                  onFocus={e => (e.currentTarget.style.borderColor = C.primary)}
                  onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                />
                <button style={{ backgroundColor: C.primary, color: C.primaryFg, border: 'none', borderRadius: '8px', padding: '0.5rem 0.875rem', fontWeight: 600, fontSize: '0.875rem', fontFamily: C.font, cursor: 'pointer' }}>OK</button>
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8125rem', color: C.muted }}>© {new Date().getFullYear()} Solcellspris.se</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
