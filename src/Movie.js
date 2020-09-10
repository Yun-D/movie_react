import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, title, year, summary, poster}) {
    return <h4>{title}</h4>;
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, //이미지 주소(문자열)
};

export default Movie;