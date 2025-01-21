import React, { useEffect } from 'react';
import $ from 'jquery';

const Navbar = () => {
  useEffect(() => {
    const adjustShadow = () => {
      const y = $(window).scrollTop();
      const opacity = $('.navbar-menu').hasClass('is-active') || y > 50 ? 0.2 : 0.2 * (y / 50);
      const shadow = `0px 0px 20px 0px rgba(0, 0, 0, ${opacity})`;
      $('.navbar').css({ 'box-shadow': shadow });
    };

    $(window).scroll(adjustShadow);
    const observer = new MutationObserver(adjustShadow);
    observer.observe($('#menubar')[0], { attributes: true });

    // Gestionnaire d'événements pour le bouton hamburger
    $('#navbar-burger').on('click', function () {
      $(this).toggleClass('is-active');
      $('#menubar').toggleClass('is-active');
    });

    return () => {
      $(window).off('scroll', adjustShadow);
      observer.disconnect();
      $('#navbar-burger').off('click');
    };
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="main-nav navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item logo" href="/">
            Basile <b className="paradis">Paradis</b>
          </a>
          <button id="navbar-burger" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menubar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div id="menubar" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item about-me" href="#about-me" onClick={(e) => handleScroll(e, 'about-me')}>À propos de moi</a>
            <a className="navbar-item projects" href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Mes projets</a>
            <a className="navbar-item contact" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;