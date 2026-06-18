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
        title: "Agentic-CTI - Cyber Threat Intelligence Pipeline",
        context: "Independent Project",
        period: "Spring 2026",
        problem:
            "Translating unstructured threat reports into validated detection rules is slow, manual, and vulnerable to prompt injection attacks and formatting errors.",
        approach:
            "Orchestrated a LangGraph state machine utilizing Groq/Llama-3.3. Implemented a regex-based pre-extraction guardrail for injection defense, a local Qdrant vector database for RAG context, and a deterministic YARA-L 2.0 syntax validator with an auto-correcting feedback loop.",
        results:
            "Automated raw text/PDF report ingestion to output syntactically correct Google SecOps YARA-L rules. Handled adversarial overrides with zero LLM cost, resolving syntax errors locally via the retry engine. Deployed as a Streamlit dashboard and async file watcher.",
        tags: ["LangGraph", "Qdrant RAG", "YARA-L 2.0", "FastAPI/Streamlit", "Llama 3.3"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/Agentic-CTI" }],
        metric: { value: "<1ms", label: "injection scan pre-check" }
    },
    {
        title: "Predicting Superhost Status on Airbnb Listings",
        context: "CSCI 5523 · University of Minnesota",
        period: "Fall 2025",
        problem:
            "Superhost status drives revenue, but predicting it is complex due to noisy multi-dimensional data and data leakage caused by multi-listing hosts.",
        approach:
            "Built an end-to-end ML pipeline analyzing 10k+ Twin Cities listings and 160k+ reviews, using a host-aware split to prevent leakage. Tuned tree-based ensembles and integrated a Groq-powered LLM agent to generate operational task tickets for at-risk hosts.",
        results:
            "Achieved 0.87 ROC-AUC with a Random Forest model. SHAP analysis revealed response rates drive success, while scaling beyond 2-3 properties degrades Superhost probability. Deployed as a live FastAPI simulator.",
        tags: ["Random Forest", "SHAP", "FastAPI", "Groq API", "scikit-learn"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/Predicting-Airbnb-Superhost-Status-in-the-Twin-Cities-" }],
        metric: { value: "0.87", label: "ROC-AUC" }
    },
    {
        title: "CareFlow AI - Home Health Referral Swarm",
        context: "Origin House Hackathon · Finalist",
        period: "April 2026",
        problem:
            "Home health agencies sit on a 72-hour referral backlog that delays patient care and costs the industry billions. Most of the work is unstructured intake from faxes and PDFs.",
        approach:
            "Built a FastAPI and Next.js multi-agent workflow employing Groq to parse and extract unstructured patient referral PDFs. Integrated a TinyFish browser agent that navigates insurance portals and nurse rosters to automate eligibility checks and patient scheduling.",
        results:
            "Finalist in a 24 hour packed hackathon. Demoed end-to-end referral intake on real-world patient data, executing extraction, validation, and browser-driven scheduling decisions in under a minute instead of the typical 72-hour manual backlog.",
        tags: ["LLM Agents", "FastAPI", "Next.js", "Groq API", "TinyFish AI"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/careflow-ai" }],
        metric: { value: "<1 min", label: "intake → routed" },
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
        title: "Predicting Diabetes Risk with Statistical Learning",
        context: "STAT 5052 · University of Minnesota",
        period: "Fall 2025",
        problem:
            "Early diabetes risk models often look great in notebooks and fall apart in practice, usually because of leakage and weakly grounded predictors.",
        approach:
            "Audited the dataset for leakage, rebuilt the train/test split, and compared logistic regression, random forests, and gradient boosting under matched protocols. Selected predictors with clinical plausibility in mind.",
        results:
            "Gradient Boosting won on a clean holdout and exposed a small, defensible set of risk factors, the kind a clinician would actually trust as a screening signal.",
        tags: ["Gradient Boosting", "Statistical Learning", "R"],
        links: [{ label: "GitHub", href: "#" }],
        metric: { value: "0 leaks", label: "post-audit" },
    },
    {
        title: "Green ROI - Corporate Travel Sustainability",
        context: "Analytics for Good Hackathon · 2nd Place",
        period: "Jan 2026",
        problem:
            "Companies want to cut travel emissions without killing revenue. Most sustainability dashboards stop at the carbon number and leave the ROI conversation on the floor.",
        approach:
            "In a 24-hour challenge, we used Celonis to analyze raw corporate travel data and build dashboards surfacing 'Green ROI.' We identified actionable policy levers, like prioritizing trains, economy flights, and cleaner vehicles in Europe, strategic footprint optimization, and regionalized hub model with projected savings.",
        results:
            "Took 2nd place at the Carlson School Analytics for Good Hackathon. We delivered an executive-style pitch where our \"Green ROI\" framing gave non-technical leadership a clear, data-backed path to make the trade-off.",
        tags: ["Celonis", "Storytelling", "Sustainability"],
        links: [{ label: "LinkedIn Post", href: "https://www.linkedin.com/feed/update/urn:li:activity:7424521708004556800/" }],
        metric: { value: "2nd", label: "university-wide" }
    },
    {
        title: "The Sadness Paradox - Music & Emotion Visualization",
        context: "CSCI 5609 · University of Minnesota",
        period: "Fall 2025",
        problem:
            "Why has popular music grown emotionally darker yet louder over the last century? Exploring this auditory paradox requires mapping complex audio trends across genres and eras without losing stylistic context.",
        approach:
            "Built an interactive scrollytelling visualization using React and D3.js over 100 years of Spotify history. Developed multi-stage line charts, genre heatmaps, interactive chord diagrams, and a music taste quiz. Preprocessed raw Spotify datasets in Python to aggregate acoustic attributes.",
        results:
            "Visualized how mainstream music has become 18% sadder (lower valence), 34% louder, and 65% less acoustic since the 1960s, mapping the rise of high-intensity, emotionally dark music. Deployed as a live GitHub Pages interactive narrative.",
        tags: ["React", "D3.js", "Spotify API", "Scrollytelling", "Python"],
        links: [{ label: "Live Demo", href: "https://shivank19.github.io/CSCI5609_Final_Project/" }],
        metric: { value: "100 yrs", label: "of Spotify data" },
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
                        <Reveal
                            key={p.title}
                            delay={(idx % 3) * 100}
                            variant="fade"
                            className={idx === 0 ? "md:col-span-2" : ""}
                        >
                            <article
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