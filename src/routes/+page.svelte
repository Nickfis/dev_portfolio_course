<script>
  import {
    AboutMeSection,
    ContactSection,
    HeroSection,
    MyWorkSection,
    SkillsSection,
  } from "$components";

  const { data } = $props();
  let { workExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />
