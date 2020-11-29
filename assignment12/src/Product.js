import React, { Component } from 'react'
import Filters from './Filters';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

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

    state = { 
        open: true,
        freeBookmark: false,
        hiring: true,
        data: [],
        loading: true
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate() {
        console.log("The component is now updated.")
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        //console.log(this.state)
        const { books } = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading 
                    ? "loading..." 
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library product of the week!</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100} alt={product.name}/>
                                    <p>{product.description}</p>
                                </div>
                            )
                        })}
                    </div>
                }
                <h1>This library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => 
                        <Book 
                            key={i}
                            title={book.title} 
                            author={book.author} 
                            pages={book.pages}
                            freeBookmark={this.state.freeBookmark} />
                )}
            </div>
        )
    }
}

Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Products