import Fit from './Fit';
import Buds from './Buds'
import axios from 'axios';

import { useState, useEffect, useRef } from 'react';

function Products() {
  const path = process.env.PUBLIC_URL;
  const [ProductFit, setProductFit] = useState(false);

  const handleTab = (tab) => {
    console.log(tab);
    setProductFit(tab);
  };

  const selectComponent = {
    false: <Fit />,
    true: <Buds />
  }

  useEffect(() => {
    setProductFit(false);
  }, []);



  return (
    <>
      <section id='products'>
        <ul>
          <li onClick={() => { handleTab("false") }}>BEATS FIT PRO</li>
          <li onClick={() => { handleTab("true") }}>BEATS STUDIO BUDS</li>
        </ul>
        <div className="listWrap">
          <div>{selectComponent[ProductFit]}</div>
        </div>
      </section>
    </>
  )
}

export default Products