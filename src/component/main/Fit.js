import { useState, useEffect, useRef } from 'react';
import axios from 'axios';


function Fit() {
  const [ProductFit, setProductFit] = useState([]);
  const path = process.env.PUBLIC_URL;

  useEffect(() => {
    axios.get(`${path}/DB/buds.json`).then((json) => {
      setProductFit(json.data.fit);
    });
  }, []);

  return (
    <>
      {ProductFit.map((product, idx) => {
        console.log(product);
        return (
          <article key={idx}>
            <div className='inner'>
              <div className='pic'>
                <img
                  src={`${path}/img/${product.img}`}
                  alt={product.color}
                />
              </div>
              <h3>{product.color}</h3>
              <p>{product.price}</p>
            </div>
          </article>
        );
      })}
    </>
  )
}

export default Fit;