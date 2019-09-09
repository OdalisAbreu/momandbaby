import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private productsDb: AngularFireList<Product>;

  constructor(private db: AngularFireDatabase) {
    this.productsDb = this.db.list('products', ref => ref.orderByChild('name'));
 }
 getproducts(): Observable<Product[]> {
   return this.productsDb.snapshotChanges().pipe(
     map(changes => {
       return changes.map(c => ({ $key: c.payload.key, ...c.payload.val()}));
     })
   );
 }
 addProduct(product: Product) {
    return this.productsDb.push(product);
 }

 deleteProduct(id: string) {
   this.db.list('/products').remove(id);
 }

 editProduc(newProductData) {
   const $key = newProductData.$key;
   delete(newProductData.$key);
   this.db.list('/products').update($key, newProductData);
 }

}
