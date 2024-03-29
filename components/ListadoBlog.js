import Entrada from './Entrada'
import styles from '../styles/Blog.module.css'

const ListadoBlog = ({entradas}) => {
    return(
        <>
            <h2 className='heading'>Blog</h2>

            <div className={styles.blog}>
                {entradas.map(item =>(
                    <Entrada 
                        key={item.id}
                        entrada={item}
                    />
                ))}
            </div>
        </>
    );
};

export default ListadoBlog;