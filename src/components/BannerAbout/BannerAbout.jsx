// Style
import './BannerAbout.css';

function Banner({banner}) {
    return (
		<div className="bannerAbout-container margin-LR margin-BT">
            <img className="bannerAbout-image" src={banner} alt="Bannière" />
            <div className="bannerAbout-filter"></div>
		</div>
	)
}

export default Banner