import styles from '../styles/History.module.scss';

export default function History({ setP }) {
    return (
        <div className={styles.body}>
            <div className={styles.cellButton}>
                <button onClick={() => setP(1)}> <p> INICIO </p> </button>
                <button onClick={() => setP(3)}> <p> FILOSOFIA </p> </button>
            </div>
        </div>
    );
}
