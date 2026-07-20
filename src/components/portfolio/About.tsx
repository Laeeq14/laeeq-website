import { Reveal } from "./Reveal";
const facts = [
    { k: "Based in", v: "Minneapolis, MN" },
    { k: "Background", v: "CS undergrad → Data Science M.S., specializing in infrastructure & threat intelligence" },
    { k: "Open to", v: "Full-time roles (2027)" },
    { k: "Comfortable in", v: "Python, TypeScript, SQL, the cloud, the terminal" },
];

export function About() {
    return (
        <section id="about" className="border-t border-border/60 bg-paper/40">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:gap-20 md:py-28">
                <Reveal>
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-clay">About</p>
                    <h2 className="font-serif text-4xl text-ink md:text-5xl">
                        Infrastructure. Security. Production.
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
                        I bridge the gap between applied machine learning and production
                        engineering. My focus is on designing robust backend architectures,
                        writing deterministic evaluation suites for LLMs, and ensuring data
                        pipelines and cryptographic protocols survive contact with real-world
                        adversarial environments.
                    </p>

                    <div className="grid gap-6 pt-6 sm:grid-cols-2">
                        <div>
                            <p className="mb-2 text-xs uppercase tracking-widest text-clay">
                                How I work
                            </p>
                            <p className="text-base text-ink-soft">
                                Design the threat model first, then earn every bit of
                                complexity. Backend correctness is proven by tests, not
                                assumed from happy-path demos.
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-xs uppercase tracking-widest text-clay">
                                Current focus
                            </p>
                            <p className="text-base text-ink-soft">
                                Agentic workflows for security automation (LangGraph, FastAPI),
                                interpretable ML, and untrusted-broker cryptographic protocols
                                (CPace PAKE, IETF draft).
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section >
    );
}