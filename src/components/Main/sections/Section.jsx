import style from './Section.module.css'
import { ImgVideoCombo } from './ImgVideoCombo'
import { TextItemOfSection } from './TextIntemOfSection'




export function Section({ data }) {
    const { title, sectionText, srcNameVideo, srcNameImg, onlyImg } = data

    return (
        <div className={style.sectionContainer}>
            <TextItemOfSection title={title} sectionText={sectionText} />
            <ImgVideoCombo srcNameVideo={srcNameVideo} srcNameImg={srcNameImg} onlyImg={onlyImg} />
        </div>
    )
}

