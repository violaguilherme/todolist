const Task = require("../models/Task")

module.exports = {
  getAllTasks: (request, response) => {
    Task.getAllTasks((rows) => {
      response.render("index", { taskData: rows })
    })
  },

  getOneTask: (request, response) => {
    const taskId = request.params.id
    Task.getOneTask(taskId, (rows) => {
      response.render("edit", { task: rows })
    })
  },

  updateTask: (request, response) => {
    const task = request.body
    const taskId = request.params.id
    Task.updateTask(task, taskId, () => {
      response.redirect("/")
    })
  },

  insertTask: (request, response) => {
    const task = request.body
    task.task === ""
      ? response.redirect("/")
      : Task.insertTask(task, () => {
          response.redirect("/")
        })
  },

  deleteTask: (request, response) => {
    const taskId = request.params.id
    Task.deleteTask(taskId, () => {
      response.redirect("/")
    })
  },
}
