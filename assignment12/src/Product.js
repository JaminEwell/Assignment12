import React, { Component } from 'react'
import { Filters } from './Filters';
import { ProductTable } from './ProductTable';
import { ProductRow } from './ProductRow';
import { ProductForm } from './ProductForm';

let PRODUCTS = {
    '1': {id: 1, category: 'Outside', price: '$59.99', name: 'Rake'},
    '2': {id: 2, category: 'Outside', price: '$3,000', name: 'Leaf Blower'},
    '3': {id: 3, category: 'Outside', price: '$5.00', name: 'Hose'},
    '4': {id: 4, category: 'Kitchen', price: '$49.99', name: 'Cutting Board'},
    '5': {id: 5, category: 'Kitchen', price: '$15.99', name: 'Knife'},
    '6': {id: 6, category: 'Kitchen', price: '$10', name: 'Bagel Cutter'}
  }

class Products extends Component {
    static defaultProps = {
        books: [
            {"title": "Taho Tales", "author": "Chet Whitley", "pages": 1000}
        ]
    }


    render() {
        //console.log(this.state)
      
        return (
            <div>
                    <h1>My Inventory</h1>
                    <Filters />
                    <ProductTable />
                    <ProductForm />
            </div>
        )
    }
}



export default Products