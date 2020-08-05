import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GoOctoface, GoLocation, GoComment } from 'react-icons/go';

class Home extends React.Component {

  render() {

    const user = this.props.user;

    return (
      <div className="basic">
        <div className="basic__right">
          <div className="basic__image">
            <img src={user.avatar_url} alt={user.name} />
          </div>
        </div>

        <div className="basic__left card">
          <div className="detail card__detail">

            <div className="detail__name">{user.name}</div>

            <div className="detail__username">
              <span><GoOctoface /></span>
              <a href={user.html_url}>{user.login}</a>
            </div>

            <div className="detail__location">
              <span><GoLocation /></span>{user.location}
            </div>
            
            <div className="detail__bio">
              <span><GoComment /></span>{user.bio}
            </div>

            <div className="detail__follow clearfix">
              <div className="detail__following">
                <div className="detail__number">{user.following}</div>
                <div>Following</div>
              </div>
              <div className="detail__followers">
                <div className="detail__number">{user.followers}</div>
                <div>Followers</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

Home.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Home);
