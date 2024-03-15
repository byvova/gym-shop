import css from './Hero.module.css'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa"

export const Hero = () => {
    return (

        <div className={css.heroContainer}>
            <FaChevronLeft className={css.iconLeft} />
            <FaChevronRight className={css.iconRight} />
            <div className={css.title}>
                <h1>
                    Швидше.
                    Вище.
                    Сильніше.
                </h1>
                <p>Разом із Nike</p>
            </div>
            <div className={css.discount}>
                <button>Знижки до 40%</button>
                <p>Залишився лише тиждень</p>
            </div>
        </div>

    )
}