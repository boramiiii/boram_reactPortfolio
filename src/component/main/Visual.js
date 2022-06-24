
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { setProducts } from '../../redux/action';
import Anime from '../../asset/anime.js';
import { useSelector, useDispatch } from 'react-redux';

function Visual() {
  // const Products = useSelector((store) => store.productReducer.product);
  const dispatch = useDispatch();
  const [Products, setProducts] = useState([]);
  const path = process.env.PUBLIC_URL;

  const panel = useRef(null);
  const next = useRef(null);
  const prev = useRef(null);
  const article = useRef(null);
  const Index = useRef(0);
  const EnableClick = useRef(true);

  const init = () => {
    const panel_li = panel.current.children;
    const len = panel_li.length;
    const currentEl = panel.current.querySelector('.on');
    const current_index = Array.from(panel_li).indexOf(currentEl);
    return [currentEl, current_index, len];
  };


  const showNext = () => {
    const [currentEl, current_index, len] = init();
    let next_index = null;

    current_index !== len - 1
      ? (next_index = current_index + 1)
      : (next_index = 0);
    if (EnableClick.current) showSlide(currentEl, next_index, 1);
  };
  const showPrev = () => {
    const [currentEl, current_index, len] = init();
    let prev_index = null;

    current_index !== 0
      ? (prev_index = current_index - 1)
      : (prev_index = len - 1);
    if (EnableClick.current) showSlide(currentEl, prev_index, -1);
  };

  const activation = (index) => {
    for (const el of article.current.children) el.classList.remove('on');
    article.current.children[index].classList.add('on');
  };

  const showIndex = (index) => {
    const [currentEl, current_index] = init();
    const target_index = index;

    if (!EnableClick.current) return;
    if (target_index > current_index) showSlide(currentEl, target_index, 1);
    if (target_index < current_index) showSlide(currentEl, target_index, -1);
  };

  const showSlide = (el, index, direction) => {
    const panel_li = panel.current.children;
    //setIndex(index);
    Index.current = index;
    EnableClick.current = false;
    new Anime(el, {
      prop: 'left',
      value: -direction * 100 + '%',
      duration: 500,
      callback: () => {
        el.classList.remove('on');
        el.style.display = 'none';
      },
    });

    panel_li[index].style.display = 'block';
    panel_li[index].style.left = direction * 100 + '%';

    new Anime(panel_li[index], {
      prop: 'left',
      value: '0%',
      duration: 500,
      callback: () => {
        panel_li[index].classList.add('on');
        EnableClick.current = true;
      },
    });

    activation(index);
  };
  useEffect(() => {
    axios.get(`${path}/DB/products.json`).then((json) => {
      const pLength = json.data.product.length;
      console.log(pLength);
      setProducts(json.data.product);


      activation(Index.current)
    });
    // return () => {
    //   console.log("떠라")
    // }
  }, []);

  return (
    <>
      <section id='slider' className='myScroll'>
        <ul className='panel' ref={panel}>
          <li className='s1 on'>
            <div className='inner'>
              <img src={`${process.env.PUBLIC_URL}/img/visual_img10.jpg`} alt="" />
              <div className='tCon'>
                <h2>
                  Lorem ipsum dolor<br />
                  sit amet consectetur,
                  <span>
                    Beats Fit Pro
                  </span>
                </h2>
              </div>
              <div className="t1">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t2">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t3">Lorem ipsum<br /> dolor sit.</div>
            </div>
          </li>
          <li className='s2'>
            <div className='inner'>
              <img src={`${process.env.PUBLIC_URL}/img/visual_img12.jpg`} alt="" />
              <div className='tCon'>
                <h2>
                  Lorem ipsum dolor<br />
                  sit amet consectetur,
                  <span>
                    Beats Studio Buds
                  </span>
                </h2>
              </div>
              <div className="t1">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t2">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t3">Lorem ipsum<br /> dolor sit.</div>
            </div>
          </li>
          <li className='s3'>
            <div className='inner'>
              <img src={`${process.env.PUBLIC_URL}/img/visual_img11.jpg`} alt="" />
              <div className='tCon'>
                <h2>
                  Lorem ipsum dolor<br />
                  sit amet consectetur,
                  <span>
                    Beats Flex
                  </span>
                </h2>
              </div>
              <div className="t1">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t2">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t3">Lorem ipsum<br /> dolor sit.</div>
            </div>
          </li>
          <li className='s4'>
            <div className='inner'>
              <img src={`${process.env.PUBLIC_URL}/img/visual_img13.jpg`} alt="" />
              <div className='tCon'>
                <h2>
                  Lorem ipsum dolor<br />
                  sit amet consectetur,
                  <span>
                    Power beats Pro
                  </span>
                </h2>
              </div>
              <div className="t1">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t2">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t3">Lorem ipsum<br /> dolor sit.</div>
            </div>
          </li>
          <li className='s5'>
            <div className='inner'>
              <img src={`${process.env.PUBLIC_URL}/img/department/dp1.jpg`} alt="" />
              <div className='tCon'>
                <h2>
                  Lorem ipsum dolor<br />
                  sit amet consectetur,
                  <span>
                    Beats Solo3 Wireless
                  </span>
                </h2>
              </div>
              <div className="t1">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t2">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t3">Lorem ipsum<br /> dolor sit.</div>
            </div>
          </li>
          <li className='s6'>
            <div className='inner'>
              <img src={`${process.env.PUBLIC_URL}/img/department/dp3.jpg`} alt="" />
              <div className='tCon'>
                <h2>
                  Lorem ipsum dolor<br />
                  sit amet consectetur,
                  <span>
                    Beats Studio3 Wireless
                  </span>
                </h2>
              </div>
              <div className="t1">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t2">Lorem ipsum<br /> dolor sit amet.</div>
              <div className="t3">Lorem ipsum<br /> dolor sit.</div>
            </div>
          </li>
        </ul>
        <div className="articleWrap" ref={article}>
          {Products.map((product, idx) => {
            return (
              <article
                key={idx}
                onClick={() => showIndex(idx)}>
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
        <button className='prev' ref={prev} onClick={showPrev}>
          <img src={`${process.env.PUBLIC_URL}/img/left.png`} alt="" />
        </button>
        <button className='next' ref={next} onClick={showNext}>
          <img src={`${process.env.PUBLIC_URL}/img/right.png`} alt="" />
        </button>
      </section>
    </>
  )
}

export default Visual;