import pic5 from "@/assets/pic5.jpeg";
import { Reveal } from "./Reveal";


export function Hero() {
    return (
        <section id="top" className="relative overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-60"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 80% 10%, color-mix(in oklab, var(--clay) 14%, transparent), transparent 55%), radial-gradient(circle at 10% 90%, color-mix(in oklab, var(--clay) 8%, transparent), transparent 50%)",
                }}
            />
            <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.2fr_1fr] md:gap-16 md:pt-24 lg:pt-32">
                <Reveal className="flex flex-col justify-center">
                    <p className="mb-6 flex items-center gap-3 text-sm text-ink-soft">
                        <span className="h-px w-8 bg-clay" />
                        Minneapolis, MN · open to summer 2026 internships
                    </p>
                    <h1 className="font-serif text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
                        Hi, I&apos;m Laeeq,<br />
                        <span className="text-clay">a data scientist</span> who ships work
                        people actually use.
                    </h1>
                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
                        I&apos;m pursuing my M.S. in Data Science at the University of
                        Minnesota, with a B.E. in Computer Science behind me. My work sits
                        at the intersection of machine learning, dashboards, and the
                        unglamorous plumbing that makes them useful in production:
                        pipelines, cloud, and a stubborn focus on outcomes.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
                        <a
                            href="#work"
                            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-background transition-all hover:bg-clay hover:shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--clay)_60%,transparent)]"                        >
                            See selected work
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-ink/15 px-5 py-2.5 text-ink transition-colors hover:border-clay hover:text-clay"
                        >
                            Get in touch
                        </a>
                    </div>
                </Reveal>
                <Reveal className="relative" delay={150}>
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                        <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-clay/40 transition-transform duration-500 hover:translate-x-1 hover:translate-y-1" />
                        <div className="group absolute inset-0 overflow-hidden rounded-2xl bg-secondary shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--clay)_40%,transparent)]">
                            <img
                                src={pic5}
                                alt="Portrait of Laeeq Ahmed Fazil on the University of Minnesota campus"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="eager" />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}