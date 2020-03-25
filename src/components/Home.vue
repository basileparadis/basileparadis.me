<template>
  <div>
    <Navbar />
    <div
      class="spacer"
      style="height:4.0rem"
    ></div>
    <SinglePageElement sectionName="about-me">
      <div slot="content">
        <div class="title">About me</div>
        <p>Full-stack software engineer passionate about web technologies and artificial intelligence. Graduated with a master's degree from Tsinghua university, I was one of the early employees at Aibee, a AI startup where I contributed to building the core face recognition infrastructure, processing video data for hundreds of stores and shopping malls. I've also designed, implemented and deployed multiple web services for demonstration to our clients, under tight deadlines. I speak Chinese, English, French and Spanish, currently learning Russian.
          Github/Facebook</p>
      </div>
      <figure
        slot="media"
        class="image"
        :style="{ 'background-image':'url('+require('@/assets/img/photos/waitress.webp')+')'}"
      />
    </SinglePageElement>

    <SinglePageElement
      sectionName="projects"
      reversed
    >
      <div slot="content">
        <div class="title">Projects</div>
        <p>
          We serve wholesome and homemade salads, sandwiches, wraps and warm plates.
        </p><br />
        <p>
          We are very vegetarian friendly and have vegan options too. We are continuously working on widening our vegan menu.
        </p><br />
        <p>
          Don't forget try our famous Açai bowl and bring your friends to Sunday
          All-you-can-eat brunch!
        </p>
      </div>
      <figure
        slot="media"
        class="image"
        :style="{ 'background-image':'url('+require('@/assets/img/photos/our_food.webp')+')'}"
      />
    </SinglePageElement>
    <SinglePageElement
      sectionName="contact"
      reversed
    >
      <div slot="content">
        <div class="title">Find us</div>
        <p>En Juicebar Cafe

          6 Fredriksdalsgatan, Hammarby Sjöstad, 12032 Stockholm

          Weekdays closed for the season until Spring 2020
          Weekend 1000 - 1500

          ​
        </p><br />
        <p>
          Tanto Juicebar

          Tantogatan 85, Tantolunden Södermalm, 11842 Stockholm

          Closed for the season, see you in Spring! </p>
      </div>
      <iframe
        class="image"
        slot="media"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJy641sB94X0YRfrdfKN0Hm9o&key=AIzaSyDPDh-ISuPWQSZp9KF-YNZP1DJjRx_dP70"
        allowfullscreen
      ></iframe>
    </SinglePageElement>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import { singlePageFeatures } from "../utils/single_page";
import SinglePageElement from "./SinglePageElement";
import Navbar from "./Navbar";

// @Component
export default {
  components: { Navbar, SinglePageElement },
  created() {
    console.log("is created");
  },
  mounted() {
    singlePageFeatures();
  }
};
</script>

