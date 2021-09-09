import Oven from './Oven';
import Sink from './Sink';

const Kitchen = () => {
    return(
        <div class="kitchen">
            <div class="ovsink">
                <Oven/>
                <Sink/>
            </div>
            <h3>Kitchen</h3>
            
          
        </div>
    )
}

export default Kitchen;