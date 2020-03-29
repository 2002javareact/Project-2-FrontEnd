import React from 'react'
import { Card, CardTitle, CardText, Button } from 'reactstrap'
//import { Inventory } from '../../models/Inventory'
//import { Type } from '../../models/type'
//import { Brand } from '../../models/brand'
import { Redirect } from 'react-router'
import { Inventory } from '../../Models/Inventory'
​
interface IUserInfoProps{
    inventoryByType:Inventory
    inventoryByBrand:Inventory
}
​
export class InventoryInfoComponent extends React.Component<IUserInfoProps,any>{
​
    render(){
        return(
            this.props.inventoryByType.type.typeId ? 
            <Card body inverse color="primary">
            //body outline color="danger">
            <CardText>{this.props.inventoryByType.type}</CardText>
            <CardText>{this.props.inventoryByType.brand}</CardText>
            <CardText>{this.props.inventoryByType.itemDescription}</CardText>
            <CardText>{this.props.inventoryByType.price}</CardText>
            <Button color="secondary">Add Item To Cart </Button>
            </Card>  
            :
            this.props.inventoryByBrand.brand.brandId ? //this shows that brandId from the inventory not fom the brand
            <Card body inverse color="primary">
            //body outline color="danger">
            <CardText>{this.props.inventoryByBrand.type}</CardText>
            <CardText>{this.props.inventoryByBrand.brand}</CardText>
            <CardText>{this.props.inventoryByBrand.itemDescription}</CardText>
            <CardText>{this.props.inventoryByBrand.price}</CardText>
            <Button color="secondary">Add Item To Cart </Button>
            </Card> 
            :
            <Redirect to='/'/>
        )
    }
}