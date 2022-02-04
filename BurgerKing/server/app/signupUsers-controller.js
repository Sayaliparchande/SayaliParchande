const db=require('../db/models');
const signupUsers =db.signupUsers;
//SELECT id, "firstName", "lastName", "createdAt", "updatedAt"
// FROM public."People";	
exports.findAll=(req,resp)=>{
    signupUsers.findAll()
          .then((data)=>{resp.json(data)})
          .catch((err)=>{
              resp.status(500)
                   .send({message:err.message|| " Some Error retriving People Data"})
          })

}
//SELECT id, "firstName", "lastName", "createdAt", "updatedAt"
// FROM public."People" where id=?;	
 exports.findByPk=(req,resp)=>{
     console.log("findOne: "+req.params.id);
     const id=parseInt(req.params.id);
     signupUsers.findByPk(id)
           .then((data)=>{
                resp.json(data);
            })
           .catch((err)=>{
               resp.status(500)
                    .send({message:err.message||` Some error retriving user data with id ${id}`});
           })   
 };
//  INSERT INTO public."People"(
// id, "firstName", "lastName", "createdAt", "updatedAt")
// VALUES (?, ?, ?, ?, ?);
exports.createUser = (req, resp) => {
    if(!req.body.fullname){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    if(!req.body.mobilenumber){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if(!req.body.address){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if(!req.body.email){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if(!req.body.password){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }


    const newUser={
        fullname: req.body.fullname,
        mobilenumber: req.body.mobilenumber,
        address:req.body.address,
        email:req.body.email,
        password:req.body.password,
        createdAt:new Date(),
        updatedAt:new Date()
    }
    signupUsers.create(newUser)
        .then(data=>{resp.send(data);})
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error Creating new Product data"
            })
        })
}
// UPDATE public."People"
// 	SET id=?, "firstName"=?, "lastName"=?, "createdAt"=?, "updatedAt"=?
// 	WHERE <condition>;
exports.update = (req, resp) => {
    const id = req.params.id;

    signupUsers.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
            resp.send({
                message: `user with id ${id} updated successfully.`
            });
            } else {
            resp.send({
                message: `Cannot update Product with id=${id}. Maybe product was not found or req.body is empty!`
            });
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving user data"
            })
        })
}
// DELETE FROM public."People"
// 	WHERE <condition>;
exports.delete = (req, resp) => {
    const id = req.params.id;
    signupUsers.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                resp.send({ message: `user with id=${id} deleted successfully!` });
            } else {
                resp.send({ message: `Cannot delete user with id=${id}. Maybe Product was not found!` });
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Could not delete user with id=" + id
            })
        })
}