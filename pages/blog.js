import Layout from "../components/Layout"
import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'


const Blog = ({entradas}) => {

    return(
        <Layout pagina="Blog">
            <main className='contenedor'>
                <h2 className='heading'>Blog</h2>

                <div className={styles.blog}>
                    {entradas.map(item =>(
                        <Entrada 
                            key={item.id}
                            entrada={item}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
};

export async function getStaticProps(){

    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    return{
        props: {
            entradas
        }
    }
}

export default Blog;