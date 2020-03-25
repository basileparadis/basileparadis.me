<template>
  <div>
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a
            class="navbar-item logo"
            href=""
          >
            <!-- 太丑了吧 <img :src="require('@/assets/img/icons/logo.webp')" /> -->
            Thomas <b>Paradis</b>
          </a>
          <a
            id="navbar-burger"
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="menubar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="menubar"
          class="navbar-menu"
        >
          <div class="navbar-end">
            <a
              class="navbar-item"
              data-target="about-me"
            >About me</a>
            <a
              class="navbar-item"
              data-target="projects"
            >Projects</a>
            <a
              class="navbar-item"
              data-target="contact"
            >Contact</a>
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar-shadow navbar is-fixed-top"></nav>
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;

export default {
  mounted() {
    $(window).scroll(function() {
      var y = $(window).scrollTop();
      if (y > 0) {
        $(".navbar-shadow").css({ opacity: y / 20 });
      } else {
        $(".navbar-shadow").css({ opacity: y / 20 });
      }
    });
  }
};
</script>