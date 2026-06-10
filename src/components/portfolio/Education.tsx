import pic6 from "@/assets/pic6.jpeg";
import { Reveal } from "./Reveal";

const items = [
    {
        school: "University of Minnesota, Twin Cities",
        sub: "College of Science and Engineering",
        degree: "Master of Science in Data Science",
        period: "Sept 2025 – May 2027 (Expected)",
        detail:
            "Relevant Coursework: Statistical and Machine Learning, DBMS, Data Mining, Computer Security, Data Visualization, Bayesian Analysis",
    },
    {
        school: "AMC Engineering College (VTU), Bangalore",
        sub: "Bachelor of Engineering, Computer Science and Engineering",
        degree: "CGPA: 8.81 / 10",
        period: "Dec 2021 – July 2025",
        detail:
            "Relevant Coursework: Linear Algebra, Probability & Statistics, Data Structures & Algorithms, Database Management Systems, OOP, Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence and Machine Learning, Computer Graphics and Image Processing",
        photo: pic6,
        photoAlt: "Laeeq at the AMC Engineering College graduation ceremony",
    },
];

export function Education() {
    return (
        <section id="education" className="border-t border-border/60">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <Reveal>
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-clay">
                        Education
                    </p>
                    <h2 className="font-serif text-4xl text-ink md:text-5xl">
                        Where I trained.
                    </h2>
                </Reveal>

                <div className="mt-12 space-y-6">
                    {items.map((it, idx) => (
                        <Reveal key={it.school} delay={idx * 100} variant="fade">
                            <article className="grid gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-clay/40 hover:shadow-[0_20px_40px_-25px_color-mix(in_oklab,var(--clay)_45%,transparent)] md:grid-cols-[1fr_auto] md:gap-10 md:p-8">
                                <div>
                                    <h3 className="font-serif text-2xl text-ink">{it.school}</h3>
                                    <p className="mt-1 text-sm text-clay">{it.sub}</p>
                                    <p className="mt-3 text-[15px] text-ink-soft">{it.degree}</p>
                                    <p className="mt-1 text-sm text-ink-soft/70">{it.period}</p>
                                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                                        {it.detail}
                                    </p>
                                </div>
                                {it.photo && (
                                    <div className="group relative overflow-hidden rounded-xl bg-secondary md:w-64">
                                        <img
                                            src={it.photo}
                                            alt={it.photoAlt}
                                            loading="lazy"
                                            className="h-full max-h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}