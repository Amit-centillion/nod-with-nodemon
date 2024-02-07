const add = async(req,res)=>{
    try{
        return res.json({
            status:200,
            message:"add function is calling"
        })
    }
    catch(error){
        console.log(error)
    }
}
module.exports = {
    add
}