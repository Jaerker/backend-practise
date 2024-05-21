import { Router } from "express";

const router = new Router();

router.get('/', (req, res) => {
    res.status(404).send({message:'Error message here'});
});

router.get('/:id', (req, res) => {
    res.status(201).json({message: 'HELLO'});
});

export default router;