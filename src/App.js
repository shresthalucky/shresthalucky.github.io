import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Routes from './routes';
import Http from './utils/http';
import { setUser } from './actions/userActions';
import { setRepos } from './actions/reposActions';
class App extends React.Component {

  componentDidMount() {
    Http.getUser().then(data => {
      this.props.setUser(data);
    });

    Http.getRepos().then(data => {
      this.props.setRepos(data);
    });
  }

  render() {
    return (
      <Routes />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    repos: state.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    setRepos: (repos) => dispatch(setRepos(repos))
  };
};

App.propTypes = {
  setUser: PropTypes.func.isRequired,
  setRepos: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

