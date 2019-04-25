import { Component, OnInit } from '@angular/core';
import { Products, allProdoductData } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
    allProductsArray=[];
    products:Products[]=allProdoductData;
    data:Products[]=[];   

    newChange(choosingCategory:string){
      
     if(choosingCategory.length>0){
       let arrray=[];
       for(let i=0;i<choosingCategory.length;i++){
         arrray=arrray.concat(this.products.filter(item=> item.category==choosingCategory[i]));
       }
       this.allProductsArray=arrray;
       console.log(this.allProductsArray)
     }else{
       this.allProductsArray=this.products;
     }

    }
  // count:number=0;
  // itemName:string="None";

  // newChange(item:string){
  // this.itemName=item;
  // this.count++;
  // }
 

}
