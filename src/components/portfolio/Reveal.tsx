import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
type Props = {
    children: ReactNode;
    className?: string;
    delay?: number;
    as?: "div" | "section" | "article" | "li";
};
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
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
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return (
        <Tag
            ref={ref as never}
            style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
            className={cn("reveal", visible && "is-visible", className)}
        >
            {children}
        </Tag>
    );
}