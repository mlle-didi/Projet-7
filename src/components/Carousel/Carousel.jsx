// Hooks
import { useState } from 'react';

// Images
import left from '../../assets/images/ARROW-LEFT.svg';
import right from '../../assets/images/ARROW-RIGHT.svg';

// Style
import "../Carousel/Carousel.css"

function Carousel({slides}) {
    const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
	const length = slides.length; // longueur du tableau de slides

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
	};

	return (
		<section id="carousel-container">
            {length > 1 && (
                <img
                    src={left} //Affichage des flèches seulement si length > 1
                    alt="gauche"
                    onClick={prevSlide}
                    className="leftArrow"
                />
            )}
            {length > 1 && (
                <img
                    src={right}
                    alt="droite"
                    onClick={nextSlide}
                    className="rightArrow"
                />
            )}
            
			{slides.map((slide, index) => (
				<div
					key={index} // mise en place du slider avec affichage conditionnel et opacity=1 quand le slide en cours vaut l'index
					className={
						current === index
							? "slider active-anim"
							: "slider"
					}
				>
					{index === current && <img className="slides-img" src={slide} alt="Appartement à louer" />}
					{index === current && (
						<span className="slider__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}
export default Carousel