const groups = [
    {
        title: "Languages",
        items: ["Python", "R", "SQL (MySQL)", "Java", "C / C++", "Kotlin"],
    },
    {
        title: "Data & ML",
        items: [
            "Pandas",
            "NumPy",
            "scikit-learn",
            "TensorFlow",
            "Keras",
            "XGBoost",
            "SHAP",
        ],
    },
    {
        title: "Viz & BI",
        items: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Streamlit", "Excel"],
    },
    {
        title: "Cloud & Platforms",
        items: ["AWS", "MongoDB", "Git", "Databricks", "Flask", "Django", "React"],
    },
];

const certs = [
    "AWS Academy - Data Engineering",
    "AWS Academy - Cloud Foundations",
    "Google Data Analytics Professional Certificate",
    "NPTEL Data Science for Engineers (IIT Madras) - Elite",
    "Kaggle - Deep Learning, SQL, CV, Feature Engineering",
];

import { Reveal } from "./Reveal";

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

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {groups.map((g, idx) => (
                        <Reveal key={g.title} delay={idx * 80} variant="fade">
                            <p className="mb-4 text-xs uppercase tracking-widest text-clay">
                                {g.title}
                            </p>
                            <ul className="flex flex-wrap gap-2">                                {g.items.map((i) => (
                                <li
                                    key={i}
                                    className="rounded-full border border-border bg-card px-3 py-1 text-[13px] text-ink-soft transition-colors hover:border-clay/50 hover:text-clay"
                                >                                    {i}
                                </li>
                            ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-16 rounded-2xl border border-border bg-card p-8" variant="fade" delay={100}>
                    <p className="mb-4 text-xs uppercase tracking-widest text-clay">
                        Certifications
                    </p>
                    <ul className="grid gap-2 md:grid-cols-2">
                        {certs.map((c) => (
                            <li
                                key={c}
                                className="flex items-start gap-3 text-[15px] text-ink-soft"
                            >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                                {c}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section >
    );
}