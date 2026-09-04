import { useEffect, useState } from "react";
import pic1 from "@/assets/pic1.jpeg";
import pic2 from "@/assets/pic2.jpeg";
import pic3 from "@/assets/pic3.jpeg";
import pic4 from "@/assets/pic4.jpeg";
import pic8 from "@/assets/pic8.jpeg";
import pic9 from "@/assets/pic9.jpeg";
import { Reveal } from "./Reveal";

// ── Tier 1: Flagship field work & hackathons ─────────────────────────────────
const featured = [
    {
        place: "In Person",
        title: "Google Cloud Labs: Data Cloud",
        org: "Google Developer Groups (GDG) - Google Chicago Office",
        date: "Summer 2026",
        detail: "Hands-on workshop led by Google engineers at the Google Chicago office, bridging traditional data analytics and agentic AI across three production-focused tracks:",
        highlights: [
            "Lakehouse Architecture: Provisioned an Apache Iceberg REST Catalog, processed unstructured logs via serverless Managed Spark, and established ingestion guardrails using Knowledge Catalog.",
            "Multimodal Vector Search: Used BigQuery AI to detect thermal anomalies in port security images, generated vector embeddings, and loaded them into AlloyDB for real-time telemetry search.",
            "Graph Analytics & NL Querying: Built a BigQuery Property Graph linking company, vessel, and manifest data - queried in natural language via Conversational Analytics with column-level access control.",
        ],
        photos: [
            { src: pic8, alt: "Google Cloud Labs session at the Google Chicago office" },
            { src: pic9, alt: "At the Google Chicago office lobby" },
        ],
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7424521708004556800/",
    },
    {
        place: "2nd Place",
        title: "Analytics for Good Hackathon",
        org: "Carlson School of Management, University of Minnesota",
        date: "Jan 2026",
        detail: 'Analyzed global corporate travel data to reframe sustainability as "Green ROI" - tying emissions to revenue per trip so leadership could make an actual data-backed trade-off.',
        highlights: [
            "Used Celonis to surface actionable levers: trains over flights, economy class, and cleaner vehicle tiers in Europe; modeled a regionalized hub structure with projected savings.",
            "Delivered an executive-style pitch that gave non-technical leadership a clear, defensible decision framework - not just a carbon number.",
        ],
        photos: [
            { src: pic4, alt: "Analytics for Good Hackathon team on stage with awards" },
            { src: pic3, alt: "Analytics for Good Hackathon team portrait" },
        ],
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7424521708004556800/",
    },
    {
        place: "Finalist",
        title: "Origin House Hackathon - CareFlow AI",
        org: "Origin House - Minneapolis",
        date: "Apr 2026",
        detail: "Built a multi-agent home health referral system that compresses a 72-hour intake backlog into under a minute - end-to-end, in 24 hours.",
        highlights: [
            "7-stage document pipeline (OCR -> extraction -> validation -> clinical normalization) followed by three Tinyfish web agents navigating insurance portals and nurse scheduling systems autonomously.",
            "Demoed on real-world patient data; intake -> eligibility check -> placement -> first-visit booking in under 60 seconds.",
        ],
        photos: [
            { src: pic1, alt: "Origin House hackathon workspace, team building CareFlow AI" },
            { src: pic2, alt: "CareFlow AI team at the Origin House hackathon" },
        ],
    },
];

// ── Tier 2: Compact credentials strip ────────────────────────────────────────
const credentials = [
    {
        name: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        date: "In Progress - Sept 2026",
    },
    {
        name: "AWS Academy Cloud Foundations & Data Engineering",
        issuer: "AWS Academy",
        date: "Jul - Sept 2024",
    },
    {
        name: "Data Science for Engineers - Elite",
        issuer: "NPTEL / IIT Madras",
        date: "Sept 2023",
    },
    {
        name: "Google Data Analytics Professional Certificate",
        issuer: "Google / Coursera",
        date: "May 2023",
    },
];

// ── Lightbox ──────────────────────────────────────────────────────────────────
type LightboxState = { src: string; alt: string } | null;

function Lightbox({ photo, onClose }: { photo: LightboxState; onClose: () => void }) {
    // Close on Escape key
    useEffect(() => {
        if (!photo) return;
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [photo, onClose]);

    // Lock body scroll while open
    useEffect(() => {
        document.body.style.overflow = photo ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [photo]);

    if (!photo) return null;

    return (
        /* Backdrop */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={photo.alt}
            style={{ animation: "lb-in 180ms ease" }}
        >
            {/* Image container — stop propagation so clicking image itself doesn't close */}
            <div
                className="relative max-h-[90dvh] max-w-[90dvw]"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={photo.src}
                    alt={photo.alt}
                    className="block max-h-[90dvh] max-w-[90dvw] rounded-xl object-contain shadow-2xl"
                />
                {/* Caption */}
                {photo.alt && (
                    <p className="mt-2 text-center text-xs text-white/60">{photo.alt}</p>
                )}
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition hover:bg-white/25"
                    aria-label="Close lightbox"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                        strokeLinejoin="round" className="h-3.5 w-3.5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            {/* Keyframe injected inline so no CSS file change needed */}
            <style>{`@keyframes lb-in { from { opacity:0; } to { opacity:1; } }`}</style>
        </div>
    );
}

// ── Main component ────────────────────────────────────────────────────────────
export function Achievements() {
    const [lightbox, setLightbox] = useState<LightboxState>(null);

    return (
        <section id="hackathons" className="border-t border-border/60 bg-paper/40">
            {/* Lightbox portal */}
            <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />

            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <Reveal>
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-clay">
                        Beyond the code
                    </p>
                    <h2 className="font-serif text-4xl text-ink md:text-5xl">
                        Extracurriculars &amp; achievements.
                    </h2>
                </Reveal>

                {/* Tier 1: Flagship field work */}
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featured.map((h, idx) => (
                        <Reveal key={h.title} delay={(idx % 3) * 100} variant="fade">
                            <article className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/30 hover:shadow-[0_25px_50px_-30px_color-mix(in_oklab,var(--clay)_35%,transparent)]">

                                {/* Photo strip: full card width, 16:9 aspect ratio */}
                                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                                    <div
                                        className="absolute inset-0 grid gap-0.5 bg-secondary/80"
                                        style={{
                                            gridTemplateColumns: `repeat(${h.photos.length}, 1fr)`,
                                        }}
                                    >
                                        {h.photos.map((p) => (
                                            <button
                                                key={p.alt}
                                                type="button"
                                                onClick={() => setLightbox({ src: p.src, alt: p.alt })}
                                                className="group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
                                                aria-label={`View full image: ${p.alt}`}
                                            >
                                                <img
                                                    src={p.src}
                                                    alt={p.alt}
                                                    loading="lazy"
                                                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                                />
                                                {/* Hover hint overlay */}
                                                <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="none" stroke="white" strokeWidth="1.75"
                                                        strokeLinecap="round" strokeLinejoin="round"
                                                        className="h-7 w-7 drop-shadow-lg">
                                                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                                    </svg>
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Text - sits below the strip */}
                                <div className="p-6 md:p-7">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex items-center rounded-full bg-clay/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-clay">
                                            {h.place}
                                        </span>
                                        <span className="text-xs text-ink-soft/70">{h.date}</span>
                                    </div>
                                    <h3 className="mt-3 font-serif text-xl text-ink">{h.title}</h3>
                                    <p className="mt-1 text-sm text-clay">{h.org}</p>
                                    <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
                                        {h.detail}
                                    </p>
                                    {h.highlights && h.highlights.length > 0 && (
                                        <ul className="mt-3 space-y-2">
                                            {h.highlights.map((item: string, i: number) => (
                                                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                                                    <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-clay/50" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {h.link && (
                                        <a
                                            href={h.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-block text-sm text-clay underline-offset-4 transition-colors hover:underline"
                                        >
                                            LinkedIn post
                                        </a>
                                    )}
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                {/* Tier 2: Credentials strip */}
                <Reveal className="mt-8" variant="fade" delay={120}>
                    <div className="rounded-2xl border border-border bg-card p-6">
                        <p className="mb-1 text-[11px] uppercase tracking-widest text-clay">
                            Credentials &amp; Certifications
                        </p>
                        <p className="mb-5 text-xs text-ink-soft/60">
                            Courses, certs, and recognitions outside the flagship work above
                        </p>
                        <ul className="divide-y divide-border">
                            {credentials.map((c) => (
                                <li
                                    key={c.name}
                                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 py-3"
                                >
                                    <span className="text-[14px] text-ink">{c.name}</span>
                                    <span className="shrink-0 text-xs text-ink-soft/60">
                                        {c.issuer} - {c.date}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}