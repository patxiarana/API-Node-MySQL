import express from "express";
import employeesRoute from "./routes/employees.route.js"
import indexRoute from "./routes/index.route.js"

const app = express()

app.use(indexRoute)
app.use(employeesRoute)


app.listen(3000)

console.log("server running in port 3000")