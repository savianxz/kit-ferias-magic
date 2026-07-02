import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Baby,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Crown,
  Download,
  Flame,
  Heart,
  HelpCircle,
  Instagram,
  Mail,
  Palette,
  Play,
  Printer as PrinterIcon,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import heroKit from "@/assets/hero-kit.jpg";
import a1 from "@/assets/activity-1.jpg";
import a2 from "@/assets/activity-2.jpg";
import a3 from "@/assets/activity-3.jpg";
import a4 from "@/assets/activity-4.jpg";
import a5 from "@/assets/activity-5.jpg";
import vslVideo from "@/videos/vsl.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Kit Férias Express — 50+ atividades para imprimir | R$9,90",
      },
      {
        name: "description",
        content:
          "Transforme as férias em horas de diversão longe das telas. " +
          "Mais de 50 atividades infantis prontas para imprimir, " +
          "ideais para crianças de 4 a 8 anos.",
      },
      {
        property: "og:title",
        content: "Kit Férias Express — Atividades para imprimir",
      },
      {
        property: "og:description",
        content:
          "Mais de 50 atividades para crianças de 4 a 8 anos. " +
          "Download imediato. Imprima quantas vezes quiser.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Kit Férias Express",
          description:
            "Mais de 50 atividades infantis prontas para imprimir " +
            "para crianças de 4 a 8 anos.",
          offers: {
            "@type": "Offer",
            price: "9.90",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: LandingPage,
});

const CTA_HREF = "#planos";

/* ─── Fade-in hook ──────────────────────────────────────────── */
function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Shared components ─────────────────────────────────────── */
function CTAButton({
  children,
  className = "",
  href = CTA_HREF,
  full = false,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  full?: boolean;
}) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex items-center justify-center gap-2",
        "rounded-full bg-primary px-7 py-4 text-base font-bold",
        "text-primary-foreground shadow-cta transition-all duration-300",
        "hover:-translate-y-1 hover:brightness-110",
        "hover:shadow-[0_16px_40px_-10px_oklch(0.72_0.18_50/0.55)]",
        "active:translate-y-0 sm:text-lg",
        full ? "w-full" : "",
        className,
      ].join(" ")}
    >
      {children}
      <ArrowRight
        className={"size-5 transition-transform duration-300 " + "group-hover:translate-x-1"}
      />
    </a>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <span
          className={
            "mb-4 inline-block rounded-full bg-accent px-4 py-1.5 " +
            "text-xs font-semibold uppercase tracking-wider " +
            "text-accent-foreground"
          }
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={
          "text-balance text-3xl font-bold leading-tight " +
          "text-foreground sm:text-4xl md:text-5xl"
        }
      >
        {title}
      </h2>
      {sub && (
        <p className={"mt-4 text-pretty text-base text-muted-foreground " + "sm:text-lg"}>{sub}</p>
      )}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <TrustBar />
      <Problem />
      <Benefits />
      <ProductGallery />
      <VideoSection />
      <SocialProof />
      <HowItWorks />
      <WhatsIncluded />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}

/* ─── Header ────────────────────────────────────────────────── */
function Header() {
  return (
    <header
      className={
        "sticky top-0 z-40 border-b border-border/60 " + "bg-background/80 backdrop-blur-md"
      }
    >
      <div
        className={
          "mx-auto flex max-w-6xl items-center justify-between " + "gap-4 px-4 py-3 sm:px-6"
        }
      >
        <a href="#top" className="flex items-center gap-2">
          <div
            className={
              "grid size-9 place-items-center rounded-xl " +
              "bg-primary text-primary-foreground shadow-soft"
            }
          >
            <Sparkles className="size-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">Kit Férias Express</span>
        </a>
        <a
          href={CTA_HREF}
          className={
            "hidden rounded-full bg-primary px-5 py-2.5 text-sm " +
            "font-bold text-primary-foreground shadow-soft " +
            "transition-all duration-300 hover:-translate-y-0.5 " +
            "hover:brightness-110 sm:inline-flex"
          }
        >
          Quero garantir o meu kit
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero() {
  const { ref, visible } = useFadeIn(0.05);
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section
      id="top"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative overflow-hidden transition-all duration-700 ${fadeClass}`}
    >
      <div className="blob left-[-10%] top-[-10%] size-[480px] bg-sky" />
      <div className="blob right-[-10%] top-[20%] size-[400px] bg-sun" />
      <div className="blob bottom-[-15%] left-[20%] size-[460px] bg-leaf" />

      <div
        className={
          "relative mx-auto grid max-w-6xl items-center gap-10 " +
          "px-4 py-14 sm:px-6 md:grid-cols-[1fr_1.3fr] " +
          "md:py-20 lg:py-24"
        }
      >
        {/* Copy */}
        <div className="text-center md:text-left">
          <span
            className={
              "mb-5 inline-flex items-center gap-2 rounded-full " +
              "border border-border bg-card px-4 py-1.5 text-xs " +
              "font-semibold text-muted-foreground shadow-soft"
            }
          >
            <Star className="size-3.5 fill-primary text-primary" />
            Mais de 12.000 famílias já usam o Kit Férias Express
          </span>
          <h1
            className={
              "text-balance font-display text-4xl font-black " +
              "leading-[1.05] tracking-tight text-foreground " +
              "sm:text-5xl md:text-6xl"
            }
          >
            Transforme as férias em horas de diversão{" "}
            <span
              className={
                "bg-gradient-to-r from-primary " +
                "to-[oklch(0.78_0.16_70)] bg-clip-text " +
                "text-transparent"
              }
            >
              longe das telas.
            </span>
          </h1>
          <p className={"mt-5 text-pretty text-base text-muted-foreground " + "sm:text-lg"}>
            +50 atividades prontas para imprimir, criadas para manter seu filho entretido por
            horas — enquanto desenvolve{" "}
            <strong className="text-foreground">criatividade</strong>,{" "}
            <strong className="text-foreground">coordenação motora</strong> e{" "}
            <strong className="text-foreground">imaginação.</strong> Sem telas, sem culpa, sem
            estresse.
          </p>
          <p className="mt-3 text-sm text-muted-foreground/90">
            Em média, 40 minutos de entretenimento por atividade — o suficiente pra você tomar
            aquele café quente, fazer uma call ou simplesmente respirar.
          </p>
          <div className={"mt-8 flex flex-col items-center gap-4 " + "md:items-start"}>
            <div className="flex flex-col items-center gap-1.5 md:items-start">
              <CTAButton>Quero meu Kit por R$9,90</CTAButton>
              <p className="text-sm text-muted-foreground">
                <span className="line-through">R$ 39,90</span> por apenas{" "}
                <strong className="text-foreground">R$9,90 hoje</strong>
              </p>
            </div>
            <ul className={"grid gap-2 text-sm text-foreground " + "sm:grid-cols-2 sm:gap-x-5"}>
              {[
                "Download imediato",
                "Imprima quantas vezes quiser",
                "Ideal para 4 a 8 anos",
                "Compra 100% segura",
              ].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span
                      className={
                        "grid size-5 shrink-0 place-items-center " +
                        "rounded-full bg-success " +
                        "text-success-foreground"
                      }
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Mockup — ~40% larger */}
        <div className="relative">
          <div
            className={
              "absolute -inset-8 rounded-[2.5rem] opacity-70 " +
              "blur-3xl bg-gradient-to-br from-primary/25 " +
              "via-sky/30 to-sun/30"
            }
          />
          <div className={"absolute -inset-2 rounded-[2.2rem] " + "ring-2 ring-primary/20"} />
          <div
            className={
              "relative rounded-[2rem] border border-border " +
              "bg-card p-4 sm:p-5 " +
              "shadow-[0_24px_80px_-20px_oklch(0.6_0.05_250/0.28)]"
            }
          >
            <img
              src={heroKit}
              alt={"Kit Férias Express — livro de atividades " + "infantis para imprimir"}
              width={1024}
              height={1024}
              className={"aspect-square w-full rounded-[1.5rem] " + "object-cover"}
            />

            {/* Badge: Download imediato */}
            <div
              className={
                "absolute -bottom-5 -left-5 flex items-center " +
                "gap-3 rounded-2xl border border-border " +
                "bg-background px-4 py-3 shadow-card"
              }
            >
              <div
                className={
                  "grid size-10 shrink-0 place-items-center " +
                  "rounded-xl bg-primary/15 text-primary"
                }
              >
                <Flame className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Acesso</p>
                <p className="text-sm font-bold">Download imediato</p>
              </div>
            </div>

            {/* Badge: +50 atividades */}
            <div
              className={
                "absolute -right-5 -top-5 flex items-center " +
                "gap-3 rounded-2xl border border-border " +
                "bg-background px-4 py-3 shadow-card"
              }
            >
              <div
                className={
                  "grid size-10 shrink-0 place-items-center " +
                  "rounded-xl bg-accent text-accent-foreground"
                }
              >
                <BookOpen className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Conteúdo</p>
                <p className="text-sm font-bold">⭐ +50 atividades</p>
              </div>
            </div>

            {/* Badge: Imprima quantas vezes quiser */}
            <div
              className={
                "absolute -bottom-5 right-6 hidden items-center " +
                "gap-3 rounded-2xl border border-border " +
                "bg-background px-4 py-3 shadow-card lg:flex"
              }
            >
              <div
                className={
                  "grid size-10 shrink-0 place-items-center " +
                  "rounded-xl bg-success/15 text-success"
                }
              >
                <PrinterIcon className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">🖨️ Impressão</p>
                <p className="text-sm font-bold">Ilimitada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar ─────────────────────────────────────────────── */
function TrustBar() {
  const items = [
    { icon: Download, label: "Download imediato" },
    { icon: PrinterIcon, label: "Impressão ilimitada" },
    { icon: Zap, label: "Sem assinatura" },
    { icon: Baby, label: "Ideal para 4 a 8 anos" },
  ];
  return (
    <div className="border-y border-border bg-secondary/50 px-4 py-4 sm:px-6">
      <div
        className={
          "mx-auto flex max-w-6xl flex-wrap items-center " + "justify-center gap-x-8 gap-y-3"
        }
      >
        {items.map(({ label }) => (
          <span
            key={label}
            className={"inline-flex items-center gap-2 text-sm " + "font-semibold text-foreground"}
          >
            <span
              className={
                "grid size-6 place-items-center rounded-full " +
                "bg-success text-success-foreground"
              }
            >
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Problem ───────────────────────────────────────────────── */
function Problem() {
  const { ref, visible } = useFadeIn();
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  const items = [
    {
      icon: Smartphone,
      title: "Mais um dia de tela.",
      desc: "As telas dominam o tempo livre e a criatividade vai ficando pra trás.",
      tone: "bg-accent text-accent-foreground",
    },
    {
      icon: Clock,
      title: "A criatividade bateu no limite.",
      desc: "As férias chegam e a falta de ideia bate na mesma hora — todo santo dia.",
      tone: "bg-sun/40 text-foreground",
    },
    {
      icon: Users,
      title: "Trabalhar com culpa no peito.",
      desc: "Manter a criança entretida sem se sentir uma mãe ausente é um desafio real.",
      tone: "bg-leaf/40 text-foreground",
    },
    {
      icon: Brain,
      title: 'Entretenimento que não é "só passar o tempo".',
      desc: "Você quer que cada hora de diversão também construa alguma coisa.",
      tone: "bg-primary/15 text-foreground",
    },
  ];
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`px-4 py-24 sm:px-6 md:py-32 transition-all duration-700 ${fadeClass}`}
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="O problema" title="As férias chegaram… e agora, mãe?" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, tone }) => (
            <div
              key={title}
              className={
                "group rounded-3xl border border-border bg-card " +
                "p-8 shadow-soft transition-all duration-300 " +
                "hover:-translate-y-2 hover:shadow-card"
              }
            >
              <div className={"mb-6 grid size-14 place-items-center " + `rounded-2xl ${tone}`}>
                <Icon className="size-7" />
              </div>
              <p className="mb-2 text-base font-bold text-foreground">{title}</p>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div
          className={
            "mx-auto mt-14 max-w-2xl rounded-3xl border " +
            "border-primary/20 bg-primary/5 px-8 py-6 text-center"
          }
        >
          <p className="text-lg font-bold text-foreground">
            Chega de improvisar brincadeira todos os dias.{" "}
            <span className="text-primary">Nós já fizemos esse trabalho por você</span> — é só
            imprimir e entregar.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Benefits ──────────────────────────────────────────────── */
function Benefits() {
  const { ref, visible } = useFadeIn();
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  const benefits = [
    {
      icon: Palette,
      title: "Criatividade",
      desc: "Atividades artísticas que despertam a imaginação e a expressão própria de cada criança.",
    },
    {
      icon: Sparkles,
      title: "Coordenação motora",
      desc: "Traços, recortes e exercícios que fortalecem mãozinhas e movimentos com precisão.",
    },
    {
      icon: Brain,
      title: "Desenvolvimento cognitivo",
      desc: 'Desafios pensados para cada faixa etária, estimulando o raciocínio sem parecer "tarefa".',
    },
    {
      icon: Smartphone,
      title: "Menos tempo de tela",
      desc: "Diversão real, sem bateria, sem notificação. Só papel, lápis e imaginação.",
    },
    {
      icon: Heart,
      title: "Diversão em família",
      desc: "Momentos que viram lembrança, compartilhados com pais, irmãos e avós.",
    },
    {
      icon: PrinterIcon,
      title: "Impressão ilimitada",
      desc: "Imprima quantas vezes quiser, para sempre. Um kit, infinitas tardes resolvidas.",
    },
  ];
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={
        "bg-gradient-to-b from-background to-secondary/50 " +
        "px-4 py-24 sm:px-6 md:py-32 transition-all " +
        `duration-700 ${fadeClass}`
      }
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Benefícios"
          title="Mais que entretenimento. Desenvolvimento de verdade."
          sub={
            "Atividades pensadas por educadores, validadas por mais de 12 mil famílias, " +
            "para acompanhar o crescimento do seu filho em cada fase."
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className={
                "group rounded-3xl border border-border bg-card " +
                "p-8 shadow-soft transition-all duration-300 " +
                "hover:-translate-y-2 hover:shadow-card " +
                "hover:border-primary/20"
              }
            >
              <div
                className={
                  "mb-5 grid size-12 place-items-center " +
                  "rounded-2xl bg-primary/10 text-primary " +
                  "transition-colors duration-300 " +
                  "group-hover:bg-primary/20"
                }
              >
                <Icon className="size-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Product Gallery with Lightbox ─────────────────────────── */
function ProductGallery() {
  const { ref, visible } = useFadeIn();
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  const galleryImages = [
    { src: a1, alt: "Página para colorir com animais" },
    { src: a2, alt: "Atividade de labirinto" },
    { src: a3, alt: "Ligue os pontos" },
    { src: a4, alt: "Encontre as diferenças" },
    { src: a5, alt: "Caça aos objetos" },
    { src: heroKit, alt: "Capa do Kit Férias Express" },
    { src: a1, alt: "Ilustrações para pintar" },
    { src: a2, alt: "Desafios de concentração" },
    { src: a3, alt: "Atividades de raciocínio" },
    { src: a4, alt: "Jogos de observação" },
  ];

  const total = galleryImages.length;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prev = useCallback(
    () => setLightbox((i) => (i != null ? (i - 1 + total) % total : null)),
    [total],
  );

  const next = useCallback(() => setLightbox((i) => (i != null ? (i + 1) % total : null)), [total]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox, prev, next]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={"px-4 py-24 sm:px-6 md:py-36 transition-all " + `duration-700 ${fadeClass}`}
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Conteúdo real"
          title="Veja exatamente o que seu filho vai receber."
          sub={
            "Sem surpresa, sem pegadinha. Clique em qualquer imagem e veja o conteúdo real, " +
            "colorido e fácil de imprimir em casa — hoje mesmo."
          }
        />

        <div className={"grid grid-cols-2 gap-4 sm:grid-cols-3 " + "lg:grid-cols-4 xl:grid-cols-5"}>
          {galleryImages.map((img, i) => (
            <button
              key={`gallery-${i}`}
              onClick={() => setLightbox(i)}
              className={
                "group relative overflow-hidden rounded-2xl " +
                "border border-border bg-card shadow-soft " +
                "transition-all duration-300 hover:-translate-y-2 " +
                "hover:shadow-card hover:border-primary/30 " +
                "focus-visible:outline-none " +
                "focus-visible:ring-2 focus-visible:ring-primary"
              }
              aria-label={`Ver: ${img.alt}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={400}
                  height={400}
                  className={
                    "h-full w-full object-cover " +
                    "transition-transform duration-500 " +
                    "group-hover:scale-110"
                  }
                />
              </div>
              <div
                className={
                  "absolute inset-0 flex items-center " +
                  "justify-center bg-foreground/0 " +
                  "transition-all duration-300 " +
                  "group-hover:bg-foreground/30"
                }
              >
                <div
                  className={
                    "scale-0 rounded-full bg-white/90 p-3 " +
                    "shadow-lg transition-transform duration-300 " +
                    "group-hover:scale-100"
                  }
                >
                  <BookOpen className="size-5 text-foreground" />
                </div>
              </div>
              <p className={"px-3 py-2 text-center text-xs " + "font-semibold text-foreground"}>
                {img.alt}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton>Quero acesso a tudo isso</CTAButton>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className={
            "fixed inset-0 z-50 flex items-center " + "justify-center bg-black/85 backdrop-blur-sm"
          }
          onClick={closeLightbox}
        >
          <div
            className="relative mx-4 w-full max-w-3xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className={"w-full max-h-[80vh] rounded-2xl " + "object-contain shadow-2xl"}
            />
            <p className={"mt-3 text-center text-sm font-semibold " + "text-white"}>
              {galleryImages[lightbox].alt}
            </p>
            <button
              onClick={closeLightbox}
              className={
                "absolute -right-3 -top-3 grid size-9 " +
                "place-items-center rounded-full bg-white " +
                "text-foreground shadow-lg transition " +
                "hover:bg-secondary"
              }
              aria-label="Fechar"
            >
              <X className="size-5" />
            </button>
            <button
              onClick={prev}
              className={
                "absolute left-3 top-1/2 -translate-y-1/2 " +
                "grid size-10 place-items-center rounded-full " +
                "bg-white/90 text-foreground shadow-lg " +
                "transition hover:bg-white"
              }
              aria-label="Anterior"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={next}
              className={
                "absolute right-3 top-1/2 -translate-y-1/2 " +
                "grid size-10 place-items-center rounded-full " +
                "bg-white/90 text-foreground shadow-lg " +
                "transition hover:bg-white"
              }
              aria-label="Próximo"
            >
              <ChevronRight className="size-6" />
            </button>
            <div
              className={
                "absolute bottom-14 left-1/2 -translate-x-1/2 " +
                "rounded-full bg-black/60 px-3 py-1 " +
                "text-xs text-white"
              }
            >
              {lightbox + 1} / {total}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Video Section ─────────────────────────────────────────── */
function VideoSection() {
  const { ref, visible } = useFadeIn();
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  const [playing, setPlaying] = useState(false);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={
        "bg-gradient-to-b from-secondary/30 to-background " +
        "px-4 py-24 sm:px-6 md:py-32 transition-all " +
        `duration-700 ${fadeClass}`
      }
    >
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Demonstração"
          title="Veja o Kit em funcionamento"
          sub={"Assista e veja como as atividades conquistam " + "as crianças em segundos."}
        />
        <div
          className={
            "relative overflow-hidden rounded-3xl border " + "border-border bg-card shadow-card"
          }
        >
          {playing ? (
            <div className="aspect-video w-full bg-black">
              <video
                className="h-full w-full object-contain"
                src={vslVideo}
                controls
                autoPlay
                playsInline
                preload="metadata"
                title="Kit Férias Express — apresentação em vídeo"
              />
            </div>
          ) : (
            <div className={"relative aspect-video w-full overflow-hidden"}>
              <div
                className={
                  "absolute inset-0 bg-gradient-to-br " + "from-primary/20 via-sky/30 to-sun/30"
                }
              />
              <img
                src={heroKit}
                alt="Thumbnail do vídeo do Kit Férias Express"
                className="h-full w-full object-cover opacity-60"
              />
              <div
                className={"absolute inset-0 flex flex-col items-center " + "justify-center gap-4"}
              >
                <button
                  onClick={() => setPlaying(true)}
                  className={
                    "group relative grid size-20 " +
                    "place-items-center rounded-full bg-white " +
                    "shadow-[0_8px_32px_rgba(0,0,0,0.25)] " +
                    "transition-all duration-300 " +
                    "hover:scale-110 " +
                    "hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                  }
                  aria-label="Reproduzir vídeo"
                >
                  <div
                    className={
                      "absolute inset-0 rounded-full " +
                      "bg-primary/20 scale-0 " +
                      "transition-transform duration-300 " +
                      "group-hover:scale-125 " +
                      "group-hover:opacity-0"
                    }
                  />
                  <Play className={"size-8 translate-x-0.5 text-primary " + "fill-primary"} />
                </button>
                <p
                  className={
                    "rounded-full bg-black/50 px-4 py-1.5 " +
                    "text-sm font-semibold text-white " +
                    "backdrop-blur-sm"
                  }
                >
                  Clique para assistir
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Social Proof ──────────────────────────────────────────── */
function SocialProof() {
  const { ref, visible } = useFadeIn();
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  const testimonials = [
    {
      name: "Juliana M.",
      role: "Mãe da Helena, 6 anos",
      text:
        "Comprei na sexta e no sábado já estávamos brincando. " +
        "Minha filha ficou 2 horas concentrada nas atividades " +
        "sem pedir o tablet. Vale cada centavo!",
      stars: 5,
    },
    {
      name: "Patrícia S.",
      role: "Mãe do Theo, 5 anos",
      text:
        "Salvou minhas férias. Imprimo um pacote por dia e ele " +
        "adora. O material é lindo, colorido e muito bem feito.",
      stars: 5,
    },
    {
      name: "Carolina R.",
      role: "Mãe de gêmeos, 7 anos",
      text:
        "Como posso imprimir quantas vezes quiser, os dois fazem " +
        "juntos e não brigam. Recomendo para todas as mães " +
        "que conheço.",
      stars: 5,
    },
    {
      name: "Aline F.",
      role: "Mãe da Lara, 4 anos",
      text:
        "Conteúdo de qualidade profissional. Parece material de " +
        "escola particular. Já indiquei para o grupo das mães.",
      stars: 5,
    },
  ];
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={
        "bg-gradient-to-b from-background via-secondary/40 " +
        "to-background px-4 py-24 sm:px-6 md:py-32 " +
        `transition-all duration-700 ${fadeClass}`
      }
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Prova social"
          title="Mães reais. Resultados reais."
          sub="4,9/5 de nota média · 12.000+ famílias transformaram a rotina das férias · Garantia de 7 dias"
        />

        <div
          className={
            "mx-auto mb-12 flex max-w-3xl flex-col " +
            "items-center gap-6 rounded-3xl border border-border " +
            "bg-card p-7 shadow-card sm:flex-row " +
            "sm:justify-around sm:p-8"
          }
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5">
              <span className={"font-display text-5xl font-black text-foreground"}>4,9</span>
              <div className="flex flex-col">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="mt-1 text-xs text-muted-foreground">de 5 estrelas</span>
              </div>
            </div>
            <p
              className={
                "mt-1 text-xs font-semibold uppercase " + "tracking-wider text-muted-foreground"
              }
            >
              Avaliação média de quem já comprou
            </p>
          </div>
          <div className="hidden h-14 w-px bg-border sm:block" />
          <div className="flex flex-col items-center text-center">
            <span className={"font-display text-5xl font-black text-foreground"}>12k+</span>
            <p
              className={
                "mt-1 text-xs font-semibold uppercase " + "tracking-wider text-muted-foreground"
              }
            >
              Famílias transformaram a rotina das férias
            </p>
          </div>
          <div className="hidden h-14 w-px bg-border sm:block" />
          <div className="flex flex-col items-center text-center">
            <div
              className={
                "flex items-center gap-2 rounded-full " + "bg-success/15 px-3 py-1.5 text-success"
              }
            >
              <ShieldCheck className="size-5" />
              <span className="text-sm font-bold">Compra 100% segura</span>
            </div>
            <p
              className={
                "mt-1 text-xs font-semibold uppercase " + "tracking-wider text-muted-foreground"
              }
            >
              Garantia de 7 dias — risco zero
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className={
                "flex h-full flex-col rounded-3xl border " +
                "border-border bg-card p-6 shadow-soft " +
                "transition-all duration-300 " +
                "hover:-translate-y-1 hover:shadow-card"
              }
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className={"flex-1 text-sm leading-relaxed text-foreground"}>
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption
                className={"mt-5 flex items-center gap-3 border-t " + "border-border pt-4"}
              >
                <div
                  className={
                    "grid size-10 shrink-0 place-items-center " +
                    "rounded-full bg-primary/15 font-display " +
                    "text-base font-bold text-primary"
                  }
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-base font-semibold text-foreground">
          As férias não esperam. Cada dia sem o kit é mais um dia de tela ligada.
        </p>

        <div
          className={
            "mt-6 flex flex-wrap items-center justify-center " +
            "gap-3 text-xs font-semibold text-muted-foreground"
          }
        >
          <span
            className={
              "inline-flex items-center gap-1.5 rounded-full " +
              "border border-border bg-card px-3 py-1.5"
            }
          >
            <ShieldCheck className="size-4 text-success" />
            Pagamento seguro
          </span>
          <span
            className={
              "inline-flex items-center gap-1.5 rounded-full " +
              "border border-border bg-card px-3 py-1.5"
            }
          >
            <Download className="size-4 text-primary" />
            Acesso imediato
          </span>
          <span
            className={
              "inline-flex items-center gap-1.5 rounded-full " +
              "border border-border bg-card px-3 py-1.5"
            }
          >
            <Heart className="size-4 text-destructive" />
            Aprovado por mães
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ──────────────────────────────────────────── */
function HowItWorks() {
  const { ref, visible } = useFadeIn();
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  const steps = [
    {
      n: 1,
      title: "Compre",
      desc: "Pagamento rápido e 100% seguro.",
      icon: ShoppingCart,
    },
    {
      n: 2,
      title: "Receba na hora",
      desc: "O kit chega no seu email em segundos. Sem espera, sem frete, sem ansiedade.",
      icon: Mail,
    },
    {
      n: 3,
      title: "Imprima e divirta-se",
      desc: "Imprima em casa e comece a brincar.",
      icon: PrinterIcon,
    },
  ];
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={
        "bg-gradient-to-b from-secondary/50 to-background " +
        "px-4 py-24 sm:px-6 md:py-32 transition-all " +
        `duration-700 ${fadeClass}`
      }
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Como funciona" title="Três passos simples." />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ n, title, desc, icon: Icon }) => (
            <div
              key={n}
              className={
                "relative rounded-3xl border border-border " +
                "bg-card p-8 text-center shadow-soft " +
                "transition-all duration-300 " +
                "hover:-translate-y-1 hover:shadow-card"
              }
            >
              <div
                className={
                  "mx-auto mb-5 grid size-14 place-items-center " +
                  "rounded-2xl bg-primary text-primary-foreground " +
                  "shadow-cta"
                }
              >
                <Icon className="size-6" />
              </div>
              <span className="font-display text-sm font-bold text-primary">Passo {n}</span>
              <h3 className="mt-1 text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── What's Included ───────────────────────────────────────── */
function WhatsIncluded() {
  const { ref, visible } = useFadeIn();
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  const items = [
    "Livro de atividades",
    "Páginas para colorir",
    "Labirintos",
    "Ligue os pontos",
    "Encontre as diferenças",
    "Caça aos objetos",
    "Certificado de conclusão",
    "Impressão ilimitada para sempre",
  ];
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={"px-4 py-24 sm:px-6 md:py-32 transition-all " + `duration-700 ${fadeClass}`}
    >
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="O que vem no kit" title="Tudo que sua família precisa — em um único kit." />
        <div
          className={"overflow-hidden rounded-3xl border border-border " + "bg-card shadow-card"}
        >
          <ul className="divide-y divide-border">
            {items.map((item, i) => (
              <li
                key={item}
                className={
                  "flex items-center gap-4 px-6 py-5 " +
                  "transition-colors duration-200 " +
                  "hover:bg-secondary/40"
                }
              >
                <span
                  className={
                    "grid size-9 shrink-0 place-items-center " +
                    "rounded-full bg-success/15 text-success"
                  }
                >
                  <Check className="size-5" strokeWidth={3} />
                </span>
                <span className="flex-1 text-base font-medium text-foreground">{item}</span>
                <span
                  className={"hidden text-xs font-semibold " + "text-muted-foreground sm:inline"}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ───────────────────────────────────────────────── */
function Pricing() {
  const { ref, visible } = useFadeIn();
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  interface Plan {
    name: string;
    price: string;
    desc: string;
    features: string[];
    cta: string;
    badge?: string;
    bestValue?: boolean;
    featured: boolean;
  }

  const plans: Plan[] = [
    {
      name: "Plano Essencial",
      price: "9,90",
      desc: "Para começar a divertir hoje mesmo.",
      features: [
        "Kit completo em PDF",
        "+50 atividades",
        "Impressão ilimitada",
        "Download imediato",
      ],
      cta: "Começar Agora",
      featured: false,
    },
    {
      name: "Plano Família",
      price: "29,90",
      desc: "Ideal para quem tem mais de um filho. Melhor custo-benefício — economize imprimindo o dobro de atividades pelo mesmo trabalho.",
      features: [
        "Tudo do Essencial",
        "Pack extra: 100+ atividades",
        "Caderno de desenho livre",
        "Calendário de férias",
        "Certificados personalizáveis",
      ],
      cta: "Quero esse plano (mais escolhido)",
      badge: "⭐ O MAIS ESCOLHIDO PELAS MÃES",
      bestValue: true,
      featured: true,
    },
    {
      name: "Plano Premium",
      price: "49,90",
      desc: "Pacote completo com bônus exclusivos — para quem quer ir além do básico e não vai usar esse kit só uma vez.",
      features: [
        "Tudo do Família",
        "Bônus: histórias para imprimir",
        "Pack de receitas infantis",
        "Atividades em inglês",
        "Suporte prioritário",
      ],
      cta: "Quero o completo",
      badge: "👑 COMPLETO",
      featured: false,
    },
  ];
  return (
    <section
      id="planos"
      ref={ref as React.RefObject<HTMLElement>}
      className={
        "bg-gradient-to-b from-background via-secondary/40 " +
        "to-background px-4 py-24 sm:px-6 md:py-32 " +
        `transition-all duration-700 ${fadeClass}`
      }
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Planos"
          title="Escolha o plano que combina com a sua família."
          sub={"Pagamento único. Sem mensalidade. Sem pegadinha. " + "Acesso para sempre."}
        />
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const featuredCls = plan.featured
              ? "border-primary/40 lg:-my-6 lg:scale-110 z-10 " +
                "ring-2 ring-primary/30 " +
                "shadow-[0_0_60px_oklch(0.72_0.18_50/0.18)," +
                "0_20px_60px_-20px_oklch(0.6_0.05_250/0.3)]"
              : "border-border shadow-soft " + "hover:-translate-y-2 hover:shadow-card";

            const btnCls = plan.featured
              ? "bg-primary text-primary-foreground shadow-cta " +
                "hover:brightness-110 hover:-translate-y-0.5"
              : "border border-foreground/15 bg-background " +
                "text-foreground hover:bg-secondary " +
                "hover:-translate-y-0.5";

            const badgeCls = plan.featured
              ? "bg-primary text-primary-foreground"
              : "bg-foreground text-background";

            return (
              <article
                key={plan.name}
                className={
                  "relative flex flex-col rounded-3xl border " +
                  `bg-card p-8 transition-all duration-300 ${featuredCls}`
                }
              >
                {plan.badge && (
                  <span
                    className={
                      "absolute -top-4 left-1/2 " +
                      "-translate-x-1/2 rounded-full px-5 py-2 " +
                      `text-xs font-bold shadow-cta ${badgeCls}`
                    }
                  >
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                {plan.bestValue && (
                  <p className="mt-2 text-xs font-semibold text-success">
                    ✓ Melhor custo-benefício
                  </p>
                )}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={"text-base font-semibold " + "text-muted-foreground"}>R$</span>
                  <span className={"font-display text-5xl font-black " + "tracking-tight"}>
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">/ único</span>
                </div>
                <ul className="my-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={
                          "mt-0.5 grid size-5 shrink-0 " +
                          "place-items-center rounded-full " +
                          "bg-success text-success-foreground"
                        }
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={
                    "inline-flex w-full items-center " +
                    "justify-center gap-2 rounded-full px-6 " +
                    "py-4 text-sm font-bold transition-all " +
                    `duration-300 ${btnCls}`
                  }
                >
                  {plan.featured && <Crown className="size-4" />}
                  {plan.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Guarantee ─────────────────────────────────────────────── */
function Guarantee() {
  const { ref, visible } = useFadeIn();
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={"px-4 py-24 sm:px-6 md:py-32 transition-all " + `duration-700 ${fadeClass}`}
    >
      <div className="mx-auto max-w-4xl">
        <div
          className={
            "relative overflow-hidden rounded-[2rem] border-2 " +
            "border-success/30 bg-gradient-to-br " +
            "from-success/5 via-card to-card p-10 sm:p-14 " +
            "shadow-[0_0_60px_oklch(0.72_0.15_150/0.12)," +
            "0_16px_60px_-20px_oklch(0.6_0.05_250/0.2)]"
          }
        >
          <div className="blob right-[-5%] top-[-20%] size-[280px] bg-success/20" />
          <div
            className={
              "relative flex flex-col items-center gap-8 " + "text-center sm:flex-row sm:text-left"
            }
          >
            <div className="relative shrink-0">
              <div className={"absolute -inset-3 rounded-full " + "bg-success/15 blur-lg"} />
              <div
                className={
                  "relative grid size-24 place-items-center " +
                  "rounded-3xl bg-success " +
                  "text-success-foreground " +
                  "shadow-[0_8px_24px_oklch(0.72_0.15_150/0.4)]"
                }
              >
                <ShieldCheck className="size-12" />
              </div>
            </div>
            <div>
              <div
                className={
                  "mb-2 inline-block rounded-full bg-success/15 " +
                  "px-4 py-1.5 text-xs font-bold uppercase " +
                  "tracking-wider text-success"
                }
              >
                ✓ GARANTIA DE 7 DIAS — 100% SEM RISCO
              </div>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Risco zero para você.</h3>
              <p
                className={"mt-3 text-pretty text-base leading-relaxed " + "text-muted-foreground"}
              >
                Experimente o Kit Férias Express por 7 dias. Se não amar, devolvemos 100% do seu
                dinheiro —{" "}
                <strong className="text-foreground">sem perguntas, sem burocracia.</strong> A única
                coisa que você tem a perder são mais dias de tela.
              </p>
              <div className={"mt-6 flex flex-wrap justify-center gap-4 " + "sm:justify-start"}>
                <span
                  className={
                    "inline-flex items-center gap-2 rounded-full " +
                    "border border-success/30 bg-success/10 " +
                    "px-4 py-2 text-sm font-semibold text-success"
                  }
                >
                  <Check className="size-4" strokeWidth={3} />
                  Devolução garantida
                </span>
                <span
                  className={
                    "inline-flex items-center gap-2 rounded-full " +
                    "border border-success/30 bg-success/10 " +
                    "px-4 py-2 text-sm font-semibold text-success"
                  }
                >
                  <Check className="size-4" strokeWidth={3} />
                  Sem perguntas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────── */
function FAQ() {
  const { ref, visible } = useFadeIn();
  const fadeClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  const faqs = [
    {
      q: "Como recebo o kit?",
      a:
        "Após o pagamento, você recebe o link de download em poucos segundos — direto no seu email. Acesso imediato e para sempre.",
    },
    {
      q: "Posso imprimir várias vezes?",
      a:
        "Sim! A impressão é ilimitada. Imprima quantas vezes " +
        "quiser, para quantos filhos e amigos quiser.",
    },
    {
      q: "Serve para qual idade?",
      a:
        "O kit é ideal para crianças de 4 a 8 anos, com " +
        "atividades de níveis variados que acompanham " +
        "o desenvolvimento.",
    },
    {
      q: "Preciso instalar algo?",
      a:
        "Não. O kit é em PDF e abre em qualquer celular, " +
        "tablet ou computador, sem instalação.",
    },
    {
      q: "Funciona no celular?",
      a:
        "Sim! Você pode baixar e visualizar pelo celular. " +
        "Para imprimir, basta enviar para qualquer " +
        "impressora doméstica ou gráfica.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={
        "bg-gradient-to-b from-background to-secondary/40 " +
        "px-4 py-24 sm:px-6 md:py-32 transition-all " +
        `duration-700 ${fadeClass}`
      }
    >
      <div className="mx-auto max-w-3xl">
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes." />
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const borderCls = isOpen ? "border-primary/30 shadow-card" : "border-border";
            const rowCls = isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0";
            const chevCls = isOpen ? "rotate-180 text-primary" : "";
            return (
              <div
                key={f.q}
                className={
                  "overflow-hidden rounded-2xl border bg-card " +
                  `shadow-soft transition-all duration-300 ${borderCls}`
                }
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={
                    "flex w-full items-center justify-between " +
                    "gap-4 px-6 py-5 text-left " +
                    "transition-colors duration-200 " +
                    "hover:bg-secondary/40"
                  }
                  aria-expanded={isOpen}
                >
                  <span
                    className={
                      "flex items-center gap-3 text-base " + "font-semibold text-foreground"
                    }
                  >
                    <span
                      className={
                        "grid size-8 shrink-0 " +
                        "place-items-center rounded-xl " +
                        "bg-primary/10 text-primary"
                      }
                    >
                      <HelpCircle className="size-4" />
                    </span>
                    {f.q}
                  </span>
                  <ChevronDown
                    className={
                      "size-5 shrink-0 text-muted-foreground " +
                      "transition-transform duration-300 " +
                      `ease-in-out ${chevCls}`
                    }
                  />
                </button>
                <div className={"grid transition-all duration-300 " + `ease-in-out ${rowCls}`}>
                  <div className="overflow-hidden">
                    <p
                      className={
                        "px-6 pb-6 pl-[3.75rem] text-sm " + "leading-relaxed text-muted-foreground"
                      }
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className={"border-t border-border bg-background px-4 py-14 " + "sm:px-6"}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className={
                  "grid size-10 place-items-center rounded-xl " +
                  "bg-primary text-primary-foreground"
                }
              >
                <Sparkles className="size-5" />
              </div>
              <span className="font-display text-lg font-bold">Kit Férias Express</span>
            </div>
            <p className={"mt-4 max-w-sm text-sm leading-relaxed " + "text-muted-foreground"}>
              Mais de 50 atividades infantis prontas para imprimir, ideais para crianças de 4 a 8
              anos.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="mailto:contato@kitferiasexpress.com"
                className={
                  "inline-flex items-center gap-2 rounded-full " +
                  "border border-border bg-card px-4 py-2 " +
                  "text-sm text-muted-foreground " +
                  "transition-all duration-200 " +
                  "hover:border-primary/30 hover:bg-primary/5 " +
                  "hover:text-foreground"
                }
              >
                <Mail className="size-4" />
                contato@kitferiasexpress.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "grid size-9 place-items-center rounded-full " +
                  "border border-border bg-card " +
                  "text-muted-foreground transition-all " +
                  "duration-200 hover:border-primary/30 " +
                  "hover:bg-primary/5 hover:text-foreground"
                }
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4
                className={
                  "mb-4 text-xs font-bold uppercase " + "tracking-wider text-muted-foreground"
                }
              >
                Legal
              </h4>
              <nav className={"flex flex-col gap-3 text-sm " + "text-muted-foreground"}>
                <a href="#" className={"transition-colors duration-200 " + "hover:text-foreground"}>
                  Política de Privacidade
                </a>
                <a href="#" className={"transition-colors duration-200 " + "hover:text-foreground"}>
                  Termos de Uso
                </a>
              </nav>
            </div>
            <div>
              <h4
                className={
                  "mb-4 text-xs font-bold uppercase " + "tracking-wider text-muted-foreground"
                }
              >
                Suporte
              </h4>
              <nav className={"flex flex-col gap-3 text-sm " + "text-muted-foreground"}>
                <a
                  href="mailto:contato@kitferiasexpress.com"
                  className={"transition-colors duration-200 " + "hover:text-foreground"}
                >
                  Contato
                </a>
                <a href="#" className={"transition-colors duration-200 " + "hover:text-foreground"}>
                  FAQ
                </a>
                <a
                  href="#"
                  className={
                    "inline-flex items-center gap-1.5 " +
                    "transition-colors duration-200 " +
                    "hover:text-foreground"
                  }
                >
                  <Instagram className="size-3.5" />
                  Instagram
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div
          className={
            "mt-10 flex flex-col gap-2 border-t border-border " +
            "pt-6 text-xs text-muted-foreground sm:flex-row " +
            "sm:items-center sm:justify-between"
          }
        >
          <p>© {new Date().getFullYear()} Kit Férias Express. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <Baby className="size-3.5" />
            Feito com carinho para a sua família.
          </p>
        </div>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </footer>
  );
}

/* ─── Mobile Sticky CTA ─────────────────────────────────────── */
function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={
        "fixed inset-x-0 bottom-0 z-50 border-t border-border " +
        "bg-background/95 px-4 py-3 backdrop-blur-md " +
        "transition-transform duration-300 md:hidden " +
        `${show ? "translate-y-0" : "translate-y-full"}`
      }
    >
      <a
        href={CTA_HREF}
        className={
          "flex w-full items-center justify-center gap-2 " +
          "rounded-full bg-primary px-6 py-3.5 text-base " +
          "font-bold text-primary-foreground shadow-cta " +
          "transition-all duration-300 hover:brightness-110"
        }
      >
        Quero meu Kit por R$9,90
        <ArrowRight className="size-5" />
      </a>
    </div>
  );
}
