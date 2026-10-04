import Card from "./Card";
import listings from "../data/data"

function Container() {

    return (

        <div className="container">

            {listings.map((listing) => (
                <Card
                    key={listing.id}
                    pic={listing.pic}
                    country={listing.country}
                    location={listing.location}
                    rating={listing.rating}
                    price={listing.price}
                />
            ))}

        </div>

    );

}

export default Container;