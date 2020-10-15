export class TestService {
    constructor() {
        this.products = [
            {
                name: 'pizzas',
                products: [
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра1',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра2',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра3',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра4',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра5',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра6',
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
                        name: 'Четыре сыра1',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    },
                    {
                        imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                        name: 'Четыре сыра2',
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
                        name: 'Четыре сыра1',
                        description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                        price: 99
                    }
                ]
            }
        ];
    }

    getArrayProducts(productName) {
        const product = this.products.filter(product => product.name === productName);
        return product[0].products;
    }
}
