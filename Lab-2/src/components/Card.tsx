interface CardProps {
    pic: string;
    country: string;
    location: string;
    rating: number;
    price: number;
}

function Card(props: CardProps) {
    return (
        <div className="card">

            <img src={props.pic} alt={props.location}/>

            <div className="card-info">

                <h2>{props.country}</h2>

                <p>{props.location}</p>

                <p className={props.rating > 4.0 ? "good-rating" : "bad-rating"}>
                    ★ {props.rating}</p>

                <p>${props.price}</p>

            </div>

        </div>
    );
}

export default Card;
