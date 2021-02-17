
const express = require('express');
const router = new express.Router();
const MensRanking = require('../models/mens.js')



// handling post request
router.post('/mens', async (req, res) => {
    try {
        const mensRecord = new MensRanking(req.body)
        const response = await mensRecord.save();
        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e)
    }
})

// handling get request
router.get('/mens', async (req, res) => {
    try {
        const mens = await MensRanking.find({}).sort({ 'ranking': 1 });
        res.status(200).send(mens)
    } catch (e) {
        res.status(400).send(e)
    }
})

// handling individual data
router.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getMens = await MensRanking.findById(_id);
        res.send(getMens)
    } catch (e) {
        res.status(400).send(e)
    }
})

// update individual by patch
router.patch('/mens/:id', async (req, res) => {
    try {

        const getMens = await MensRanking.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.send(getMens)
    } catch (e) {
        res.status(500).send(e)
    }
})

// handling delete request
router.delete('/mens/:id', async (req, res) => {
    try {
        const getMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getMen)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router