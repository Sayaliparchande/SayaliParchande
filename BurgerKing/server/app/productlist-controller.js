const db=require('../db/models');
const productlist=db.productlist;
//SELECT id, "firstName", "lastName", "createdAt", "updatedAt"
// FROM public."People";	
exports.findAll=(req,resp)=>{
    productlist.findAll()
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
     productlist.findByPk(id)
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
exports.createProduct = (req, resp) => {
    if(!req.body.productName){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    if(!req.body.discription){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if(!req.body.price){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if(!req.body.quantity){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if(!req.body.image){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }


    const newProduct={
        productName: req.body.productName,
        discription: req.body.discription,
        price:req.body.price,
        quantity:req.body.quantity,
        image:req.body.image,
        createdAt:new Date(),
        updatedAt:new Date()
    }
    productlist.create(newProduct)
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

    productlist.update(req.body, { where: { id: id } })
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
    productlist.destroy({ where: { id: id } })
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