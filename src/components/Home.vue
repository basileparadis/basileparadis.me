<template>
  <div>
    <Navbar />
    <div
      class="spacer"
      style="height:110px"
    ></div>
    <div
      id="about-me"
      class="about-me"
    >
      <SinglePageElement>
        <div slot="content">
          <div class="title">Hi !</div>
          <p>I am a full-stack (backend leaning) software engineer, passionate about web technologies and artificial intelligence.</p>
          <br />
          <p> Graduated with a master's degree from Tsinghua university in Beijing, I was one of the early employees at Aibee, a AI startup where I contributed to building the core face recognition infrastructure, processing video data for hundreds of stores and shopping malls. I've also designed, implemented and deployed multiple web services for demonstration to our clients, under tight deadlines.</p>
          <br />
          <p> In my free time, I enjoy playing guitar, working on personnal software projects and cooking.</p>
          <p> I am also a language-learning enthousiast. I speak Chinese, English, French and Spanish, currently learning Russian.</p>
          <br />
          <div class='level'>
            <a
              class="download-link level-item"
              href="https://github.com/Cephalopode"
            >
              <fa-icon :icon="['fab', 'github']" />Github</a>
            <a
              class="download-link level-item"
              href="https://www.facebook.com/thomas.paradis"
            >
              <fa-icon :icon="['fab','facebook']" />Facebook</a>
          </div>
        </div>
        <img
          slot="media"
          class="medaillon"
          :src="require('@/assets/img/photos/profil.jpg')"
        />
      </SinglePageElement>
    </div>

    <div class="hr-wrap container">
      <hr>
    </div>

    <!-- TODO: put this section into project section -->
    <div
      id="projects"
      class="projects"
    >
      <SinglePageElement reversed>
        <div slot="content">
          <div class="title">Wiki Popup</div>
          <p>
            Some technical terms may be difficult to translate in different languages but fear not! Wikipedia, with its millions of multi-lingual articles is here to save you!
          </p><br />
          <p>
            This simple extension allows you to quickly check the word translations provided by Wikipedia. Just use your mouse to highlight a word or a group of word and a popup will appear, providing translation and definition.
            Just go to the options menu to configure the languages you want to appear in the popup.
          </p>
          <br />
          <div class="level">
            <a
              class="download-link level-item"
              href="https://chrome.google.com/webstore/detail/wiki-popup/needbkjfeeapnlgefnpoebhojcogflej"
            >
              <fa-icon :icon="['fab','chrome']" />Add to Chrome
            </a>
            <a
              class="download-link level-item"
              href="https://github.com/Cephalopode/Wiki_popup"
            >
              <fa-icon :icon="['fab','github']" />Github
            </a>
          </div>
        </div>
        <img
          slot="media"
          class="image"
          :src="require('@/assets/img/illustrations/wiki-popup.png')"
        />
      </SinglePageElement>
      <SinglePageElement reversed>
        <div slot="content">
          <div class="title">PhonedicDict</div>
          <p>
            Often when learning a foreign language, we hear a lot of new words.
            A french learner may hear a word that sounds like "O" but without knowing that the french spelling is "eau", they are unable to find it in a dictionary.
            Now, with "PhoneticDict" you can input the french pronunciation and find the spelling and definition !
          </p><br />
          <p>
            This app is designed for french language learners who have already learned basic french pronunciation.<br />
            Please read "HOW TO USE" first.
          </p>
          <br />
          <div class="level">
            <a
              class="download-link level-item"
              href="http://thomasparadis.me:3000/"
            >
              <fa-icon :icon="['fas','play-circle']" />Website
            </a>
            <a
              class="download-link level-item"
              href="https://github.com/Cephalopode/PhoneticDict_Web"
            >
              <fa-icon :icon="['fab','github']" />Github
            </a>
          </div>
        </div>
        <img
          slot="media"
          class="image"
          :src="require('@/assets/img/illustrations/phonetic_dict.png')"
        />
      </SinglePageElement>
      <SinglePageElement reversed>
        <div slot="content">
          <div class="title">Image crawling server</div>
          <p>A simple web crawler API that fetches all images on a given domain. Written as an excercice to test go concurrency features</p>
          <br />
          <div class="level">
            <a
              class="download-link level-left"
              href="https://github.com/Cephalopode/mims_web_crawler"
            >
              <fa-icon :icon="['fab','github']" />
              Github
            </a>
          </div>
        </div>
        <img
          slot="media"
          class="image"
          style="height:240px; margin:-50px"
          :src="require('@/assets/img/illustrations/icons/laptop-globe.svg')"
        />

      </SinglePageElement>
    </div>

    <div class="hr-wrap container">
      <hr>
    </div>
    <div
      id="contact"
      class="contact"
    >
      <SinglePageElement>
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

