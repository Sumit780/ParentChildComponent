import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {
  @Output()  sendData = new EventEmitter();
  // products:string[]=['Mobile','Tv','Laptop'];  
     categorys:string[]=['Chocolates','Toothpaste','Chips','Beverages'];
     CategoryName:string="";
   

     onClick(){
      console.log(this.CategoryName);
      this.sendData.emit(this.CategoryName);
     }

  // itemName:string="";

  // sendMessage(){
  //    this.sendData.emit(this.itemName);
  //    console.log(this.itemName)
  // }
  constructor() { }

  ngOnInit() {
  }

}
