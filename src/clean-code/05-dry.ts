type Size = '' | 'S' | 'M' | 'XL';
class Product {
    constructor(public name: string = '', public price: number = 10, public size: Size = 'XL') {

    }

    toString() {
        // No Dry
        // if(this.name.length <= 0) throw Error('name is empty')
        // if(this.price <= 0) throw Error('price is zero')
        // if(this.size.length <= 0 ) throw Error('size is empty')


        if(!this.isProductReady) return;

        return `${this.name} (${this.price}), ${this.size}`;
    }

    private isProductReady(key: Extract<keyof this, string>): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (this[key].length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if (this[key] <= 0) throw Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not valid`)
            }
        }
        return true
    }
}
(() => {
    const bluePants = new Product('Blue large pants', 10);
    console.log(bluePants.toString());

})()