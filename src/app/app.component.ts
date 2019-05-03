import { Component } from '@angular/core';
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
      

    newChange(price:any){
   
    //   console.log("parentdata",choosingCategory,)
    //  if(choosingCategory.length>0){
    //    let arrray:Products[]=[];
    //    for(let i=0;i<choosingCategory.length;i++){
    //      arrray=arrray.concat(this.products.filter(item=>item.category == choosingCategory[i]));
    //    }
    //   let arr2 = arrray.filter(item => {
    //     item.price>=min && item.price<=max
    //     console.log("itemprice",item.price)
    //     console.log("max",maximum)
    //     console.log("min",minimum)  
    //     console.log("cond1",item.price>=minimum)
    //     console.log("cond2",item.price<=maximum)        
    //     });
   let arrray=[];
   if(price.length>0){
         arrray=arrray.concat(this.products.filter(item=>item.price>=price[0]&&item.price<=price[1]));
       this.allProductsArray=arrray;
     
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
 
  // console.log("1",item.category == choosingCategory[i])
  // console.log("2",item.category )
  // console.log("3",choosingCategory[i])
}
