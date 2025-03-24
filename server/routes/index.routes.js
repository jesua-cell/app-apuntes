import { Router } from 'express'
import { pool } from '../db.js'

const router = Router()

router.get('/ping', async (req, res) => {
    const [resultado] = await pool.query('SELECT 1 + 1 as result');
    console.log(resultado);
    res.json("Papaya")
})

export default router