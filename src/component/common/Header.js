import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

function Header({ type }) {
  const style = {
    color: '#e64238',
    fontWeight: 'bold'
  };
  const imgLogo = `${process.env.PUBLIC_URL}/img/logo_long.png`;


  return (
    <header className={type}>
      <div className='inner'>
        <div className='logoWrap'>
          <h1>
            <Link to='/'>
              <img src={imgLogo} alt="" />
            </Link>
          </h1>
          <p>
            <Link to='/join'>
              <FontAwesomeIcon icon={faSignIn} />
            </Link>
          </p>
        </div>

        <ul id='gnb'>
          <li>
            <NavLink activeStyle={style} to='/department'>
              About dr.dre
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={style} to='/product'>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={style} to='/gallery'>
              dr.dre Gallery
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={style} to='/youtube'>
              dr.dre Video
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={style} to='/notice'>
              Notice
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={style} to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Header;
