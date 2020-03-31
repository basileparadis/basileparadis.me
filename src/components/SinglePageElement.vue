<template>
  <section class="container">
    <!-- <div class="notification about-us"> -->
    <div
      class="columns"
      :class="{ 'reversed': reversed}"
    >
      <div class="column is-5 media">
        <slot name="media"></slot>
      </div>
      <div class="column">
        <div class="section">
          <div class="columns is-centered is-vcentered">
            <div class="column is-12">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>

      <!-- </div> -->
    </div>
  </section>

</template>

<script>
export default {
  name: "SinglePageElement",
  props: {
    reversed: Boolean,
    text: String
  }
};
</script>

