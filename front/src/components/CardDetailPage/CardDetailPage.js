import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './carddetailpage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useThemeContext } from '../../context/themeContext'
import { useNavigate } from 'react-router-dom'
import { getCard } from '../../redux/actions/card.reducer'
import { removeCard } from '../../redux/actions/cards.action'
import { updateCard } from '../../redux/actions/cards.action'



function CardDetailPage() {

  const { isLightTheme, setTheme } = useThemeContext()
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCard(Number(id)))
  },[])

  const cardData = useSelector((state) => {
    return state.card
  })

  const [isActive, setIsActive] = useState(true)

  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [instagram, setInstagram] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [telegram, setTelegram] = useState('')
  

  useEffect(() => {
    setImage(cardData.image)
    setTitle(cardData.title)
    setText(cardData.text)
    setInstagram(cardData.instagram)
    setWhatsapp(cardData.whatsapp)
    setTelegram(cardData.telegram)
  }, [cardData])


  const navigate = useNavigate()
  
  
  function deleteCard(id){
    dispatch(removeCard(id))
    navigate('/profilepage')
  }

  function editCard(arg){
    dispatch(updateCard(arg))
    navigate('/')
  }

  function activateEdit(event){
    setIsActive(false)
    // event.target.style.display = "none"
    // document.querySelector(`.${styles.sub__btn}`).style.display = 'block'
    // let data = [...document.querySelectorAll(`.${styles.input__detail_page}`)]
    // data.forEach((item)=>{
    //   item.removeAttribute('disabled')
    //   item.style.border = '2px solid #d6608c'
    // })
  }

  return (

    <>
    {isLightTheme &&  <div className={styles.detail_main_container_light}>
      <div className={styles.detail_img_block_light}>
          <img className={styles.detail_img_light}
           onChange={(event) => setImage(event.target.value)} alt='serv-img' src={image}/>
      </div>

        <div className={styles.detail_description_light}>
        <div className={styles.detail_title_light}>
            {/* {cardData.title} */}
            <p>Заголовок</p>
            <input className={`${styles.input__detail_page_light} ${isActive ? '' : styles.visible__input}`} onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Введите заголовок" disabled={isActive}/>
        </div>
        <div className={styles.detail_text_light_light}>
            {/* {cardData.text} */}
            <p>Описание</p>
            <input className={`${styles.input__detail_page_light} ${isActive ? '' : styles.visible__input}`} onChange={(event) => setText(event.target.value)} value={text} placeholder="Введите описание" disabled={isActive}/>
        </div>
      </div>


      <div className={styles.detail_contacts_light}>
          <p>Контакты</p>
          <div> <i className="fab fa-instagram "></i> <input className={`${styles.input__detail_page_light} ${isActive ? '' :  styles.visible__input}`} onChange={(event) => setInstagram(event.target.value)} value={instagram} placeholder="instagram" disabled={isActive}/></div>
          <div> <i className="fab fa-whatsapp "></i> <input className={`${styles.input__detail_page_light} ${isActive ? '' :  styles.visible__input}`} onChange={(event) => setWhatsapp(event.target.value)} value={whatsapp} placeholder="whatsapp" disabled={isActive}/></div>
          <div> <i className="fab fa-telegram-plane "></i> <input className={`${styles.input__detail_page_light} ${isActive ? '' :  styles.visible__input}`}  onChange={(event) => setTelegram(event.target.value)} value={telegram} placeholder="telegram" disabled={isActive}/></div>
      </div>
      <div className={styles.detail_button_block_light}>
        <button className={styles.button_light}>Message</button>
          <button className={`${styles.button_light}  ${isActive ? '' : styles.deactiveBtn}`} onClick={activateEdit}>Edit</button>
          <button className={styles.button_light} className={`${styles.button_light} ${isActive ? styles.deactiveBtn : ''}`} onClick={() => editCard({ id, image, title, text, instagram, whatsapp, telegram })}>Success</button>
        <button className={styles.button_light} onClick={()=>{deleteCard(cardData.id)}}>Delete</button>
      </div>
    </div>}

    {!isLightTheme &&  <div className={styles.detail_main_container_dark}>
      <div className={styles.detail_img_block_dark}>
          <img className={styles.detail_img_dark}  onChange={(event) => setImage(event.target.value)} alt='serv-img' src={image}/>
      </div>

      <div className={styles.detail_description_dark}>
        <div className={styles.detail_title_dark}>
          {/* {cardData.title} */}
            <p>Заголовок</p>
            <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input}`} onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Введите заголовок" ddisabled={isActive}/>
        </div>
        <div className={styles.detail_text_dark}>
          {/* {cardData.text} */}
            <p>Описание</p>
            <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input}`} onChange={(event) => setText(event.target.value)} value={text} placeholder="Введите описание" disabled={isActive}/>
        </div>
      </div>
   
      <div className={styles.detail_contacts_dark}>
          <p>Контакты</p>
          <div> <i className="fab fa-instagram "></i> <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input}`} onChange={(event) => setInstagram(event.target.value)} value={instagram} placeholder="instagram" disabled={isActive}/></div>
          <div> <i className="fab fa-whatsapp "></i> <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input}`} onChange={(event) => setWhatsapp(event.target.value)} value={whatsapp} placeholder="whatsapp" disabled={isActive}/></div>
          <div> <i className="fab fa-telegram-plane "></i> <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input}`} onChange={(event) => setTelegram(event.target.value)} value={telegram} placeholder="telegram" disabled={isActive}/></div>
      </div>
      <div className={styles.detail_button_block_dark}>
        <button className={styles.button_dark}>Message</button>
          <button className={`${styles.button_dark} ${isActive ? '' : styles.deactiveBtn}`} onClick={activateEdit}>Edit</button>
          <button className={styles.button_dark} className={`${styles.button_light}  ${isActive ? styles.deactiveBtn : ''}`} onClick={() => editCard({ id, image, title, text, instagram, whatsapp, telegram })}>Success</button>
        <button className={styles.button_dark} onClick={()=>{deleteCard(cardData.id)}}>Delete</button>
      </div>
    </div>}
   
    </>
  )
}

export default CardDetailPage
