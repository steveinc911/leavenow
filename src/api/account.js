const authenticate = (user, pass) => {
    return new Promise((resolve, reject) => {

        let verificationPassed = false

        if (user == 'jimmy' && pass == 'test123') {
            verificationPassed = true
        }

        setTimeout(() => {
            const ret = {
                success: true,
                errorMessage: '',
                errorCode: '',
                data: {
                    authenticated: true,
                    nickname: 'Jimmy',
                },
            }

            resolve(ret)
        }, 500)
    })
}

export default {
    authenticate,
}