import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return(
        <Layout pagina="Nosotros">
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>

                <div className={styles.contenido}>
                    <Image layout='responsive' width={600} height={430} src="/img/nosotros.jpg" />
                    <div>
                        <p>Fusce elementum orci nec ornare elementum. Nullam tristique neque lectus, in imperdiet eros ultrices sit amet. Donec dictum consectetur nibh ac sodales. Etiam at magna quis magna interdum pretium gravida quis justo. Cras sagittis vestibulum sem eget aliquam. Proin id nibh lectus.</p>
                        <p>Proin fringilla lectus eu diam euismod suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ultricies volutpat velit in venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis consectetur sem vitae sapien suscipit accumsan. Fusce mattis, elit vitae vehicula pellentesque, lacus ex maximus purus, in lacinia nibh ante egestas nunc.</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Nosotros;