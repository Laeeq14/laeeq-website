import { Reveal } from "./Reveal";

type StatRibbon = { value: string; label: string };

type Project = {
    title: string;
    context: string;
    period: string;
    summary: string;
    highlights: string[];
    statsRibbon?: StatRibbon[];
    tags: string[];
    links: { label: string; href: string }[];
    metric?: { value: string; label: string };
};

const projects: Project[] = [
    {
        title: "Agentic-CTI: Autonomous Threat Hunting Pipeline",
        context: "Enterprise Architecture Project",
        period: "Summer 2026",
        metric: { value: "98.8%", label: "IOC F1" },
        summary:
            "Autonomous SOC pipeline ingesting raw threat advisories and live Elasticsearch log streams, generating validated YARA-L 2.0, Sigma, and KQL detection rules through a parallel LangGraph multi-agent system deployed on AWS ECS Fargate.",
        highlights: [
            "Multi-Agent Pipeline: LangGraph fans out Sigma + KQL generation in parallel, then joins before a 9-check YARA-L structural validator with LLM retry loop — rules auto-correct before an analyst ever sees them.",
            "Zero-Trust Guardrails: 7-category prompt-injection firewall firing in <1ms; multi-provider LLM pool (Gemini → OpenRouter → Groq → Cerebras) rotates on 429s with no sleep and thread-safe key index.",
            "Production Infrastructure: 4-service Docker Compose on AWS ECS Fargate via Terraform behind an ALB; GitHub Actions eval gate with IOC F1 ≥ 90% and Guard TPR = 100% regression thresholds.",
        ],
        statsRibbon: [
            { value: "0.0%", label: "False Positive Rate" },
            { value: "100%", label: "Injection Block Rate" },
            { value: "~$0.0004", label: "Cost / Run" },
        ],
        tags: ["LangGraph", "Elasticsearch", "Docker + Terraform", "FastAPI", "GitHub Actions"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/Agentic-CTI" }],
    },
    {
        title: "CPace-Relay: Zero-Trust PIN-Authenticated Key Exchange SDK",
        context: "Open-Source Security SDK",
        period: "Summer 2026",
        metric: { value: "0 leaks", label: "wire-asserted" },
        summary:
            "CPace PAKE implementation (IETF draft) eliminating the offline brute-force oracle present in secretbox-based PIN schemes — the PIN is mixed into a ristretto255 DH generator via hash-to-curve (RFC 9380), so verifying a guess requires solving discrete log, not checking a MAC.",
        highlights: [
            "Protocol: PIN baked into the DH generator via hash-to-curve — captured wire messages are ristretto255 points, not checkable ciphertexts. HMAC-SHA256 key confirmation before any data exchange.",
            "Architecture: TypeScript monorepo (npm workspaces) — crypto package (CPace + X25519 baseline), relay (WebSocket blind broker, application-level TTL), and test-clients.",
            "Security Controls: 10-attempt rate limit → permanent session lock; assertNoCleartext() on every relay handler; sessionId bound into HKDF blocking cross-session replay.",
        ],
        statsRibbon: [
            { value: "<1ms", label: "Handshake Overhead" },
            { value: "10 tries", label: "Rate Limit Lock" },
            { value: "RFC 9380", label: "Hash-to-Curve Spec" },
        ],
        tags: ["TypeScript", "CPace PAKE", "WebSocket Relay", "npm Workspaces"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/cpace-relay" }],
    },
    {
        title: "Predicting Superhost Status on Airbnb Listings",
        context: "CSCI 5523 · University of Minnesota",
        period: "Fall 2025",
        metric: { value: "0.87", label: "ROC-AUC" },
        summary:
            "End-to-end ML pipeline predicting Airbnb Superhost status from 10k+ Twin Cities listings with a host-aware leakage-proof split, a SHAP-driven at-risk agent, and a live FastAPI simulator with Evidently AI drift monitoring gated in CI.",
        highlights: [
            "Modeling: 11 models across 6 families (LR, DT, RF, XGBoost, LightGBM, CatBoost) with RandomizedSearchCV + StratifiedKFold; host-aware split on host_id prevents leakage across June + September 2025 scrapes.",
            "Intelligence: Batch SHAP at-risk agent, what-if simulator sweeping listing count 1→50, Groq LLM generating prioritized tickets from the last 5 guest reviews.",
            "CI/CD: GitHub Actions — ruff + pytest + Evidently AI drift gate failing on >50% feature drift, posting per-feature p-values as PR comments.",
        ],
        statsRibbon: [
            { value: "11", label: "Models Compared" },
            { value: "0.80", label: "F1 Score" },
            { value: "≤50%", label: "CI Drift Gate" },
        ],
        tags: ["Random Forest", "SHAP", "FastAPI", "Evidently AI", "GitHub Actions"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/Predicting-Airbnb-Superhost-Status-in-the-Twin-Cities-" }],
    },
    {
        title: "CareFlow AI - Home Health Referral Swarm",
        context: "Origin House Hackathon · Finalist",
        period: "April 2026",
        metric: { value: "<1 min", label: "intake → routed" },
        summary:
            "Multi-agent home health referral system converting raw fax PDFs into routed, scheduled patient visits through a 7-stage document pipeline and three Tinyfish web-browsing agents — built in 24 hours at the Origin House Hackathon.",
        highlights: [
            "Document Pipeline: 7 agents in sequence — OCR → Document Parsing → LLM Extraction → Demographics Validation → Contact Validation → Clinical Normalization → Cross-Field Validation.",
            "Operational Agents: Three Tinyfish web-browsing agents navigate insurance portals, ZIP-based placement rosters, and nurse scheduling systems to verify eligibility, match placement, and book the first visit.",
            "Stack: FastAPI backend + Next.js 14 frontend with a real-time agent trace dashboard showing every agent's live status and observations.",
        ],
        statsRibbon: [
            { value: "7 + 3", label: "Agents in Pipeline" },
            { value: "< 1 min", label: "Intake to Routed" },
            { value: "24 hrs", label: "Built In" },
        ],
        tags: ["LLM Agents", "FastAPI", "Next.js 14", "TinyFish AI"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/careflow-ai" }],
    },
    {
        title: "The Sadness Paradox - Music & Emotion Visualization",
        context: "CSCI 5609 · University of Minnesota",
        period: "Fall 2025",
        metric: { value: "100 yrs", label: "of Spotify data" },
        summary:
            "Interactive scrollytelling visualization mapping 100 years of Spotify history to reveal how popular music has grown measurably sadder, louder, and less acoustic since the 1960s — built with React and D3.js.",
        highlights: [
            "Multi-stage D3.js visualizations: line charts, genre heatmaps, interactive chord diagrams, and a music taste quiz.",
            "Python preprocessing of raw Spotify datasets to aggregate acoustic attributes across year, genre, and era before the frontend renders them.",
        ],
        statsRibbon: [
            { value: "18%", label: "Sadder (valence)" },
            { value: "34%", label: "Louder (loudness)" },
            { value: "65%", label: "Less Acoustic" },
        ],
        tags: ["React", "D3.js", "Spotify API", "Scrollytelling"],
        links: [{ label: "Live Demo", href: "https://shivank19.github.io/CSCI5609_Final_Project/" }],
    },
    {
        title: "Predicting Diabetes Risk with Statistical Learning",
        context: "STAT 5052 · University of Minnesota",
        period: "Fall 2025",
        metric: { value: "11 models", label: "benchmarked" },
        summary:
            "Leakage-free diabetes risk prediction pipeline benchmarking 11 model families across ~97,000 patient records, using DeLong's pairwise AUC test and bootstrapped confidence intervals to make model comparisons statistically honest — implemented in both Python and R.",
        highlights: [
            "Leakage Audit: Explicitly removed all ADA diagnostic criteria (HbA1c, fasting glucose, pre-computed risk scores) before any modeling.",
            "Statistical Rigor: DeLong's pairwise AUC test, bootstrapped 95% confidence intervals, and calibration curves — not just point estimates.",
            "Dual Implementation: Full pipeline in Python (scikit-learn) and R (tidymodels) covering the complete course syllabus.",
        ],
        statsRibbon: [
            { value: "0.665", label: "Best Leakage-Free AUC" },
            { value: "~97k", label: "Patient Records" },
            { value: "0", label: "Diagnostic Leaks" },
        ],
        tags: ["scikit-learn", "tidymodels (R)", "XGBoost", "DeLong's AUC Test"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/Predicting-Diabetes-Risk" }],
    },
    {
        title: "Green ROI - Corporate Travel Sustainability",
        context: "Analytics for Good Hackathon · 2nd Place",
        period: "Jan 2026",
        metric: { value: "2nd", label: "university-wide" },
        summary:
            "24-hour hackathon analysis of corporate travel data using Celonis, reframing sustainability metrics as 'Green ROI' to give leadership a data-backed trade-off framework rather than just a carbon number.",
        highlights: [
            "Used Celonis to surface actionable policy levers — prioritizing trains, economy flights, and cleaner vehicles in Europe — and modeled a regionalized hub structure with projected savings.",
            "Delivered an executive-style pitch where 'Green ROI' framing gave non-technical leadership a clear, defensible path to make the trade-off.",
        ],
        tags: ["Celonis", "Storytelling", "Sustainability"],
        links: [{ label: "LinkedIn Post", href: "https://www.linkedin.com/feed/update/urn:li:activity:7424521708004556800/" }],
    },
    {
        title: "HighPay - Fleet Tracking and Automated Billing",
        context: "AMCEC, Bangalore",
        period: "Oct 2024 – Jan 2025",
        metric: { value: "~40%", label: "less manual work" },
        summary:
            "Real-time fleet tracking and automated billing platform built on Traccar GPS with geofencing, MongoDB, and in-app payments — making every charge traceable to a specific trip and eliminating the ambiguity that caused disputes.",
        highlights: [
            "Real-time GPS tracking with geofencing triggers for automatic trip detection and billing events.",
            "Every charge is traceable to a trip in the data model — transparent usage history accessible to clients in-app.",
        ],
        tags: ["Traccar", "MongoDB", "Geofencing", "Payments"],
        links: [{ label: "GitHub", href: "https://github.com/Laeeq14/HighPay" }],
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
                        End-to-end systems built to production standards — not
                        just to demonstrate concepts.
                    </p>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((p, idx) => (
                        <Reveal
                            key={p.title}
                            delay={(idx % 3) * 100}
                            variant="fade"
                        >
                            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_40px_-30px_color-mix(in_oklab,var(--clay)_30%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-clay/50 hover:shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--clay)_55%,transparent)]">

                                {/* ── Card Header ─────────────────────────────── */}
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

                                {/* ── Summary ──────────────────────────────────── */}
                                <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                                    {p.summary}
                                </p>

                                {/* ── Key Highlights ───────────────────────────── */}
                                <ul className="mt-4 flex-1 space-y-2.5">
                                    {p.highlights.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                                        >
                                            <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-clay/50" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* ── Bottom block pinned to card base ─────────── */}
                                <div className="mt-auto">
                                    {/* Metric Ribbon */}
                                    {p.statsRibbon && p.statsRibbon.length > 0 && (
                                        <div
                                            className="mt-6 grid divide-x divide-border overflow-hidden rounded-xl border border-border bg-secondary/60"
                                            style={{
                                                gridTemplateColumns: `repeat(${p.statsRibbon.length}, 1fr)`,
                                            }}
                                        >
                                            {p.statsRibbon.map((stat, i) => (
                                                <div
                                                    key={i}
                                                    className="flex flex-col items-center gap-0.5 px-3 py-3 text-center"
                                                >
                                                    <span className="text-xl font-bold leading-none text-clay">
                                                        {stat.value}
                                                    </span>
                                                    <span className="mt-1 text-[10px] tracking-wide text-ink-soft/70">
                                                        {stat.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {p.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-sm">
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
                                </div>

                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}