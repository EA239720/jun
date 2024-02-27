import styles from '../styles/Filosophy.module.scss';

export default function Filosophy({ setP }) {
    return(
        <div className={styles.subBody}>
            <h1>Nuestra Filosofia</h1>
            <p>Las artes marciales hoy en día, incluyendo el KARATE DO, tienen dos posibles vertientes o caminos prácticos, en palabras sencillas podemos decir que dichos caminos son el deportivo y el filosófico.</p>
            <p>El camino deportivo del KARATE, es aquel que enfoca el entrenamiento hacia el exterior de una persona, principalmente se centra en el ejercicio como salud y las competencias como motivación de su práctica, generando deportistas que se enfocan en mejorar su desempeño físico para ganar trofeos y/o medallas para su escuela o su persona como meta a cumplir.</p>
            <p>Por otro lado, el enfoque filosófico, comúnmente nombrado en Japón como BUDO, es aquel que centra el entrenamiento de un arte marcial hacia el interior, no solo convirtiendo a las personas en practicantes, sino transformando el arte marcial, en sí mismo, en una forma de vida, generando karatekas con altos valores morales y éticos que no solo son aplicables dentro del dojo con su sensei y sus compañeros, sino también fuera, en su entorno social con todas las personas con las que conviven.</p>
            <h1>BUDO</h1>
            <p>El concepto del BUDO, es un concepto japonés aplicado a todas aquellas artes marciales que derivan o son herencia de la antigua clase guerrera conocida como samurái. Las artes marciales BUDO en la actualidad, así como también en la antigüedad, buscan cultivar en sus practicantes valores transcendentales que van más allá de la competencia y el deportivismo.</p>
            <p>Ese es el significado de la palabra DO, pues el concepto en sí, transforma un deporte o una actividad, dotándolos de un sentido más profundo.</p>
            <p>En la antigüedad, conocidos como BUSHI, los samuráis se regían por un estricto código ético y moral conocido como BUSHIDO, cuya tradición literal a otros idiomas es "El camino del guerrero". De ahí que las artes marciales tradicionales BUDO, hayan legado, en menor o mayor medida, los preceptos del BUSHIDO, entre los cuales se encuentran 7 virtudes:</p>
            <div className={styles.right}>
                <h2>Justicia</h2>
                <div>
                    <p className={styles.kanji}>義</p>
                    <p>Se busca ser justo y recto con todas las personas, ser honesto en toda situación y tomar en consideración a todos.</p>
                </div>
            </div>
            <div className={styles.left}>
                <h2>Coraje</h2>
                <div>
                    <p className={styles.kanji}>勇</p>
                    <p>Uno debe tener el coraje de tomar acción y el valor de aceptar las consecuencias al ser fiel a los propios principios. Vivir plenamente sin miedo, siendo inteligente y fuerte.</p>
                </div>
            </div>
            <div className={styles.right}>
                <h2>Compasion</h2>
                <div>
                    <p className={styles.kanji}>仁</p>
                    <p>Uno debe sentir compasion hacia sus semejantes y ayudar a sus compañeros en cualquier situación.</p>
                </div>
            </div>
            <div className={styles.left}>
                <h2>Respeto</h2>
                <div>
                    <p className={styles.kanji}>礼</p>
                    <p>No se debe buscar demostrar la fuerza ni ser cruel con los demas solo por ser diferente a causa del entrenamiento. Uno debe ganarse el respeto de los demas por su trato con todos.</p>
                </div>
            </div>
            <div className={styles.right}>
                <h2>Honestidad</h2>
                <div>
                    <p className={styles.kanji}>誠</p>
                    <p>No se debe prometer ni amenazar, pues el simple hecho de decir que algo se hara es como si ya estuviera hecho. Hablar y hacer son parte de la misma acción.</p>
                </div>
            </div>
            <div className={styles.left}>
                <h2>Honor</h2>
                <div>
                    <p className={styles.kanji}>名誉</p>
                    <p>Las decisiones que uno toma y como las lleva a cabo son un reflejo de su persona. No hay nadie que pueda juzgar a otros, pues debemos juzgarnos a nosotros mismos.</p>
                </div>
            </div>
            <div className={styles.right}>
                <h2>Lealtad</h2>
                <div>
                    <p className={styles.kanji}>忠義</p>
                    <p>Uno es responsable de su actuar y las consecuencias asociadas, asi el practicante permanece fiel a aquellos de los que es responsable.</p>
                </div>
            </div>
        </div>
    );
}
