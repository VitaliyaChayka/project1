let app = new Vue({
    el: '#vue',
    data: {
        title: 'support your local artisans',
        text_notify: 'Free Delivery over $100. Gift with Purchase over $150',
        show_notify: true,
        show: false,
        error_text: '',
        input_text: null

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
        }

    }
})


document.querySelector('.price_new').textContent.toUpperCase()