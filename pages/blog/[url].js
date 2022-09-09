import Image from 'next/image'
import Layout from '../../components/Layout'
import {formatearFecha} from '../../helpers'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({detalleEntrada}) =>{
    const {contenido, imagen, published_at, titulo} = detalleEntrada[0];
    return(
        <Layout pagina={titulo}>
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>

                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    ); 
};

export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    const paths = entradas.map(item =>({
        params: {url: item.url}
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}){
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
    const respuesta = await fetch(urlBlog);
    const detalleEntrada = await respuesta.json();

    return{
        props:{
            detalleEntrada
        }
    }
}

export default EntradaBlog;