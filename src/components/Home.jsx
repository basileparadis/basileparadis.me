import React, { useRef, useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import SinglePageElement from './SinglePageElement';
import EmailModal from './EmailModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Home = () => {
  const [rotations, setRotations] = useState({ it: 0, dev: 0 });
  const [title, setTitle] = useState('');
  const [typedTitle, setTypedTitle] = useState('');
  const contactRef = useRef(null);
  const titleInputRef = useRef(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (title) {
      let index = -1;
      const interval = setInterval(() => {
        setTypedTitle((prev) => {
          const newTypedTitle = prev + title[index];
          if (titleInputRef.current) {
            titleInputRef.current.value = newTypedTitle;
          }
          return newTypedTitle;
        });
        index++;
        if (index === title.length - 1) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [title]);

  const handleRotate = (id, title) => {
    setRotations((prevRotations) => ({
      ...prevRotations,
      [id]: prevRotations[id] + 360,
    }));

    setTimeout(() => {
      setTitle();
      contactRef.current.scrollIntoView({ block: "end", behavior: 'smooth' });
      setTitle(title);
      setTypedTitle('');
    }, 1000);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!email || !message) {
      navigate(`?success=false&message=Email et message sont requis.`);
      return;
    }

    if (!validateEmail(email)) {
      navigate(`?success=false&message=Format de l'email invalide.`);
      return;
    }
  
    const templateParams = {
      email,
      title: titleInputRef.current.value,
      message,
    };
  
    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      if (response.status !== 200) {
        throw new Error(`Failed to send email: ${response.text}`);
      }
      navigate('?success=true');
    } catch (error) {
      navigate(`?success=false&message=${error.message}&error=${error}`);
    }
  }, [email, message, navigate]);

  useEffect(() => {
    window.onSubmit = () => { };
    
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, [handleSubmit]);

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
          <div
            id="it"
            className="box carreGrow"
            onClick={() => handleRotate('it', 'Dépannage informatique')}
            style={{
              '--rotation': `${rotations.it}deg`,
            }}
          >
            <div>Dépannage</div>
            <div>informatique</div>
          </div>
          <div
            id="dev"
            className="box carreGrow"
            onClick={() => handleRotate('dev', 'Développement de site web')}
            style={{
              '--rotation': `${rotations.dev}deg`,
            }}
          >
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
      <div id="contact" className="subject contact" ref={contactRef}>
        <SinglePageElement>
          <div slot="content">
            <div className="title">Contact</div>
            <br />
            <p className="subtitle">Gardons contact, laissez-moi un message!</p>
            <form id="demo-form" onSubmit={handleSubmit} className="form-module--component--1t7o4">
              <div className="block">
                <label className="label">Email</label>
                <input className="input" type="email" placeholder='example@email.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="block">
                <label className="label">Title</label>
                <input className="input" name="title" id="title" ref={titleInputRef} required />
              </div>
              <div className="block">
                <label className="label">Message</label>
                <textarea className="textarea" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              </div>
              <div className="level">
                <button
                  className="g-recaptcha level-left button is-primary"
                  data-sitekey={`${process.env.REACT_APP_RECAPTCHA_KEY}`}
                  data-callback='onSubmit'
                  data-action='submit'
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Envoyer
                </button>
              </div>
            </form>
            <EmailModal />
          </div>
          <iframe
            className="image"
            slot="media"
            style={{ width: '100%', height: '400px' }}
            src={`https://www.google.com/maps/embed/v1/place?q=Laurier+%2F+Saint-Denis,Montreal+Canada&zoom=15&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
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