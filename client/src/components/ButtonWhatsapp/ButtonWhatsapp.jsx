import { BsWhatsapp } from 'react-icons/bs';
import styles from './ButtonWhatsapp.module.css'
import ChatBot from '../ChatBot/ChatBot';


export default function ButtonWhatsapp() {
    return (
        <div >


<a href="https://wa.me/+5215564727323?text=Hola! quiero una cotización." 
   className={styles.whatsapp} 
   target="_blank" 
   rel="noopener noreferrer">
  <i className={styles.icon_whatsapp}>
    <BsWhatsapp />
  </i>
</a>

<ChatBot/>

	</div>
    )
}