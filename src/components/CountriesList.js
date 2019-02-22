import React from 'react';
import Media from 'react-bootstrap/Media';

import Rating from './Rating';

class CountriesList extends React.Component {
    render() {
        const { restaurants } = this.props;
        return(
            <ul className="list-unstyled">
                {restaurants !== null && restaurants.map((restaurant, index) => {
                    return(
                        <Media as="li" key={index} className="my-3">
                            <img
                            width={128}
                            height={128}
                            className="mr-5"
                            src={restaurant.image_url}
                            alt="Placeholder"
                            />
                            <Media.Body>
                                <a href={restaurant.reserve_url} target="_blank" rel="noopener noreferrer">{restaurant.name}</a>
                                <p>
                                    {restaurant.address}<br/>
                                    {restaurant.postal_code}
                                </p>
                                <h6 style={{display: 'inline-flex'}} className="pr-2">Price:</h6>
                                <Rating rating={restaurant.price} style={{display: 'inline-flex'}} className="pl-2"/>
                            </Media.Body>
                        </Media>
                    )
                })}
            </ul>
        )
    }
}

export default CountriesList;