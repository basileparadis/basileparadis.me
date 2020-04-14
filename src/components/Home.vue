<template>
  <div>
    <Navbar />
    <div class="spacer"></div>
    <div id="about-me" class="subject about-me">
      <SinglePageElement>
        <div slot="content">
          <div class="title">Hi !</div>
          <p>
            I am a full-stack (backend leaning) software engineer, passionate about web technologies and AI.
          </p>
          <br />
          <p>
            I graduated with a master's degree from Tsinghua university in Beijing. Then, I was one of the early employees at Aibee, an AI startup where I
            contributed to building the core face recognition infrastructure, processing video data for hundreds of stores and shopping malls. I've also
            designed, implemented and deployed multiple web services for demonstration to our clients, under tight deadlines.
          </p>
          <br />
          <p>
            In my free time, I enjoy playing guitar, working on personnal software projects and cooking.
          </p>
          <p>
            I am also a language-learning enthusiast. I speak Chinese, English, French and Spanish, currently learning Russian.
          </p>
          <br />
          <div class="level">
            <a class="download-link level-item" href="https://github.com/Cephalopode"> <fa-icon :icon="['fab', 'github']" />Github </a>
            <a class="download-link level-item" href="https://www.linkedin.com/in/thomas-paradis-8ab6766a"> <fa-icon :icon="['fab', 'linkedin']" />LinkedIn </a>
          </div>
        </div>
        <img slot="media" class="medaillon" :src="require('@/assets/img/photos/profil.jpg')" />
      </SinglePageElement>
    </div>

    <div class="hr-wrap container">
      <hr />
    </div>

    <!-- TODO: put this section into project section -->
    <div id="projects" class="subject projects">
      <SinglePageElement reversed>
        <div slot="content">
          <div class="title">Wiki Popup</div>
          <p>
            Some technical terms may be difficult to translate in different languages but fear not! Wikipedia, with its millions of multi-lingual articles is
            here to save you!
          </p>
          <br />
          <p>
            This simple chrome extension allows you to quickly check the word translations provided by Wikipedia. Just use your mouse to highlight a word or a
            group of words and a popup will appear, providing translation and definition. Just go to the options menu to configure the languages you want to
            appear in the popup.
          </p>
          <br />
          <div class="level">
            <a class="download-link level-item" href="https://chrome.google.com/webstore/detail/wiki-popup/needbkjfeeapnlgefnpoebhojcogflej">
              <fa-icon :icon="['fab', 'chrome']" />Add to Chrome
            </a>
            <a class="download-link level-item" href="https://github.com/Cephalopode/Wiki_popup"> <fa-icon :icon="['fab', 'github']" />Github </a>
          </div>
        </div>
        <img slot="media" class="image" :src="require('@/assets/img/illustrations/wiki-popup.png')" />
      </SinglePageElement>
      <SinglePageElement reversed>
        <div slot="content">
          <div class="title">PhoneticDict</div>
          <p>
            Often when learning a foreign language, we hear a lot of new words. A french learner may hear a word that sounds like "O" but without knowing that
            the french spelling is "eau", they are unable to find it in a dictionary. Now, with "PhoneticDict" you can input the french pronunciation and find
            the spelling and definition !
          </p>
          <br />
          <p>
            This app is designed for french language learners who have already learned basic french pronunciation.
            <br />Please read "HOW TO USE" first.
          </p>
          <br />
          <div class="level">
            <a class="download-link level-item" href="/phonetic_dict"> <fa-icon :icon="['fas', 'play-circle']" />Website </a>
            <a class="download-link level-item" href="https://github.com/Cephalopode/PhoneticDict_Web"> <fa-icon :icon="['fab', 'github']" />Github </a>
          </div>
        </div>
        <img slot="media" class="image" :src="require('@/assets/img/illustrations/phonetic_dict.png')" />
      </SinglePageElement>
      <SinglePageElement reversed>
        <div slot="content">
          <div class="title">Image crawling server</div>
          <p>
            A web crawler API that fetches all images on a given domain. Written as an excercice to test Go language concurrency features. It is available for
            demo purposes
            <a href="thomasparadis.me:8080">Here</a> (API only, no frontend).
          </p>
          <br />
          <div class="level">
            <a class="download-link level-item" href="https://github.com/Cephalopode/mims_web_crawler"> <fa-icon :icon="['fab', 'github']" />Github </a>
          </div>
        </div>
        <img slot="media" class="image" style="height:240px; margin:-50px" :src="require('@/assets/img/illustrations/icons/laptop-globe.svg')" />
      </SinglePageElement>
    </div>

    <div class="hr-wrap container">
      <hr />
    </div>
    <div id="contact" class="subject contact">
      <SinglePageElement>
        <div slot="content">
          <div class="title">Contact</div>
          <br />
          <p class="subtitle">Let's get in touch!</p>
          <div class="form-module--component--1t7o4">
            <div class="block">
              <label class="label">Email</label>
              <input class="input" type="email" v-model="email" required />
            </div>
            <div class="block">
              <label class="label">Message</label>
              <textarea class="textarea" name="message" v-model="message" required></textarea>
            </div>
            <vue-recaptcha
              class="block"
              ref="captcha"
              sitekey="6LeYjOYUAAAAACuo69suXOKrloy9Ght4KaSpAjhY"
              :loadRecaptchaScript="true"
              @verify="setVerified"
            ></vue-recaptcha>

            <div class="level" style="width:300px">
              <button class="level-left button is-primary" @click="sendEmail()">
                Send
              </button>
              <p v-if="verifyWarning" class="level-left captcha-warning">
                Please solve captcha first
              </p>
            </div>
          </div>
          <EmailModal />
        </div>
        <iframe
          class="image"
          slot="media"
          frameborder="0"
          style="width:100%;height:400px"
          src="https://www.google.com/maps/embed/v1/view?center=45.5073281,-73.5919971&zoom=9&key=AIzaSyDPDh-ISuPWQSZp9KF-YNZP1DJjRx_dP70"
          allowfullscreen
        ></iframe>
      </SinglePageElement>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Designed and developped by <a href="#">Thomas Paradis</a>, using <a href="https://cli.vuejs.org/">Vue.js</a>, <a href="https://bulma.io/">Bulma</a>,
          <a href="https://sass-lang.com/">SASS</a> and <a href="https://expressjs.com/">Node.js+Express</a>. Inspired by
          <a href="https://jgthms.com/"> Jeremy Thomas.</a>
          <br />

          <span class="copyright"
            >The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.</span
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import VueRecaptcha from 'vue-recaptcha'
import { singlePageFeatures } from '../utils/single_page'
import SinglePageElement from './SinglePageElement'
import Navbar from './Navbar'
import EmailModal from './EmailModal'

export default {
  components: {
    Navbar,
    SinglePageElement,
    EmailModal,
    VueRecaptcha,
  },
  data: () => ({
    email: '',
    message: '',
    verified: false,
    verifyWarning: false,
    captchaToken: '',
  }),
  mounted() {
    singlePageFeatures()
  },
  methods: {
    setVerified(token) {
      console.log(token)
      this.captchaToken = token
      this.verified = true
      this.verifyWarning = false
    },
    onSendError(params) {
      this.$router.push({ query: params })
    },
    async sendEmail() {
      if (!this.verified) {
        this.verifyWarning = true
        return
      }
      axios
        .post('/api/send-email', {
          email: this.email,
          message: this.message,
          captchaToken: this.captchaToken,
        })
        .then((ret) => {
          console.log(ret)
          const params = {
            success: ret.data.success.toString(),
            message: ret.data.message,
          }
          if (!ret.data.success) {
            this.onSendError(params)
            return
          }
          this.$router.push({ query: params })
          this.email = ''
          this.message = ''
        })
        .catch((err) => {
          console.log(err)
          const params = {
            success: 'false',
            message: err.toString(),
          }
          this.onSendError(params)
        })
      this.$refs.captcha.reset()
      this.verified = false
      this.verifyWarning = false
    },
  },
}
</script>
