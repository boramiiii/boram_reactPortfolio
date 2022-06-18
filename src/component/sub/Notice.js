import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState, useEffect } from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Notice() {
  const input = useRef(null);
  const textarea = useRef(null);
  const inputEdit = useRef(null);
  const textareaEdit = useRef(null);
  const visualImg = `${process.env.PUBLIC_URL}/img/visual_img3.jpg`;

  const [Open, setOpen] = useState(false);

  const frame = useRef(null);

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

  const [Posts, setPosts] = useState(getLocalData());
  const [Allowed, setAllowed] = useState(true);

  //글 초기화  함수
  const resetPost = () => {
    input.current.value = '';
    textarea.current.value = '';
    if (inputEdit.current) {
      inputEdit.current.value = '';
      textareaEdit.current.value = '';
    }
  };

  //글 저장 함수
  const createPost = () => {
    if (!input.current.value.trim() || !textarea.current.value.trim()) {
      resetPost();
      return alert('제목과 본문을 모두 입력하세요');
    }
    setPosts([
      { title: input.current.value, content: textarea.current.value },
      ...Posts,
    ]);
    resetPost();
  };

  //글 삭제 함수
  const deletePost = (index) => {
    console.log(index);
    setPosts(Posts.filter((_, idx) => index !== idx));
  };

  //실제 글 수정 함수
  const updatePost = (index) => {
    setAllowed(true);
    if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
      resetPost();
      return alert('수정할 제목과 본문을 모두 입력하세요');
    }

    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) {
          post.title = inputEdit.current.value;
          post.content = textareaEdit.current.value;
          post.enableUpdate = false;
        }
        return post;
      })
    );
  };

  //글 수정모드 변경함수
  const enableUpdate = (index) => {
    if (!Allowed) return;
    setAllowed(false);
    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) post.enableUpdate = true;
        return post;
      })
    );
  };

  //출력모드 변경함수
  const disableUpdate = (index) => {
    setAllowed(true);
    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) post.enableUpdate = false;
        return post;
      })
    );
  };

  useEffect(() => {
    frame.current.classList.add('on');
    console.log(Posts);
    localStorage.setItem('post', JSON.stringify(Posts));
  }, [Posts]);

  return (
    <>
      <div className='noticeWrap'>
        <div className="visualWrap" ref={frame}>
          <div className="visualTxt">
            Community of beats.by dr.dre
          </div>
          <figure>
            <img src={visualImg} alt="" />
            <div className='vTxt'>
              <h2>Frequently Asked Questions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quo laboriosam labore debitis explicabo laudantium eius asperiores? Maxime, possimus aliquid. Nisi excepturi nesciunt voluptas id in sit commodi fugit adipisci.
              </p>
            </div>
          </figure>
        </div>
      </div>
      <Layout name={'Notice'}>
        <h3>Q&A</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nulla praesentium tempore, blanditiis expedita unde ex aliquam libero repudiandae rem fugiat fuga?
        </p>
        <div className='hWrap'>
          <h4>dr.dre Notice</h4>
          <div className="icon" onClick={() => setOpen(!Open)}>
            {Open ? <FontAwesomeIcon icon={faCaretDown} />
              : <FontAwesomeIcon icon={faCaretUp} />}
          </div>
        </div>
        <span></span>
        {Open &&
          <div className='inputBox' setOpen={setOpen}>
            <div className='txtSet'>
              <input type='text' placeholder='제목을 입력하세요' ref={input} />
              <br />
              <textarea
                cols='30'
                rows='1'
                placeholder='본문을 입력하세요'
                ref={textarea}>

              </textarea>

            </div>
            <div className='btnSet'>
              <button onClick={resetPost}>CANCEL</button>
              <button onClick={createPost}>WRITE</button>
            </div>
          </div>}


        <div className='showBox'>
          <div className="head">
            <h1>순번</h1>
            <h2>제목</h2>
            <p>본문</p>
            <div></div>
          </div>
          {Posts.map((post, idx) => {
            return (
              <article key={idx}>
                {post.enableUpdate ? (
                  //수정모드
                  <>
                    <div className='editTxt'>
                      <input
                        type='text'
                        defaultValue={post.title}
                        ref={inputEdit}
                      />
                      <br />
                      <textarea
                        cols='30'
                        rows='1'
                        ref={textareaEdit}
                        defaultValue={post.content}></textarea>
                    </div>

                    <div className='btnSet'>
                      <button onClick={() => disableUpdate(idx)}>CANCEL</button>
                      <button onClick={() => updatePost(idx)}>SAVE</button>
                    </div>
                  </>
                ) : (
                  //출력
                  <>
                    <div className='txt'>
                      <h1>{idx + 1}</h1>
                      <h2>{post.title}</h2>
                      <p>{post.content}</p>
                    </div>

                    <div className='btnSet'>
                      <button onClick={() => enableUpdate(idx)}>EDIT</button>
                      <button onClick={() => deletePost(idx)}>DELETE</button>
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export default Notice;