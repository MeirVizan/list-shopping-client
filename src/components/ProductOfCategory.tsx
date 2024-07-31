import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { translate } from './utils';

interface ProductProps {
    prodectSaperedly: any;
}

const ProductOfCategory = ({prodectSaperedly}: ProductProps) => {
    return (
        <div className='product-list'>
            {
                Object.entries(prodectSaperedly).map(([key, value]: [string, any]) => {
                    return <List className='list' key={key}>
                        <div className='category-title'>{translate(key) + " - " + value.reduce((n: number, { quantity }: { quantity: number }) => n + quantity, 0) + " מוצרים"}</div>
                        {value.map((product: any, index: number) => (
                            <ListItem style={{ textAlign: 'center' }} key={index}>
                                <ListItemText primary={product.quantity > 1 ? `${product.name} (${product.quantity})` : product.name} />
                            </ListItem>
                        ))}
                        <hr className='line-under-product' />
                    </List>
                })}
        </div>

    )
}

export default ProductOfCategory;