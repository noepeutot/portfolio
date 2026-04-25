import { Navbar } from "@/app/components/navbar";
import { Cover } from "@/app/components/cover";
import { ProfileHeader } from "@/app/components/profile-header";
import { Overview } from "@/app/components/overview";
import { SocialLinks } from "@/app/components/social-links";
import { About } from "@/app/components/about";
import { Skills } from "@/app/components/skills";
import { Projects } from "@/app/components/projects";
import { Experiences } from "@/app/components/experiences";
import { Education } from "@/app/components/education";
import { Footer } from "@/app/components/footer";
import { Separator } from "@/app/components/separator";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="mx-auto w-full md:max-w-3xl">
        <Cover />
        <ProfileHeader />
        <Separator />

        <Overview />
        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <Skills />
        <Separator />

        <Projects />
        <Separator />

        <Experiences />
        <Separator />

        <Education />
        <Separator />

        <Footer />
      </main>
    </>
  );
}
