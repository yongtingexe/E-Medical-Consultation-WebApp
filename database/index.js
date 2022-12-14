import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '42069',
    database: 'yongtingdb',
})

app.listen(8800, () => {
    console.log('Connected to database')
})

app.use(function (req, res, next) {
    console.log("Middleware called")
    next();
});

app.get('/appointment', (req, res) => {
    const q = 'SELECT * FROM appointment'
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/general', (req, res) => {
    const q = "SELECT * FROM `doctor` WHERE `Department` = 'General'"
    db.query(q,(err, data) => {
        if(err) return (res.json(err))
        return res.json(data)
    })
})

app.get('/pediatrics', (req, res) => {
    const q = "SELECT * FROM `doctor` WHERE `Department` = 'Pediatrics'"
    db.query(q,(err, data) => {
        if(err) return (res.json(err))
        return res.json(data)
    })
})

app.post('/appointment', (req, res) => {
    const q = 'INSERT INTO appointment (`AppointmentID`, `Name`, `Doctor`, `Date`, `Email`, `Contact`, `Description`, `Age`) VALUES (?)'
    const values = [
        req.body.appointmentID, 
        req.body.patientName,
        req.body.appointmentDoctor, 
        req.body.appointmentDate,
        req.body.contactEmail,
        req.body.contactNumber,
        req.body.patientDescription,
        req.body.patientAge,
    ];

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json('Appointment Sent')
    })
})