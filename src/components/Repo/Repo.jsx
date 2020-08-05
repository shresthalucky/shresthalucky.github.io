import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

function Repo({ detail }) {

  return (
    <div className="repo">

      <h2 className="repo__name">
        <a href={detail.html_url} title={detail.name}>{detail.name}</a>
      </h2>

      <p className="repo__description">
        {detail.description}
      </p>

      <div className="clearfix">
        <Button type="link" to={detail.html_url} color="blue">Code</Button>
        {detail.homepage && <Button type="link" to={detail.homepage} color="purple">Demo</Button>}
      </div>
    </div>
  );
}

Repo.propTypes = {
  detail: PropTypes.object.isRequired
};

export default Repo;
