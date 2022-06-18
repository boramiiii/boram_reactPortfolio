import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

function Text() {
  const path = process.env.PUBLIC_URL;

  return (
    <section id='text'>
      <div className="inner">
        <div className="mainTxt">
          <h2>
            We are making  <br />
            Beautiful Products
          </h2>
          <h3>Lorem ipsum, dolor sit amet consectetur</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>
            <Link to="/department">
              About Us
              <FontAwesomeIcon icon={faLongArrowRight} />
            </Link>
          </button>
        </div>
        <div className="pic">
          <img src={`${path}/img/txtImg.png`} />
        </div>
        <div className="subTxt">
          <h4>Lorem, ipsum dolor.</h4>
          <p>Make you with sound Feel excted</p>
        </div>
      </div>
    </section>
  )
}

export default Text