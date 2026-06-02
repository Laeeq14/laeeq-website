const channels = [
    { label: "Email", value: "laeeqahd2003@gmail.com", href: "mailto:laeeqahd2003@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/laeeq14", href: "https://www.linkedin.com/in/laeeq14" },
    { label: "GitHub", value: "github.com/Laeeq14", href: "https://github.com/Laeeq14" },
    { label: "Phone", value: "+1 (763) 353-9570", href: "tel:+17633539570" },
];
import { Reveal } from "./Reveal";


export function Contact() {
    return (
        <section id="contact" className="border-t border-border/60">
            <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
                <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
                    <Reveal>
                        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-clay">
                            Get in touch
                        </p>
                        <h2 className="font-serif text-4xl text-ink md:text-6xl">
                            Working on something <span className="text-clay">interesting?</span>{" "}
                            I&apos;d love to hear about it.
                        </h2>
                        <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
                            I&apos;m currently looking for summer 2026 internships in data
                            science, applied ML, and analytics, and always happy to chat
                            about projects, research, or interesting problems.
                        </p>

                        <a
                            href="mailto:laeeqahd2003@gmail.com"
                            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-background transition-all hover:bg-clay hover:shadow-[0_15px_40px_-15px_color-mix(in_oklab,var(--clay)_60%,transparent)]"                        >
                            Say hello <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </Reveal>

                    <Reveal as="div" delay={120} className="self-end">
                        <ul className="space-y-1 rounded-2xl border border-border bg-card p-2">
                            {channels.map((c) => (
                                <li key={c.label}>
                                    <a
                                        href={c.href}
                                        className="group flex items-center justify-between gap-4 rounded-xl px-4 py-4 transition-colors hover:bg-secondary"  >
                                        <span className="text-xs uppercase tracking-widest text-ink-soft/80">
                                            {c.label}
                                        </span>
                                        <span className="text-right text-ink group-hover:text-clay">{c.value}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </div>
        </section >
    );
}