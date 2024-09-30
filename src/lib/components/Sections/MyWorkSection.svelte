<script lang="ts">
  import SectionHeadline from "$components/SectionHeadline.svelte";

  interface MyWorkSectionProps {
    projects: ProcessedProject[];
  }
  let { projects }: MyWorkSectionProps = $props();
  const mainProject = projects[0];
  const otherProjects = projects.slice(1);
</script>

<section class="mt-l">
  <SectionHeadline sectionName="my-work">My Work</SectionHeadline>
  <div class="default-margin projects-container mt-m">
    <article class="main-project mb-m">
      <a href={`/work/${mainProject.slug}`}>
        <img src={mainProject.projectImageUrl} alt={mainProject.name} />
      </a>
      <div class="project-info mt-s">
        <div class="title-and-company">
          <h3 class="semi-bold">{mainProject.name}</h3>
          <p class="company dark-grey">{mainProject.company}</p>
        </div>
        <a href={`/work/${mainProject.slug}`} class="btn-to-article">→</a>
      </div>
    </article>
    <div class="more-projects-container">
      {#each otherProjects as project}
        <article class="project">
          <a href={`/work/${project.slug}`}>
            <img src={project.projectImageUrl} alt={project.name} />
          </a>
          <div class="project-info mt-s">
            <div class="title-and-company">
              <h3 class="semi-bold">{project.name}</h3>
              <p class="company dark-grey">{project.company}</p>
            </div>
            <a href={`/work/${project.slug}`} class="btn-to-article">→</a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
