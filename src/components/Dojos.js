import { useState } from 'react';

import Card from './subcomponents/Card';

import styles from '../styles/Dojos.module.scss';

import Data from '../Data/Dojos.json';

export default function Dojos({ setP }) {
    const [origen, setOrigen] = useState('');

    return (
        <div className={styles.body}>
            <div className={styles.cellButton}>
                <button onClick={() => setP(3)}> <p> FILOSOFIA </p> </button>
                <button onClick={() => setP(1)}> <p> INICIO </p> </button>
            </div>
            <div className={styles.buttons}>
                <button onClick={() => setOrigen('MEXICO')}>México</button>
                <button onClick={() => setOrigen('USA')}>USA</button>
                <button onClick={() => setOrigen('HONDURAS')}>Honduras</button>
            </div>
            <div className={styles.grid}>
            {
                Data.map(d => (
                    d.origen === origen ?
                        <Card
                            key={d.dojo}
                            dojo={d.dojo}
                            sensei={d.sensei}
                            ciudad={d.ubicacion}
                            integrantes={d.integrantes}
                        /> : null
                ))
            }
            </div>
        </div>
    );
}
