import pic1 from "@/assets/pic1.jpeg";
import pic2 from "@/assets/pic2.jpeg";
import pic3 from "@/assets/pic3.jpeg";
import pic4 from "@/assets/pic4.jpeg";
import { Reveal } from "./Reveal";
const hackathons = [
    {
        place: "2nd Place",
        title: "Analytics for Good Hackathon",
        org: "Carlson School of Management, University of Minnesota", date: "Jan 2026",
        detail:
            "Built sustainability dashboards and a \"Green ROI\" framing for global corporate travel data in 24 hours, tying emissions to revenue per trip so leadership could actually make the trade-off.",
        photos: [
            { src: pic4, alt: "Analytics for Good Hackathon team on stage with awards" },
            { src: pic3, alt: "Analytics for Good Hackathon team portrait" },
        ],
    },
    {
        place: "Finalist",
        title: "Origin House Hackathon - CareFlow AI",
        org: "Origin House",
        date: "Apr 2026",
        detail:
            "Coordinated a swarm of AI agents for home health referral intake, taking routing decisions from days down to under a minute on real-shaped data.",
        photos: [
            { src: pic1, alt: "Origin House hackathon workspace, team building CareFlow AI" },
            { src: pic2, alt: "CareFlow AI team at the Origin House hackathon" },
        ],
    },
];
const honors = [
    {
        place: "Built",
        title: "TechTonic - Personalized Pregnancy Tracker",
        org: "DSATM",
        date: "Jul 2024",
        detail:
            "Created an analytics-driven pregnancy tracker in 24 hours, focused on personalized week by week guidance.",
    },
    {
        place: "Elite",
        title: "Data Science for Engineers, NPTEL",
        org: "IIT Madras",
        date: "Sep 2023",
        detail:
            "Earned the top tier among certified candidates in IIT Madras's flagship data science course.",
    },
];

export function Achievements() {
    return (
        <section id="hackathons" className="border-t border-border/60 bg-paper/40">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <Reveal>
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-clay">
                        Hackathons &amp; honors
                    </p>
                    <h2 className="font-serif text-4xl text-ink md:text-5xl">
                        A few things I&apos;m proud of.
                    </h2>
                </Reveal>

                <div className="mt-12 space-y-8">
                    {hackathons.map((h, idx) => (
                        <Reveal key={h.title} delay={idx * 100} variant="fade">
                            <article className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-clay/40 hover:shadow-[0_25px_50px_-30px_color-mix(in_oklab,var(--clay)_45%,transparent)]">
                                <div className="grid gap-0 md:grid-cols-2">
                                    <div className="grid grid-cols-2 gap-1 bg-secondary p-1">
                                        {h.photos.map((p) => (
                                            <div key={p.src} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                                                <img
                                                    src={p.src}
                                                    alt={p.alt}
                                                    loading="lazy"
                                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <div className="flex items-center gap-3">
                                            <span className="inline-flex items-center rounded-full bg-clay/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-clay">
                                                {h.place}
                                            </span>
                                            <span className="text-xs text-ink-soft/70">{h.date}</span>
                                        </div>
                                        <h3 className="mt-3 font-serif text-2xl text-ink">{h.title}</h3>
                                        <p className="mt-1 text-sm text-clay">{h.org}</p>
                                        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                                            {h.detail}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                    <div className="grid gap-4 pt-2 md:grid-cols-2">
                        {honors.map((i, idx) => (
                            <Reveal key={i.title} delay={idx * 100} variant="fade">
                                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-clay/40">
                                    <div className="flex items-baseline justify-between gap-4">
                                        <span className="font-serif text-lg text-clay">{i.place}</span>
                                        <span className="text-xs text-ink-soft/70">{i.date}</span>
                                    </div>
                                    <h3 className="mt-2 font-serif text-xl text-ink">{i.title}</h3>
                                    <p className="text-sm text-ink-soft/80">{i.org}</p>
                                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                                        {i.detail}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}