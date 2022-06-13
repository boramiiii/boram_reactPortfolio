import { useEffect } from 'react';

function PopupYoutube({ children, setOpen }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])

  const closeBtn = `${process.env.PUBLIC_URL}/img/close.png`;
  return (
    <aside className='pop'>
      <div className="con">
        {children}
        <span className="close" onClick={() => setOpen(false)}>
          <img src={closeBtn} alt="" />
        </span>
      </div>
    </aside>
  );

}

export default PopupYoutube;