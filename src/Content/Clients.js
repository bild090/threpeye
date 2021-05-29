import MinistryOfLabor from '../img/Ministry of Labor.png';
import Anb from '../img/anb.png';
import Hrdf from '../img/hrdf.png';
import Zain from '../img/zain.jpg';
import Keto from '../img/keto.png';
import Carrefour from '../img/carrefour.png'

const Clients = () => {
    return (
        <div className="clients About-us-container">
            <div className="about-us-text">
                <p> عملاؤنا </p>
            </div>
            <div>
                <img src={MinistryOfLabor} />
                <img src={Anb} />
                <img src={Hrdf} />
            </div>
            <div>
                <img src={Zain} />
                <img src={Keto} />
                <img src={Carrefour} />
            </div>
            
        </div>
    )
}

export default Clients;