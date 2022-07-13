module.exports = class Routes {
	static getRoot(req, res) {
		res.render('main')	
	}

	// Login
	static getLogin(req, res) {
    if (req.isAuthenticated()) {
        res.redirect('profileUser')
    } else {

        res.render('login');
    }
}
	static postLogin (req, res) {
		console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        res.redirect('profile')
    } else {
        res.redirect('login')
    }
}
	static getFailLogin(req, res) {
		console.log('Error on Login')
		res.render('login-error', {})
	}

	// SignUp
	static getSignup(req, res){
		res.render('signup')
	}

	static postSignup (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('profile')
    } else {
        res.redirect('login')
    }
	}

	static getFailSignup(req, res) {
		console.log('Error on Signup')
		res.render('signup-error', {})
	}

	// Profile
	static getProfile (req, res) {
    if (req.isAuthenticated()) {
        let user = req.user;
        res.render('profileUser', { user: user, isUser:true })
    } else {
        res.redirect('login')
    }
}
	// Logout
	static getLogout (req, res) {
    req.logout( (err) => {
        if (!err) {
            res.render('main');
        } 
    });
}
	static checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else {
        res.redirect("/login");
    }
	}

	// Fail Route
	static failRoute(req, res) {
		res.status(404).render('routing-error', {})
	}
}
