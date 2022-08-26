

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