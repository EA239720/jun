import styles from '../styles/Header.module.scss';

import head from '../Assets/LETRAS DORADO.png';

function Header() {
    return (
        <div className={styles.body}>
            <img src={head} className={styles.head} alt={'Header'} />
        </div>
    );
}

export default Header;