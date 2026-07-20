import { Reveal } from "./Reveal";

const facts = [
    { k: "Based in",   v: "Minneapolis, MN" },
    { k: "Background", v: "CS undergrad, then Data Science M.S. Focused on data engineering, ML systems, and security infrastructure." },
    { k: "Open to",    v: "Full-time roles starting 2027" },
    { k: "Languages",  v: "Python, TypeScript, SQL, Bash" },
    { k: "Tools",      v: "Databricks, scikit-learn, Elasticsearch, PostgreSQL, Docker, FastAPI, AWS, LangGraph" },
    { k: "Outside",    v: "Weightlifting, reading broadly, tinkering with side projects" },
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

                    <dl className="mt-8 space-y-3">
                        {facts.map((f, idx) => (
                            <Reveal
                                key={f.k}
                                variant="fade"
                                delay={idx * 70}
                                className="flex items-start gap-4 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-clay/40"
                            >
                                <dt className="w-28 shrink-0 pt-0.5 text-[11px] uppercase tracking-widest text-clay">
                                    {f.k}
                                </dt>
                                <dd className="text-[15px] leading-snug text-ink">{f.v}</dd>
                            </Reveal>
                        ))}
                    </dl>
                </Reveal>

                <Reveal className="space-y-6 text-lg leading-relaxed text-ink-soft" delay={120} variant="fade">
                    <p>
                        I work at the intersection of data engineering, applied machine
                        learning, and production infrastructure. That means building
                        data pipelines and ML systems that are correct by construction,
                        not just by assumption: evaluated models, typed data infrastructure,
                        and cryptographic protocols that hold up under adversarial conditions.
                        The problems I find most interesting sit at the boundary of data
                        systems and security, where correctness is a requirement, not a
                        hopeful assumption.
                    </p>

                    <div className="grid gap-6 pt-2 sm:grid-cols-2">
                        <div>
                            <p className="mb-2 text-xs uppercase tracking-widest text-clay">
                                How I work
                            </p>
                            <p className="text-base text-ink-soft">
                                Start with the threat model. Add complexity only when the
                                simpler approach provably fails. Correctness is verified by
                                tests, not assumed from happy-path runs.
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-xs uppercase tracking-widest text-clay">
                                Current focus
                            </p>
                            <p className="text-base text-ink-soft">
                                Data pipeline design and evaluation, agentic security
                                automation with LangGraph and FastAPI, and the CPace PAKE
                                protocol (IETF draft-irtf-cfrg-cpace) — which grew out of
                                finding an offline oracle attack in my own earlier
                                implementation and fixing it correctly.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}