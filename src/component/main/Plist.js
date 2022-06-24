import { useEffect, useRef, useState } from 'react';

function Plist() {
  const move = useRef(null);
  const path = process.env.PUBLIC_URL;



  return (
    <>
      <section id='pList' className='myScroll'>
        <div className="inner">
          <div className="pLayout">
            <div className="left">
              <h3>Wireless<br /> Earbuds</h3>
              <p>Lorem ipsum dolor sit.</p>
              <img src={`${path}/img/earbird.png`} alt="" />
            </div>
            <div className="right">
              <div className="rCon">
                <p>Lorem ipsum dolorsit amet consectetur.</p>
                <h3>BEATS STUDIO3<br />  WIRELESS</h3>
              </div>
              <img src={`${path}/img/headphone.png`} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Plist