import { useEffect } from 'react';
import $ from 'jquery';

const usePreloader = () => {
  useEffect(() => {
    $(window).on('load', () => {
      $('#status').fadeOut();
      $('#preloader').delay(350).fadeOut('slow');
      $('body').delay(350).css({ overflow: 'visible' });
    });

    return () => {
      $(window).off('load');
    };
  }, []);
};

export default usePreloader;