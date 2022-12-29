// React Framework
import { useParams } from "react-router-dom";

// Data
import logements from '../../data.json'

// Components
import Tag from "../../components/Tag/Tag";
import Collapse from '../../components/Collapse/Collapse'
import Carousel from '../../components/Carousel/Carousel'
import Error from "../../pages/Error/Error";

// Assets
import star from '../../assets/images/STAR.png' 
import nullStar from '../../assets/images/NULL-STAR.png' 

// Style
import "../FicheLogement/FicheLogement.css"

function FicheLogement() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const ficheLogement = logements.find(logements => logements.id === id.id);

    /* Tags */
    const tagsLogement = ficheLogement?.tags.map((tags, index) => {
        return <Tag key={index} name={tags} />
    });

    /* Notes */
    let noteLogement = [];
    let fullStar = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(ficheLogement?.rating)) {
            fullStar = false;
        }
        if(fullStar === true) {
            noteLogement.push(<img key={index} className="star" src={star} alt={`${ficheLogement?.rating}/5`}/>)
        } else {
            noteLogement.push(<img key={index} className="star" src={nullStar} alt={`${ficheLogement?.rating}/5`}/>)
        }
    }

    /* Equipements */
    const equipmentsList = ficheLogement?.equipments.map((equipment) => (
        <p className="equipment">{equipment}</p>
    ));

    return(
        <>
            {
                ficheLogement ? (
                    <div className="margin-LR margin-BT">
                        <Carousel slides={ficheLogement?.pictures} />
                        <div className="infos">
                            <div className="info-logements">
                                <h2 className="title-logement">{ficheLogement?.title}</h2>
                                <h3 className="place-logement">{ficheLogement?.location}</h3>
                                <div className="tags">
                                    {tagsLogement}
                                </div>
                            </div>
                            <div className="owner">
                                <div className="info-owner">
                                    <span className="name-owner">{ficheLogement?.host.name}</span>
                                    <img className="photo-owner" src={ficheLogement?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                    {noteLogement}
                                </div>
                            </div>
                        </div>
                        <div className="description-equipements">
                            <div className="collapse-children">
                                <Collapse label="Description"  children={ficheLogement?.description}/>
                            </div>
                            <div className="collapse-children">
                                <Collapse label="Equipements">
                                    {equipmentsList}  
                                </Collapse>
                            </div>
                        </div>
                    </div>
                ) : <Error />
            }
        </>
    )
}

export default FicheLogement