<script lang="ts">
  let { data } = $props();

  const { company, name, dateAccomplished, stack, projectImageUrl, content } =
    data.project;

  function getTagFromStyle(style: ProcessedTextContent["style"]): string {
    if (style === "normal") {
      return "p";
    } else {
      return style;
    }
  }

  $inspect(data);
</script>

<main class="default-margin work-page">
  <h4>{company}</h4>
  <div class="underscore"></div>
  <h2 class="mb-s">{name}</h2>
  <img class="project-image" src={projectImageUrl} alt="" />
  <div class="project-container mt-m">
    <div class="meta-data">
      <h3 class="semi-bold">Date</h3>
      <p>{dateAccomplished.slice(0, 7)}</p>
      <h3 class="semi-bold mt-m">Tech Stack</h3>
      <ul>
        {#each stack as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
    <div class="project-text">
      {#each content as block}
        {#if block.type === "text"}
          <svelte:element this={getTagFromStyle(block.style)}
            >{block.textToRender}</svelte:element
          >
        {:else}
          <img class="content-image" src={block.url} alt="" />
        {/if}
      {/each}
    </div>
  </div>
</main>

<style>
  .work-page {
    padding-top: 80px;
    padding-bottom: 140px;
  }

  .project-image {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
  }

  .content-image {
    width: 100%;
  }

  .project-container {
    display: flex;
  }

  .meta-data {
    min-width: 200px;
  }
</style>
