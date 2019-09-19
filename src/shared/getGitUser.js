
const https = require('https');

const cbGetGitUser = function (name) {
    https.get('https://api.github.com/search/users?q=' + name, (resp) => {
        let data = "";
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            console.log('here is the cb1 result ' + data);
            cbCountGitUser(data);
        });
    }).on('error', (err) => {
        console.log("Error" + err.message);
    })
}

const cbCountGitUser = function (data) {
    let response;
    if (typeof data === 'object') {
        response = data;
    } else if (typeof data === 'string') {
        response = JSON.parse(data);
    }
    console.log('here is the cb2 result ' + response.total_count)
}


const getGitUser = function (name) {
    return new Promise(function (resolve, reject) {
        https.get('https://api.github.com/search/users?q=' + name, (resp) => {
            let data = "";
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            console.log("Error" + err.message);
            reject(err.message);
        })
    });
}

const countGitUser = function (data) {
    let response;
    if (typeof data === 'object') {
        response = data;
    } else if (typeof data === 'string') {
        response = JSON.parse(data);
    }

    return new Promise(function (resolve, reject) {
        if (response) {
            resolve(response.total_count);
        } else {
            console.log('here is the data: ' + response);
            reject('cannot get the user information!!!');
        }
    });
}

export { getGitUser, countGitUser, cbGetGitUser }