const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 'message': 'resolved promise!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                throw new Error('error: rejected promise!');
            } catch(error) {
                reject(error);
            }
        }, 500);
    });
};

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));
