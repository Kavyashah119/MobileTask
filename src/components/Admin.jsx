import React, { Component } from 'react'
import './Admin.css'

export default class Admin extends Component {
    
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            brand: '',
            price: '',
            color: '',
            ram: '',
            rom: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    // on form submit...

    handleFormSubmit(e) {

        e.preventDefault();
        localStorage.setItem('user' , JSON.stringify(this.state));
        this.setState({
            name: '',
            brand: '',
            price: '',
            color: '',
            ram: '',
            rom: ''
        });
        alert("Data submitted")
        window.location.reload();
    }
    

    render() {
        return (
            <>
                <div className='container'>
                    <ul>
                        <li>
                            <a className='animated-arrow' href='/listingitems'>
                                <span className='the-arrow -left'>
                                    <span className='shaft'></span>
                                </span>
                                <span className='main'>
                                    <span className='text' style={{ color: 'white' }}>
                                        Listing Items
                                    </span>
                                    <span className='the-arrow -right'>
                                        <span className='shaft'></span>
                                    </span>
                                </span>
                            </a>
                        </li>
                    </ul>

                </div>

                <div className="title">
                    <p>ADMIN PAGE</p>
                </div>

                <form className='form' onSubmit={this.handleFormSubmit} >
                    <p className='field required'>
                        <label className='label required' for='name'>Mobile name</label>
                        <input className='text-input' id='name' name='name' required type='text' onChange={this.handleChange} />
                    </p>
                    <p className='field required half'>
                        <label className='label' for='brand'>Brand</label>
                        <input className='text-input' id='brand' name='brand' required type='text' onChange={this.handleChange} />
                    </p>
                    <p className='field required half'>
                        <label className='label' for='price'>Price</label>
                        <input className='text-input' id='price' name='price' type='text'  onChange={this.handleChange} />
                    </p>
                    <p className='field half required'>
                        <label className='label' for='color'>Color</label>
                        <input className='text-input' id='color' name='color' required type='text' onChange={this.handleChange} />
                    </p>
                    <p className='field half required'>
                        <label className='label' for='ram'>RAM</label>
                        <input className='text-input' id='ram' name='ram' required type='text' onChange={this.handleChange} />
                    </p>
                    <p className='field half required'>
                        <label className='label' for='rom'>ROM</label>
                        <input className='text-input' id='rom' name='rom' required type='text' onChange={this.handleChange}/>
                    </p>

                    <p className='field half'>
                        <input className='button' type='submit' value='Submit'  />
                    </p>
                </form>

            </>
        )
    }

}


