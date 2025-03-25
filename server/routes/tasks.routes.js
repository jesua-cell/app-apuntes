import { Router } from "express";
import { getTask, getTasks, createTasks, updateTasks, deleteTasks } from '../controllers/tasks.controllers.js';

const router = Router()

router.get('/tasks', getTask)

router.get('/tasks/:id', getTasks)

router.post('/tasks', createTasks)

router.put('/tasks/:id', updateTasks)

router.delete('/tasks/:id', deleteTasks)

export default router