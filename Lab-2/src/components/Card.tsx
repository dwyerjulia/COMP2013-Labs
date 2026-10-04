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

                <p className="location">{props.location}</p>

                <p className={props.rating > 4.0 ? "good-rating" : "bad-rating"}>
                    {props.rating}★</p>

                <p className="price">${props.price}/night</p>

            </div>

        </div>
    );
}

export default Card;
