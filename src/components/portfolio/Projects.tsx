import { Reveal } from "./Reveal";

type Project = {
    title: string;
    context: string;
    period: string;
    problem: string;
    approach: string;
    results: string;
    tags: string[];
    links: { label: string; href: string }[];
    metric?: { value: string; label: string };
};

const projects: Project[] = [
    {
        title: "Predicting Superhost Status on Airbnb Listings",
        context: "CSCI 5523 · University of Minnesota",
        period: "Fall 2025",
        problem:
            "Airbnb's Superhost label drives bookings and pricing power, but the criteria are opaque. Hosts and analysts need a reliable way to predict, and explain, who clears the bar.", approach:
            "Built an end-to-end ML pipeline in scikit-learn with feature engineering, careful CV, and hyperparameter tuning across logistic regression, random forest, and XGBoost. Layered SHAP for per-feature interpretability.",
        results:
            "XGBoost reached ROC-AUC 0.94. SHAP surfaced response time and review consistency as the strongest signals, useful for both classification and host-facing guidance.", tags: ["XGBoost", "SHAP", "scikit-learn", "Pandas"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/Predicting-Airbnb-Superhost-Status-in-the-Twin-Cities-" }],
        metric: { value: "0.94", label: "ROC-AUC" },
    },
    {
        title: "Predicting Diabetes Risk with Statistical Learning",
        context: "STAT 5052 · University of Minnesota",
        period: "Fall 2025",
        problem:
            "Early diabetes risk models often look great in notebooks and fall apart in practice, usually because of leakage and weakly grounded predictors.", approach:
            "Audited the dataset for leakage, rebuilt the train/test split, and compared logistic regression, random forests, and gradient boosting under matched protocols. Selected predictors with clinical plausibility in mind.",
        results:
            "Gradient Boosting won on a clean holdout and exposed a small, defensible set of risk factors, the kind a clinician would actually trust as a screening signal.", tags: ["Gradient Boosting", "Statistical Learning", "R"],
        links: [{ label: "GitHub", href: "#" }],
        metric: { value: "0 leaks", label: "post-audit" },
    },
    {
        title: "HighPay - Fleet Tracking and Automated Billing",
        context: "AMCEC, Bangalore",
        period: "Oct 2024 – Jan 2025",
        problem:
            "A local fleet operator was billing manually from paper logs. Disputes were common and trips slipped through. They needed something live, automatic, and trustworthy.",
        approach:
            "Built a real-time tracking and billing system on Traccar GPS with geofencing, MongoDB storage, and in-app payments. Designed the data model so every charge was traceable to a trip.",
        results:
            "Cut manual processing time by ~40%, eliminated the most common billing disputes, and gave clients a transparent view of their own usage.",
        tags: ["Traccar", "MongoDB", "Geofencing", "Payments"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/HighPay" }],
        metric: { value: "~40%", label: "less manual work" },
    },
    {
        title: "CareFlow AI - Home Health Referral Swarm",
        context: "Origin House Hackathon · Finalist",
        period: "April 2026",
        problem:
            "Home health agencies sit on a 72-hour referral backlog that delays patient care and costs the industry billions. Most of the work is unstructured intake from faxes and PDFs.",
        approach:
            "Designed a coordinated swarm of AI agents to extract, validate, and route referrals, each agent narrow, observable, and replaceable. Built in 24 hours with the team.", results:
            "Finalist out of a packed field. Demoed end-to-end intake on real-shaped data, with a routing decision in under a minute instead of days.",
        tags: ["LLM Agents", "Healthcare", "Workflow"],
        links: [{ label: "Devpost", href: "#" }],
        metric: { value: "<1 min", label: "intake → routed" },
    },
    {
        title: "Green ROI - Corporate Travel Sustainability",
        context: "Analytics for Good Hackathon · 2nd Place",
        period: "Jan 2026",
        problem:
            "Companies want to cut travel emissions without killing revenue. Most sustainability dashboards stop at the carbon number and leave the ROI conversation on the floor.",
        approach:
            "In 24 hours, built dashboards that tied emissions to revenue per trip and surfaced policy levers (flight class caps, hub consolidation, video-first defaults) with projected savings.", results:
            "Took 2nd place at the Carlson School Analytics for Good Hackathon. The framing, \"Green ROI,\" gave non-technical leadership a way to actually make the trade-off.", tags: ["Tableau", "Storytelling", "Sustainability"],
        links: [{ label: "LinkedIn Post", href: "https://www.linkedin.com/feed/update/urn:li:activity:7424521708004556800/" }],
        metric: { value: "2nd", label: "of the cohort" },
    },
    {
        title: "The Sadness Paradox - Music & Emotion Visualization",
        context: "CSCI 5609 · University of Minnesota",
        period: "Fall 2025",
        problem:
            "Why do people deliberately seek out sad music when they're already feeling down? The emotional relationship between listeners and melancholy tracks is counterintuitive and poorly understood.",
        approach:
            "Built an interactive visualization using React and D3.js over 100 years of Spotify audio feature data (1921–2020). Integrated the Spotify Web API to let users explore how valence, tempo, and energy cluster around \"sad\" tracks, and surface the paradox through dynamic charts.",
        results:
            "Produced a compelling, browser-based narrative that makes the sadness paradox tangible. Users can trace the emotional arc of music across decades and see why low-valence songs still top playlists.",
        tags: ["React", "D3.js", "Python", "Pandas", "Spotify API"],
        links: [{ label: "Live Demo", href: "https://shivank19.github.io/CSCI5609_Final_Project/" }],
        metric: { value: "100 yrs", label: "of music data" },
    },
];

export function Projects() {
    return (
        <section id="work" className="border-t border-border/60">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <Reveal className="mb-12 flex items-end justify-between gap-6">
                    <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-clay">
                            Selected work
                        </p>
                        <h2 className="font-serif text-4xl text-ink md:text-5xl">
                            Things I&apos;ve built and shipped.
                        </h2>
                    </div>
                    <p className="hidden max-w-xs text-sm text-ink-soft md:block">
                        Each one tries to answer a real question. A few of them actually
                        made it to production.
                    </p>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((p, idx) => (
                        <Reveal key={p.title} delay={(idx % 3) * 100} variant="fade">                        <article
                            className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_40px_-30px_color-mix(in_oklab,var(--clay)_30%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-clay/50 hover:shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--clay)_55%,transparent)]"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs text-ink-soft">{p.context}</p>
                                    <h3 className="mt-1 font-serif text-2xl text-ink">
                                        {p.title}
                                    </h3>
                                </div>
                                {p.metric && (
                                    <div className="shrink-0 text-right">
                                        <div className="font-serif text-2xl text-clay">
                                            {p.metric.value}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-widest text-ink-soft/70">
                                            {p.metric.label}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <p className="mt-2 text-xs text-ink-soft/70">{p.period}</p>

                            <dl className="mt-6 space-y-4 text-sm">
                                <div>
                                    <dt className="text-[11px] uppercase tracking-widest text-clay/80">
                                        Problem
                                    </dt>
                                    <dd className="mt-1 leading-relaxed text-ink-soft">{p.problem}</dd>
                                </div>
                                <div>
                                    <dt className="text-[11px] uppercase tracking-widest text-clay/80">
                                        Approach
                                    </dt>
                                    <dd className="mt-1 leading-relaxed text-ink-soft">{p.approach}</dd>
                                </div>
                                <div>
                                    <dt className="text-[11px] uppercase tracking-widest text-clay/80">
                                        Result
                                    </dt>
                                    <dd className="mt-1 leading-relaxed text-ink-soft">{p.results}</dd>
                                </div>
                            </dl>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5 text-sm">
                                {p.links.map((l) => (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        className="text-clay underline-offset-4 transition-colors hover:underline"
                                    >
                                        {l.label} →
                                    </a>
                                ))}
                            </div>
                        </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section >
    );
}