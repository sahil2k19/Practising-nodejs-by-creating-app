

//all these are just an actions to take

module.exports.profile = (req, res) => {
    return res.render('user_profile', {
        'title': 'userprofile',
    })
}

module.exports.users = (req, res) => {
    return res.render('user_profile', {
        'title': ''
    })
}

//render the sign up page
module.exports.signUp = (req, res) => {
    return res.render('user_sign_up', {
        title: 'codeial | Sign Up'
    })
}

//render the sign in page
module.exports.signIn = (req, res) => {
    return res.render('user_sign_in', {
        title: 'codeial | Sign in'
    })
}

//get the signup data
module.exports.create = function (req, res) {
    //todo later;
}


//get the signin and create session for users
module.exports.createSession = function (req, res) {
    //todo later;
}