
class MarketBase {
    constructor(name, surname, discount, product) {
        this.name = name
        this.surname = surname
        this.discount = discount
        this.product = product


    }

    productNames = [{ mehsul: "krem", qiymet: 30 }, { mehsul: "sampun", qiymet: 20 }, { mehsul: "sabun", qiymet: 10 }]


    hesabla(percent) {


        const final = this.productNames.filter((item) => item.mehsul == this.product)

        final.forEach((item) =>  console.log(item.mehsul,"Qiymet", item.qiymet, 'Endirimli qiymet',item.qiymet -= (item.qiymet * percent) / 100))

    }


}

class Customer extends MarketBase {

    constructor(name, surname, discount, product) {
        super(name, surname, discount, product)
    }

    hasDiscountCard() {


        if (this.discount) {

            this.hesabla(14)

        } else {

            const final = this.productNames.filter((item) => item.mehsul == this.product)
            
            final.forEach((item) =>  console.log(item.mehsul, item.qiymet))

        }

    }

}



const user1 = new Customer("Elgiz", "Nuriyev", true, "sampun")

user1.hasDiscountCard()











