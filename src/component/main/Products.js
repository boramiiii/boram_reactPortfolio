import Fit from './Fit';
import Buds from './Buds'
import axios from 'axios';

import { useState, useEffect, useRef } from 'react';
import { setProductList } from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';

function Products() {
  const btn = useRef(null);
  const path = process.env.PUBLIC_URL;
  const [ProductFit, setProductFit] = useState(false);
  const btnOn = useRef(null);
  const [Tab, setTab] = useState('fit');
  const dispatch = useDispatch();




  const handleTab = (tab, model) => {

    setProductFit(tab);
    setTab(model)
  };

  const selectComponent = {
    "p1": <Fit />,
    "p2": <Buds />
  }

  useEffect(() => {
    setProductFit('p1');
    // btn.current.classList.add("on");

  }, []);


  return (
    <>
      <section id='products' className='myScroll'>
        <div className='inner'>
          <ul className='btns' ref={btnOn}>
            <li className={`${Tab === 'fit' ? 'on' : ''}`}
              onClick={() => { handleTab("p1", "fit") }}>BEATS FIT PRO</li>
            <li className={`${Tab === 'buds' ? 'on' : ''}`}
              onClick={() => { handleTab("p2", "buds") }}>BEATS STUDIO BUDS</li>
          </ul>
          <div className="listWrap">
            <div>{selectComponent[ProductFit]}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products