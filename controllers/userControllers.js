exports.register = async(req ,res, next)=>{
    try {

        
    } catch (error) {
        
    }
}

// exports.signup = async (req, res, next) => {
//     const newUser = await User.create({
//        firstName: req.body.firstName,
//        lastName: req.body.lastName,
//        email: req.body.email,
//        gender: req.body.gender,
//        age: req.body.age,
//        phone: req.body.phone,
//        password: req.body.password,
//        passwordConfirm: req.body.passwordConfirm,
//     });
//     console.log(newUser);
//     if (!newUser) {
//        return next(new AppError('Registration failed, Please try again later!', 401));
//     }
//     createToken(newUser, 201, req, res);
//     next();
//  };
 