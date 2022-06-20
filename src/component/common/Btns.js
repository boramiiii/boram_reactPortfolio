import Anime from '../../asset/anime.js';
import { useState, useEffect, useRef } from 'react';


function Btns() {
  const path = process.env.PUBLIC_URL;
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  const show = useRef(null);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  const toTop = () => {

    new Anime(window, {
      prop: 'scroll',
      value: 0,
      duration: 500,
    });
  }

  return (

    <>
      {BtnStatus && <div className="upBtn">
        <img src={`${path}/img/upBtn.png`} onClick={toTop} />
      </div>
      }

    </>
  )
}

export default Btns