let userRoutes = require('./routes/userRoutes') ;
let empRoutes = require('./routes/empRoute') ;
let formidable = require('express-formidable')
const express = require("express");
const db = require("./db");
const app = express();
const HOST = 'localhost'
const PORT = 3000;


app.use("/user",userRoutes);
app.use(formidable());
app.use(express.static("./public"));
app.set("view engine","ejs");
// http://localhost:3000/emp/getData
app.use("/emp",empRoutes);

app.get("/edit",(req,res)=>{

    res.render("editRecord");

});

app.get("/login",(req,res)=>{

    res.render("loginPage.ejs");

});


http://localhost:3000
app.get("/",( req, res )=>{

    res.send("Welcome Users...");
});

app.get("/reg",(req,res)=>{

    res.render("addEmpPage");

});

app.post("/addEmp",(req,res)=>{

    console.log(req.fields);
    
   res.send("Data Posted...");

});
//http://localhost:3000/home
app.get("/home",(req,res)=>{
    
    res.render("homePage");

})
app.get("/show",(req,res)=>{

    let empData = [
        { 
            _id:1,
            firstName: "John",
            lastName: "King",
            gender:'male',
            email: "john.king@abc.com",
            salary: 5000,
            department: { 
                        "name":"HR" 
                    }
        },
        { 
            _id:2,
            firstName: "Sachin",
            lastName: "Tendulkar",
            gender:'male',
            email: "sachin.t@abc.com",
            salary: 8000,
            department: { 
                        "name":"Finance" 
                    }
        },
        { 
            _id:3,
            firstName: "Virat",
            lastName: "kohli",
            gender:'male',
            email: "kohli@abc.com",
            salary: 7500,
            department: { 
                        "name":"Marketing" 
                    }
        },
        { 
            _id:4,
            firstName: "Rohini",
            lastName: "Sharma",
            gender:'female',
            email: "roh@abc.com",
            salary: 5000, 
            department: { 
                        "name":"HR" 
                    }
    
        },
        { 
            _id:5,
            firstName: "Kapil",
            lastName: "Dev",
            gender:'male',
            email: "kapil.d@abc.com",
            salary: 4500,
            department: { 
                        "name":"Finance" 
                    }
    
        },
        { 
            _id:6,
            firstName: "Amit",
            lastName: "B",
            gender:'male',
            email: "amit.b@abc.com",
            salary: 7000,
            department: { 
                        "name":"Marketing" 
                    }
        }
    ];
    res.render("showData",{data:empData});
})

//http://localhost:3000/aboutUs
app.get("/about",(req,res)=>{

    
    // let str = "<hr color='red' /><h1 align='center'>Aboutus Page</h1><hr color='red' />";
    // res.send(str);
    res.render("about");

});

// Dynamic Routes
app.get("/getData/:id",(req,res)=>{

    res.send("Data for "+ req.params.id );

});

app.get("/getData/:id/:nm",(req,res)=>{

    res.send("ID : "+ req.params.id + " Name : "+req.params.nm);

});

app.post("/addEmp",(req,res)=>{

    res.send("Employee Added...");

});

app.use((req, res, next) => {
    res.status(404).render('ErrorPage', { url: req.originalUrl });
  });
  

app.listen(PORT,HOST,(err)=>{

    if(!err)
    {
        console.log(`Server Running at http://${HOST}:${PORT} `);
        
    }
    else
    {
        console.log(`Server not Running Error : ${err} `);
    }

}) ;















