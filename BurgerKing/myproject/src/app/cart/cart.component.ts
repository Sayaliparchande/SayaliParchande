import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products :any = [];
  public grandTotal: number=0 ;
  // total:number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products =res;
    })
    this.gettotal()
  }

  gettotal(){
   this.grandTotal=0;
    this.products.forEach((element:any) => {
      this.grandTotal+=element.price*element.quantity;
    });

  }


  removeItem(item :any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
