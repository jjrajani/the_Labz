import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './auth/reducer';
import profileReducer from './profile/reducer';
import groupsReducer from './groups/reducer';
import projectsReducer from './projects/reducer';
import followersReducer from './followers/reducer';
import navReducer from './nav/reducer';
import workspaceReducer from './workspace/reducer';
import usersReducer from './users/reducer';
import commentsReducer from './comments/reducer';
import collaboratorsReducer from './collaborators/reducer';
import invitesReducer from './invites/reducer';

export default combineReducers({
    auth: authReducer,
    users: usersReducer,
    nav: navReducer,
    profile: profileReducer,
    groups: groupsReducer,
    projects: projectsReducer,
    followers: followersReducer,
    workspace: workspaceReducer,
    comments: commentsReducer,
    collaborators: collaboratorsReducer,
    form: reduxForm,
    invites: invitesReducer
});
