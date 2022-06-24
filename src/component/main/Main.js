import Header from '../common/Header';
import Plist from './Plist';
import Products from './Products';
import Text from './Text';
import Video from './Video';
import Visual from './Visual';
import Anime from '../../asset/anime.js';

import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';


function Main() {
  const main = useRef(null);
  const dispatch = useDispatch();

  //스크롤값 구하기
  const pos = useRef([]);
  const [Index, setIndex] = useState(0);
  //현재 스크롤되는 값을 관리할 state추가
  const [Scrolled, setScrolled] = useState(0);
  let secs = null;
  const base = -400;

  const getPos = () => {
    pos.current = [];
    secs = main.current.querySelectorAll('.myScroll');
    for (const sec of secs) {
      pos.current.push(sec.offsetTop);
    }
  };

  const activation = () => {
    const scroll = window.scrollY;
    //현재 스크롤되는 거리값을 scrolled state에 저장해서 관리
    setScrolled(scroll);

    pos.current.map((pos, idx) => {
      if (scroll >= pos + base) {
        for (const sec of secs) sec.classList.remove('on');
        secs[idx].classList.add('on');
      }
    });
  };

  useEffect(() => {

    dispatch({ type: 'YOUTUBE_START' });
    dispatch({ type: 'PRODUCT_START' });

    //스크롤
    getPos();

    window.addEventListener('resize', getPos);
    window.addEventListener('scroll', activation);
    return () => {
      window.removeEventListener('resize', getPos);
      window.removeEventListener('scroll', activation);
    };

  }, []);

  useEffect(() => {
    getPos();
  }, [Scrolled])




  return (
    <>
      <main ref={main}>
        <Header type={'main'} />
        <Visual />
        <Plist />
        <Products />
        <Video />
        <Text />
      </main>
    </>
  )
}

export default Main