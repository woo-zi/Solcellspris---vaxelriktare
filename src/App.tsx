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
  Leaf
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'hem' | 'foretag'>('hem');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xl tracking-tight">
            <Sun className="w-6 h-6" />
            <span>Solcellspris.se</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-emerald-600 transition-colors">Solceller</a>
            <a href="#" className="text-emerald-600 transition-colors">Laddboxar</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Batterier</a>
          </nav>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Få offert
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                Information om laddboxar
              </h1>
              <p className="text-lg text-slate-600">
                Jämför och hitta den bästa laddlösningen för dina behov. Enkelt, kostnadsfritt och tryggt.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-8 md:p-12">
                {/* Tabs */}
                <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
                  <button 
                    onClick={() => setActiveTab('hem')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${activeTab === 'hem' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <Home className="w-4 h-4" />
                    Hem
                  </button>
                  <button 
                    onClick={() => setActiveTab('foretag')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${activeTab === 'foretag' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <Building2 className="w-4 h-4" />
                    Företag
                  </button>
                </div>

                {activeTab === 'hem' ? (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">För hushåll</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Spara tid, få bättre överblick och hitta den laddbox som passar just din elbil och din elförbrukning.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        'Få 3 kostnadsfria offerter',
                        'Endast certifierade installatörer',
                        'Enkel och trygg process',
                        'Spara tid och pengar med rätt laddbox',
                        'Helt gratis tjänst – inga dolda avgifter'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg shadow-emerald-200 transition-all hover:-translate-y-0.5">
                      Få kostnadsfri offert
                    </button>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">För företag & BRF</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Skaffa en framtidssäker laddlösning för företagets bilar eller föreningens medlemmar. Vi hjälper er att hitta och jämföra de bästa alternativen.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        'Skalbara lösningar för alla behov',
                        'Offerter från erfarna installatörer',
                        'Enkel hantering av betalning och administration',
                        'Öka fastighetens attraktivitet',
                        'Helt gratis jämförelsetjänst'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg shadow-emerald-200 transition-all hover:-translate-y-0.5">
                      Få kostnadsfri offert
                    </button>
                  </div>
                )}
              </div>
              
              {/* Right Illustration */}
              <div className="flex-1 bg-slate-50 relative min-h-[300px] md:min-h-full flex items-center justify-center p-8 border-t md:border-t-0 md:border-l border-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50/50"></div>
                <div className="relative z-10 w-full max-w-sm aspect-square bg-white rounded-full shadow-2xl shadow-emerald-900/5 flex items-center justify-center border border-emerald-100/50">
                   {activeTab === 'hem' ? (
                     <div className="relative">
                       <Car className="w-32 h-32 text-emerald-600" strokeWidth={1.5} />
                       <div className="absolute -right-4 -top-4 bg-white p-3 rounded-full shadow-lg border border-slate-100">
                         <BatteryCharging className="w-8 h-8 text-emerald-500" />
                       </div>
                     </div>
                   ) : (
                     <div className="relative">
                       <Building2 className="w-32 h-32 text-emerald-600" strokeWidth={1.5} />
                       <div className="absolute -right-4 -top-4 bg-white p-3 rounded-full shadow-lg border border-slate-100">
                         <Zap className="w-8 h-8 text-emerald-500" />
                       </div>
                     </div>
                   )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Reduction Section */}
        <section className="py-16 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-emerald-800 rounded-full mb-6">
              <Leaf className="w-8 h-8 text-emerald-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Grönt avdrag för laddbox</h2>
            <p className="text-lg md:text-xl text-emerald-100 leading-relaxed max-w-2xl mx-auto">
              När du installerar en laddbox hemma har du rätt till det gröna avdraget. Det ger dig en skattereduktion på <strong className="text-white">50% av den totala kostnaden</strong> för både hårdvara och installation, upp till maximalt <strong className="text-white">50 000 kr per person och år</strong>. Avdraget görs direkt på fakturan av din installatör – enkelt och smidigt.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fördelar med att installera en laddbox hemma</h2>
              <p className="text-lg text-slate-600">En dedikerad laddbox är den säkraste och smartaste investeringen för din elbil.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Säker laddning',
                  desc: 'Ladda din elbil tryggt och säkert. En laddbox är designad för att hantera hög effekt under lång tid, till skillnad från ett vanligt eluttag.'
                },
                {
                  icon: Zap,
                  title: 'Snabbare laddning',
                  desc: 'Ladda din bil upp till 10 gånger snabbare än via ett vanligt vägguttag. Få fullt batteri över natten.'
                },
                {
                  icon: TrendingDown,
                  title: 'Lägre elkostnad',
                  desc: 'Styr laddningen till timmar på dygnet då elpriset är som lägst och sänk dina laddkostnader.'
                },
                {
                  icon: Sun,
                  title: 'Kombinera med solceller',
                  desc: 'Maximera din besparing genom att ladda bilen med din egenproducerade, kostnadsfria solel.'
                },
                {
                  icon: Home,
                  title: 'Öka värdet på din bostad',
                  desc: 'En installerad laddbox gör din bostad mer attraktiv för framtida köpare.'
                },
                {
                  icon: Smartphone,
                  title: 'Full kontroll',
                  desc: 'Få full översikt över din förbrukning och dina kostnader direkt i mobilen med en uppkopplad, smart laddbox.'
                }
              ].map((benefit, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Svar på vanliga frågor om laddboxar</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Vad kostar en laddbox?',
                  a: 'Priset för en laddbox inklusive installation ligger vanligtvis mellan 10 000 och 25 000 kr. Med det gröna avdraget på 50% blir din slutgiltiga kostnad betydligt lägre.'
                },
                {
                  q: 'Vilken laddbox ska jag välja?',
                  a: 'Det beror på din bil, ditt hem och dina behov. De vanligaste modellerna som Zaptec Go och Easee One passar de flesta. Våra experter hjälper dig att hitta rätt alternativ.'
                },
                {
                  q: 'Hur snabbt kan jag ladda?',
                  a: 'Den vanligaste effekten för hemmaladdning är 11 kW, vilket ger cirka 5-6 mil per timmes laddning. Det räcker gott och väl för att ladda fullt över natten.'
                },
                {
                  q: 'Kan jag installera en laddbox själv?',
                  a: 'Nej, installation av en laddbox måste alltid utföras av en certifierad elektriker för att garantier och försäkringar ska gälla.'
                },
                {
                  q: 'Fungerar det med solceller?',
                  a: 'Absolut! Att kombinera en laddbox med solceller är ett utmärkt sätt att ladda bilen med egen, förnybar el och minska dina kostnader maximalt.'
                },
                {
                  q: 'Hur fungerar offertförfrågan?',
                  a: 'Du fyller i formuläret på några minuter. Därefter blir du kontaktad av upp till tre lokala installatörer som ger dig sina bästa offerter. Tjänsten är helt kostnadsfri och du förbinder dig inte till något.'
                }
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <Sun className="w-6 h-6 text-emerald-500" />
            <span>Solcellspris.se</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Solcellspris.se. Alla rättigheter förbehållna.</p>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none"
      >
        <span className="font-semibold text-slate-900 pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
