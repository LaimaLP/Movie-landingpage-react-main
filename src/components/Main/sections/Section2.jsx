
import style from './Section.module.css'

import { ImgVideoCombo } from './ImgVideoCombo'
import { TextItemOfSection } from './TextIntemOfSection'
import { PhoneGifCombo } from './PhoneGifCombo'




export function Section2({ data }) {
    const { title, sectionText, srcNameVideo, srcNameImg, onlyImg } = data
    return (
        <div className={style.sectionContainer}>
            {!onlyImg
                ? <>
                    <ImgVideoCombo srcNameVideo={srcNameVideo} srcNameImg={srcNameImg} onlyImg={onlyImg} />
                    <TextItemOfSection title={title} sectionText={sectionText} />
                </>
                : <><PhoneGifCombo />
                    <TextItemOfSection title={title} sectionText={sectionText} />
                </>
            }


        </div>
    )
}

