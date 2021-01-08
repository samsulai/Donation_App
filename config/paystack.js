const paystack = (request) => {
    const MySecretKey = 'Bearer sk_test_2bf3b324da0027b1382e53348e33552b59fe78a3';
    //replace the secret key with that from your paystack account
    const initializePayment = (form, mycallback) => {
        const options = {
            url : 'https://api.paystack.co/transaction/initialize',
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'    
            },
            form
        }
        const callback = (error, response, body) => {
            return mycallback(error, body)
        }
        request.post(options, callback)
    }

    const verifyPayment = (ref, mycallback) => {
        const options = {
            url : 'https://api.paystack.co/transaction/verify/'+encodeURIComponent(ref),
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'    
            }
        }
        const callback = (error, response, body) => {
            return mycallback(error, body)
        }
        request(options, callback)
    }

    return {initializePayment, verifyPayment};
}

module.exports = paystack;