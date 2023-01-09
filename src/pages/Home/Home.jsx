// React Framework
import { Link } from 'react-router-dom';

// Components
import Banner from '../../components/BannerHome/BannerHome';
import Card from '../../components/Card/Card';

// Data
import logements from '../../data.json';

// Images
import bannerHome from '../../assets/images/BANNER_HOME.jpg';

// Style
import '../Home/Home.css';

function Home() {
  return (
    <div>
      <Banner banner={bannerHome} text="Chez vous, partout et ailleurs"/>
      <div className="card-background margin-LR">
			  <div className='container-card'>
				  {
					  logements.map( (logements) => {
						  return(
                <Link key={logements.id} to={"/logements/"+logements.id}> 
                  <Card key={logements.id} cover={logements.cover} title={logements.title} id={logements.id} /> 
                </Link>      
              )
            })
          }
        </div>
      </div>
      <h1> </h1>
    </div>
  )
}
  
export default Home