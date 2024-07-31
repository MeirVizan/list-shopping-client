import { Container } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import { ItemsTotal } from './ItemsTotal'
import { ProductInput } from './ProductInput'
import { ProductList } from './ProductList'
import { FinishOrderButton } from './FinishOrderButton'

const ShoppingList = () => {
  return (
    <Container className='flex col gap'>
      <ItemsTotal />
      <ProductInput />
      <ProductList />
      <FinishOrderButton />
    </Container>
  )
}

export default ShoppingList