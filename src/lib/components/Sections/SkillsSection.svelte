<script lang="ts">
  import { SectionHeadline } from "$components";

  interface SkillsSectionProps {
    skills: Skill[];
  }

  let { skills }: SkillsSectionProps = $props();
</script>

<section class="mt-l">
  <SectionHeadline sectionName="skills">Skills</SectionHeadline>
  <div class="wrapper default-margin">
    <div class="skills-container mt-m">
      {#each skills as skill}
        <i class={skill.iconClass}></i>
      {/each}
    </div>
  </div>
</section>
