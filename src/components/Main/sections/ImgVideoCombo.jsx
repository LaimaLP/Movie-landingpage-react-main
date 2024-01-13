// import mini from '../../video/mini.mp4'
// import tv from '../../img/tv.png'
import style from './Section.module.css'


export function ImgVideoCombo(props) {
    return (
        <div className={style.mediaContainer}>
        <div className={style.videoImgCombo}>
            <video autoPlay muted loop id="myVideo" width={390}>
                <source src={props.srcNameVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img src={props.srcNameImg} alt='tv' max-width={500} height={350} />
        </div>
        </div>
    );
}



