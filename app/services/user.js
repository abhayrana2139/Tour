const userData = require('../data/user.json')

module.exports={




    
    async find() {

        //fetch Data from database

        const user =userData
        return user


    
    },


    async create(data) {


        

        
        let userId =userData[userData.length -1].id +1
        const muserData ={
            id : userId,
            name:data.name,
            email:data.email,
            PhoneNo:data.PhoneNo


           
        }
        userData.push(muserData)
        return muserData
    },




    async update(userId,data){
        let updateUser={}
        userData.forEach((singleUser)=>{
            if(singleUser.id==userId){
                singleUser.body=data.body
                singleUser.name=data.name
                singleUser.email=data.email
                singleUser.PhoneNo=data.PhoneNo
                updateUser =singleUser
            

            }
        })

        return updateUser
    },




    async delete(userId,data){
        const userIndex =  userData.findIndex((singleUser)=>{
            if(singleUser.id == userId){
                return singleUser
            }
        })


        userData.splice(userIndex,1)
        return "ok"
    }





}