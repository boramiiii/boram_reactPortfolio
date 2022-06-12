import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Join() {
  const history = useHistory();
  const initVal = {
    userid: '',
    pwd1: '',
    pwd2: '',
    email: '',
    comments: '',
    memYear: '',
    memMonth: '',
    memDay: '',
    memCTel1: '',
    memCTel2: '',
    memCTel3: '',
    phone: '',
    birth: '',
    gender: null
  };
  const [Val, setVal] = useState(initVal);
  const [Err, setErr] = useState({});
  const [Success, setSuccess] = useState(false);
  const [Submit, setSubmit] = useState(false);

  const check = (Val) => {
    const errs = {};
    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[!@#$%^&*()_+]/;

    //userid인증처리
    if (Val.userid.length < 5) {
      errs.userid = '아이디를 5글자 이상 입력하세요';
    }
    //password인증처리
    if (
      Val.pwd1.length < 5 ||
      !eng.test(Val.pwd1) ||
      !num.test(Val.pwd1) ||
      !spc.test(Val.pwd1)
    ) {
      errs.pwd1 =
        '비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요.';
    }
    if (Val.pwd1 !== Val.pwd2 || !Val.pwd2) {
      errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
    }
    if (Val.email.length < 8 || !/@/.test(Val.email)) {
      errs.email =
        '이메일은 8글자이상 @를 포함해 입력하세요';
    }
    if (!Val.gender) {
      errs.gender = '성별을 선택하세요';
    }

    if (Val.comments.length < 20) {
      errs.comments = '남기는 말은 20글자 이상 입력하세요';
    }
    if (Val.memCTel1 === '' && Val.memCTel2 === '' && Val.memCTel3 === '') {
      errs.phone = '전화번호를 입력해주세요.';
    }

    if (Val.memYear === '' && Val.memMonth === '' && Val.memDay === '') {
      errs.birth = '생년월일을 선택해주세요.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...Val, [name]: value });
  };

  const handleRadio = (e) => {
    const { name } = e.target;
    const isCheck = e.target.checked;
    setVal({ ...Val, [name]: isCheck });
  };

  const handleCheck = (e) => {
    let isCheck = false;
    const { name } = e.target;
    const inputs =
      e.target.parentElement.querySelectorAll('input');

    inputs.forEach((el) => {
      if (el.checked) isCheck = true;
    });

    setVal({ ...Val, [name]: isCheck });
  };

  const handleSelect = (e) => {
    const { name } = e.target;
    const isSelected =
      e.target.options[e.target.selectedIndex].value;
    setVal({ ...Val, [name]: isSelected });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(check(Val));
  };

  useEffect(() => {
    console.log(Err);
    console.log(Object.keys(Err).length);
    const len = Object.keys(Err).length;
    if (len === 0 && Submit) {
      setSuccess(true);
      console.log('회원가입 성공');
      history.push('/');
    } else {
      setSuccess(false);
      console.log('회원가입 실패');
    }
  }, [Err]);

  return (
    <Layout name={'Join'}>
      <h2>JOIN US</h2>
      <h4>Contact For dr.dre</h4>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className='h'>회원가입 폼 양식</legend>
          <table>
            <caption className='h'>
              회원가입 정보입력
            </caption>
            <tbody>
              {/* userid */}
              <tr>
                <th scope='row'>
                  <label htmlFor='userid'>User ID
                    <span className="essential" aria-label="필수항목">*</span>
                  </label>
                </th>
                <td>
                  <input
                    type='text'
                    id='userid'
                    name='userid'
                    placeholder='아이디를 입력하세요.'
                    value={Val.userid}
                    onChange={handleChange}
                  />
                  <span className='err'>{Err.userid}</span>
                </td>
              </tr>

              {/* password */}
              <tr>
                <th scope='row'>
                  <label htmlFor='pwd1'>Password
                    <span className="essential" aria-label="필수항목">*</span>
                  </label>
                </th>
                <td>
                  <input
                    type='password'
                    name='pwd1'
                    id='pwd1'
                    placeholder='비밀번호를 입력하세요'
                    value={Val.pwd1}
                    onChange={handleChange}
                  />
                  <span className='err'>{Err.pwd1}</span>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <label htmlFor='pwd2'>Re Password
                    <span className="essential" aria-label="필수항목">*</span>
                  </label>
                </th>
                <td>
                  <input
                    type='password'
                    name='pwd2'
                    id='pwd2'
                    placeholder='비밀번호를 다시 입력해주세요.'
                    value={Val.pwd2}
                    onChange={handleChange}
                  />
                  <span className='err'>{Err.pwd2}</span>
                </td>
              </tr>

              {/* email */}
              <tr>
                <th scope='row'>
                  <label htmlFor='email'>E-Mail
                    <span className="essential" aria-label="필수항목">*</span>
                  </label>
                </th>
                <td>
                  <input
                    type='text'
                    id='emial'
                    name='email'
                    placeholder='이메일주소를 입력하세요'
                    value={Val.email}
                    onChange={handleChange}
                  />
                  <span className='err'>{Err.email}</span>
                </td>
              </tr>

              {/* gender */}
              <tr>
                <th scope='row'>
                  <label htmlFor='email'>Gender
                  </label>
                </th>
                <td>
                  <label htmlFor='male'>Male</label>
                  <input
                    type='radio'
                    id='male'
                    name='gender'
                    onChange={handleRadio}
                  />

                  <label htmlFor='female'>Female</label>
                  <input
                    type='radio'
                    id='female'
                    name='gender'
                    onChange={handleRadio}
                  />
                  <span className='err'>{Err.gender}</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <label htmlFor="birth">Birth
                    <span className="essential" aria-label="필수항목">*</span></label>
                </th>
                <td>
                  <div className="flex hyphen">
                    <select className="selectBox fSelect" id="memYear" name="memYear" title="생년월일 년" onChange={handleSelect}>
                      <option value="">선택</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                    </select>
                    <span className="space">년</span>
                    <select className="selectBox fSelect" id="memMonth" name="memMonth" title="생년월일 월" onChange={handleSelect}>
                      <option value="">선택</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <span className="space">월</span>
                    <select className="selectBox fSelect" id="memDay" name="memDay" title="생년월일 일" onChange={handleSelect}>
                      <option value="">선택</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <span className="space">일</span>
                  </div>
                  <span className='err'>{Err.birth}</span>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="tell">Phone Number
                  <span className="essential" aria-label="필수항목">*</span></label>
                </th>
                <td>
                  <div className="phoneNumber">
                    <select id="memCTel1" name="memCTel1" className="selectBox fSelect sizeS" title="전화번호 앞자리 선택" onChange={handleSelect}>
                      <option value="">선택</option>
                      <option value="010">010</option>
                      <option value="011">011</option>
                    </select>
                    <span className="dash">-</span>
                    <input type="number" name="memCTel2" id="memCTel2" />
                    <span clasclassNames="dash">-</span>
                    <input type="number" name="memCTel3" id="memCTel2" />
                  </div>
                  <span className='err'>{Err.phone}</span>
                </td>
              </tr>

              {/* comments */}
              <tr>
                <th scope='row'>
                  <label htmlFor='comments'>Comments</label>
                </th>
                <td>
                  <textarea
                    name='comments'
                    id='comments'
                    cols='30'
                    rows='10'
                    value={Val.comments}
                    onChange={handleChange}></textarea>
                  <span className='err'>
                    {Err.comments}
                  </span>
                </td>
              </tr>

              {/* btnSet */}
              <tr>
                <th colSpan='2'>
                  <input type='reset' value='CANCEL' />
                  <input
                    type='submit'
                    value='SUBMIT'
                    onClick={() => setSubmit(true)}
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </Layout>
  );
}

export default Join;