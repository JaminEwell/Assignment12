import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Filters } from './Filters';
import { ProductTable } from './ProductTable';
import { ProductForm } from './ProductForm';

let PRODUCTS = [
    {id: 1, category: 'Outside', price: '$59.99', name: 'Rake'},
    {id: 2, category: 'Outside', price: '$3,000', name: 'Leaf Blower'},
    {id: 3, category: 'Outside', price: '$5.00', name: 'Hose'},
    {id: 4, category: 'Kitchen', price: '$49.99', name: 'Cutting Board'},
    {id: 5, category: 'Kitchen', price: '$15.99', name: 'Knife'},
    {id: 6, category: 'Kitchen', price: '$10', name: 'Bagel Cutter'}
]

class Products extends Component {
    static defaultProps = {
        products: [
            {id: 1, category: 'Outside', price: '$59.99', name: 'Shovel'}
        ]
    }

    state = { 
        open: true,
        filterText: '',
        products: PRODUCTS,
        data: [],
        loading: true
    }

    constructor(props) {
        super(props)
    }


    render() {
        //console.log(this.state)
      const{ products } = this.props
        return (
            <div>
                    <h1>My Inventory</h1>
                    <Filters />
                    <ProductTable filterText= {this.state.filterText} products={this.state.products} data={[]} />
                    <ProductForm />
            </div>
        )
    }
}



export default Products