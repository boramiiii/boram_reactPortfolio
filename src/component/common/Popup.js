import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/*
  단계1 - 기존의 컴포넌트 함수를 대입형(화살표) 함수로 변경
  단계2 - 해당 화살표함수를 forwardRef()의 인수로 전달
  단계3 - forwardRef의 인수로 전달받는 함수의 두번채 파라미터로 ref추가
*/

const Popup = forwardRef(({ children }, ref) => {
  //자신의 open여부를 결정하는 state생성
  const [Open, setOpen] = useState(false);
  const closeBtn = `${process.env.PUBLIC_URL}/img/close.png`;

  //해당 컴포넌트에서 만들어지는 함수를 부모컴포넌트에서 사용가능하도록 외부로 반환가능
  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true), //팝업열기 함수
      close: () => setOpen(false), //팝업닫기 함수
    };
  });

  useEffect(() => {
    /*
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
    */
  }, []);

  return (
    <>
      {Open && (
        <AnimatePresence>
          <motion.aside className='pop' initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: .5 } }}
            exit={{ opacity: 0, scale: 0 }}>
            <div className='con'>
              {children}
              <span className='close' onClick={() => setOpen(false)}>
                <img src={closeBtn} alt="" />
              </span>
            </div>
          </motion.aside>
        </AnimatePresence>
      )}
    </>
  );
});

export default Popup;