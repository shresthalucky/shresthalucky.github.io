import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Repo from '../../../components/Repo';

class Repos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    }
  }

  changeHandler = (e) => {
    this.setState({
      searchText: e.target.value,
    })
  }

  render() {

    const reposList = this.props.repos.filter(repo => {
      if (repo.name.includes(this.state.searchText)) return true;
      return false;
    })

    return (
      <div>
        
        <div>
          <input
            type="text"
            onChange={this.changeHandler}
            value={this.state.searchText}
            placeholder="Search"
             className="input input--primary" />
        </div>

        {reposList.map(repo => <Repo detail={repo} key={repo.id} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos
  };
};

Repos.propTypes = {
  repos: PropTypes.array,
};

export default connect(mapStateToProps)(Repos);
