import Fit from './Fit';
import Buds from './Buds'
import axios from 'axios';

import { useState, useEffect, useRef } from 'react';
import { setProductList } from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';

function Products() {
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
    "false": <Fit />,
    "true": <Buds />
  }

  useEffect(() => {
    setProductFit(false);

  }, []);

  return (
    <>
      <section id='products'>
        <div className='inner'>
          <ul className='btns' ref={btnOn}>
            <li className={`${Tab === 'fit' ? 'on' : ''}`}
              onClick={() => { handleTab("false", "fit") }}>BEATS FIT PRO</li>
            <li className={`${Tab === 'buds' ? 'on' : ''}`}
              onClick={() => { handleTab("true", "buds") }}>BEATS STUDIO BUDS</li>
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