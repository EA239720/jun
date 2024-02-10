import { useEffect, useRef, useState } from 'react';

import styles from '../styles/Menu.module.scss';

function Menu({ setP }) {
    const [isSticky, setIsSticky] = useState(false);
    const sticky = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                setIsSticky(entry.intersectionRatio < 1);
            },
            { threshold: [1] }
        );

        console.log(isSticky);
        
        if(sticky.current) {
            observer.observe(sticky.current);
        }

        return () => {
            if(sticky.current) {
                observer.unobserve(sticky.current);
            }
        }
    }, []);

    return (
        <div ref={sticky} className={styles.body} stik={isSticky ? 1 : 0}>
            <div className={styles.menu}>
                <a href={'#'} onClick={() => setP(1)}>INICIO</a>
                <a href={'#'} onClick={() => setP(2)}>HISTORIA</a>
                <a href={'#'} onClick={() => setP(3)}>FILOSOFIA</a>
                <a href={'#'} onClick={() => setP(4)}>DOJOS</a>
            </div>
        </div>
    );
}

export default Menu;
