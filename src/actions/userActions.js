

export function newSetUser() {
    return (dispatch) => {
        return fetch('https://api.github.com/users?page=1&per_page=20')
            .then((resp) => resp.json())
            .then((resp) => {
                resp = resp.map((elem) => {
                    return elem.login;
                });
                dispatch({
                    type: 'SET_USER',
                    payload: resp,
                });
            })
    };
}

export function listRepos() {
    // var param = 'https://api.github.com/users/' + user + '/repos'; 
    // if (user == '' || user == undefined) {
    //     return (dispatch) => {
    //         dispatch({
    //             type: 'LIST_REPOS',
    //             payload: []
    //         });
    //     }
    // }
    // return (dispatch) => {
    //     return fetch(param)
    //         .then((resp) => resp.json())
    //         .then((resp) => {
    //             resp = resp.map((elem) => {
    //                 return elem.name;
    //             });
                
    //             dispatch({
    //                 type: 'LIST_REPOS',
    //                 payload: resp
    //             });
    //         })
    // };
    var param = 'http://localhost:3000/';
    fetch(param, {
            method: 'post',  
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({foo: 'bar', lorem: 'ipsum'}),
          }
        );
}

export function goRepos(selected) {  
    if (selected == '' || selected == undefined) {
        return (dispatch) => {
            dispatch({
                type: 'GO_REPOS',
                payload: ''
            });
        };
    } else {
        return (dispatch) => {
            dispatch({
                type: 'GO_REPOS',
                payload: selected
            });
        };
    }   
}
