import { Reveal } from "./Reveal";



const groups: { title: string; description: string; items: string[] }[] = [
    {
        title: "Systems & Backend",
        description: "Core infrastructure I ship to production",
        items: ["Python", "FastAPI", "Docker", "Terraform", "TypeScript", "C / C++", "Node.js", "Flask", "R"],
    },
    {
        title: "Data & Machine Learning",
        description: "ML systems, evaluation, and agentic workflows",
        items: ["LangGraph", "scikit-learn", "SHAP", "Qdrant", "XGBoost", "LightGBM", "DeepEval", "Pandas", "NumPy", "LangChain", "Pydantic"],
    },
    {
        title: "Security & Detection",
        description: "Threat intel, detection engineering, cryptographic protocols",
        items: ["MITRE ATT&CK", "YARA-L 2.0", "Sigma", "KQL", "PAKE (CPace)", "Prompt-Injection Defense", "STIX / Threat Intel", "Secure API Design"],
    },
    {
        title: "Data Platforms & Cloud",
        description: "Cloud infrastructure, storage, and search at scale",
        items: ["AWS (ECS / ALB)", "GCP (BigQuery, AlloyDB)", "Elasticsearch", "Apache Spark", "Apache Iceberg", "MongoDB", "MySQL", "AlloyDB", "Git"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="border-t border-border/60">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <Reveal>
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-clay">
                        Toolkit
                    </p>
                    <h2 className="font-serif text-4xl text-ink md:text-5xl">
                        What I reach for.
                    </h2>

                </Reveal>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                    {groups.map((g, idx) => (
                        <Reveal key={g.title} delay={idx * 80} variant="fade">
                            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-clay/30 hover:shadow-[0_20px_40px_-25px_color-mix(in_oklab,var(--clay)_30%,transparent)]">
                                {/* Card header */}
                                <div className="mb-5 flex items-start gap-3">
                                    <div className="mt-0.5 h-5 w-0.5 shrink-0 rounded-full bg-clay" />
                                    <div>
                                        <p className="text-[11px] uppercase tracking-widest text-clay">
                                            {g.title}
                                        </p>
                                        <p className="mt-0.5 text-xs text-ink-soft/70">
                                            {g.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Tool chips */}
                                <div className="flex flex-wrap gap-2">
                                    {g.items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-border bg-secondary px-3 py-1 text-[13px] text-ink-soft transition-colors hover:border-clay/25 hover:text-ink"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}