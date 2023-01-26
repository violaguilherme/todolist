const router = require("express").Router()
const taskController = require("../controllers/taskController")

router.get("/", taskController.getAllTasks)
router.get("/getOne/:id", taskController.getOneTask)
router.post("/delete/:id", taskController.deleteTask)
router.post("/update/:id", taskController.updateTask)
router.post("/insert", taskController.insertTask)

module.exports = router