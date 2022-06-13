import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// key = '924c973728459558f365843e3470c57a';
function Gallery() {
  const frame = useRef(null);
  const input = useRef(null);
  const pop = useRef(null);
  const visualFrame = useRef(null);
  const [Items, setItems] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [EnableClick, setEnableClick] = useState(true);
  const [Index, setIndex] = useState(0);
  const masonryOptions = { transitionDuration: '0.5s' };

  const visualImg = `${process.env.PUBLIC_URL}/img/visual_img8.jpg`;

  const getFlickr = async (opt) => {
    const key = '924c973728459558f365843e3470c57a';
    const method_interest = 'flickr.interestingness.getList';
    const method_search = 'flickr.photos.search';
    const method_user = 'flickr.people.getPhotos';
    let url = '';

    if (opt.type === 'interest') {
      url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json`;
    }
    if (opt.type === 'search') {
      url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&tags=${opt.tags}`;
    }
    if (opt.type === 'user') {
      url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&user_id=${opt.user}`;
    }

    await axios.get(url).then((json) => {
      //만약 검색 결과가 없다면 경고창 띄우고 종료
      if (json.data.photos.photo.length === 0)
        return alert('해당검색어의 결과이미지 없습니다.');
      setItems(json.data.photos.photo);
    });

    setTimeout(() => {
      frame.current.classList.add('on');
      setLoading(false);

      setTimeout(() => {
        setEnableClick(true);
      }, 2000); //frame요소의 transition시간까지 지연
    }, 1000); //데이터준비 완료될때까지 지연
  };

  const showSearch = () => {
    const result = input.current.value.trim();

    input.current.value = '';
    if (!result) return alert('검색어를 입력하세요');

    if (EnableClick) {
      setEnableClick(false);
      setLoading(true);
      frame.current.classList.remove('on');
      getFlickr({
        type: 'search',
        count: 50,
        tags: result,
      });
    }
  };

  useEffect(() => {
    visualFrame.current.classList.add('on');
    console.log(Items)
    getFlickr({
      type: 'user',
      count: 50,
      user: '195706456@N03',
    });
  }, []);

  return (
    <>
      <div className="visualWrap" ref={visualFrame}>
        <div className="visualTxt">
          Gallery of beats.by dr.dre
        </div>
        <figure>
          <img src={visualImg} alt="" />
          <div className='vTxt'>
            <h2>dr.dre's Gallery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quo laboriosam labore debitis explicabo laudantium eius asperiores? Maxime, possimus aliquid. Nisi excepturi nesciunt voluptas id in sit commodi fugit adipisci.
            </p>
          </div>
        </figure>
      </div>
      <Layout name={'Gallery'}>
        <div className="hWrap">
          <h3>dr.dre 's Album</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint aliquid, nisi consequuntur mollitia animi vel dolores facere quisquam repudiandae ipsa, corrupti fuga.</p>
        </div>
        {Loading && (
          <img
            className='loading'
            src={`${process.env.PUBLIC_URL}/img/loading.gif`}
          />
        )}
        {/* <button
          onClick={() => {
            if (EnableClick) {
              setEnableClick(false);
              setLoading(true);
              frame.current.classList.remove('on');
              getFlickr({
                type: 'interest',
                count: 50,
              });
            }
          }}>
          Interest Gallery
        </button> */}
        <div className='searchBox'>
          <input
            type='text'
            ref={input}
            placeholder='검색어를 입력하세요'
            onKeyUp={(e) => {
              if (e.key === 'Enter') showSearch();
            }}
          />
          <button onClick={showSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className='frame' ref={frame}>
          <Masonry elementType={'div'} options={masonryOptions}>
            {Items.map((item, idx) => {
              return (
                <article key={idx}>
                  <div className='inner'>
                    <div
                      className='pic'
                      onClick={() => {
                        pop.current.open();
                        setIndex(idx);
                      }}>
                      <img
                        src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                        alt={item.title}
                      />
                    </div>
                    <div className='con'>
                      <h2>{item.title}</h2>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere architecto.</p>
                      <div className='profile'>
                        <img
                          src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
                          alt={item.owner}
                          onError={(e) => {
                            //해당 이미지요소의 소스이미지가 없어서 onError이벤트가 발생하면 src값을 대체이미지로 변경
                            e.target.setAttribute(
                              'src',
                              'https://www.flickr.com/images/buddyicon.gif'
                            );
                          }}
                        />
                        <span
                          onClick={(e) => {
                            if (EnableClick) {
                              setEnableClick(false);
                              setLoading(true);
                              frame.current.classList.remove('on');

                              getFlickr({
                                type: 'user',
                                count: 50,
                                user: e.currentTarget.innerText,
                              });
                            }
                          }}>
                          {item.owner}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </Masonry>
        </div>
      </Layout>

      {/* 컴포넌트자체를 useRef로 참조 */}
      <Popup ref={pop}>
        {Items.length !== 0 && (
          <img
            src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
            alt={Items[Index].title}
          />
        )}
      </Popup>
    </>
  );
}

export default Gallery;