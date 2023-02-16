const { update } = require('../Services/user')
const userService = require('../Services/user')

module.exports = {






    async find(req, res, next) {


        try {
            const result = await userService.find()



            res.send(result)
            
        } catch (error) {

            console.log("error",error)
            res.status(500).send("internal Sever Error")
            
        }
    
    },




    async create(req, res, next) {
        if(req.body) {
                     if (req.body.name && req.body.email) {
                         const result = await userService.create(req.body)
                            res.send(result)

                             console.log("updated")
                         } 
                     else {
                        res.status(400).send("title is error")
                         }
                 
                        }

            else{   
                res.status(400).send("title is error")
            }
        
        
    },


    async  update(req,res, next) {



       
                    if (req.params.userId) {
                     const result = await userService.update(req.params.userId,req.body)
                     res.send(result)
                     console.log("added")
                    }
           
           
            else {
            res.status(400).send("title is error")
            }
                },





                
    async  delete(req,res, next) {



       
        if (req.params.userId) {
         const result = await userService.delete(req.params.userId,req.body)
         res.send(result)
         console.log("Deleted")
        }


else {
res.status(400).send("title is error")
}
    }

      
             }



