const api = 'http://localhost:3001/'

export default function create(model, body) {
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