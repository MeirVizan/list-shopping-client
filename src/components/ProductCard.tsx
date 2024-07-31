import { Card, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { translate } from './utils';

interface ProductProps {
    categoryId: number,
    items: any[]
}

const ProductCard: React.FC<ProductProps> = ({ items, categoryId }) => {

    const categories = useSelector((state: RootState) => state.shopping.categories);
    const category = categories.find((cat: any) => cat.id === categoryId)
    const quantityOfCategory = items.reduce((n: number, { quantity }: { quantity: number }) => n + quantity, 0)
    const categoryTitle = translate(category?.name!) + " - " + quantityOfCategory + " מוצרים"

    return (<List className='list' >
        <Typography className='category-title' variant="h6">{categoryTitle}</Typography>
        <Divider />
        {items.map((product: any, index: number) => (
            <ListItem style={{ textAlign: 'center' }} key={index}>
                <ListItemText primary={product.quantity > 1 ? `${product.name} (${product.quantity})` : product.name} />
            </ListItem>
        ))}
        <hr className='line-under-product' />
    </List>
    
    )
}

export default ProductCard;