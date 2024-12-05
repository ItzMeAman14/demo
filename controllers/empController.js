const EmpModel =  require("../models/empModel")
async function getAllData(req,res)
{
    let allData = await EmpModel.find();
    res.render('showDataFromDB',{data : allData});      
}

async function addEmpData(req,res)
{
    //console.log(req.fields);    
    let emp =  EmpModel({

        empName : req.fields.enm,
        empPassword : req.fields.pwd,
        empMail : req.fields.mailId,
        empSalary : req.fields.esal,
        empDOB : req.fields.dob
    });
    // console.log(emp);

    await emp.save();      
    res.send("Data Inserted..");    
}
async function editfun(req,res)
{
    console.log("Edit .... "+req.params.id); 
    
    let emp =  await EmpModel.findOne({ _id:req.params.id }) ;  
    res.render("editRecord",{data:emp});

}
async function editRec(req,res) 
{
    let emp = await EmpModel.findByIdAndUpdate(req.fields.uid ,{

        empPassword:req.fields.pwd,
        empSalary:req.fields.esal,
    } );   

    if(emp)
    {        
        res.redirect('/emp/getData');
    }  

}

//deleteEmp
async function deleteEmp(req,res)
{
    let emp = await EmpModel.findByIdAndDelete(req.params.id);
    if(emp)
    {
        console.log( "Record Deleted..." );   
        res.redirect("/emp/getData");     
    }
    else
    {
        console.log("Record not find..");
        
    }    
}

async function loginEmp(req,res)
{
    let emp = await EmpModel.findOne({
        empMail : req.fields.mailId,
        empPassword : req.fields.pwd
        });
    console.log(emp);
        
    res.redirect('/home');
}



module.exports = { getAllData, addEmpData , editfun, editRec, deleteEmp , loginEmp } ;