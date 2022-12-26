// Style
import "../Banner/Banner.css"

function Banner({banner,text}) {
    return (
		<div className="banner-container margin-LR margin-BT">
            <img className="banner-image" src={banner} alt="Bannière" />
            <div className="banner-filter"></div>
			<span className="banner-text">{text}</span>
		</div>
	)
}

export default Banner