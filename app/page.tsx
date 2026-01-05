import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsDiagram from "@/components/SkillsDiagram";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Affiliations from "@/components/Affiliations";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import EducationTimeline from "@/components/EducationTimeline";
import Footer from "@/components/Footer";
import { client } from "@/lib/sanity";
import { footerQuery } from "@/lib/queries";
import { navigationQuery } from "@/lib/queries";

export default async function Home() {
  // ===== CMS DATA =====
 const navigation = await client.fetch(navigationQuery);
  const about = await client.fetch(`
    *[_type=="about"][0]{
      name,
      bio,
      "profileImage": profileImage.asset->url
    }
  `);

  const skills = await client.fetch(`
    *[_type=="skills"][0]
  `);

  const projects = await client.fetch(`
  *[_type=="project"] | order(title asc){
    title,
    description,
    tech,
    link,
    "image": image.asset->url
  }
`);


  const publications = await client.fetch(`
    *[_type=="publication"] | order(year desc){
       title,
    publicationType,
    source,
    status,
    link,
    date
    }
  `);

const affiliations = await client.fetch(`
  *[_type=="affiliations"]
  | order(_createdAt desc){
    name,
    position,
    place,
    sessionYear,
    "logo": logo.asset->url
  }
`, {}, { cache: "no-store" });

  const achievements = await client.fetch(`
*[_type == "achievement"] | order(date desc) {
      title,
      description,
      date,
      "image": image.asset->url
    }
`);

  const certifications = await client.fetch(`
 *[_type == "certifications"]{
  name,
  organization,
  year,
  "fileUrl": file.asset->url,
  "fileType": file.asset->mimeType
}
`);
    const footer = await client.fetch(footerQuery);

  const education = await client.fetch(`
  *[_type=="education"] | order(year desc){
    degree,
    institution,
    year,
    details,
    "logoUrl": logo.asset->url
  }
`);

  return (
    <>
      <Navbar navigation={navigation} />


      <main className="overflow-x-hidden">
        <section id="home">
          <Hero about={about} />
        </section>

        <section id="about">
          <About about={about} />
        </section>

        <section id="education">
          <EducationTimeline data={education} />
        </section>

        <section id="skills">
          <SkillsDiagram skills={skills} />
        </section>

        <section id="projects">
          <Projects projects={projects} />
        </section>

        <section id="publications">
           <Publications data={gpublications} />
       </section>

        <section id="affiliations">
          <Affiliations data={affiliations} />
        </section>

        <section id="achievements">
          <Achievements data={achievements} />
        </section>

        <section id="certifications">
          <Certifications data={certifications} />
        </section>
      </main>

      <Footer data={footer} />
    </>
  );
}
