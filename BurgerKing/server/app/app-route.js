module.exports=(app)=>{

    const express=require('express');

    const ROUTER=express.Router();

    const ProductController=require('./product-controller');

    const ProductlistController=require('./productlist-controller');

    const SignupUsersController=require('./signupUsers-controller');

    const AdminController=require('./admin-controller');
    

    ROUTER.get('/products',ProductController.findAll);
    
    // ROUTER.get('/books/:id',BooksController.findByPk);

    // ROUTER.post('/books/add',(req,resp)=>{    });

    // ROUTER.put('/books/update/:id',(req,resp)=>{    });

    // ROUTER.delete('/books/delete/:id',(req,resp)=>{    });

    



    ROUTER.get('/productlist',ProductlistController.findAll);

    ROUTER.get('/productlist/:id',ProductlistController.findByPk);

    ROUTER.post('/productlist/add',ProductlistController.createProduct);

    //PUT url: http://localhost:3500/app/persons/update/:id

    ROUTER.put('/productlist/update/:id',ProductlistController.update);

    //DELETE url: http://localhost:3500/app/persons/delete/:id

    ROUTER.delete('/productlist/delete/:id',ProductlistController.delete);  



    ROUTER.get('/login',SignupUsersController.findAll);

    ROUTER.get('/signupUsers/:id',SignupUsersController.findByPk);

    ROUTER.post('/signupUsers',SignupUsersController.createUser);

    ROUTER.put('/signupUsers/update/:id',SignupUsersController.update);

    ROUTER.delete('/signupUsers/delete/:id',SignupUsersController.delete);  

// Admin Route

    ROUTER.get('/admin',AdminController.findAll);

    ROUTER.get('/admin/:id',AdminController.findByPk);

    ROUTER.post('/admin/add',AdminController.createAdmin);

    ROUTER.put('/admin/update/:id',AdminController.update);

    ROUTER.delete('/admin/delete/:id',AdminController.delete);  

     




    app.use('/app',ROUTER);

}