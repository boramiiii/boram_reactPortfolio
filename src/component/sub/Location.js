import Layout from '../common/Layout';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faMapMarkerAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

function Location() {

  //notice에 저장된 글 불러오기
  const getLocalData = () => {
    const data = localStorage.getItem('post');
    const dummyPosts = [
      { title: 'Hello5', content: 'Here comes description in detail.' },
      { title: 'Hello4', content: 'Here comes description in detail.' },
      { title: 'Hello3', content: 'Here comes description in detail.' },
      { title: 'Hello2', content: 'Here comes description in detail.' },
      { title: 'Hello1', content: 'Here comes description in detail.' },
    ];

    if (data) {
      return JSON.parse(data);
    } else {
      return dummyPosts;
    }
  };

  const [Posts] = useState(getLocalData());



  //윈도우 전역객체에 있는 kakao키값을 바로 변수로 비구조화 할당
  const { kakao } = window;
  const info = [
    {
      title: 'APPLE STORE',
      latlng: new kakao.maps.LatLng(
        37.52082116882639,
        127.02272318853223
      ),
      imgSrc: `${process.env.PUBLIC_URL}/img/map_icon.png`,
      imgSize: new kakao.maps.Size(100, 100),
      imgPos: {
        offset: new kakao.maps.Point(50, 100),
      },
    },

  ];
  const [Location, setLocation] = useState(null);
  const [Info, setInfo] = useState(info);
  const [Index, setIndex] = useState(0);
  const container = useRef(null);
  const frame = useRef(null);
  const option = {
    center: Info[Index].latlng,
    level: 3,
  };
  const imageSrc = Info[Index].imgSrc;
  const imageSize = Info[Index].imgSize;
  const imageOption = Info[Index].imgPos;

  //마커이미지 인스턴스 생성
  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  //위치 인스턴스 생성
  const markerPosition = Info[Index].latlng;

  //위치 인스턴스 값을 인수로 해서 마커 인스턴스 생성
  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });



  //최종 마커 호출

  useEffect(() => {
    frame.current.classList.add('on');
    container.current.innerHTML = '';
    //지도 인스턴스 생성
    const map_instance = new kakao.maps.Map(
      container.current,
      option
    );
    const handleResize = () => {
      map_instance.setCenter(Info[Index].latlng);
    }
    //지도타입 컨트롤바 출력
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map_instance.addControl(
      mapTypeControl,
      kakao.maps.ControlPosition.TOPRIGHT
    );

    //지도 줌 컨트롤바 출력
    const zoomControl = new kakao.maps.ZoomControl();
    map_instance.addControl(
      zoomControl,
      kakao.maps.ControlPosition.RIGHT
    );
    //마커 출력
    marker.setMap(map_instance);
    //인스턴스값을 state에 담아서 관리
    setLocation(map_instance);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

    localStorage.setItem('post', JSON.stringify(Posts));

    //버튼활성화
    // for (const btn of btns.current.children) btn.classList.remove("on");
    // btns.current.children[Index].classList.add("on");
  }, [Index]);

  const visualImg = `${process.env.PUBLIC_URL}/img/visual_img1.jpg`;

  // const faqList = [
  //   { txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit?' },
  //   { txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit?' },
  //   { txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit?' }
  // ]
  //const [Faq, setFaq] = useState(0);

  return (
    <>
      <div className="visualWrap" ref={frame}>
        <div className="visualTxt">
          Contact of beats.by dr.dre
        </div>
        <figure>
          <img src={visualImg} alt="" />
          <div className='vTxt'>
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quo laboriosam labore debitis explicabo laudantium eius asperiores? Maxime, possimus aliquid. Nisi excepturi nesciunt voluptas id in sit commodi fugit adipisci.
            </p>
          </div>
        </figure>
      </div>

      <Layout name={'Location'}>
        <div className="getWrap">
          <h3>About beats.by dr.dre</h3>
          <div className="tel">
            <h4>General Contact</h4>
            <p>
              hello@dr_dre.com
              <span>Tel.080-646-0880</span>
            </p>
          </div>
          <div className="con">
            <article>
              <h4>Visit Us</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, animi!</p>
              <div>
                <div className="icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <p>서울특별시 강남구 가로수길 43</p>
              </div>
            </article>
            <article>
              <h4>Product Help</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, animi!</p>
              <div>
                <div className="icon">
                  <FontAwesomeIcon icon={faInfoCircle} />
                </div>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </article>
          </div>
        </div>
        <div id='map' ref={container}></div>
        <div className="faqWrap">
          <div className="tWrap">
            <p>FAQ</p>
            <h5>
              <span>Frequently</span>
              <span>asked</span>
              <span>questions</span>
            </h5>
          </div>
          <div className="listWrap">
            <h3>Lorem ipsum dolor, sit amet consectetur.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi ea esse itaque! Praesentium, dolorum architecto!</p>
            {Posts.map((post, idx) => {
              if (idx < 4) {
                return (
                  <article key={idx}>
                    <h5>{post.content}</h5>
                    <p>
                      <FontAwesomeIcon icon={faPlusSquare} />
                    </p>
                  </article>

                )
              }
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Location;