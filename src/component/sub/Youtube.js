import Layout from '../common/Layout';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';
import Popup from '../common/Popup';

function Youtube() {
  const [Vids, setVids] = useState([]);
  const [Open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);
  const visualImg = `${process.env.PUBLIC_URL}/img/visual_img4.jpg`;
  const playBtn = `${process.env.PUBLIC_URL}/img/play_btn.png`;
  const frame = useRef(null);

  const handlePopup = (index) => {
    setOpen(true);
    setIndex(index);
  }

  useEffect(() => {
    const key = "AIzaSyD8CO3HqgmKUUwhHdahg0c9Xpw7_AR1Q7M ";
    const playlist = "PLfHCKVPanu7zyjtt09sovNP8_tjZFDGrz";
    const num = 6;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
    frame.current.classList.add('on');

    axios.get(url).then((json) => {
      console.log(json);
      setVids(json.data.items);
    });
  }, []);

  return (
    <>

      <div className="visualWrap" ref={frame}>
        <div className="visualTxt">
          dr. dre's Product Play List
        </div>
        <figure>
          <img src={visualImg} alt="" />
          <div className='vTxt'>
            <h2>beats.by dr.dre Videos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quo laboriosam labore debitis explicabo laudantium eius asperiores? Maxime, possimus aliquid. Nisi excepturi nesciunt voluptas id in sit commodi fugit adipisci.
            </p>
          </div>
        </figure>
      </div>
      <Layout name={'Youtube'}>
        <h4>dr.dre Youtube</h4>
        {Vids.map((vid, idx) => {
          const tit = vid.snippet.title;
          const desc = vid.snippet.description;
          const date = vid.snippet.publishedAt;
          return (
            <article key={idx}>
              <h1>0{idx + 1}</h1>
              <div className='pic'>
                <img
                  src={vid.snippet.thumbnails.standard.url}
                  alt={vid.title}
                />
              </div>
              <h3>
                {tit.length > 50
                  ? tit.substr(0, 40) + '...'
                  : tit}
              </h3>
              <div className="play">
                <img src={playBtn} onClick={() => { handlePopup(idx) }} />
              </div>
              <div className='txt'>
                <p>
                  {desc.length > 200
                    ? desc.substr(0, 200) + '...'
                    : desc}
                </p>
                <div className='span'>{date.split('T')[0]}</div>
              </div>

            </article>
          );
        })}
      </Layout>
      {Open && (
        <Popup setOpen={setOpen}>
          <iframe
            src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
            frameBorder='0'></iframe>
        </Popup>
      )}
    </>
  );
}

export default Youtube;