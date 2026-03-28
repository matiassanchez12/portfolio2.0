import About from "@/components/sections/about";
import Reachout from "@/components/sections/reachout";
import { Reveal } from "@/components/common/reveal";
import Experience from "@/components/sections/experience";
import { Separator } from "@/components/ui/separator";
import { createMetadata } from "@/lib/createMetadata";
import { siteConfig } from "@/config/site";
import Container from "@/components/common/container";

export const metadata = createMetadata({
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  path: "/",
});

export { viewport } from "@/lib/viewport";


export default function HomePage() {
  return (
    <Container>
      <div className="min-h-screen transition-colors duration-300 relative">
        <div className="relative mx-auto max-w-4xl">
          {/* Intro Section */}
          <Reveal delay={0.1}>
            <About />
          </Reveal>

          <Reveal delay={0.2}>
            <Separator className="my-6 sm:my-8" />
          </Reveal>

          {/* Experience Section */}
          <Reveal delay={0.3}>
            <Experience />
          </Reveal>

          <Reveal delay={0.4}>
            <Separator className="my-6 sm:my-8" />
          </Reveal>

          {/* Contact / Reachout */}
          <Reveal delay={0.8}>
            <Reachout />
          </Reveal>
        </div>
      </div>
    </Container>
  );
}
