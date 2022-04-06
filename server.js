const express = require('express');
//const mongojs = require('mongojs');
//const db = mongojs('fsapp',['users']);

const UserModel = require('./login_register/src/models/user');

const mongoose = require('mongoose');
//const myDb = mongoose('fsapp',['users']);

mongoose.connect('mongodb+srv://marko-first-db:DxUsJJKXSWK7b6mT@cluster0.umzyj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then( () => {
    console.log('Database Connected');
}).catch( err => {
    console.log('Database not Connected' + err);
});

const app = express();

app.use(express.json());

app.get('/data', (req, res) => {
    res.send('Works fine!!!');
})

app.post('/register', (req, res) => {
    // save new user
    // db.users.insert({name: req.body.name, pass: req.body.pass}, (err, docs) => {
    //     res.status(200).send('Ok');
    // })

    var userModel = new UserModel();
    userModel.name = req.body.name;
    userModel.pass = req.body.pass;

    userModel.save((err, data) => {
        if(err) {
            console.error(err);
        }else {
            res.status(200).send(data);
        }
    })

})

app.post('/login', (req, res) => {
    // find user from db
    //console.log(req.body);
    // db.users.find({name: req.body.username, pass: req.body.password}, (err, docs) => {
    //     if(docs.lenght == 1) {
    //         //console.log("Sending response ", docs);
    //         res.send({
    //             name: docs[0].name,
    //             token: docs[0]._id
    //         })
    //     }else {
    //         res.status(404).send("User not found!")
    //     }
    // })

    UserModel.findOne({name: req.body.username, pass: req.body.password}, (err, data) => {
        if(err){
            return res.status(500).send(err)
        }else {
            return res.status(200).send(data)
        }
    })
})

app.listen(9000, () => {
    console.log('Server running on port 9000');
})