import React from 'react';
import Navbar from './Navbar';
import SinglePageElement from './SinglePageElement';
import EmailModal from './EmailModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="spacer"></div>
      <div className="intro" id="about-me">
        <div style={{ textAlign: 'center', fontSize: '18px' }}>
          <p className="title" style={{ textAlign: 'center' }}>Bienvenue!</p>
          <p>Mon travail est de rétablir d’excellentes relations entre vous, votre ordinateur et le web.</p>
          <p>Comment puis-je vous aider?</p>
        </div>
        <div className="level">
          <div id="it" className="box carreGrow">
            <div>Dépannage</div>
            <div>informatique</div>
          </div>
          <div id="dev" className="box carreGrow">
            <div>Développement</div>
            <div>de site web</div>
          </div>
        </div>
        <div className="level" style={{ justifyContent: 'space-evenly', width: '90vw' }}>
          <a className="download-link level-item" href="https://github.com/basileparadis">
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
          <a className="download-link level-item" href="https://www.linkedin.com/in/basile-paradis-05267a100">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="hr-wrap container">
        <hr />
      </div>

      <div id="projects" className="subject projects">
        <SinglePageElement reversed>
          <img slot="media" className="image" src={require('../assets/img/illustrations/brotify.png')} alt="Brotify" />
          <div slot="content">
            <div className="title">Brotify: accorder musique avec amis</div>
            <p>
              A small-scale social website, which allows users to see the common musical interests they share between friends with graphical details. Designed using the
              <a href="https://www.djangoproject.com/">Django framework</a>.
            </p>
            <br />
            <div className="level">
              <a className="download-link level-item" href="https://brotify.ca">
                <FontAwesomeIcon icon={faPlayCircle} /> Website
              </a>
              <a className="download-link level-item" href="https://github.com/basileparadis/Brotify">
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </div>
          </div>
        </SinglePageElement>
        <SinglePageElement reversed>
          <img slot="media" className="image" style={{ height: '85%' }} src={require('../assets/img/illustrations/repair.jpg')} alt="Repair" />
          <div slot="content">
            <div className="title">Assistance technique</div>
            <ul style={{ listStyle: 'circle' }}>
              <li>Remise à neuf d’ordinateurs et mise à niveau de composantes</li>
              <li>Ajout de RAM</li>
              <li>Migration de HDD vers SSD</li>
              <li>Remplacement d’écran et clavier</li>
              <li>Entretien portables, tours et téléphones</li>
              <li>Résolution de problème logiciel avec des outils d’administration à distance</li>
              <li>Mise à jour et réinstallation du système d'exploitation</li>
              <li>Installation de logiciels et résolution de problèmes d'exécution</li>
            </ul>
          </div>
        </SinglePageElement>
      </div>

      <div className="hr-wrap container">
        <hr />
      </div>
      <div id="contact" className="subject contact">
        <SinglePageElement>
          <div slot="content">
            <div className="title">Contact</div>
            <br />
            <p className="subtitle">Gardons contact, laissez-moi un message!</p>
            <div className="form-module--component--1t7o4">
              <div className="block">
                <label className="label">Email</label>
                <input className="input" type="email" required />
              </div>
              <div className="block">
                <label className="label">Message</label>
                <textarea className="textarea" name="message" required></textarea>
              </div>
              <div className="level" style={{ width: '300px' }}>
                <button className="level-left button is-primary">Envoyer</button>
                <p className="level-left captcha-warning">Please solve captcha first</p>
              </div>
            </div>
            <EmailModal />
          </div>
          <iframe
            className="image"
            slot="media"
            frameBorder="0"
            style={{ width: '100%', height: '400px' }}
            src="https://www.google.com/maps/embed/v1/place?q=Laurier+%2F+Saint-Denis,Montreal+Canada&zoom=15&key=YOUR_GOOGLE_API_KEY"
            allowFullScreen
            title="Google Maps Location"
          ></iframe>
        </SinglePageElement>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Designed and developed by <b>Basile Paradis</b>, using <a href="https://reactjs.org/">React.js</a>,&nbsp;
            <a href="https://bulma.io/">Bulma</a>,&nbsp;
            <a href="https://sass-lang.com/">SASS</a>&nbsp;and&nbsp;
            <a href="https://expressjs.com/">Node.js+Express</a>.
            <br />
            <span className="copyright">
              The source code is licensed&nbsp;
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed&nbsp;
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;