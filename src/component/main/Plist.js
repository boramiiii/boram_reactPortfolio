
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Plist() {
  const path = process.env.PUBLIC_URL;
  const Products = useSelector((store) => store.productReducer.product);

  return (
    <>
      <section id='pList'>
        <div className="inner">
          <div className="articleWrap">
            {Products.map((product, idx) => {
              return (
                <article
                  key={idx}>
                  <div className="pic">
                    <img src={`${path}/img/${product.ectImg}`} alt={product.ectImg} />
                  </div>

                  <div className="con">
                    <div className="tCon">
                      <h2>{product.name}</h2>
                      <p>0{idx + 1}</p>
                    </div>
                    <h3>Lorem ipsum</h3>
                    <div className="detailTxt">
                      <div className="txt">
                        {product.t1}
                      </div>
                      <button>
                        <Link to="/product">
                          More View
                          <FontAwesomeIcon icon={faLongArrowRight} />
                        </Link>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
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