import {useState} from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({detalleGuitarra, agregarCarrito}) => {
    const [cantidad, setCantidad] = useState(1);
    const {id, url, nombre, precio, descripcion, imagen} = detalleGuitarra[0]

    const handleSubmit = e => {
        e.preventDefault();

        if(cantidad < 1){
            alert('Cantidad no válida.')
            return;
        }
        //Agregar al carrito
        const guitarraSeleccionada = {
            id,
            imagen : imagen.url,
            nombre,
            precio,
            cantidad
        };

        agregarCarrito(guitarraSeleccionada);
    };

    return(
        <Layout pagina={`Guitarra ${nombre}`}>
            <div className={styles.guitarra}>
                <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <label>Cantidad:</label>
                        <select value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))}>
                            <option value="">-- Selecione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>

                        <input type="submit" value="Agregar al carrito"/>
                    </form>

                </div>
            </div>
        </Layout>
    );
};

// export async function getStaticPaths(){
//     const url = `${process.env.API_URL}/guitarras`;
//     const respuesta = await fetch(url);
//     const guitarras = await respuesta.json();

//     const paths = guitarras.map(item =>({
//         params: {url: item.url}
//     }))

//     return{
//         paths,
//         fallback: false
//     }
// }

export async function getServerSideProps({query: {url}}){
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
    const respuesta = await fetch(urlGuitarra);
    const detalleGuitarra = await respuesta.json();

    return{
        props: {
            detalleGuitarra
        }
    }
}

export default Producto;