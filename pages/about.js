// Styles
import styles from '../styles/Home.module.css';
import stylesAbout from '../styles/About.module.css';

// Components
import Header from '../components/header';
import Footer from '../components/footer';
import CustomHead from '../components/custom-head';

export default function About() {

    return(
        <>
            <div className={styles.container}>
                <CustomHead
                    title="Xaconi.dev 👨‍💻 | Sobre mí"
                    description="Acerca de mí, quién soy, a qué me dedico, etc."
                    image="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
                    link={ '/about' }
                    type="web"
                >
                </CustomHead>

                <Header />

                <section className={stylesAbout.aboutRow}>
                    <div className={stylesAbout.aboutColumn}>
                        <img 
                            alt="@Xaconi"
                            className={stylesAbout.imgRound} 
                            src="/xaconi.jpg"
                            width="250"
                            height="250"
                        />
                        <h3>Hola 👋, soy Xaconi!</h3>
                        <h4>Puedes seguirme en <a href="https://twitter.com/xaconi" target="_blank">Twitter 🐦</a> o en <a href="https://github.com/Xaconi" target="_blank">GitHub 🦑</a></h4>
                    </div>
                    
                    <div className={stylesAbout.aboutColumn}>
                        <p className={stylesAbout.blogDescription}>¡Gracias por visitar mi blog! Mi nombre es Nicolás Joel Giacconi Fernández, vivo en Girona y soy desarrollador web. Llevo en este mundillo ya diez años y actualmente trabajo en una consultora implementando soluciones en aplicaciones web y Ecommerce. Este blog es un intento de forzarme a seguir aprendiendo lo máximo posible de este mundillo que nunca para de evolucionar. Por aquí iré escribiendo (con la máxima periodicidad posible 🙏) cosillas relacionadas con FrontEnd (de lo cual me encuentro aprendiendo React, NextJS, Angular, Vue, etc.), BackEnd (de esto sé algo más, Node, PHP, etc.) y buenas prácticas y metodologías dedicadas tanto a FrontEnd como a BackEnd.</p>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}