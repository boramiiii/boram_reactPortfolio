import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function PopupYoutube({ children, setOpen }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])

  const closeBtn = `${process.env.PUBLIC_URL}/img/close.png`;
  return (
    <AnimatePresence>
      <motion.aside className='pop' initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: .5 } }}
        exit={{ opacity: 0, scale: 0 }}>
        <div className="con">
          {children}
          <span className="close" onClick={() => setOpen(false)}>
            <img src={closeBtn} alt="" />
          </span>
        </div>
      </motion.aside>
    </AnimatePresence>
  );

}

export default PopupYoutube;