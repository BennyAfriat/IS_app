import { Component, OnInit } from '@angular/core';
import { map, Observable, toArray } from 'rxjs';
import { ProductPurchase } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {
  
  history$!: Observable<any>;
  items!: ProductPurchase[];
   

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.history$ = this.productService.getPurchaseHistory(
    );
    this.history$.pipe(
      map((items) =>  items.message)
    ).subscribe((history) => {
      this.items = history
    })
  }

}
