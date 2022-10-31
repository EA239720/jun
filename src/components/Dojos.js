import Card from './subcomponents/Card';

import styles from '../styles/Dojos.module.scss';

import Data from '../Data/Dojos.json';

export default function Dojos({ setP }) {
    return (
        <div className={styles.body}>
            <div className={styles.cellButton}>
                <button onClick={() => setP(3)}> <p> FILOSOFIA </p> </button>
                <button onClick={() => setP(1)}> <p> INICIO </p> </button>
            </div>
            {
                Data.map(d => (
                    <Card
                        dojo={d.dojo}
                        sensei={d.sensei}
                        ciudad={d.ubicacion}
                        integrantes={d.integrantes}
                    />
                ))
            }
        </div>
    );
}
