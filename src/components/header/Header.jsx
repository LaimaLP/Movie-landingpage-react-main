import style from './Header.module.css'
import { InputEmail } from './InputEmail'
import { LanguageSelection } from './LanguageSelection'


export function Header() {
    return (
        <div className={style.bgColor}>
            <div className={style.filter}>
                <div className={style.headerContainer}>
                    <span className={style.logoText}>BitMovie</span>
                    <div className={style.languageSignContainer}>
                        < LanguageSelection />

                        <button className={style.btn}> Sign In</button>
                    </div>
                </div>

                <div className={style.heroContainer}>

                    <h1> Unlimited movies, TV shows, and more </h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <InputEmail />
                </div>
            </div>
        </div>

    )
}