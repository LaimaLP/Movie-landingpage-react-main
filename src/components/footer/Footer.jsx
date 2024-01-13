import style from '../footer/Footer.module.css'
import { LanguageSelection } from '../header/LanguageSelection'

export function Footer() {
    const footerList = ["FAQ", "Help Center", "Account", "Media Center", "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use", "Privacy,", "Cookie Preferences", "Corporate Information", "Contact Us", "Speed Test", "Legal Guarantee", "Legal Notices", "Only on BitMovie", "Ad Choices"]
    return (
        <div className={style.footerContainer}>
            <div className={style.firstListItem}>
                <a href='/'> Questions? Contact us.</a>
            </div>
            <div className={style.listItemContainer}>

                {footerList.map((item, idx) => <a key={idx} href="/"> {item} </a>)}
            </div>
            <div className={style.endingFooter}>
                <LanguageSelection />
                <p>BitMovie Lithuania</p>
            </div>
        </div>
    )
}

