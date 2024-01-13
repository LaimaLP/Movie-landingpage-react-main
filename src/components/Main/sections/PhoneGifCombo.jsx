import style from './Section.module.css'
import book from '../../img/boxshot.png'
import phone from '../../img/mobile-0819.jpg'



export function PhoneGifCombo() {
    return (
<div className={style.secondSectionMedia}>
    <div className={style.phoneContainer}>
        <img src={book} alt="book" width={70} />
        <div className={style.textDown}>
            <h6>Luckiest Girl Alive</h6>
            <p>Downloading...</p>
        </div>
        <img className={style.downGif} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="download" width={50} height={50}></img>
    </div>
    <img className={style.girlInPhone} src={phone} alt="phone" />
</div>
    )
}
