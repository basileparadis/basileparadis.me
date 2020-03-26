<template>
  <div>
    <nav
      class="main-nav navbar is-fixed-top"
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
            Thomas <b class="paradis">Paradis</b>
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
              class="navbar-item about-me"
              data-target="about-me"
            >About me</a>
            <a
              class="navbar-item projects"
              data-target="projects"
            >Projects</a>
            <a
              class="navbar-item contact"
              data-target="contact"
            >Contact</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- <nav class="navbar-shadow navbar is-fixed-top"></nav> -->
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;

export default {
  mounted() {
    let there = this;
    $(window).scroll(function() {
      there.adjustShadow();
    });

    const observer = new MutationObserver(this.adjustShadow);
    // Start observing the target node for configured mutations
    observer.observe($("#menubar")[0], { attributes: true });
  },
  methods: {
    adjustShadow(mutationList) {
      var y = $(window).scrollTop();
      let opactity =
        $(".navbar-menu").hasClass("is-active") | (y > 50)
          ? 0.2
          : 0.2 * (y / 50);
      let shadow = `0px 0px 20px 0px rgba(0, 0, 0, ${opactity}`;
      $(".navbar").css({
        "box-shadow": shadow
      });
    }
  }
};
</script>