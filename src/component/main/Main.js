import MainImg from './MainImg';
import Header from '../common/Header';
import Plist from './Plist';
import Products from './Products';
import Text from './Text';
import Video from './Video';
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
        <Text />
        <Video />
      </main>
    </>
  )
}

export default Main