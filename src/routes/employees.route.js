import { Router } from "express";
import { getEmployees, createEmployee , updateEmployee, deleteEmployee} from "../controllers/employees.controllers.js";

const router = Router();


router.get('/employes',getEmployees)

router.post('/employes',createEmployee)

router.put('/employes', updateEmployee)


router.delete('/employes',  deleteEmployee)



export default router;