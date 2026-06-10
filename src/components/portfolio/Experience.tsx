import { Reveal } from "./Reveal";

const experience = [
    {
        role: "Threat Intel R&D Intern",
        org: "Information Sharing and Analysis Center (ISAC)",
        where: "Remote",
        period: "Mar – Jul 2025",
        notes: [
            "Analyzed behavioral patterns of advanced threat groups to build structured intelligence dossiers, mapping complex attack cycles to visualization tools like MITRE ATT&CK heatmaps.",
            "Engineered detection queries (KQL, Sigma, YARA) to parse telemetry and convert raw indicators into structured, queryable data feeds (STIX) to guide security planning.",
        ],
    },
    {
        role: "Data Analyst Intern",
        org: "Gorai Technology Solutions",
        where: "Bangalore",
        period: "Feb – May 2025",
        notes: [
            "Analyzed placement funnels, skill gaps, and salary trends using Python, MySQL, and R, optimizing ER diagrams and generating synthetic datasets to improve revenue visibility.",
            "Designed and deployed interactive dashboards using Streamlit and Power BI to track key performance indicators, enabling cross-functional teams to monitor program performance and make data-driven decisions.",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="border-t border-border/60 bg-paper/40">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <Reveal>
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-clay">
                        Experience
                    </p>
                    <h2 className="font-serif text-4xl text-ink md:text-5xl">
                        Where I&apos;ve worked.
                    </h2>
                </Reveal>

                <div className="mt-12 divide-y divide-border border-y border-border">
                    {experience.map((e, idx) => (
                        <Reveal key={e.role + e.org} delay={idx * 100} variant="fade">
                            <div className="grid gap-6 py-8 md:grid-cols-[200px_1fr]">
                                <div>
                                    <p className="text-sm text-ink-soft">{e.period}</p>
                                    <p className="mt-1 text-xs text-ink-soft/70">{e.where}</p>
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl text-ink">{e.role}</h3>
                                    <p className="text-sm text-clay">{e.org}</p>
                                    <ul className="mt-4 space-y-2 text-ink-soft">
                                        {e.notes.map((n) => (
                                            <li key={n} className="flex gap-3 text-[15px] leading-relaxed">
                                                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-clay" />
                                                <span>{n}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}