export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Xbox Series X',
    price: 499,
    description: 'The most powerful Console'
  },
  {
    id: 2,
    name: 'Xbox Series S and X Bundle',
    price: 899,
    description: 'Take all the family in a exclusive bundle'
  },
  {
    id: 3,
    name: 'Xbox Series S',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/