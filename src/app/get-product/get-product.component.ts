import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NameBool, allCategories } from "../name-bool";
import { element } from '@angular/core/src/render3';

@Component({
  selector: "app-get-product",
  templateUrl: "./get-product.component.html",
  styleUrls: ["./get-product.component.css"]
})
export class GetProductComponent implements OnInit {
  @Output() sendData = new EventEmitter();
  // products:string[]=['Mobile','Tv','Laptop'];
  //  categorys:string[]=['Chocolates','Toothpaste','Chips','Beverages'];
  //  CategoryName:string="";

  //  onClick(){
  //   console.log(this.CategoryName);
  //   this.sendData.emit(this.CategoryName);
  //  }
  
   price:number[]=[0,100];
   categorys: NameBool[] = allCategories;

  filter() {
  
    // let filteredArray = this.categorys.filter(item => item.value == true).map(element => element.name);
    // this.sendData.emit(filteredArray);
    this.sendData.emit(this.price);
    console.log("child",this.price)
  }

  // itemName:string="";

  // sendMessage(){
  //    this.sendData.emit(this.itemName);
  //    console.log(this.itemName)
  // }
  constructor() {}

  ngOnInit() {}
}
