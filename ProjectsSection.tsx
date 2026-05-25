import Image from "next/image";

const ACCENT = "#c06848";
const LABEL = "#b08878";

export default function ProjectsSection() {
  return (
    <section className="overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-16 pt-24 pb-40">

        {/* ── Section Header ── */}
        <header className="mb-28">
          {/* Label + horizontal rule */}
          <div className="flex items-center gap-8 mb-10">
            <span
              className="shrink-0 text-[11px] tracking-[0.32em] uppercase"
              style={{ color: LABEL }}
            >
              Selected Work
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
          </div>

          {/* Monumental title — 3 lines, tight stack */}
          <h2 className="text-[60px] font-light leading-[0.95] tracking-[-0.025em] text-foreground">
            Projects<br />
            I&apos;m proud to build<span style={{ color: ACCENT }}>.</span>
          </h2>
        </header>

        <div className="flex flex-col gap-40">

          {/* ── 01 Hi-Mandarin — 左圖右文 ── */}
          <article className="grid grid-cols-[7fr_5fr] gap-20 items-start">

            {/* Left: Mockup */}
            <div className="relative">
              <span
                className="absolute -top-8 left-0 select-none pointer-events-none text-[180px] font-thin leading-none"
                style={{ color: "rgba(0,0,0,0.035)", zIndex: 0 }}
                aria-hidden="true"
              >
                01
              </span>
              <div
                className="absolute -bottom-12 -right-10 w-[68%] h-[60%] -z-10"
                style={{
                  borderRadius: "55% 45% 60% 40% / 40% 55% 45% 60%",
                  backgroundColor: "rgba(240, 226, 218, 0.72)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 aspect-16/10 rounded-xl overflow-hidden">
                <Image
                  src="/image/projects/mockup1.png"
                  alt="Hi-Mandarin project preview"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1440px) 718px, 50vw"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="pt-32 flex flex-col gap-6">
              <span className="text-xs tracking-[0.2em] font-medium" style={{ color: ACCENT }}>
                01
              </span>
              <div>
                <h3 className="text-[50px] font-light leading-[1.04] tracking-[-0.02em] text-foreground">
                  Hi-Mandarin
                </h3>
                <p className="text-sm italic mt-1.5" style={{ color: ACCENT }}>
                  Learning Platform
                </p>
              </div>
              <div className="w-8 h-px my-1" style={{ backgroundColor: "rgba(0,0,0,0.15)" }} />
              <p className="text-sm text-muted-foreground leading-relaxed">
                打造更順暢直覺的語言學習體驗。
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "LMS", "UX Flow"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "#edeae6", color: "#7c746c" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="flex items-center gap-2 text-sm w-fit mt-2" style={{ color: LABEL }}>
                View Project <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          {/* ── 02 E-learning V3 — 左文右圖 ── */}
          <article className="grid grid-cols-[5fr_7fr] gap-20 items-start">

            {/* Left: Info */}
            <div className="pt-32 flex flex-col gap-6">
              <span className="text-xs tracking-[0.2em] font-medium" style={{ color: ACCENT }}>
                02
              </span>
              <div>
                <h3 className="text-[50px] font-light leading-[1.04] tracking-[-0.02em] text-foreground">
                  E-learning V3
                </h3>
                <p className="text-sm italic mt-1.5" style={{ color: ACCENT }}>
                  AI-enhanced LMS
                </p>
              </div>
              <div className="w-8 h-px my-1" style={{ backgroundColor: "rgba(0,0,0,0.15)" }} />
              <p className="text-sm text-muted-foreground leading-relaxed">
                結合 AI workflow 的企業學習平台。
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "AI Workflow"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "#edeae6", color: "#7c746c" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="flex items-center gap-2 text-sm w-fit mt-2" style={{ color: LABEL }}>
                View Project <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Right: Mockup */}
            <div className="relative">
              <span
                className="absolute -top-8 right-0 select-none pointer-events-none text-[180px] font-thin leading-none"
                style={{ color: "rgba(0,0,0,0.035)", zIndex: 0 }}
                aria-hidden="true"
              >
                02
              </span>
              <div
                className="absolute -bottom-12 -left-10 w-[68%] h-[60%] -z-10"
                style={{
                  borderRadius: "45% 55% 40% 60% / 55% 40% 60% 45%",
                  backgroundColor: "rgba(228, 232, 242, 0.72)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 aspect-16/10 rounded-xl overflow-hidden">
                <Image
                  src="/image/projects/mockup1.png"
                  alt="E-learning V3 project preview"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1440px) 718px, 50vw"
                />
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
