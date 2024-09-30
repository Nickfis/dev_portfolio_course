<script lang="ts">
  import { Button, SectionHeadline } from "$components";

  function onSubmit(event: Event) {
    event.preventDefault();
    console.log(event);
  }
</script>

<section class="mt-l">
  <SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>
  <div class="form-container default-margin mt-m">
    <form>
      <input class="text-input mb-m" placeholder="Your Name" />
      <input class="text-input mb-m" placeholder="Your Email" />
      <textarea placeholder="Tell me what's up."> </textarea>
      <Button onclick={onSubmit}>Submit</Button>
    </form>
    <div class="form-text">
      <h3 class="bold mb-s">Talk to me about your project</h3>
      <p>
        I'm always excited to hear about new and innovative ideas! Whether
        you're in the early stages of planning or have a well-defined project,
        I'm here to help bring your vision to life. Feel free to drop me a
        message with some details about your project, and let's start a
        conversation about how we can work together. I look forward to
        connecting with you and discussing the possibilities. Talk to you soon!
      </p>
    </div>
  </div>
</section>
