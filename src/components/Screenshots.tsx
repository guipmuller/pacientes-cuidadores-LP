import homeScreenshot from '../assets/IMG-20250526-WA0009.jpg';
import menuScreenshot from '../assets/IMG-20250526-WA0008.jpg';
import loginScreenshot from '../assets/IMG-20250526-WA0010.jpg';
import agendaScreenshot from '../assets/IMG-20250526-WA0011.jpg';

const Screenshots = () => {
    return (
        <div className='screenshots'>
            <img src={loginScreenshot} />
            <img src={homeScreenshot} />
            <img src={menuScreenshot} />
            <img src={agendaScreenshot} />
        </div>
    )
}

export default Screenshots;