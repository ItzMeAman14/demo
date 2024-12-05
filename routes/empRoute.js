const express = require("express");
const router = express.Router();

const empController = require('../controllers/empController'); 

router.get("/getData", empController.getAllData);

router.post("/addEmp",empController.addEmpData);

router.get("/edit/:id" , empController.editfun) ; 

router.post("/updRecEmp",empController.editRec) ;

router.get("/delRec/:id",empController.deleteEmp);

router.post("/login",empController.loginEmp);


module.exports = router ; 