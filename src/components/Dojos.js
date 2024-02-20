import { useState } from 'react';

import Card from './subcomponents/Card';

import styles from '../styles/Dojos.module.scss';

import Data from '../Data/Dojos.json';

export default function Dojos({ setP }) {
    const [origen, setOrigen] = useState('HONDURAS');
    const [options, setOptions] = useState(true);

    return (
        <div className={styles.body}>
            {options ?
                <div className={styles.menuOptions} onClick={() => setOptions(false)}>
                    <div className={styles.options}>
                        <button onClick={() => {setOrigen('MEXICO');setOptions(false);}}>MEXICO</button> 
                        <button onClick={() => {setOrigen('USA');setOptions(false);}}>USA</button> 
                        <button onClick={() => {setOrigen('HONDURAS');setOptions(false);}}>HONDURAS</button> 
                    </div>
                </div>
                : 
                null
            }
            <button className={styles.select} onClick={() => setOptions(true)}>{origen === '' ? 'Pais' : origen}</button>
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
