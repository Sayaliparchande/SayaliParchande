import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ProductModel } from './admin-dashboard.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  formValue !: FormGroup;
  productModelObj : ProductModel = new ProductModel();
  productData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor( private formbuilder: FormBuilder, private api:ApiService ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      productName:[''],
      discription:[''],
      price:[''],
      quantity:[''],
      image:['']
    })
    this.getAllProduct();
  }
  clickAddProduct(){
    this.formValue.reset();
    this.showAdd = true ;
    this.showUpdate = false;
  }
  postProductDetails(){
    this.productModelObj.productName =this.formValue.value.productName;
    this.productModelObj.discription= this.formValue.value.discription;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.quantity = this.formValue.value.quantity;
    this.productModelObj.image = this.formValue.value.image;

    this.api.postProduct(this.productModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("product Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllProduct();
    },
    err=>{
      alert("something went wrog");
    }
    )
  }
  getAllProduct(){
    this.api.getProduct()
    .subscribe(res=>{
      this.productData = res ;
    })
  }
  deleteProduct(row : any){
    this.api.deleteProduct(row.id)
    .subscribe(res=>{
      alert("product Deleted");
      this.getAllProduct();
    })
  }
  onEdit(row: any){
    this.showAdd = false ;
    this.showUpdate = true;
    this.productModelObj.id = row.id;

    this.formValue.controls['productName'].setValue(row.productName);
    this.formValue.controls['discription'].setValue(row.discription);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['quantity'].setValue(row.quantity);
    this.formValue.controls['image'].setValue(row.image);
  }
  updateProductDetails(){
    this.productModelObj.productName =this.formValue.value.productName;
    this.productModelObj.discription= this.formValue.value.discription;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.quantity = this.formValue.value.quantity;
    this.productModelObj.image = this.formValue.value.image;

    this.api.updateProduct(this.productModelObj, this.productModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllProduct();
    })
  }
}
