import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList:any=[];

  searchKey:string = "";

  constructor(private api:ApiService, private cartService: CartService) { }



  ngOnInit(): void {



    // this.getproduct()

    this.api.getProduct()

    .subscribe(res=>{

      this.productList = res;



      this.productList.forEach((a:any)=>{

        Object.assign(a,{quantity:1, totale:a.price});

      })

    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })

  }

  addtocart(item: any){

    this.cartService.addtoCart(item);

  }
}
