import './App.scss';
import {useState} from 'react'
import nature1 from './img/nature1.jpeg'
import nature2 from './img/nature2.jpeg'
import nature3 from './img/nature3.jpeg'
import city1 from './img/city1.jpeg'
import city2 from './img/city2.jpeg'
import city3 from './img/city3.jpeg'
import city4 from './img/city4.jpeg'
import city5 from './img/city5.jpeg'

function App() {
  const nature = [
    {
      id: 0,
      img: nature1,
      name: 'Nature-1'
    },
    {
      id: 1,
      img: nature2,
      name: 'Nature-2'
    },
    {
      id: 2,
      img: nature3,
      name: 'Nature-3'
    },
  ]

  const city = [
    {
      id: 0,
      img: city1,
      name: 'City-1'
    },
    {
      id: 1,
      img: city2,
      name: 'City-2'
    },
    {
      id: 2,
      img: city3,
      name: 'City-3'
    },
    {
      id: 3,
      img: city4,
      name: 'City-4'
    },
    {
      id: 4,
      img: city5,
      name: 'City-5'
    },
  ]
  const [isOpenModal1,setIsOpenModal1] = useState(false)
  const [isOpenModal2,setIsOpenModal2] = useState(false)
  const [imgClick,setImgClick] = useState({id: 0,img: nature1, name: 'Nature-1'})
  const handleClickNatureImg = item => {
    setIsOpenModal1(true)
    setImgClick(item)
  }

  const handleClickCityImg = item => {
    setIsOpenModal2(true)
    setImgClick(item)

  }

  const handleCityNextImg = () => {
    if(imgClick.id === city.length - 1)
      setImgClick(city[0])
    else
      setImgClick(city[imgClick.id + 1])
  }

  const handleCityPrevImg = () => {
    if(imgClick.id === 0)
      setImgClick(city[city.length - 1])
    else
      setImgClick(city[imgClick.id - 1])
  }

  const handleNatureNextImg = () => {
    if(imgClick.id === nature.length - 1)
      setImgClick(nature[0])
    else
      setImgClick(nature[imgClick.id + 1])
  }

  const handleNaturePrevImg = () => {
    if(imgClick.id === 0)
      setImgClick(nature[nature.length - 1])
    else
      setImgClick(nature[imgClick.id - 1])
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='box'>
          {
            nature.map((item,index) => (
              <div className='item' key={index}> 
                <div className='itemContent'>
                  <img onClick={() => handleClickNatureImg(item)} src={item.img} alt='ptc' className='itemImg' />
                </div>
              </div>
            ))
          }
        </div>

        <div className='box'>
          {
            city.map((item,index) => (
              <div className='item' key={index}> 
                <div className='itemContent'>
                  <img onClick={() => handleClickCityImg(item)} src={item.img} alt='ptc' className='itemImg' />
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className={`modal ${isOpenModal1 ? 'active' : ''}`}>
        <div className='btnClose' onClick={() => setIsOpenModal1(false)}>X</div>
        <div className='modalContent'>
          <div className='modalContentImg'>
            <img src={imgClick.img} alt='ptc' />
            <div onClick={handleNaturePrevImg} className='btnImg left'><i className="fas fa-chevron-left"></i></div>
            <div onClick={handleNatureNextImg} className='btnImg right'><i className="fas fa-chevron-right"></i></div>
          </div>

          <div  className='modalContentName'><p>{imgClick.name}</p></div>
          <div className='modalContentImgs'>
            {
              nature.map((item,index) => (
                <div className='modalContentImgItem' key={index}>
                  <img onClick={() => handleClickNatureImg(item)} className={`${item.name === imgClick.name ? 'isActive' : ''}`} src={item.img} alt='ptc' />
                </div>
              ))
            }
            
          </div>

        </div>
      </div>

      <div className={`modal ${isOpenModal2 ? 'active' : ''}`}>
        <div className='btnClose' onClick={() => setIsOpenModal2(false)}>X</div>
        <div className='modalContent'>
          <div className='modalContentImg'>
            <img src={imgClick.img} alt='ptc' />
            <div onClick={handleCityPrevImg} className='btnImg left'><i className="fas fa-chevron-left"></i></div>
            <div onClick={handleCityNextImg} className='btnImg right'><i className="fas fa-chevron-right"></i></div>
          </div>

          <div className='modalContentName'><p>{imgClick.name}</p></div>
          <div className='modalContentImgs'>
            {
              city.map((item,index) => (
                <div className='modalContentImgItem' key={index}>
                  <img onClick={() => handleClickCityImg(item)} className={`${item.name === imgClick.name ? 'isActive' : ''}`} src={item.img} alt='ptc' />
                </div>
              ))
            }
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
