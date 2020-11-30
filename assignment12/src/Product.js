import React, { Component } from 'react'
import Filters from './Filters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

let PRODUCTS = {
    '1': {id: 1, category: 'Outside', price: '$59.99', name: 'Rake'},
    '2': {id: 2, category: 'Outside', price: '$3,000', name: 'Leaf Blower'},
    '3': {id: 3, category: 'Outside', price: '$5.00', name: 'Hose'},
    '4': {id: 4, category: 'Kitchen', price: '$49.99', name: 'Cutting Board'},
    '5': {id: 5, category: 'Kitchen', price: '$15.99', name: 'Knife'},
    '6': {id: 6, category: 'Kitchen', price: '$10', name: 'Bagel Cutter'}
  }

class Products extends Component {
    state = { 
        filterText: '',
        products: PRODUCTS,
    }

    handleFilter = debounce(filterInput => {
        this.setState(filterInput)
      }, 1000)
    

      //save
      handleSave = product => {
        if (!product.id) {
          product.id = new Date().getTime()
        }
        this.setState(prevState => {
          let products = prevState.products
          products[product.id] = product
          return { products }
        })
      }
    

      //destroy delete
      handleDestroy = productId => {
        this.setState(prevState => {
          let products = prevState.products
          delete products[productId]
          return { products }
        })
      }


    render() {
      const{ products } = this.props
        return (
            <div>
              <h1>My Inventory</h1>
              <Filters onFilter={this.handleFilter} />
              <ProductTable
               products={this.state.products}
               filterText={this.state.filterText}
               onDestroy={this.handleDestroy}
               />
               <ProductForm onSave={this.handleSave} />
            </div>
        )
    }
}



export default Products

var debounce = function(func, wait, immediate) {
    var timeout
    return function() {
      var context = this,
        args = arguments
      var later = function() {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }