const obj = {
    id: '182272hsjdgajsbdkasjdhj',
    listProduct: [
        {
            id: 'hahahahaha',
            shop: {
                id: '1237374747474',
                name: 'test shop card1'
            },
            productName: 'mourse1',
            price: 200000,
            quanlity: 299
        },
        {
            id: 'hahahahjsjsjsaha',
            shop: {
                id: '1237374747474',
                name: 'test shop card1'
            },
            productName: 'mourse2',
            price: 200000,
            quanlity: 300
        },
        {
            id: 'hahahahjsjsjsafdfdfha',
            shop: {
                id: '1237374747fsdfsdfs474',
                name: 'test shop card2'
            },
            productName: 'con chuột',
            price: 200000,
            quanlity: 300
        }
    ]

}
const obj2 = {
    id: '182272hsjdgajsbdkasjdhj',
    listProduct: [
        {
            shopName: 'test shop card1',
            listProduct: [
                {
                    id: 'hahahahaha',
                    shop: {
                        id: '1237374747474',
                        name: 'test shop card1'
                    },
                    productName: 'mourse1',
                    price: 200000,
                    quanlity: 299
                },
                {
                    id: 'hahahahjsjsjsaha',
                    shop: {
                        id: '1237374747474',
                        name: 'test shop card1'
                    },
                    productName: 'mourse2',
                    price: 200000,
                    quanlity: 300
                },
            ]
        },
        {
            shopName: 'test shop card2',
            productList: [

                {

                    id: 'hahahahjsjsjsafdfdfha',
                    shop: {
                        id: '1237374747fsdfsdfs474',
                        name: 'test shop card2'
                    },
                    productName: 'con chuột',
                    price: 200000,
                    quanlity: 300
                }
            ]
        }
    ]

}
const shopName = [];
const newdata = [];
obj.listProduct.map((value) => {
    const shopname = value.shop.name
    if(!shopName.includes(shopname)){
        shopName.push(shopname);
        const data = obj.listProduct.filter(item=>{
            return item.shop.name === shopname
        })
        const element = {
            shopname: shopname,
            listProduct: data
        }
        newdata.push(element);
    }
})
console.log(newdata);