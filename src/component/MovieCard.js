import React from "react";
import PropTypes from 'prop-types'
const MovieCard=({
    obj:{title,description,posterURL,rating}
})=>{
    return(
        <div>
            <p>
                Title : {title}, Description : {description}, Posturl : {posterURL}, Rating : {rating}
            </p>
        </div>
    )
}
MovieCard.propTypes={
    title:PropTypes.string,
    description:PropTypes.string,
    posterURL :PropTypes.string,
    rating:PropTypes.string,
};
export default MovieCard;