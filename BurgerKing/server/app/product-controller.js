const db=require('../db/models');//index.js=>db

const product=db.Product;

// 1. select * from users => findAll

exports.findAll=(req,resp)=>{

    product.findAll()

        .then(data=>resp.json(data))

        .catch(err=>{

            resp.status(500)

                .send({message:err.message||

                `Something went wrong`})

        });

};

// // 2. seelct * from users where id=?=>findByPK

// exports.findByPk=(req,resp)=>{

//     const id=parseInt(req.params.id);

//     Books.findByPk(id)

//         .then(data=>resp.json(data))

//         .catch(err=>{

//             resp.status(500)

//                 .send({message:err.message||

//                 `Something went wrong`})

//         });

// };

// // 3.insert into users

// exports.create = (req, res) => {
//     Books.create({
//       bookName: req.body.authorName,
//       authorName: req.body.bookName,
//     })
//       .then((author) => {
//         res.json(author);
//       })
//       .catch((err) => {
//         res.send(err);
//       });
//   };
  
//   //update user

//   exports.update = (req, res) => {
//     const id = parseInt(req.params.id);
//     Books.update(
//       {
//         bookName: req.body.authorName,
//         authorName: req.body.bookName,
//       },
//       {
//         where: {
//           id: id,
//         },
//       }
//     )
//       .then((author) => {
//         res.json("Successfully updated author with id = " + id);
//       })
//       .catch((err) => {
//         res.send(err);
//       });
//   };

//   //delete user

//   exports.delete = (req, res) => {
//     const id = parseInt(req.params.id);
//     Books.destroy({
//       where: {
//         id: id,
//       },
//     })
//       .then((author) => {
//         res.json("Successfully deleted author with id = " + id);
//       })
//       .catch((err) => {
//         res.send(err);
//       });
//   };