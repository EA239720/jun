import styles from '../styles/Menu.module.scss';

function Menu({ setP }) {
    return (
        <div className={styles.body}>
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
