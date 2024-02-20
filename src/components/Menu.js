import { useEffect, useRef, useState } from 'react';

import styles from '../styles/Menu.module.scss';

import menuButton from '../Assets/line-md--close-to-menu-transition.svg';
import closeButton from '../Assets/line-md--menu-to-close-transition.svg';
import menuIcon from '../Assets/line-md--menu.svg';
import header from '../Assets/DOYO DORADO.png';

function Menu({ setP }) {
    const [isSticky, setIsSticky] = useState(false);
    const [menu, setMenu] = useState(0);

    const sticky = useRef();

    useEffect(() => {
        const currentSticky = sticky.current;

        const observer = new IntersectionObserver(([entry]) => {
                setIsSticky(entry.intersectionRatio < 1);
            },
            { threshold: [1] }
        );

        if(currentSticky) {
            observer.observe(currentSticky);
        }

        return () => {
            if(currentSticky) {
                observer.unobserve(currentSticky);
            }
        }
    }, []);

    return (
        <div ref={sticky} className={styles.body} stik={isSticky ? 1 : 0} men={menu}>
            <button className={styles.menuButton} onClick={() => setMenu(menu === 1 ? 2 : 1)}><img src={menu === 0 ? menuIcon : menu === 1 ? closeButton : menuButton} alt='menu' /></button>
            <div className={styles.menu}>
                <img src={header} alt='head' className={styles.header} />
                <button onClick={() => {setP(1);setMenu(2);}}>INICIO</button>
                <button onClick={() => {setP(2);setMenu(2);}}>HISTORIA</button>
                <button onClick={() => {setP(3);setMenu(2);}}>FILOSOFIA</button>
                <button onClick={() => {setP(4);setMenu(2);}}>DOJOS</button>
            </div>
        </div>
    );
}

export default Menu;
