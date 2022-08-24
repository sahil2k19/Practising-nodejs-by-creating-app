

//all these are just an actions to take

module.exports.profile = (req, res) => {
    return res.end('<h1>Users Profile</h1>')
}

module.exports.users = (req, res) => {
    return res.end('<h1>users are here</h1>');
}