import axios from 'axios';

export const GITHUB_REPOSITORY_LIST = 'GITHUB_REPOSITORY_LIST';


// Get Github Repository List
export const GithubRepositoryList = () => {
    return (dispatch) => {
        axios.get('https://api.github.com/users/andriyanuardi/repos', {
        }).then(function (response) {
            dispatch({
                type: GITHUB_REPOSITORY_LIST,
                payload: {
                    data: response.data,
                    errorMessage: false
                }
            });
        }).catch(function (error) {
            dispatch({
                type: GITHUB_REPOSITORY_LIST,
                payload: {
                    data: false,
                    errorMessage: error.message
                }
            });
        });
    }
}