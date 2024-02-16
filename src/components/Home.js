import styles from '../styles/Home.module.scss';

import Logo from '../Assets/LOGO DORADO.png';

import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';

export default function Home({ setP }) {
    return (
        <div className={styles.body}>
           <div className={styles.subBody}>
                <div className={styles.legend}>
                    <h1 /* className={styles.about} */>La escuela de <i>KARATE DO JUNSEIKHAN</i> es una asociación que busca regresar a las raíces del arte marcial. No buscamos solamente ganar medallas en torneos, sino también cultivar en nuestras vidas la filosofía de vida del KARATE DO.</h1>
                </div>
                <img src={Logo} className={styles.logo} alt={'logo'} />
            </div>
        </div>
    );
}
