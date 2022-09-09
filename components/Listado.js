import Guitarra from "./Guitarra"
import styles from '../styles/Listado.module.css'

const Listado = ({guitarras}) =>{
    return(
        <div className={styles.listado}>
            {guitarras.map(item => (
                <Guitarra key={item.url} guitarra={item} />
            ))}
        </div>
    );
};

export default Listado;