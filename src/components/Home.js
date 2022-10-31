import styles from '../styles/Home.module.scss';

import Logo from '../Assets/LOGO DORADO.png';

import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';

export default function Home({ setP }) {
    return (
        <div className={styles.body}>
            <div className={styles.cellButton}>
                <button onClick={ () => setP(4) } > <p> DOJOS </p> </button>
                <button onClick={ () => setP(2) } > <p> HISTORIA </p> </button>
            </div>
            <img src={Logo} className={styles.logo} alt={'logo'} />
            <h1 className={styles.about}>La asociacion de KARATE DO JUNSEIKHAN es una asociacion sin fines de lucro, que busca regresar a las raices del arte marcial. Asi, no buscamos solamente ganar medallas en torneos, sino tambien cultivar en nuestras vidas la filosofia de vida del KARATE DO.</h1>
        </div>
    );
}
