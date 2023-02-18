const productQueries = {
    searchProducts: () => {
        return [{
            productId: '412214212',
            name: 'Apple',
            decription: 'Apple',
            category: 'fruits',
            price: '23.2',
        }]
    },
    getProductDetail: ({ id }: { id: string }, context: any) => {
        console.log(id)
        return {
            productId: '412214212',
            name: 'Apple',
            decription: 'Apple',
            category: 'fruits',
            price: '23.2',
        }
    }
}

export default productQueries;
