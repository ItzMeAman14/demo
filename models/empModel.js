let mongoose = require("mongoose");

let empSch = mongoose.Schema({

    empName:{type:String , required : true  } , 
    empPassword :{ type:String , required:true } , 
    empMail:{ type:String , required:true } ,
    empSalary:{type:Number , required:true},
    empDOB:{type:Date , required:true},
    empDOJ:{type:Date , required:true,default:Date.now},
});
const EmpModel = mongoose.model("EmpData",empSch) ; 
module.exports = EmpModel ;
