import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Achievements } from "./Achievements";
import { Contact } from "./Contact";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Portfolio() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Nav />
            <main>
                <Hero />
                <About />
                <Education />
                <Projects />
                <Experience />
                <Skills />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}