// Style
import './BannerAbout.css';

function BannerAbout({bannerAbout}) {
    return (
		<div className="bannerAbout-container margin-LR margin-BT">
            <img className="bannerAbout-image" src={bannerAbout} alt="Bannière" />
            <div className="bannerAbout-filter"></div>
		</div>
	)
}

export default BannerAbout