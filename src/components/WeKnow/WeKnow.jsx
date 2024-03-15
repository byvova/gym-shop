import css from './WeKnow.module.css'
import { IoRemoveOutline } from "react-icons/io5";

export const WeKnow = () => {
    return (
        <div>
            <div className={css.iconsHeroContainer}>
                <IoRemoveOutline className={css.heroIcons} />
                <IoRemoveOutline className={css.heroIcons} />
            </div>
        </div>
    )
}