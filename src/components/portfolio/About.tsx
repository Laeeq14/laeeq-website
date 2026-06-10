import { Reveal } from "./Reveal";
const facts = [
    { k: "Based in", v: "Minneapolis, MN" },
    { k: "Background", v: "CS undergrad, now Data Science M.S." },
    { k: "Open to", v: "Summer 2026 internships, full-time roles" },
    { k: "Comfortable in", v: "Python, SQL, the cloud, the terminal" },
];

export function About() {
    return (
        <section id="about" className="border-t border-border/60 bg-paper/40">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:gap-20 md:py-28">
                <Reveal>
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-clay">About</p>
                    <h2 className="font-serif text-4xl text-ink md:text-5xl">
                        A short version of the long story.
                    </h2>

                    <dl className="mt-8 space-y-4">
                        {facts.map((f, idx) => (
                            <Reveal
                                key={f.k}
                                variant="fade"
                                delay={idx * 70}
                                className="flex flex-col rounded-xl border border-border bg-card p-4 transition-colors hover:border-clay/40 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <dt className="text-[11px] uppercase tracking-widest text-clay">
                                    {f.k}
                                </dt>
                                <dd className="text-[15px] text-ink">{f.v}</dd>
                            </Reveal>
                        ))}
                    </dl>
                </Reveal>

                <Reveal className="space-y-6 text-lg leading-relaxed text-ink-soft" delay={120} variant="fade">
                    <p>
                        I started in computer science, fell for data along the way, and now
                        I spend most days turning messy datasets into models, dashboards,
                        and the occasional small product. My background is in software,
                        which means I care about the parts of data science that usually
                        get skipped, including clean pipelines, reproducible experiments,
                        and getting something deployed rather than leaving notebooks on a
                        laptop.
                    </p>
                    <p>
                        I&apos;ve worked on everything from cyber threat intelligence,
                        profiling APTs and writing detection rules, to building a
                        real-time fleet tracking and billing system in production. The
                        common thread is simple: I like problems where the math has to
                        survive contact with real users.
                    </p>

                    <div className="grid gap-6 pt-6 sm:grid-cols-2">
                        <div>
                            <p className="mb-2 text-xs uppercase tracking-widest text-clay">
                                How I work
                            </p>
                            <p className="text-base text-ink-soft">
                                Start with the question, not the model. Get a rough version
                                end to end first, then earn every bit of complexity.
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-xs uppercase tracking-widest text-clay">
                                What I&apos;m into lately
                            </p>
                            <p className="text-base text-ink-soft">
                                Agent systems for messy real-world workflows, interpretable
                                ML with SHAP, and dashboards that don&apos;t lie.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section >
    );
}