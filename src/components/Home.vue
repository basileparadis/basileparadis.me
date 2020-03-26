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
        <p>Full-stack software engineer passionate about web technologies and artificial intelligence.</p>
        <br />
        <p> Graduated with a master's degree from Tsinghua university, I was one of the early employees at Aibee, a AI startup where I contributed to building the core face recognition infrastructure, processing video data for hundreds of stores and shopping malls. I've also designed, implemented and deployed multiple web services for demonstration to our clients, under tight deadlines.</p>
        <br />
        <p> I speak Chinese, English, French and Spanish, currently learning Russian.</p>
        <a
          class="download-link"
          href="https://github.com/Cephalopode"
        >Github</a>&nbsp;&nbsp;&nbsp;<a
          class="download-link"
          href="https://www.facebook.com/thomas.paradis"
        >Facebook</a>
      </div>
      <img
        slot="media"
        class="medaillon"
        :src="require('@/assets/img/photos/profil.jpg')"
      />
    </SinglePageElement>

    <div class="hr-wrap container">
      <hr>
    </div>

    <!-- TODO: put this section into project section -->
    <SinglePageElement
      sectionName="projects"
      reversed
    >
      <div slot="content">
        <div class="title">Wiki Popup</div>
        <p>
          Some technical terms may be difficult to translate in different languages but fear not! Wikipedia, with its millions of multi-lingual articles is here to save you!
        </p><br />
        <p>
          This simple extension allows you to quickly check the word translations provided by Wikipedia. Just use your mouse to highlight a word or a group of word and a popup will appear, providing translation and definition.
          Just go to the options menu to configure the languages you want to appear in the popup.
        </p>
        <p><a
            class="download-link"
            href="https://chrome.google.com/webstore/detail/wiki-popup/needbkjfeeapnlgefnpoebhojcogflej"
          >Add to Chrome</a></p>
      </div>
      <img
        slot="media"
        class="image"
        :src="require('@/assets/img/illustrations/wiki-popup.png')"
      />
    </SinglePageElement>
    <SinglePageElement
      sectionName="projects"
      reversed
    >
      <div slot="content">
        <div class="title">Image crawling server</div>
        <p>A simple web crawler that fetches all images on a given domain. Written as an excercice to test go concurrency features</p>
        <p><a
            class="download-link"
            src="https://github.com/Cephalopode/mims_web_crawler"
          >Github Repo</a></p>
      </div>
      <img
        slot="media"
        class="image"
        style="height:240px"
        :src="require('@/assets/img/illustrations/icons/laptop-globe.svg')"
      />

    </SinglePageElement>

    <div class="hr-wrap container">
      <hr>
    </div>

    <SinglePageElement sectionName="contact">
      <div slot="content">
        <div class="title">Contact </div>
        <br />
        <p class="subtitle">Let's get in touch!</p>
        <div class="form-module--component--1t7o4">
          <form
            action="https://formspree.io/mgekdqno"
            method="POST"
          >
            <div class="block"><label class="label">Email</label><input
                class="input"
                type="email"
                name="email"
                required=""
              ></div>
            <div class="block"><label class="label">Message</label><textarea
                class="textarea"
                name="message"
                required=""
              ></textarea></div><button class="button is-warning">Send</button>
          </form>
        </div>

      </div>
      <!-- q=place_id:ChIJgT8y_RgayUwRRNyCn1aLHmU -->
      <iframe
        class="image"
        slot="media"
        frameborder="0"
        style="width:500px;height:400px"
        src="https://www.google.com/maps/embed/v1/view?center=45.5073281,-73.5919971&zoom=9&key=AIzaSyDPDh-ISuPWQSZp9KF-YNZP1DJjRx_dP70"
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

