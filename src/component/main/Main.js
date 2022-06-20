import Header from '../common/Header';
import Plist from './Plist';
import Products from './Products';
import Text from './Text';
import Video from './Video';
import Visual from './Visual';
import Anime from '../../asset/anime.js';

import { useRef } from 'react';


function Main() {
  const main = useRef(null);

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