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
  Building2,
  Leaf,
  Activity,
  Settings,
  BarChart3,
} from 'lucide-react';

// ─── Brand tokens (exact values from solcellspris.se) ───────────────────────
const brand = {
  primary: '#188a00',
  primaryHover: '#146e00',
  primaryFg: '#fafaf5',
  secondary: '#e2fadd',
  bg: '#fafaf5',
  white: '#ffffff',
  foreground: '#0a0a0a',
  muted: '#737373',
  border: '#e5e5e5',
  radius: '12px',
  font: "'Poppins', sans-serif",
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'hem' | 'foretag'>('hem');
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
          maxWidth: '1200px', margin: '0 auto', padding: '0 1rem',
          height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="https://www.solcellspris.se/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img src="/solcellspris-logo-accent.webp" alt="Solcellspris Logo" style={{ height: '20px', width: 'auto' }} />
          </a>
          <nav style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            {[
              { label: 'Hem', href: 'https://www.solcellspris.se/' },
              { label: 'Solceller', href: 'https://www.solcellspris.se/solceller' },
              { label: 'Om oss', href: 'https://www.solcellspris.se/om-oss' },
              { label: 'Blogg', href: 'https://www.solcellspris.se/blogg' },
            ].map(link => (
              <a key={link.label} href={link.href} style={{
                padding: '0.5rem 1rem', borderRadius: brand.radius, fontSize: '1rem',
                fontWeight: 600, color: brand.muted, textDecoration: 'none',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = brand.foreground; (e.currentTarget as HTMLElement).style.backgroundColor = brand.secondary; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = brand.muted; (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
              >{link.label}</a>
            ))}
          </nav>
          <a href="#offert" style={{
            backgroundColor: brand.primary, color: brand.primaryFg,
            padding: '0.5rem 1.25rem', borderRadius: brand.radius,
            fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = brand.primaryHover}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = brand.primary}
          >Begär offert</a>
        </div>
      </header>

      <main>

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: brand.white, padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
              textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800, marginBottom: '3rem', color: brand.foreground,
            }}>
              Information om växelriktare
            </h1>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '2rem',
              backgroundColor: brand.white, borderRadius: '1rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: `1px solid ${brand.border}`, overflow: 'hidden',
            }}>
              <div style={{ flex: '1 1 340px', padding: '2.5rem' }}>
                <div style={{ display: 'flex', backgroundColor: '#f5f5f5', borderRadius: brand.radius, padding: '4px', marginBottom: '2rem' }}>
                  {(['hem', 'foretag'] as const).map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} style={{
                      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer',
                      fontSize: '0.9375rem', fontWeight: 600, fontFamily: brand.font,
                      backgroundColor: activeTab === tab ? brand.white : 'transparent',
                      color: activeTab === tab ? brand.primary : brand.muted,
                      boxShadow: activeTab === tab ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
                    }}>
                      {tab === 'hem' ? <Home size={16} /> : <Building2 size={16} />}
                      {tab === 'hem' ? 'Hem' : 'Företag'}
                    </button>
                  ))}
                </div>

                {activeTab === 'hem' ? (
                  <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: brand.primary, marginBottom: '0.75rem' }}>För hushåll</h2>
                    <p style={{ color: brand.muted, marginBottom: '1.5rem', lineHeight: 1.6 }}>
                      Växelriktaren är hjärtat i din solcellsanläggning. Den omvandlar solcellernas likström till växelström som ditt hem kan använda. Rätt växelriktare gör stor skillnad för din anläggnings effektivitet och livslängd.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {['Få 3 kostnadsfria offerter', 'Endast certifierade installatörer', 'Enkel och trygg process', 'Rätt växelriktare för din anläggning', 'Helt gratis tjänst – inga dolda avgifter'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: brand.foreground }}>
                          <CheckCircle2 size={18} color={brand.primary} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.9375rem' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#offert" style={{
                      display: 'inline-block', backgroundColor: brand.primary, color: brand.primaryFg,
                      padding: '0.875rem 2rem', borderRadius: brand.radius, fontWeight: 600,
                      fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 12px rgba(24,138,0,0.25)',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = brand.primaryHover; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = brand.primary; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                    >Få kostnadsfri offert</a>
                  </div>
                ) : (
                  <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: brand.primary, marginBottom: '0.75rem' }}>För företag &amp; BRF</h2>
                    <p style={{ color: brand.muted, marginBottom: '1.5rem', lineHeight: 1.6 }}>
                      Storskaliga solcellsanläggningar kräver rätt dimensionerade växelriktare. Vi hjälper er att hitta certifierade installatörer som erbjuder skalbara lösningar för er verksamhet.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {['Skalbara lösningar för alla anläggningsstorlekar', 'Offerter från erfarna installatörer', 'Trefasiga växelriktare för kommersiellt bruk', 'Hybridlösningar med batterilagring', 'Helt gratis jämförelsetjänst'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: brand.foreground }}>
                          <CheckCircle2 size={18} color={brand.primary} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.9375rem' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#offert" style={{
                      display: 'inline-block', backgroundColor: brand.primary, color: brand.primaryFg,
                      padding: '0.875rem 2rem', borderRadius: brand.radius, fontWeight: 600,
                      fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 12px rgba(24,138,0,0.25)',
                    }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = brand.primaryHover}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = brand.primary}
                    >Få kostnadsfri offert</a>
                  </div>
                )}
              </div>

              <div style={{
                flex: '1 1 280px',
                background: `linear-gradient(135deg, ${brand.secondary} 0%, #f0fef0 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '2.5rem', minHeight: '280px',
              }}>
                <div style={{
                  width: '200px', height: '200px', backgroundColor: brand.white,
                  borderRadius: '50%', boxShadow: '0 8px 32px rgba(24,138,0,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                }}>
                  <Activity size={80} color={brand.primary} strokeWidth={1.5} />
                  <div style={{
                    position: 'absolute', top: '-8px', right: '-8px',
                    backgroundColor: brand.white, borderRadius: '50%', padding: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)', border: `1px solid ${brand.border}`,
                  }}>
                    <Sun size={24} color={brand.primary} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INVERTER TYPES ─────────────────────────────────────────────── */}
        <section style={{ backgroundColor: brand.bg, padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.75rem' }}>Typer av växelriktare</h2>
              <p style={{ color: brand.muted, lineHeight: 1.6 }}>Det finns tre huvudtyper. Vilken som passar dig beror på din anläggnings storlek, takets utformning och om du vill lagra solel.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  title: 'Strängväxelriktare',
                  subtitle: 'Vanligast för villor',
                  price: '10 000 – 25 000 kr',
                  desc: 'Omvandlar ström från en hel sträng av solpaneler. Kostnadseffektiv och enkel att underhålla. Passar bäst när alla paneler är vända åt samma håll och inte skuggas.',
                  pros: ['Lägst kostnad', 'Enkel installation', 'Lång livslängd (10–15 år)'],
                },
                {
                  title: 'Hybridväxelriktare',
                  subtitle: 'Bäst om du vill ha batteri',
                  price: '15 000 – 35 000 kr',
                  desc: 'Kombinerar funktionerna hos en strängväxelriktare med en batteriladdare. Nödvändig om du vill lagra solel i ett batteri. Populära märken: Huawei, Solis, Sigenergy.',
                  pros: ['Stöd för batterilagring', 'Smart energistyrning', 'Framtidssäker lösning'],
                },
                {
                  title: 'Mikroväxelriktare',
                  subtitle: 'Bäst vid skuggning',
                  price: '3 000 – 6 000 kr / panel',
                  desc: 'En liten växelriktare per solpanel. Varje panel arbetar oberoende, vilket maximerar produktionen vid skuggning eller paneler i olika väderstreck. Populärt märke: Enphase.',
                  pros: ['Optimal vid skuggning', 'Panelnivå-övervakning', 'Hög driftsäkerhet'],
                },
              ].map((type, i) => (
                <div key={i} style={{
                  backgroundColor: brand.white, borderRadius: '1rem', padding: '2rem',
                  border: `1px solid ${brand.border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  display: 'flex', flexDirection: 'column',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'}
                >
                  <div style={{ marginBottom: '1rem' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.25rem' }}>{type.title}</h3>
                    <span style={{ fontSize: '0.8125rem', color: brand.primary, fontWeight: 600, backgroundColor: brand.secondary, padding: '0.2rem 0.6rem', borderRadius: '999px' }}>{type.subtitle}</span>
                  </div>
                  <p style={{ color: brand.muted, fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>{type.desc}</p>
                  <div style={{ borderTop: `1px solid ${brand.border}`, paddingTop: '1rem', marginTop: 'auto' }}>
                    <p style={{ fontSize: '0.8125rem', color: brand.muted, marginBottom: '0.5rem' }}>Ungefärligt pris inkl. installation</p>
                    <p style={{ fontWeight: 700, color: brand.primary, fontSize: '1rem', marginBottom: '0.75rem' }}>{type.price}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                      {type.pros.map((pro, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: brand.foreground }}>
                          <CheckCircle2 size={14} color={brand.primary} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEAD GEN FORM ──────────────────────────────────────────────── */}
        <section id="offert" style={{ backgroundColor: brand.secondary, padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Kostnadsfri offert för växelriktare
            </h2>
            <p style={{ textAlign: 'center', color: brand.muted, marginBottom: '2rem' }}>
              Svara på några enkla frågor och få upp till 3 offerter från certifierade installatörer.
            </p>
            <div style={{ backgroundColor: brand.white, borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: `1px solid ${brand.border}` }}>
              {formStep === 1 && (
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '1rem' }}>Typ av fastighet?</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                    {['Villa/fritidshus', 'Lantbruk/BRF', 'Företag'].map(opt => (
                      <label key={opt} style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.625rem 1rem', borderRadius: brand.radius,
                        border: `2px solid ${propertyType === opt ? brand.primary : brand.border}`,
                        backgroundColor: propertyType === opt ? brand.secondary : brand.white,
                        cursor: 'pointer', fontWeight: propertyType === opt ? 600 : 400,
                        color: propertyType === opt ? brand.primary : brand.foreground, fontSize: '0.9375rem',
                      }}>
                        <input type="radio" name="property" value={opt} checked={propertyType === opt} onChange={() => setPropertyType(opt)} style={{ display: 'none' }} />
                        {opt}
                      </label>
                    ))}
                  </div>
                  <button onClick={() => propertyType && setFormStep(2)} disabled={!propertyType} style={{
                    width: '100%', padding: '0.875rem',
                    backgroundColor: propertyType ? brand.primary : brand.border,
                    color: propertyType ? brand.primaryFg : brand.muted,
                    border: 'none', borderRadius: brand.radius, fontWeight: 600,
                    fontSize: '1rem', fontFamily: brand.font, cursor: propertyType ? 'pointer' : 'not-allowed',
                  }}>Fortsätt</button>
                </div>
              )}
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
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.375rem' }}>{field.label}</label>
                        <input type={field.type} placeholder={field.placeholder} style={{
                          width: '100%', padding: '0.625rem 0.875rem', borderRadius: '8px',
                          border: `1px solid ${brand.border}`, fontSize: '0.9375rem',
                          fontFamily: brand.font, outline: 'none', boxSizing: 'border-box',
                        }}
                          onFocus={e => (e.currentTarget.style.borderColor = brand.primary)}
                          onBlur={e => (e.currentTarget.style.borderColor = brand.border)}
                        />
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setFormStep(3)} style={{
                    width: '100%', padding: '0.875rem', backgroundColor: brand.primary,
                    color: brand.primaryFg, border: 'none', borderRadius: brand.radius,
                    fontWeight: 600, fontSize: '1rem', fontFamily: brand.font, cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(24,138,0,0.25)',
                  }}>Skicka förfrågan</button>
                  <button onClick={() => setFormStep(1)} style={{ marginTop: '0.75rem', background: 'none', border: 'none', color: brand.muted, cursor: 'pointer', fontSize: '0.875rem', fontFamily: brand.font }}>← Tillbaka</button>
                </div>
              )}
              {formStep === 3 && (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ width: '64px', height: '64px', backgroundColor: brand.secondary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <CheckCircle2 size={32} color={brand.primary} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Tack för din förfrågan!</h3>
                  <p style={{ color: brand.muted, lineHeight: 1.6 }}>Du kommer att bli kontaktad av upp till 3 certifierade installatörer inom kort. Tjänsten är helt kostnadsfri.</p>
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
                  <div style={{ width: '48px', height: '48px', backgroundColor: brand.secondary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontWeight: 700, fontSize: '1.125rem', color: brand.primary }}>{item.step}</div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: brand.muted, fontSize: '0.9375rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TAX REDUCTION ──────────────────────────────────────────────── */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#0a2810' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: brand.white }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', backgroundColor: 'rgba(24,138,0,0.4)', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <Leaf size={28} color="#86efac" />
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Grönt avdrag för solcellsinstallation</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#d1fae5' }}>
              Hela solcellsinstallationen – inklusive växelriktaren – berättigar till det gröna avdraget. Du får{' '}
              <strong style={{ color: brand.white }}>15% skattereduktion på arbets- och materialkostnaden</strong> för solcellssystemet, upp till{' '}
              <strong style={{ color: brand.white }}>50 000 kr per person och år</strong>.
              Kombineras du med batteri eller laddbox höjs avdraget till 50% för de delarna.
            </p>
          </div>
        </section>

        {/* ── BENEFITS ───────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: brand.bg, padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.75rem' }}>Varför rätt växelriktare spelar roll</h2>
              <p style={{ color: brand.muted, lineHeight: 1.6 }}>Växelriktaren påverkar hela anläggningens prestanda. En felaktigt dimensionerad eller lågkvalitativ växelriktare kan kosta dig tusentals kronor i förlorad elproduktion.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: Zap, title: 'Effektiv omvandling', desc: 'En bra växelriktare har en verkningsgrad på 97–99%. Det innebär att nästan all solenergi omvandlas till användbar el utan onödiga förluster.' },
                { icon: Settings, title: 'Rätt dimensionering', desc: 'Växelriktarens effekt bör motsvara 80–90% av solcellsanläggningens toppeffekt. Rätt dimensionering ger optimal produktion och lägre kostnad.' },
                { icon: BarChart3, title: 'Realtidsövervakning', desc: 'Moderna växelriktare levereras med app och webbportal. Följ din elproduktion, se historik och få larm om något avviker.' },
                { icon: ShieldCheck, title: 'Anpassad för Sverige', desc: 'Växelriktaren ska uppfylla svensk standard SS-EN50549-1 för att få anslutas till elnätet. Certifierade installatörer säkerställer detta.' },
                { icon: TrendingDown, title: 'Lägre elkostnad', desc: 'Ju mer av din egenproducerade el du kan använda direkt, desto lägre elräkning. En hybridväxelriktare med batteri maximerar egenanvändningen.' },
                { icon: Smartphone, title: 'Smart integration', desc: 'Koppla ihop växelriktaren med laddbox, batteri och värmepump för ett helt integrerat energisystem som styrs automatiskt.' },
              ].map((b, i) => (
                <div key={i} style={{ backgroundColor: brand.white, borderRadius: '1rem', padding: '2rem', border: `1px solid ${brand.border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'}
                >
                  <div style={{ width: '48px', height: '48px', backgroundColor: brand.secondary, borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
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
              Svar på vanliga frågor om växelriktare
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { q: 'Vad kostar en växelriktare?', a: 'En strängväxelriktare för en villa kostar vanligtvis 10 000–25 000 kr inklusive installation. En hybridväxelriktare med stöd för batteri kostar 15 000–35 000 kr. Mikroväxelriktare kostar 3 000–6 000 kr per panel.' },
                { q: 'Vilken typ av växelriktare passar min villa?', a: 'För de flesta villor med paneler i ett eller två väderstreck räcker en strängväxelriktare. Vill du lagra solel väljer du en hybridväxelriktare. Har du kraftig skuggning eller paneler i flera väderstreck kan mikroväxelriktare vara ett bättre alternativ.' },
                { q: 'Vilka märken är populära i Sverige?', a: 'De vanligaste märkena i Sverige är Huawei, Fronius, Solis, SolarEdge och Sigenergy för strängväxelriktare och hybridväxelriktare. Enphase dominerar marknaden för mikroväxelriktare.' },
                { q: 'Hur länge håller en växelriktare?', a: 'En strängväxelriktare håller vanligtvis 10–15 år. Mikroväxelriktare har ofta längre livslängd, upp till 25 år. De flesta tillverkare erbjuder 5–12 års garanti.' },
                { q: 'Behöver jag en hybridväxelriktare om jag vill ha batteri?', a: 'Ja, i de allra flesta fall. En hybridväxelriktare är konstruerad för att ladda och ladda ur ett batteri. Det finns alternativa lösningar med externa laddregulatorenheter, men hybridväxelriktare är enklare och vanligare.' },
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
          <a href="#offert" style={{
            display: 'inline-block', backgroundColor: brand.primary, color: brand.primaryFg,
            padding: '1rem 2.5rem', borderRadius: brand.radius, fontWeight: 600,
            fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(24,138,0,0.3)',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = brand.primaryHover; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = brand.primary; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >Få kostnadsfri offert</a>
        </section>

      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: brand.white, borderTop: `1px solid ${brand.border}`, padding: '3rem 1rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div style={{ flex: '1 1 200px' }}>
              <a href="https://www.solcellspris.se/">
                <img src="/solcellspris-logo-accent.webp" alt="Solcellspris Logo" style={{ height: '18px', width: 'auto', marginBottom: '0.75rem' }} />
              </a>
              <p style={{ fontSize: '0.875rem', color: brand.muted, lineHeight: 1.6 }}>Solcellspris.se – Hitta och jämför lokala leverantörer av solceller.</p>
            </div>
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
                >{link.label}</a>
              ))}
            </div>
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
                >{link.label}</a>
              ))}
            </div>
            <div style={{ flex: '1 1 220px' }}>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Nyhetsbrev</p>
              <p style={{ fontSize: '0.8125rem', color: brand.muted, marginBottom: '0.75rem', lineHeight: 1.5 }}>Få senaste nyheterna om solenergi direkt till din e-post!</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input type="email" placeholder="Din e-postadress" style={{ flex: 1, padding: '0.5rem 0.75rem', borderRadius: '8px', border: `1px solid ${brand.border}`, fontSize: '0.875rem', fontFamily: brand.font, outline: 'none' }}
                  onFocus={e => (e.currentTarget.style.borderColor = brand.primary)}
                  onBlur={e => (e.currentTarget.style.borderColor = brand.border)}
                />
                <button style={{ backgroundColor: brand.primary, color: brand.primaryFg, border: 'none', borderRadius: '8px', padding: '0.5rem 0.875rem', fontWeight: 600, fontSize: '0.875rem', fontFamily: brand.font, cursor: 'pointer' }}>Prenumerera</button>
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${brand.border}`, paddingTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8125rem', color: brand.muted }}>© {new Date().getFullYear()} Solcellspris.se</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer, brand }: {
  question: string;
  answer: string;
  brand: Record<string, string>;
  key?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ border: `1px solid ${brand.border}`, borderRadius: brand.radius, overflow: 'hidden', backgroundColor: brand.white }}>
      <button onClick={() => setIsOpen(!isOpen)} style={{
        width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: brand.font,
      }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = brand.bg}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}
      >
        <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: brand.foreground, paddingRight: '2rem' }}>{question}</span>
        <ChevronDown size={18} color={brand.muted} style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
      </button>
      <div style={{ maxHeight: isOpen ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease, opacity 0.3s', opacity: isOpen ? 1 : 0 }}>
        <p style={{ padding: '0 1.5rem 1.25rem', color: brand.muted, fontSize: '0.9375rem', lineHeight: 1.7, margin: 0 }}>{answer}</p>
      </div>
    </div>
  );
}
