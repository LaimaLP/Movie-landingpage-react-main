import Accordion from 'react-bootstrap/Accordion';
import style from './Questions.module.css'



export function QuestionItem(props) {
    console.log(props)
    return (
        <Accordion.Item eventKey={props.itemKey} className={style.accordionItem}>
            <Accordion.Header>{props.header}</Accordion.Header>
            <Accordion.Body>
                {props.body}
            </Accordion.Body>
        </Accordion.Item>
    )
}