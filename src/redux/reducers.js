import { GITHUB_REPOSITORY_LIST } from './actions';

let initialState = {

    sucGithubRepositoryList: false, 
    errGithubRepositoryList: false,
}

const github = (state = initialState, action) => {

    switch(action.type) {
        case GITHUB_REPOSITORY_LIST: 
            return {
                ...state,
                sucGithubRepositoryList: action.payload.data,
                errGithubRepositoryList: action.payload.errorMessage
            }

        default:
            return state;       
    }
}

export default github;