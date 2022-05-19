const express = require('express');
const UserModel = require('./models/userModel');
const mongoose = require('mongoose');
const app = express();

const mongoUrl = 'mongodb+srv://tonmar007:zf7uyW0WCKh0TKs8@cluster-fsapp.j3oqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect( mongoUrl
).then( () => {
    console.log('Database Connected');
}).catch( err => {
    console.log('Database not Connected ' + err);
});

app.use(express.json());

app.post('/register', (req, res) => {
    var userModel = new UserModel();
    userModel.name = req.body.name;
    userModel.pass = req.body.pass;

    userModel.save((err, data) => {
        if(err) {
            return res.status(500).send(err);
        }else {
            return res.status(200).send(data);
        }
    })

})

app.post('/login', (req, res) => {
    UserModel.findOne({name: req.body.username, pass: req.body.password}, (err, data) => {
        if(data === null){
            return res.status(404).send("User not found")
        }
        if(err){
            return res.status(500).send(err);
        }else {
            return res.status(200).send(data)
        }
    })
})

app.get('/users', (req, res) => {
    UserModel.find({}, (err, users) => {
        if(err){
            return res.status(500).send(err)
        }else {
            return res.status(200).send(users)
        }
    })
})

app.delete('/user', (req, res) => {
    UserModel.deleteOne({_id: req.body.userId}, (err, user) => {
        if(err){
            return res.status(500).send(err)
        }else {
            return res.status(200).send("Successfully deleted user")
        }
    })
})

app.listen(9000, () => {
    console.log('Server running on port 9000');
})