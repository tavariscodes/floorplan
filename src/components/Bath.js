const Bath = ({ size }) => {
    return (
        <div class="bath" id={`bath-${size}`}>
            <h3>{`${size} Bath`}</h3>
        </div>
    )
}

export default Bath;