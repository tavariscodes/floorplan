const Bedroom = ({ bedNum }) => {
    return(
        <div class="bedroom" id={`bed-${bedNum}`}>
            <h3>{`Bedroom ${bedNum}`}</h3>
        </div>
    )
}

export default Bedroom;
