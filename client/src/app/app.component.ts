import { Component } from '@angular/core';
import { ProductPurchase } from './model/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'client';
  
  constructor(private productService: ProductService){}

  buyNow(price: number){
    this.productService.executePurchase(price).subscribe(() => {
      
    })
  }
}
