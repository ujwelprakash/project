const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { EmployeeModel, EstimateModel } = require('./models/employeee')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/event")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((err) => {
        console.error("failed to connect", err);
    });

app.post('/Customer', (req, res) => {
    const { email, password } = req.body
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success")
                } else {
                    res.json("password not correct")
                }
            } else {
                res.json("no user")
            }
        })
})

app.post('/register', (req, res) => {
    console.log(req.body)
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})


app.post('/home', (req, res) => {
    console.log(req.body)
    EstimateModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

app.get('/Dashboard', async(req, res) => {
    const other = await EstimateModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    console.log(other)
    res.render("/Dashboard")
})

app.get('/Read/:id', async(req, res) => {
    const others = await EstimateModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    console.log(others)
    res.render("/Read")
})



app.delete('/delete/:id', async(req, res) => {
    const { id } = req.params;
    try {
        await EstimateModel.findByIdAndDelete(id)

        res.status(200).send('Item deleted');
    } catch (error) {
        res.status(500).send('Error deleting item');
    }
});





app.listen(3002, () => {
    console.log("server running on 3002")
})