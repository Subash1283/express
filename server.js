const express =require("express");
const port =5000;
const app=express();

app.get("/subas", (request, response) => {
    response.json({ message: "Success", status_code: 200 });
});
app.post("/subas", (request, response) => {
    response.json({ message: "Userdata saved successfully"});
});

app.get("/getProduct",(request,response)=>{
    response.json({
        message:"Product list fetch successfully",
        product:[
            {
                id:1,
                "product_name":"Mobile",
                "price":"10000",
                "brand":"one plus"
            },
              {
                id:2,
                "product_name":"Mobile",
                "price":"10000",
                "brand":"one plus"
            }
        ]
    })
})

app.delete("/deleteById/:id",(request,response)=>{
    const {id}=request.params;
    response.json({Message:"product successfully deleted with id " +id});
})

app.patch("/updateProduct/:id",(request,response)=>{
    const {id}=request.params;
    response.json({Message:"product updated with id "+id});
})








app.listen(port,()=>{
    console.log("The server is running "+port);

})

