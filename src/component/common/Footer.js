import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  const imgLogo = `${process.env.PUBLIC_URL}/img/logo_small.png`;
  const pdImg = `${process.env.PUBLIC_URL}/img/footer_img.png`;

  return (
    <footer>
      <div className='bgWrap'>
        <div className="bgImg">
          <img src={imgLogo} alt="" />
        </div>
        <div className="fCon">
          <p>2022 dr.dre &copy; ALL RIGHTS RESERVED.</p>
        </div>
      </div>
      <div className="wrap">
        <h3>beats.by dr.dre</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div className='navs'>
          <div className='navWrap'>
            <div className="nav">
              <h2>Abour dr.dre</h2>
            </div>
          </div>
          <div className='navWrap'>
            <div className="nav">
              <h2>Products</h2>
              <ul>
                <li>BEATS FIT PRO</li>
                <li>BEATS STUDIO BUDS</li>
                <li>BEATS FLEX</li>
                <li>POWERBEATS PRO</li>
                <li>BEATS SOLO3 WIRELESS</li>
              </ul>
            </div>
          </div>
          <div className='navWrap'>
            <div className="nav">
              <h2>Location</h2>
              <ul>
                <li>대한민국</li>
              </ul>
            </div>
          </div>
          <div className='navWrap'>
            <div className="nav">
              <h2>Legal</h2>
              <ul>
                <li>이용약관</li>
                <li>개인정보보호</li>
              </ul>
            </div>
          </div>
          <div className='navWrap'>
            <div className="nav">
              <h2>News letter</h2>
              <ul>
                <li>구독하기</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pImg">
          <img src={pdImg} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;