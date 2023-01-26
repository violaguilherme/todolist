const express = require("express")
const router = require("./routes/taskRoute")

const app = express()
const port = process.env.PORT || 4000

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})