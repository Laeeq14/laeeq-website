import { Reveal } from "./Reveal";

const experience = [
    {
        role: "Threat Intel R&D Intern",
        org: "Information Sharing and Analysis Center Inc. (ISAC)",
        where: "Remote",
        period: "Mar – Jul 2025",
        notes: [
            "Profiled APT and eCrime groups (SideWinder, Patchwork, Confucius) through behavioral analysis, IOC enrichment (hashes, domains, IPs), and MITRE ATT&CK mapping; produced structured threat actor dossiers used by security teams for detection and response planning.",
            "Delivered a collaborative APT41 profiling project: STIX-structured intelligence, ATT&CK Navigator heatmap, and detection rules (YARA, Sigma, KQL) that converted raw IOCs into queryable telemetry feeds.",
        ],
    },
    {
        role: "Data Analyst Intern",
        org: "Gorai Technology Solutions",
        where: "Bangalore",
        period: "Feb – May 2025",
        notes: [
            "Analyzed job-seeker placement funnels, skill gaps, salary trends, and recruiter performance using Python, MySQL, and R; generated and validated synthetic datasets, optimized ER diagrams, and surfaced insights that improved placement pipelines and revenue visibility.",
            "Designed and deployed interactive dashboards with Power BI and Streamlit to track key performance indicators, enabling cross-functional teams to monitor program performance and make data-driven decisions.",
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