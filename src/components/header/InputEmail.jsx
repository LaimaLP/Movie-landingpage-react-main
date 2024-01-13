import style from './Header.module.css'


export function InputEmail() {
    return (
        <div className={style.emailContainer}>
            <input className={style.emailInput} type="email" placeholder="Email address"></input>
            <button className={style.button}>Get Started {'>'} </button>
        </div>
    )
}