import React, { useState } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingDown,
  Sun,
  Home,
  Smartphone,
  ChevronDown,
  Car,
  Building2,
  BatteryCharging,
  Leaf,
  Mail,
} from 'lucide-react';

// ─── Brand tokens (exact values from solcellspris.se) ───────────────────────
const brand = {
  primary: '#188a00',          // CTA buttons, active states, accents
  primaryHover: '#146e00',     // Darker green on hover
  primaryFg: '#fafaf5',        // Text on primary buttons
  secondary: '#e2fadd',        // Light green benefit boxes / checklist bg
  bg: '#fafaf5',               // Page background (warm off-white)
  white: '#ffffff',            // Card / header / footer background
  foreground: '#0a0a0a',       // Primary text
  muted: '#737373',            // Secondary / muted text
  border: '#e5e5e5',           // Borders
  radius: '12px',              // Button / card border radius
  font: "'Poppins', sans-serif",
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'hem' | 'foretag'>('hem');

  // Lead gen form state
  const [installType, setInstallType] = useState('laddbox');
  const [propertyType, setPropertyType] = useState('');
  const [formStep, setFormStep] = useState(1);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: brand.bg, fontFamily: brand.font, color: brand.foreground }}>

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header style={{
        position: 'sticky', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${brand.border}`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '0 1rem',
          height: '64px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="https://www.solcellspris.se/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img
              src="/solcellspris-logo-accent.webp"
              alt="Solcellspris Logo"
              style={{ height: '20px', width: 'auto' }}
            />
          </a>

          {/* Nav */}
          <nav style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            {[
              { label: 'Hem', href: 'https://www.solcellspris.se/' },
              { label: 'Solceller', href: 'https://www.solcellspris.se/solceller' },
              { label: 'Om oss', href: 'https://www.solcellspris.se/om-oss' },
              { label: 'Blogg', href: 'https://www.solcellspris.se/blogg' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: brand.radius,
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: brand.muted,
                  textDecoration: 'none',
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = brand.foreground;
                  (e.currentTarget as HTMLElement).style.backgroundColor = brand.secondary;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = brand.muted;
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#offert"
            style={{
              backgroundColor: brand.primary,
              color: brand.primaryFg,
              padding: '0.5rem 1.25rem',
              borderRadius: brand.radius,
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = brand.primaryHover}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = brand.primary}
          >
            Begär offert
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: brand.white, padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              marginBottom: '3rem',
              color: brand.foreground,
            }}>
              Information om laddboxar
            </h1>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              backgroundColor: brand.white,
              borderRadius: '1rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              border: `1px solid ${brand.border}`,
              overflow: 'hidden',
            }}>

              {/* Left: tabs + content */}
              <div style={{ flex: '1 1 340px', padding: '2.5rem' }}>
                {/* Tab switcher */}
                <div style={{
                  display: 'flex',
                  backgroundColor: '#f5f5f5',
                  borderRadius: brand.radius,
                  padding: '4px',
                  marginBottom: '2rem',
                }}>
                  {(['hem', 'foretag'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        flex: 1,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        fontFamily: brand.font,
                        transition: 'all 0.2s',
                        backgroundColor: activeTab === tab ? brand.white : 'transparent',
                        color: activeTab === tab ? brand.primary : brand.muted,
                        boxShadow: activeTab === tab ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
                      }}
                    >
                      {tab === 'hem' ? <Home size={16} /> : <Building2 size={16} />}
                      {tab === 'hem' ? 'Hem' : 'Företag'}
                    </button>
                  ))}
                </div>

                {activeTab === 'hem' ? (
                  <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: brand.primary, marginBottom: '0.75rem' }}>
                      För hushåll
                    </h2>
                    <p style={{ color: brand.muted, marginBottom: '1.5rem', lineHeight: 1.6 }}>
                      Spara tid, få bättre överblick och hitta den laddbox som passar just din elbil och din elförbrukning.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {[
                        'Få 3 kostnadsfria offerter',
                        'Endast certifierade installatörer',
                        'Enkel och trygg process',
                        'Spara tid och pengar med rätt laddbox',
                        'Helt gratis tjänst – inga dolda avgifter',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: brand.foreground }}>
                          <CheckCircle2 size={18} color={brand.primary} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.9375rem' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#offert"
                      style={{
                        display: 'inline-block',
                        backgroundColor: brand.primary,
                        color: brand.primaryFg,
                        padding: '0.875rem 2rem',
                        borderRadius: brand.radius,
                        fontWeight: 600,
                        fontSize: '1rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(24,138,0,0.25)',
                        transition: 'background 0.15s, transform 0.15s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = brand.primaryHover;
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = brand.primary;
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      Få kostnadsfri offert
                    </a>
                  </div>
                ) : (
                  <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: brand.primary, marginBottom: '0.75rem' }}>
                      För företag &amp; BRF
                    </h2>
                    <p style={{ color: brand.muted, marginBottom: '1.5rem', lineHeight: 1.6 }}>
                      Skaffa en framtidssäker laddlösning för företagets bilar eller föreningens medlemmar. Vi hjälper er att hitta och jämföra de bästa alternativen.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {[
                        'Skalbara lösningar för alla behov',
                        'Offerter från erfarna installatörer',
                        'Enkel hantering av betalning och administration',
                        'Öka fastighetens attraktivitet',
                        'Helt gratis jämförelsetjänst',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: brand.foreground }}>
                          <CheckCircle2 size={18} color={brand.primary} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.9375rem' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#offert"
                      style={{
                        display: 'inline-block',
                        backgroundColor: brand.primary,
                        color: brand.primaryFg,
                        padding: '0.875rem 2rem',
                        borderRadius: brand.radius,
                        fontWeight: 600,
                        fontSize: '1rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(24,138,0,0.25)',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = brand.primaryHover}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = brand.primary}
                    >
                      Få kostnadsfri offert
                    </a>
                  </div>
                )}
              </div>

              {/* Right: illustration */}
              <div style={{
                flex: '1 1 280px',
                background: `linear-gradient(135deg, ${brand.secondary} 0%, #f0fef0 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '2.5rem',
                minHeight: '280px',
              }}>
                <div style={{
                  width: '200px', height: '200px',
                  backgroundColor: brand.white,
                  borderRadius: '50%',
                  boxShadow: '0 8px 32px rgba(24,138,0,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  {activeTab === 'hem' ? (
                    <>
                      <Car size={80} color={brand.primary} strokeWidth={1.5} />
                      <div style={{
                        position: 'absolute', top: '-8px', right: '-8px',
                        backgroundColor: brand.white,
                        borderRadius: '50%', padding: '10px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                        border: `1px solid ${brand.border}`,
                      }}>
                        <BatteryCharging size={24} color={brand.primary} />
                      </div>
                    </>
                  ) : (
                    <>
                      <Building2 size={80} color={brand.primary} strokeWidth={1.5} />
                      <div style={{
                        position: 'absolute', top: '-8px', right: '-8px',
                        backgroundColor: brand.white,
                        borderRadius: '50%', padding: '10px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                        border: `1px solid ${brand.border}`,
                      }}>
                        <Zap size={24} color={brand.primary} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LEAD GEN FORM ──────────────────────────────────────────────── */}
        <section id="offert" style={{ backgroundColor: brand.secondary, padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Kostnadsfri offert för laddbox
            </h2>
            <p style={{ textAlign: 'center', color: brand.muted, marginBottom: '2rem' }}>
              Svara på några enkla frågor och få upp till 3 offerter från certifierade installatörer.
            </p>

            <div style={{
              backgroundColor: brand.white,
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              border: `1px solid ${brand.border}`,
            }}>
              {/* Step 1 */}
              {formStep === 1 && (
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '1rem' }}>Typ av fastighet?</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                    {['Villa/fritidshus', 'Lantbruk/BRF', 'Företag'].map(opt => (
                      <label key={opt} style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.625rem 1rem',
                        borderRadius: brand.radius,
                        border: `2px solid ${propertyType === opt ? brand.primary : brand.border}`,
                        backgroundColor: propertyType === opt ? brand.secondary : brand.white,
                        cursor: 'pointer',
                        fontWeight: propertyType === opt ? 600 : 400,
                        color: propertyType === opt ? brand.primary : brand.foreground,
                        transition: 'all 0.15s',
                        fontSize: '0.9375rem',
                      }}>
                        <input
                          type="radio"
                          name="property"
                          value={opt}
                          checked={propertyType === opt}
                          onChange={() => setPropertyType(opt)}
                          style={{ display: 'none' }}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                  <button
                    onClick={() => propertyType && setFormStep(2)}
                    disabled={!propertyType}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      backgroundColor: propertyType ? brand.primary : brand.border,
                      color: propertyType ? brand.primaryFg : brand.muted,
                      border: 'none',
                      borderRadius: brand.radius,
                      fontWeight: 600,
                      fontSize: '1rem',
                      fontFamily: brand.font,
                      cursor: propertyType ? 'pointer' : 'not-allowed',
                      transition: 'background 0.15s',
                    }}
                  >
                    Fortsätt
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {formStep === 2 && (
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '1rem' }}>Dina kontaktuppgifter</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                    {[
                      { label: 'Förnamn', type: 'text', placeholder: 'Anna' },
                      { label: 'Efternamn', type: 'text', placeholder: 'Svensson' },
                      { label: 'E-postadress', type: 'email', placeholder: 'anna@exempel.se' },
                      { label: 'Telefonnummer', type: 'tel', placeholder: '070 000 00 00' },
                      { label: 'Postnummer', type: 'text', placeholder: '123 45' },
                    ].map(field => (
                      <div key={field.label}>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          style={{
                            width: '100%',
                            padding: '0.625rem 0.875rem',
                            borderRadius: '8px',
                            border: `1px solid ${brand.border}`,
                            fontSize: '0.9375rem',
                            fontFamily: brand.font,
                            outline: 'none',
                            boxSizing: 'border-box',
                            transition: 'border-color 0.15s',
                          }}
                          onFocus={e => (e.currentTarget.style.borderColor = brand.primary)}
                          onBlur={e => (e.currentTarget.style.borderColor = brand.border)}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      backgroundColor: brand.primary,
                      color: brand.primaryFg,
                      border: 'none',
                      borderRadius: brand.radius,
                      fontWeight: 600,
                      fontSize: '1rem',
                      fontFamily: brand.font,
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(24,138,0,0.25)',
                    }}
                    onClick={() => setFormStep(3)}
                  >
                    Skicka förfrågan
                  </button>
                  <button
                    onClick={() => setFormStep(1)}
                    style={{ marginTop: '0.75rem', background: 'none', border: 'none', color: brand.muted, cursor: 'pointer', fontSize: '0.875rem', fontFamily: brand.font }}
                  >
                    ← Tillbaka
                  </button>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {formStep === 3 && (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{
                    width: '64px', height: '64px',
                    backgroundColor: brand.secondary,
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}>
                    <CheckCircle2 size={32} color={brand.primary} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Tack för din förfrågan!</h3>
                  <p style={{ color: brand.muted, lineHeight: 1.6 }}>
                    Du kommer att bli kontaktad av upp till 3 certifierade installatörer inom kort. Tjänsten är helt kostnadsfri.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
        <section style={{ backgroundColor: brand.white, padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '3rem' }}>Starta din jämförelse</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
              {[
                { step: '1', title: 'Fyll i formuläret', desc: 'Svara på några enkla frågor om din fastighet' },
                { step: '2', title: 'Få kostnadsfria offerter', desc: 'Från lokala installatörer som matchar dina behov' },
                { step: '3', title: 'Välj installatör', desc: 'Jämför och välj det bästa alternativet för dig' },
              ].map(item => (
                <div key={item.step} style={{ flex: '1 1 220px', textAlign: 'center' }}>
                  <div style={{
                    width: '48px', height: '48px',
                    backgroundColor: brand.secondary,
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontWeight: 700, fontSize: '1.125rem', color: brand.primary,
                  }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: brand.muted, fontSize: '0.9375rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TAX REDUCTION ──────────────────────────────────────────────── */}
        <section style={{
          padding: '4rem 1rem',
          backgroundImage: 'url(https://www.solcellspris.se/images/ai-solarinstall/fastimgs/lightrealwoodsandroad.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(10,40,10,0.72)',
          }} />
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: brand.white }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '56px', height: '56px',
              backgroundColor: 'rgba(24,138,0,0.4)',
              borderRadius: '50%',
              marginBottom: '1.5rem',
            }}>
              <Leaf size={28} color="#86efac" />
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Grönt avdrag för laddbox</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#d1fae5' }}>
              När du installerar en laddbox hemma har du rätt till det gröna avdraget. Det ger dig en skattereduktion på{' '}
              <strong style={{ color: brand.white }}>50% av den totala kostnaden</strong> för både hårdvara och installation,
              upp till maximalt <strong style={{ color: brand.white }}>50 000 kr per person och år</strong>.
              Avdraget görs direkt på fakturan av din installatör – enkelt och smidigt.
            </p>
          </div>
        </section>

        {/* ── BENEFITS ───────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: brand.bg, padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Fördelar med att installera en laddbox hemma
              </h2>
              <p style={{ color: brand.muted, lineHeight: 1.6 }}>
                En dedikerad laddbox är den säkraste och smartaste investeringen för din elbil.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}>
              {[
                { icon: ShieldCheck, title: 'Säker laddning', desc: 'Ladda din elbil tryggt och säkert. En laddbox är designad för att hantera hög effekt under lång tid, till skillnad från ett vanligt eluttag.' },
                { icon: Zap, title: 'Snabbare laddning', desc: 'Ladda din bil upp till 10 gånger snabbare än via ett vanligt vägguttag. Få fullt batteri över natten.' },
                { icon: TrendingDown, title: 'Lägre elkostnad', desc: 'Styr laddningen till timmar på dygnet då elpriset är som lägst och sänk dina laddkostnader.' },
                { icon: Sun, title: 'Kombinera med solceller', desc: 'Maximera din besparing genom att ladda bilen med din egenproducerade, kostnadsfria solel.' },
                { icon: Home, title: 'Öka värdet på din bostad', desc: 'En installerad laddbox gör din bostad mer attraktiv för framtida köpare.' },
                { icon: Smartphone, title: 'Full kontroll', desc: 'Få full översikt över din förbrukning och dina kostnader direkt i mobilen med en uppkopplad, smart laddbox.' },
              ].map((b, i) => (
                <div key={i} style={{
                  backgroundColor: brand.white,
                  borderRadius: '1rem',
                  padding: '2rem',
                  border: `1px solid ${brand.border}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'box-shadow 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'}
                >
                  <div style={{
                    width: '48px', height: '48px',
                    backgroundColor: brand.secondary,
                    borderRadius: '0.75rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}>
                    <b.icon size={22} color={brand.primary} />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.625rem' }}>{b.title}</h3>
                  <p style={{ color: brand.muted, fontSize: '0.9375rem', lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: brand.white, padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.875rem', fontWeight: 700, marginBottom: '2.5rem' }}>
              Svar på vanliga frågor om laddboxar
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { q: 'Vad kostar en laddbox?', a: 'Priset för en laddbox inklusive installation ligger vanligtvis mellan 10 000 och 25 000 kr. Med det gröna avdraget på 50% blir din slutgiltiga kostnad betydligt lägre.' },
                { q: 'Vilken laddbox ska jag välja?', a: 'Det beror på din bil, ditt hem och dina behov. De vanligaste modellerna som Zaptec Go och Easee One passar de flesta. Våra installatörer hjälper dig att hitta rätt alternativ.' },
                { q: 'Hur snabbt kan jag ladda?', a: 'Den vanligaste effekten för hemmaladdning är 11 kW, vilket ger cirka 5–6 mil per timmes laddning. Det räcker gott och väl för att ladda fullt över natten.' },
                { q: 'Kan jag installera en laddbox själv?', a: 'Nej, installation av en laddbox måste alltid utföras av en certifierad elektriker för att garantier och försäkringar ska gälla.' },
                { q: 'Fungerar det med solceller?', a: 'Absolut. Att kombinera en laddbox med solceller är ett utmärkt sätt att ladda bilen med egen, förnybar el och minska dina kostnader maximalt.' },
                { q: 'Hur fungerar offertförfrågan?', a: 'Du fyller i formuläret på några minuter. Därefter blir du kontaktad av upp till tre lokala installatörer som ger dig sina bästa offerter. Tjänsten är helt kostnadsfri och du förbinder dig inte till något.' },
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} brand={brand} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: brand.bg, padding: '4rem 1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Är du redo för nästa steg?</h2>
          <a
            href="#offert"
            style={{
              display: 'inline-block',
              backgroundColor: brand.primary,
              color: brand.primaryFg,
              padding: '1rem 2.5rem',
              borderRadius: brand.radius,
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(24,138,0,0.3)',
              transition: 'background 0.15s, transform 0.15s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = brand.primaryHover;
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = brand.primary;
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            Få kostnadsfri offert
          </a>
        </section>

      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: brand.white, borderTop: `1px solid ${brand.border}`, padding: '3rem 1rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'space-between', marginBottom: '2.5rem' }}>

            {/* Brand column */}
            <div style={{ flex: '1 1 200px' }}>
              <a href="https://www.solcellspris.se/">
                <img
                  src="/solcellspris-logo-accent.webp"
                  alt="Solcellspris Logo"
                  style={{ height: '18px', width: 'auto', marginBottom: '0.75rem' }}
                />
              </a>
              <p style={{ fontSize: '0.875rem', color: brand.muted, lineHeight: 1.6 }}>
                Solcellspris.se – Hitta och jämför lokala leverantörer av solceller.
              </p>
            </div>

            {/* Snabblänkar */}
            <div style={{ flex: '1 1 140px' }}>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.75rem' }}>Snabblänkar</p>
              {[
                { label: 'Hem', href: 'https://www.solcellspris.se/' },
                { label: 'Solceller', href: 'https://www.solcellspris.se/solceller' },
                { label: 'Blogg', href: 'https://www.solcellspris.se/blogg' },
                { label: 'Elpris', href: 'https://www.solcellspris.se/elpris' },
                { label: 'Om oss', href: 'https://www.solcellspris.se/om-oss' },
                { label: 'Städer', href: 'https://www.solcellspris.se/stader' },
              ].map(link => (
                <a key={link.label} href={link.href} style={{ display: 'block', fontSize: '0.875rem', color: brand.muted, textDecoration: 'none', marginBottom: '0.375rem' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = brand.primary}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = brand.muted}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Kontakt */}
            <div style={{ flex: '1 1 140px' }}>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.75rem' }}>Kontakt</p>
              {[
                { label: 'Kontaktformulär', href: 'https://www.solcellspris.se/kontakt' },
                { label: 'info@solcellspris.se', href: 'mailto:info@solcellspris.se' },
                { label: 'Personuppgiftspolicy', href: 'https://www.solcellspris.se/personuppgiftspolicy' },
              ].map(link => (
                <a key={link.label} href={link.href} style={{ display: 'block', fontSize: '0.875rem', color: brand.muted, textDecoration: 'none', marginBottom: '0.375rem' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = brand.primary}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = brand.muted}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div style={{ flex: '1 1 220px' }}>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Nyhetsbrev</p>
              <p style={{ fontSize: '0.8125rem', color: brand.muted, marginBottom: '0.75rem', lineHeight: 1.5 }}>
                Få senaste nyheterna om solenergi direkt till din e-post!
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="Din e-postadress"
                  style={{
                    flex: 1,
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    border: `1px solid ${brand.border}`,
                    fontSize: '0.875rem',
                    fontFamily: brand.font,
                    outline: 'none',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = brand.primary)}
                  onBlur={e => (e.currentTarget.style.borderColor = brand.border)}
                />
                <button style={{
                  backgroundColor: brand.primary,
                  color: brand.primaryFg,
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem 0.875rem',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  fontFamily: brand.font,
                  cursor: 'pointer',
                }}>
                  Prenumerera
                </button>
              </div>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${brand.border}`, paddingTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8125rem', color: brand.muted }}>
              © {new Date().getFullYear()} Solcellspris.se
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FAQItem({ question, answer, brand }: {
  question: string;
  answer: string;
  brand: Record<string, string>;
  key?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      border: `1px solid ${brand.border}`,
      borderRadius: brand.radius,
      overflow: 'hidden',
      backgroundColor: brand.white,
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '1.25rem 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: brand.font,
          transition: 'background 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = brand.bg}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}
      >
        <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: brand.foreground, paddingRight: '2rem' }}>
          {question}
        </span>
        <ChevronDown
          size={18}
          color={brand.muted}
          style={{
            flexShrink: 0,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
          }}
        />
      </button>
      <div style={{
        maxHeight: isOpen ? '200px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, opacity 0.3s',
        opacity: isOpen ? 1 : 0,
      }}>
        <p style={{
          padding: '0 1.5rem 1.25rem',
          color: brand.muted,
          fontSize: '0.9375rem',
          lineHeight: 1.7,
          margin: 0,
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}
