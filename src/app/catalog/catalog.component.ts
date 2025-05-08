import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'ibot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 1,
      description: 'A friendly robot head with two eyes and a smile - that helps you with your tasks.',
      name: 'Friendly Bot',
      imageName: 'head-friendly.png',
      category: 'Heads',
      price: 100,
      discount: 10
    };
  }

  getImageUrl(product:IProduct): string {
    return `/assets/images/robot-parts/${product.imageName}`;
  }
}
