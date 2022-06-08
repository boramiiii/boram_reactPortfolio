import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Department() {
  const path = process.env.PUBLIC_URL;
  const [Members, setMembers] = useState([]);
  const smallLogo = `${process.env.PUBLIC_URL}/img/logo_small.png`;

  useEffect(() => {
    axios.get(`${path}/DB/members.json`).then((json) => {
      setMembers(json.data.products);
    });
  }, []);

  return (
    <div id='dep' className='on'>
      <div className="visualWrap">
        <div className="visualTxt">
          dr. dre's Philosophy of Music
        </div>
        <figure>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
          <p>
            Beats by Dr. Dre(이하 Beats)는 2006년 Dr. Dre와 Jimmy Iovine이 설립한 최고의 오디오 브랜드입니다. Beats는 그동안 프리미엄 소비자 헤드폰, 이어폰, 스피커 제품군을 통해 프리미엄 사운드 엔터테인먼트의 가능성에 대해 완전히 새로운 시대를 열었습니다. 브랜드의 꾸준한 성공을 통해 전 세계 음악 애호가들에게 녹음 스튜디오 현장에서만 느낄 수 있는 에너지, 감정, 흥분을 직접 경험하는 듯한 감동을 전달해 줍니다. Apple Inc.는 2014년 7월에 Beats를 인수했습니다.
          </p>
          <div className='btns'>
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </figure>
      </div>

      <Layout name={'Department'}>

        <div className='wrap'>
          <h4>beats.by.dr.dre</h4>
          <div className="conWrap">
            <div className="left">
              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis atque eaque?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nisi quis dolores eveniet repudiandae quibusdam deleniti vitae a saepe neque.</p>
            </div>
            <div className="right">
              <img src={smallLogo}></img>
              <h3>
                Lorem, ipsum.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor expedita animi.
              </p>
            </div>
          </div>
          <div className="toggleWrap">

          </div>
          {Members.map((products, idx) => {
            return (
              <article key={idx}>
                <div className='pic'>
                  <img
                    src={`${path}/img/${products.pic}`}
                    alt={products.name}
                  />
                  <div className="con">
                    <h5>{products.name}</h5>
                    <p>{products.position}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Layout>
    </div>
  );
}

export default Department;
