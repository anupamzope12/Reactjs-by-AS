const Shimmer = () => {
    return (
        <div className="restaurant-list21">
            <div className="shimmer-row">
                {
                    Array(10)
                    .fill("")
                    .map((e,index)=>(
                        <div key={index} className="shimmer-card"></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Shimmer;
