import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { getTasks,getOneTask,createTasks,editTasks,deleteTasks,newOrder,viewOrders,editOrder } from "../controllers/task.controller.js";

const router = Router()

router.get("/allTasks",validateToken,getTasks)
router.get("/tasks/:id",validateToken,getOneTask)

router.post("/create-task",createTasks)


router.put("/tasks/:id",validateToken,editTasks)

router.delete("/tasks/:id",validateToken,deleteTasks)



router.get("/past-orders",validateToken,viewOrders)

router.post("/new-order",validateToken,newOrder)
router.put("/edit/:id",validateToken,editOrder)






export default router