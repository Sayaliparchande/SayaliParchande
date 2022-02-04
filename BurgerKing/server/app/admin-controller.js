const db=require('../db/models');
const admin=db.admin;

exports.findAll=(req,resp)=>{
    admin.findAll()
          .then((data)=>{resp.json(data)})
          .catch((err)=>{
              resp.status(500)
                   .send({message:err.message|| " Some Error retriving People Data"})
          })

}

 exports.findByPk=(req,resp)=>{
     console.log("findOne: "+req.params.id);
     const id=parseInt(req.params.id);
     admin.findByPk(id)
           .then((data)=>{
                resp.json(data);
            })
           .catch((err)=>{
               resp.status(500)
                    .send({message:err.message||` Some error retriving product data with id ${id}`});
           })   
 };
//  INSERT INTO public."People"(
// id, "firstName", "lastName", "createdAt", "updatedAt")
// VALUES (?, ?, ?, ?, ?);
exports.createAdmin = (req, resp) => {
    if(!req.body.fullName){
        resp.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    if(!req.body.mobilenumber){
        resp.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if(!req.body.email){
        resp.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if(!req.body.password){
        resp.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
   

    const newAdmin={
        fullName: req.body.fullName,
        mobilenumber: req.body.mobilenumber,
        email:req.body.email,
        password:req.body.password,
        createdAt:new Date(),
        updatedAt:new Date()
    }
    admin.create(newAdmin)
        .then(data=>{resp.send(data);})
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error Creating new Product data"
            })
        })
}

exports.update = (req, resp) => {
    const id = req.params.id;

    admin.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
            resp.send({
                message: `product with id ${id} updated successfully.`
            });
            } else {
            resp.send({
                message: `Cannot update Product with id=${id}. Maybe product was not found or req.body is empty!`
            });
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving Author data"
            })
        })
}
// DELETE FROM public."People"
// 	WHERE <condition>;
exports.delete = (req, resp) => {
    const id = req.params.id;
    admin.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                resp.send({ message: `product with id=${id} deleted successfully!` });
            } else {
                resp.send({ message: `Cannot delete product with id=${id}. Maybe Product was not found!` });
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Could not delete Product with id=" + id
            })
        })
}