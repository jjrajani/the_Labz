import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import history from '../../history';
// Components
import Bio from './Bio/Bio';
import Details from './Details/Details';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.unlisten = null;
        this.artist = null;
        this.pathname = null;
    }
    componentDidMount() {
        if (history.location.pathname.includes('artist')) {
            let artistId = history.location.pathname.split('/')[2];
            this.getArtistProfile(artistId);
        } else {
            this.getLoggedInProfile();
        }
        this.props.togglePageView('projects');
        this.location = history.location.pathname;
        this.unlisten = history.listen(location => {
            let currentLocation = location.pathname;
            if (
                history.location.pathname.includes('artist') &&
                this.pathname !== currentLocation
            ) {
                let artistId = history.location.pathname.split('/')[2];
                this.pathname = currentLocation;
                this.getArtistProfile(artistId);
            } else if (this.pathname !== currentLocation) {
                this.pathname = currentLocation;
                this.getLoggedInProfile();
            }
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }
    getLoggedInProfile() {
        this.props.getProfile().then(res => {
            const userId = res.sub;
            this.props.fetchProfile(userId);
            this.props.fetchGroups(userId);
            this.props.fetchFollowers(userId);
            this.props.fetchProjects(userId);
            this.props.toggleActiveTab('/my_profile');
        });
    }
    getArtistProfile(id) {
        this.props.fetchProfile(id);
        this.props.fetchGroups(id);
        this.props.fetchFollowers(id);
        this.props.fetchProjects(id);
        this.props.toggleActiveTab('/artist');
    }
    render() {
        return (
            <div className="container main_content profile">
                <div className="row">
                    <Bio />
                    <Details />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth, profile }) {
    return { auth, profile };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile,
    fetchProfile: actions.profileActions.fetchProfile,
    fetchGroups: actions.groupsActions.fetchGroups,
    fetchProjects: actions.projectsActions.fetchProjects,
    fetchFollowers: actions.followersActions.fetchFollowers,
    toggleActiveTab: actions.navActions.toggleActiveTab,
    togglePageView: actions.profileActions.togglePageView
})(withRouter(Profile));
