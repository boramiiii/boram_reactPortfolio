import Anime from '../../asset/anime.js';


function Btns() {
  const path = process.env.PUBLIC_URL;

  const toTop = () => {

    new Anime(window, {
      prop: 'scroll',
      value: 0,
      duration: 500,
    });
  }

  return (
    <div className="upBtn">
      <img src={`${path}/img/upBtn.png`} onClick={toTop} />
    </div>
  )
}

export default Btns