import styles from '../../styles/Card.module.scss';

// import face from '../../Assets/icons/face.png'
// import insta from '../../Assets/icons/insta.png'
// import tiktok from '../../Assets/icons/tiktok.png'

function Card({ dojo, sensei, ciudad, integrantes }) {
    return (
        <div className={styles.card}>
            <h2 style={{color: '#BDA100'}}>{dojo}</h2>
            <h3>{ciudad}</h3>
	    <h3>Sensei</h3>
            <h3 style={{color: '#BDA100'}}>{sensei.nombre + ' - ' + sensei.grado}</h3>
            { integrantes ?
                <>
                    <h4>Integrantes</h4>
                    <div className={styles.members}>
                        {integrantes.map(i => (
                            <h6 key={i.nombre}>{i.nombre + ' - ' + i.grado}</h6>
                        ))}
                    </div>
                </>
                : null
            }
            <h1> ---空手--- </h1>
        </div>
    );
}

export default Card;
