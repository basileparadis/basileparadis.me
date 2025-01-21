import React from 'react';

const SinglePageElement = ({ reversed, children }) => {
  return (
    <section className="container">
      <div className={`columns ${reversed ? 'reversed' : ''}`}>
        <div className="column is-5 media">
          {children[0]}
        </div>
        <div className="column">
          <div className="section">
            <div className="columns is-centered is-vcentered">
              <div className="column is-12">
                {children[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePageElement;