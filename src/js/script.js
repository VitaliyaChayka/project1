let app = new Vue({
    el: '#vue',
    data: {
        title: 'support your local artisans',
        text_notify: 'Free Delivery over $100. Gift with Purchase over $150',
        show_notify: true,
        show: false,
        error_text: '',
        input_text: null,
        products:[
            {
                id: 123,
                title: 'Pepperoni Pizza',
                price: 24.99,
                discount: 5,
                image: 'image1.jpg'
            },
            {
                id: 234,
                title: 'Baked Pancakes',
                price: 44.89,
                discount: 3,
                image: 'image1.jpg'
            },
            {
                id: 345,
                title: 'Avocado',
                price: 20.00,
                image: 'image1.jpg'
            },
            {
                id: 456,
                title: 'Bunch of Orange',
                price: 29.99,
                image: 'image1.jpg'
            }
        ]
    },
    methods: {
        firstLetterToUpperCase(text){
            let text_arr = text.split(' ')
            let arr_Upper = text_arr.map(item=>{
                return item[0].toUpperCase() + item.slice(1)
            })
            return arr_Upper.join(' ')
        },
        hideNotify(){
            this.show_notify = false
        },
        log(text){
            console.log(text);            
        },
        valid(){
            this.error_text = this.input_text.length > 5 ? 'error' :  '';
            c.l
        },
        getNewPrice(product){
            let new_price = product.discount ? 
            product.price * (1 - product.discount/ 100 ) :
            product.price;
            return new_price;
        }

    },
    filters: {
        viewPrice(value, currency = "$"){
            return currency + value.toFixed(2);
        }
    },
    computed: {
        averagePrice(){
            let average_price = 0;
            this.products.forEach(el=>{
                average_price += +el.price
            })
            return average_price / this.products.length;
        }
    }

})


document.querySelector('.price_new').textContent.toUpperCase()