import express from 'express';

const router = express.Router();


router.get('/', function(req, res) {
    res.json({msg: 'Hola Mundo desde express'})
})

export default router;

