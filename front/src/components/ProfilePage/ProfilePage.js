import styles from './profilepage.module.css'
import CardInput from '../CardInput/CardInput'
import ServicePage from '../ServicePage/ServicePage'
import EditProfile from '../EditProfile/EditProfile'
import Support from '../Support/Support'
import { useState } from 'react'
import { useThemeContext } from '../../context/themeContext'
import MapsTest from '../MapsTest/MapsTestCreateCard'
import Message from '../Message/Message'



function ProfilePage() {
const { isLightTheme , setTheme} = useThemeContext()
const [block, setBlock ] = useState('');
// const {authorId, cardId, senderId } = dialogg



async function getMessage() {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/api/message/`, {
  //   method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     credentials: 'include',
  //     body: JSON.stringify(dialogg)
  // })
  // const cardPost = await response.json()
  // // console.log(cardPost);
  setBlock(<Message/>)
//   setMessage(cardPost)
}


return (
  <>
  {isLightTheme && <div className={styles.profile_page_container_light}>
      <div className={styles.profile_page_menu_light}>
         <div className={styles.top_menu_block_light}>MENU</div>
        <button onClick={()=> setBlock(<ServicePage/>)} className={styles.menu_block_light}> <div >МОИ МЕСТА</div></button>
        <button onClick={() => setBlock(<MapsTest/>)} className={styles.menu_block_light}> <div >ДОБАВИТЬ МЕСТО</div></button>
        <button onClick={()=> setBlock(<EditProfile/>)} className={styles.menu_block_light}> <div >РЕДАКТИРОВАТЬ ПРОФИЛЬ </div> </button>
        <button onClick={()=> setBlock(<Support/>)} className={styles.menu_block_light}>  <div >ПОДДЕРЖКА</div></button>
        <button onClick={getMessage} className={styles.menu_block_light}>  <div >Мои сообщения</div></button>
      </div>

      <div className={styles.profile_page_var_light}>
         {block}
      </div>
  </div>}

  {!isLightTheme && <div className={styles.profile_page_container_dark}>
      <div className={styles.profile_page_menu_dark}>
         <div className={styles.top_menu_block_dark}>MENU</div>
        <button onClick={()=> setBlock(<ServicePage/>)} className={styles.menu_block_dark}> <div >МОИ МЕСТА</div></button>
        <button onClick={()=> setBlock(<MapsTest/>)} className={styles.menu_block_dark}> <div >ДОБАВИТЬ МЕСТО</div></button>
        <button onClick={()=> setBlock(<EditProfile/>)} className={styles.menu_block_dark}> <div >РЕДАКТИРОВАТЬ ПРОФИЛЬ</div> </button>
        <button onClick={()=> setBlock(<Support/>)} className={styles.menu_block_dark}>  <div >ПОДДЕРЖКА</div></button>
     
      </div>

      <div className={styles.profile_page_var_dark}>
         {block}
      </div>
  </div>}
  
  </>

)




}

export default ProfilePage
