import React from 'react';


class Filters extends Component {
    state = {value: ''}
    newColor = e => 
        this.setState({value: e.target.value})

    submit = e => {
        console.log('New color: ' + this.state.value)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Favorite Color: 
                    <input type="color" onChange={this.newColor} /><br />
                    <button>Submit</button>
                </label>
            </form>
        )
    }
}