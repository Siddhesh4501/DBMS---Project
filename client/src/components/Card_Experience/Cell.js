import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.first_name}>{data.last_name}</a></h3>
      </header>
      {/* <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a> */}
      <div className="description">
        <p>{data.company_name}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string,
    company_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
