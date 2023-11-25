function authMiddleware(req, res, next) {
    if (!req.session.loggedUser) {
        return res.redirect("user/login")
    }
    next()
}

module.exports = authMiddleware