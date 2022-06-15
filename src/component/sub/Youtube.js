import Layout from '../common/Layout';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';
import PopupYoutube from '../common/PopupYoutube';
import { setYoutube } from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';

function Youtube() {
  // const [Vids, setVids] = useState([]);
  const [Open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);
  const visualImg = `${process.env.PUBLIC_URL}/img/visual_img4.jpg`;
  const playBtn = `${process.env.PUBLIC_URL}/img/play_btn.png`;

  const frame = useRef(null);
  //추가
  const Vids = useSelector((store) => store.youtubeReducer.youtube);
  const dispatch = useDispatch();

  const handlePopup = (index) => {
    setOpen(true);
    setIndex(index);
  }
  //리덕스사가 추가 - action 으로 보내서 처리
  const fetchYoutube = async () => {
    const key = 'AIzaSyC77Pd__ju0Wqx_Umc-IuW7Cn2mWi_HVsk';
    const playlist = 'PLHtvRFLN5v-W-izd7V4JH2L4-RTW0WRi3';
    const num = 8;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

    await axios.get(url).then((json) => {
      //해당 컴포넌트에서 axios로 받아진 비동기 데이터를 지역state에 저장하는게 아닌
      //action.js에서 가지고 setYoutube 액션 생성함수의 인수로 전달
      //setYoutbue는 다음과 같은 액션 객체 반환
      //{type: 'SET_YOUTUBE', payload: json.data.items}
      const action = setYoutube(json.data.items);
      //액션생성함수로 만들어진 action객체를 dispatch로 리듀서에 전달
      dispatch(action);
      // 같은말 === dispatch(setYoutube(json.data.items))
    });
  };
  useEffect(() => {
    frame.current.classList.add('on');
    fetchYoutube();
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
        <PopupYoutube setOpen={setOpen}>
          <iframe
            src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
            frameBorder='0'></iframe>
        </PopupYoutube>
      )}
    </>
  );
}

export default Youtube;