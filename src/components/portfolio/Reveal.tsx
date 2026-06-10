import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
    children: ReactNode;
    className?: string;
    delay?: number;
    as?: "div" | "section" | "article" | "li";
    /** "slide" (default) = slide-up + fade for headings/heroes.
     *  "fade" = opacity-only for cards / grid content. */
    variant?: "slide" | "fade";
};

export function Reveal({
    children,
    className,
    delay = 0,
    as: Tag = "div",
    variant = "slide",
}: Props) {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const baseClass = variant === "fade" ? "reveal-fade" : "reveal";

    return (
        <Tag
            ref={ref as never}
            style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
            className={cn(baseClass, visible && "is-visible", className)}
        >
            {children}
        </Tag>
    );
}