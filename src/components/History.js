import styles from '../styles/History.module.scss';

import image from '../Assets/Arbol.jpeg';

export default function History({ setP }) {
    return (
        <div className={styles.body}>
            <div className={styles.subBody}>
                <h2>Una Escuela de tradicion</h2>
                <p>La escuela de KARATE DO JUNSEIKAN es una escuela que busca mantener la tradición del arte marcial BUDO fuera de las sagradas tierras de origen. Nuestra escuela tiene linea directa de relación con el gran maestro y fundador del estilo GOJU-RYU pues sus representantes fueron alumnos directos del venerable maestro Tomoharu Kisaki, una leyenda en Japón, que a su vez recibio la enseñansa directamente del venerable maestro Chojun Miyagi.</p>
                <img src={image} alt='tree' />
            </div>
        </div>
    );
}
