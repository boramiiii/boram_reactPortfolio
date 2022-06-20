import Header from '../common/Header';
import Plist from './Plist';
import Products from './Products';
import Text from './Text';
import Video from './Video';
import Visual from './Visual';
import Anime from '../../asset/anime.js';

import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';


function Main() {
  const main = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch({ type: 'YOUTUBE_START' });
    dispatch({ type: 'PRODUCT_START' });

  }, []);

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