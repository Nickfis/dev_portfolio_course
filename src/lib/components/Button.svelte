<script lang="ts">
  import type { Snippet } from "svelte";

    interface ButtonProps {
        children: Snippet,
        onclick: ((e: MouseEvent) => void | (() => void))
        className?: string;
    }

  let { children, className, ...props }: ButtonProps = $props();
</script>

<button class={`btn ${className}`} {...props}>
    {@render children()}
</button>
