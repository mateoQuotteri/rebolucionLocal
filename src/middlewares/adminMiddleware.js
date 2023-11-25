/* eslint-disable no-undef */
function adminMiddleware(req, res, next) {
    if (req.session.loggedUser.email === "quotterimateo@gmail.com") {
        req.session.loggedUser.admin === true;
        next()
    }
    else return res.render("not-found")
}

module.exports = adminMiddleware