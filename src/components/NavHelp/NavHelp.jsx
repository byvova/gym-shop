import css from './NavHelp.module.css'
import clsx from 'clsx';

export const NavHelp = () => {

    const buildClass = clsx(css.helpContainer, 'container');

    return (
        <div className={buildClass}>
            <div className={css.help}>
                <p>098 900 09 09</p>
                <p><a href="#">Допомога</a></p>
            </div>
            <div className={css.help}>
                <p>
                    <span><a href="#">Увійти</a></span>
                    /
                    <span><a href="#">Зареєструватися</a></span></p>
            </div>

        </div>
    )
}