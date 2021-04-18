import React, { Component } from 'react';
import Card from './LCard';

class ListingItems extends Component {

    documentData;
    constructor(props){
        super(props); 
                   
        this.documentData = JSON.parse(localStorage.getItem('user'));
    }

    render() {
        return (
            <div>
                <div style={{margin:"3rem"}}>
                <Card name={this.documentData.name} brand={this.documentData.brand} price={this.documentData.price} color={this.documentData.color} ram={this.documentData.ram} rom={this.documentData.rom} />
                </div>
            </div>
        )
    }
}

export default ListingItems;