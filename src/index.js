import express from "express";
import employeesRoute from "./routes/employees.route.js"
import indexRoute from "./routes/index.route.js"

const app = express()
app.use(express.json())
app.use(indexRoute)
app.use('/api',employeesRoute)


app.listen(3000)

console.log("server running in port 3000")