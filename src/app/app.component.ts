import { Component, OnInit } from '@angular/core';
import { Products, allProdoductData } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
    products:Products[]=allProdoductData;
    data:Products[]=[];   

    newChange(choosingCategory:string){
      
     this.data=this.products.filter(item=>item.category == choosingCategory);

    }
  // count:number=0;
  // itemName:string="None";

  // newChange(item:string){
  // this.itemName=item;
  // this.count++;
  // }
 

}
