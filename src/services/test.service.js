export class TestService {
    constructor() {
        this.products = [
            {
                name: 'pizzas',
                products: [
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    }
                ]
            },
            {
                name: 'salads',
                products: [
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    }
                ]
            },
            {
                name: 'drinks',
                products: [
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    }
                ]
            }
        ];
    }

    getArrayProducts(productName) {
        const product = this.products.filter(product => product.name === productName);
        return product[0].products
    }
}
