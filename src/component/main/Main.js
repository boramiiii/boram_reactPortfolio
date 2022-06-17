import MainImg from './MainImg';
import Header from '../common/Header';
import Plist from './Plist';
import Products from './Products';
import Text from './Text';
import Video from './Video';
import News from './News';
import Anime from '../../asset/anime.js';

import { useRef, useEffect, useState } from 'react';


function Main() {
  const main = useRef(null);

  return (
    <>
      <main ref={main}>
        <Header type={'main'} />
        <MainImg />
        <Plist />
        <Products />
        <Video />
        <Text />
        <News />
      </main>
    </>
  )
}

export default Main