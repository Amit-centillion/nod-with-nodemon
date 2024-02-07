class testController {
    async addData(req,res){
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
}
const controller = new testController();
module.exports = {
    controller
}