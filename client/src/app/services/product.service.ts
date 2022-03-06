import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductPurchase } from '../model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  user = {
    userId : '12345',
    userName: 'demoUser'
  }

  constructor(private http: HttpClient) { }

  executePurchase(productPrice: number){
    const productPurchase: ProductPurchase = {
      price: productPrice,
      userId: this.user.userId,
      userName: this.user.userName
    }
    return this.http.post<ProductPurchase>(environment.webserverUrl + '/buy', productPurchase);
  }

  getPurchaseHistory(){
    return this.http.get(environment.webserverUrl + '/getAllUserBuys');
  }
}
