const database = require("../config/database")

module.exports = {
  getAllTasks: (callback) => {
    const sql = "SELECT * FROM tasks"
    database.query(sql, (err, rows) => {
      if (err) throw err
      return callback(rows)
    })
  },

  getOneTask: (taskId, callback) => {
    const sql = "SELECT * FROM tasks WHERE id = ?"
    database.query(sql, taskId, (err, rows) => {
      if (err) throw err
      return callback(rows[0])
    })
  },

  updateTask: (task, taskId, callback) => {
    const sql = "UPDATE tasks SET ? WHERE id = ?"
    database.query(sql, [task, taskId], (err) => {
      if (err) throw err
      return callback()
    })
  },

  insertTask: (task, callback) => {
    const sql = "INSERT INTO tasks SET ?"
    database.query(sql, task, (err) => {
      if (err) throw err
      return callback()
    })
  },

  deleteTask: (taskId, callback) => {
    const sql = "DELETE FROM tasks WHERE id = ?"
    database.query(sql, taskId, (err) => {
      if (err) throw err
      return callback()
    })
  },
}
