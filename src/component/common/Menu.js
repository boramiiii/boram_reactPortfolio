import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Menu = forwardRef((props, ref) => {
  const imgLogo = `${process.env.PUBLIC_URL}/img/logo_long.png`;
  const [Open, setOpen] = useState(false);
  const style = {
    color: '#e64238',
    fontWeight: 'bold'
  };


  useImperativeHandle(ref, () => {
    return {
      toggle: () => setOpen(!Open),
    };
  });

  return (
    <AnimatePresence>
      {Open && (
        <motion.nav
          id='mobileGnb'
          initial={{ x: -320, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          exit={{ x: -320, opacity: 0, transition: { duration: .5 } }}
          onClick={() => setOpen(!Open)}>
          <h1>
            <NavLink exact to='/'>
              <img src={imgLogo} alt="" />
            </NavLink>
          </h1>

          <ul>
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
            <li>
              <NavLink activeStyle={style} to='/join'>
                Join
              </NavLink>
            </li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
});

export default Menu;