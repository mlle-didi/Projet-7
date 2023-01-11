// Style
import './BannerHome.css';

function BannerHome({bannerHome, text}) {
    return (
		<div className="bannerHome-container margin-LR margin-BT">
            <img className="bannerHome-image" src={bannerHome} alt="Bannière" />
            <div className="bannerHome-filter"></div>
            <span className="bannerHome-text">{text}</span>
		</div>
	)
}

export default BannerHome