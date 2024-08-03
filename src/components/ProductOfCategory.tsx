import ProductCard from './ProductCard';

interface ProductProps {
    prodectSaperedly: any;
}

// This component is responsible for displaying the list of products.
const ProductOfCategory = ({ prodectSaperedly }: ProductProps) => {

    return (
        <div className='product-list'>
            {
                Object.entries(prodectSaperedly).map(([key, value]: [string, any]) => {
                    return <ProductCard key={key} items={value} categoryId={Number(key)} />
                })}
        </div>

    )
}

export default ProductOfCategory;