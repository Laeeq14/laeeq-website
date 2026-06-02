import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Laeeq Ahmed Fazil — Data Science, M.S. @ University of Minnesota" },
            {
                name: "description",
                content:
                    "Portfolio of Laeeq Ahmed Fazil — graduate student in Data Science building machine learning models, dashboards, and analytics tools that get used.",
            },
            { property: "og:title", content: "Laeeq Ahmed Fazil — Data Science Portfolio" },
            {
                property: "og:description",
                content:
                    "Machine learning, dashboards, and data tools. Selected projects, experience, and ways to get in touch.",
            },
        ],
    }),
    component: Index,
});

function Index() {
    return <Portfolio />;
}
