import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

function Product() {
  const path = process.env.PUBLIC_URL;
  const frame = useRef(null);
  const [Products, setProducts] = useState([]);
  const visualImg = `${process.env.PUBLIC_URL}/img/visual_img7.jpg`;

  useEffect(() => {
    frame.current.classList.add('on');
    axios.get(`${path}/DB/products.json`).then((json) => {
      setProducts(json.data.product);
    });
  }, [])



  return (
    <>
      <div className="visualWrap" ref={frame}>
        <div className="visualTxt">
          Types of dr.dre's Products
        </div>
        <figure>
          <img src={visualImg} alt="" />
          <div className='vTxt'>
            <h2>dr.dre's Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quo laboriosam labore debitis explicabo laudantium eius asperiores? Maxime, possimus aliquid. Nisi excepturi nesciunt voluptas id in sit commodi fugit adipisci.
            </p>
          </div>
        </figure>
      </div>
      <Layout name={'Product'}>
        <div className="hWrap">
          <h3>dr.dre 's Products List</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint aliquid, nisi consequuntur mollitia animi vel dolores facere quisquam repudiandae ipsa, corrupti fuga.</p>
        </div>
        <div className='articleWrap'>
          {Products.map((product, idx) => {
            return (
              <article key={idx}>
                <div className="pic">
                  <img src={`${path}/img/${product.pic}`} alt={product.name} />
                  <button>
                    <FontAwesomeIcon icon={faLongArrowRight} />
                  </button>
                  <div className="con">
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                    <ul>
                      <li>{"- " + product.t1}</li>
                      <li>{"- " + product.t2}</li>
                      <li>{"- " + product.t3}</li>
                    </ul>
                  </div>
                </div>

              </article>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export default Product