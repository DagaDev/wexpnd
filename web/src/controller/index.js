const api = 'http://localhost:3001/'

export function create(model, body) {
    return new Promise((resolve, reject) => {
        var init = {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };
        var url = api + model;
        fetch(url, init)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export function findById(model, filter, id) {
    return new Promise((resolve, reject) => {
        var init = {
            method: 'GET',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
        };
        var url = api + model + '/' + id +'?filter=' + JSON.stringify(filter);
        fetch(url, init)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}