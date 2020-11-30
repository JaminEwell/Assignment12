import React from 'react';
import { ProductRow } from './ProductRow';


export const ProductTable = ({ filterText, products, data} ) =>
    



    <div>
            <table className="table table-striped table-bordered">
            <thead>
                <tr><th>Name</th><th>Price</th><th></th></tr>
            </thead>
            <tbody>
          {this.state.products.map(id => (
            <ProductRow id = {id} />
          ))}
        </tbody>

            </table>
    </div>