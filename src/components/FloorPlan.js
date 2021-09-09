import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';
import './styles.css';

const FloorPlan = () => {
    return(
        <div class="floor-container">
            <Bedroom bedNum={1}/>
            <Kitchen/>
            <LivingRoom/>
            <Bedroom bedNum={2}/>
            <Bedroom bedNum={3}/>
            <Bath size="Full"/>
            <Bath size="Half"/>
        </div>
        
    )
}

export default FloorPlan