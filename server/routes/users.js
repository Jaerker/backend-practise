import { Router } from "express";

const router = new Router();

router.get('/', (req, res) => {
    res.status(404).json({message:'Error message here'});
});

router.get('/:id', (req, res) => {
    res.status(408).json({message:'Error message here'});
});