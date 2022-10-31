import styles from '../styles/Filosophy.module.scss';

export default function Filosophy({ setP }) {
    return(
        <div className={styles.body}>
            <div className={styles.cellButton}>
                <button onClick={ () => setP(2) } > <p> HISTORIA </p> </button>
                <button onClick={ () => setP(4) } > <p> DOJOS </p> </button>
            </div>
        </div>
    );
}
