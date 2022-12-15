const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../models/User')


module.exports.login = async function(req, res) {
    const candidate = await User.findOne({phone: req.body.phone})

    if (candidate){
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                phone: candidate.phone,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60*60 })
            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: 'пароль не верный'
            })
        }
    } else {
        res.status(404).json({
            message: 'пользователь не существует'
        })
    }

}

module.exports.register = async function(req, res){
    const candidate = await User.findOne({phone: req.body.phone})

    if (candidate){
        res.status(409).json({
            message: 'пользователь существует'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            phone: req.body.phone,
            password: bcrypt.hashSync(password, salt)
        })

        try {
            await user.save()
            res.status(201).json(user)
        } catch(e) {
            //o,hf,jnfnm jib,re
        }
    }


    
}