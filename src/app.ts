import _ from 'lodash';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
console.log(_.shuffle([1, 2, 3]))
import { Product } from './product'
const p1 = new Product("yououououou", 8)
validate(p1).then(err => {
    err.length >0 
    ? console.log(`errrrrrrr:`, err)
    : console.log(p1.getInfo())
      
    
})
const products = [
    {title: `a string`, price: 1},
    {title: `another string`, price: 8},
    {title: `a coool string`, price: 6},
    {title: `a boring string`, price: 9},
    {title: `a gang string`, price: 18},
    {title: `a hon string`, price: 4}];
console.log(p1)
const loadedProjects = products.map( p => new Product(p.title, p.price));
loadedProjects.forEach( pr => console.log(pr.getInfo()))

const lp2 = plainToClass(Product, products);
lp2.forEach(p => console.log(p.getInfo()))
