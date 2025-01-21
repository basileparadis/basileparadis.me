import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const EmailModal = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setActive(query.get('success') === 'true');
  }, [location.search]);

  const close = () => {
    navigate({ search: '' });
  };

  const query = new URLSearchParams(location.search);
  const success = query.get('success') === 'true';
  const message = query.get('message');
  const error = query.get('error');

  return (
    <div className={`modal ${active ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-content box">
        {success ? (
          <div className="success">
            <h1 className="title">
              <FontAwesomeIcon icon={faCheckCircle} /> Message successfully sent!
            </h1>
            <div className="content">
              <p>Thank you! I will reach back to you as soon as possible</p>
            </div>
          </div>
        ) : (
          <div className="error">
            <h1 className="title">
              <FontAwesomeIcon icon={faTimesCircle} /> Uh oh... Message could not be sent
            </h1>
            <div className="content">
              <p>{message}</p>
              <p style={{ color: 'red' }}>{error}</p>
            </div>
          </div>
        )}
        <div className="container">
          <div className="button is-primary" onClick={close}>Ok</div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={close}></button>
    </div>
  );
};

export default EmailModal;