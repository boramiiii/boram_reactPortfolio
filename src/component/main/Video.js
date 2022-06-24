import { useState } from 'react';
import { useSelector } from 'react-redux';

import PopupYoutube from '../common/PopupYoutube';

function Video() {
  const [Open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);
  const path = process.env.PUBLIC_URL;
  const Vids = useSelector((store) => store.youtubeReducer.youtube);

  const playBtn = `${process.env.PUBLIC_URL}/img/onlyplay.png`;

  const handlePopup = (index) => {
    setOpen(true);
    setIndex(index);
  }


  return (
    <>
      <section id='video' className='myScroll'>
        <div className="inner">
          <div className="vidWrap">
            {Vids.map((vid, idx) => {
              if (idx < 4) {
                return (
                  <article key={idx}>
                    <div
                      className='pic'>
                      <img
                        src={vid.snippet.thumbnails.standard.url}
                        alt={vid.snippet.title}
                      />
                    </div>
                    <div className="con">
                      <span onClick={() => { handlePopup(idx) }} >
                        <img src={playBtn} alt="playbtn" />
                      </span>
                    </div>
                  </article>
                )
              }
            })}
          </div>
        </div>
      </section>
      {Open && (
        <PopupYoutube setOpen={setOpen}>
          <iframe
            src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
            frameBorder='0'></iframe>
        </PopupYoutube>
      )}
    </>
  )
}

export default Video