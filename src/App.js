import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Routes from './routes';
import Http from './utils/http';
import { setUser } from './actions/userActions';
import { setRepos } from './actions/reposActions';
import withLoading from './hoc/withLoading';

const EnhancedRoutes = withLoading(Routes);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userLoading: true,
      reposLoading: true,
      error: false
    };
  }

  componentDidMount() {
    Http.getUser().then(data => {
      this.props.setUser(data);
    })
      .then(() => {

        this.setState({
          userLoading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true
        });
      });

    Http.getRepos().then(data => {
      this.props.setRepos(data);
    })
      .then(() => {
        this.setState({
          reposLoading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true
        });
      });
  }

  render() {
    return (
      <EnhancedRoutes
        isLoading={this.state.userLoading || this.state.reposLoading}
        error={this.state.error} />
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

