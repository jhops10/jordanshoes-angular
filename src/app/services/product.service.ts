import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      imgUrl: '../../assets/images/tenis1.svg',
      name: 'Air Jordan 1 Mid Dutch Green',
      type: 'Tênis Air Jordan',
      price: 'R$ 1.199,99',
    },
    {
      id: 2,
      imgUrl: '../../assets/images/tenis2.svg',
      name: 'Air Jordan 1 High Zoom CMFT Tropical Twist',
      type: 'Tênis Air Jordan',
      price: 'R$ 1.049,00',
    },
    {
      id: 3,
      imgUrl: '../../assets/images/tenis3.svg',
      name: 'Air Jordan 1 Mid Dutch Green',
      type: 'Tênis Air Jordan',
      price: 'R$ 1.350,00',
    },
    {
      id: 4,
      imgUrl: '../../assets/images/tenis4.svg',
      name: 'Air Jordan 1 Mid GS "Light Smoke Grey"',
      type: 'Tênis Air Jordan',
      price: 'R$ 1.585,00',
    },
    {
      id: 5,
      imgUrl: '../../assets/images/tenis5.svg',
      name: 'Air Jordan 1 Mid SE Bright Citrus',
      type: 'Tênis Air Jordan',
      price: 'R$ 949,99',
    },
    {
      id: 6,
      imgUrl: '../../assets/images/tenis6.svg',
      name: 'Air Jordan 1 Mid Grey Camo',
      type: 'Tênis Air Jordan',
      price: 'R$ 999,99',
    },
  ];
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
