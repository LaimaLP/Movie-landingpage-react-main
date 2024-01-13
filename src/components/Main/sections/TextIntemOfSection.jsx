import style from './Section.module.css'



export function TextItemOfSection(props){
    return (
        <div className={style.textContainer}>
        <h1>{props.title}</h1>
        <p>{props.sectionText}</p>
    </div>
    )
}