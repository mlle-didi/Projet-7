// Style
import "../Card/Card.css"

function Card({cover, title, id}) {
    return (
		<article id={id} className='card'>
			<img className='card-cover' src={cover} alt="Appartement à louer" />
			<div className='card-filter'></div>
			<h2 className='card-title'>{title}</h2>
		</article>
	)
}

export default Card