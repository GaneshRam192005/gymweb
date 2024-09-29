import React from 'react';

export const Toggle = () => {
  return (
    <>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content con1">
            <h3>New here . . ?</h3>
            <p>
              Sign up to join the community of fitness professionals and shape your body and mind
            </p>
            <button className="btn transparent" id="sign-up-btn">Sign up</button>
          </div>
          <img src="./images/gym1.jpeg" className="image gym1" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content con2">
            <h3>Already have an account . . ?</h3>
            <p>
              Log in to return to the community of fitness professionals and continue shaping your body!
            </p>
            <button className="btn transparent" id="sign-in-btn">Sign in</button>
          </div>
          <img src="./images/gym2.jpeg" className="image gym2" alt="" />
        </div>
      </div>
    </>
  );
};
