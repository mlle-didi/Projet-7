// Components
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'

// Assets
import bannerAbout from '../../assets/images/BANNER_ABOUT.jpg' 

// Style
import "../About/About.css"

function About() {
    return (
        <div>
            <Banner banner={bannerAbout} text=""/>
            <div className='collapse'>
                <Collapse label="Fiabilité">
                    <p className='textAbout'>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. 
                        Les photos sont conformes aux logements, 
                        et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </p>
                </Collapse>
                <hr />
                <Collapse label="Respect">
                    <p className='textAbout'>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage 
                        entraînera une exclusion de notre plateforme.
                    </p>
                </Collapse>
                <hr />
                <Collapse label="Service">
                    <p className='textAbout'>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                        N'hésitez pas à nous contacter si vous avez la moindre question.
                    </p>
                </Collapse>
                <hr />
                <Collapse label="Sécurité">
                    <p className='textAbout'>
                        La sécurité est la priorité de Kasa. 
                        Aussi bien pour nos hôtes que pour les voyageurs, 
                        chaque logement correspond aux critères de sécurité établis par nos services. 
                        En laissant une note aussi bien à l'hôte qu'au locataire, 
                        cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Collapse>
            </div>
        </div>
    )
}
export default About