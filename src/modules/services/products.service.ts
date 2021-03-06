import { ProductToRegister } from './../../interfaces/products/ProductsToRegister';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: AngularFirestore) {}

  registerProduct(product: ProductToRegister): Promise<any> {
    return this.firestore.collection('products').add(product);
  }

  listAllProducts(): Observable<any> {
    return this.firestore.collection('products').snapshotChanges();
  }
}
