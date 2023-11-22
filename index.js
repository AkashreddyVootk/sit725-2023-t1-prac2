const express=require('express')
const app=express()
const port=3000
// Api get call for get two numbers and adding both number giving results
app.get('/add/:num1/:num2',(req,res)=>{
    req.params.num1=parseInt(req.params.num1)
    req.params.num2=parseInt(req.params.num2)
    res.json({result:req.params.num1+req.params.num2})
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });