class ProductManager {

    constructor() {
        this.products = []
    }
    getProducts = () => {
        try {
        return this.products
        } catch (error) {
            console.log(error)
        }
    }
    addProduct = (title, description, price, thumbnail, code, stock) => {
        try {
            const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        let products = this.getProducts()
        let newId
        let newCode = products.find(prod => prod.code === product.code)
        products.length === 0 ? newId = 1 : newId = products[products.length - 1 ].id + 1
        if(!Object.values(product).every(value => value)){
            return console.log('Todos los campos son obligatorios')
        }
        if (newCode) return console.log(`Ya se ingresó un producto con el codigo ${product.code}`)
        const newProduct = {...product, id: newId}
        products.push(newProduct)
        return this.getProducts()
        } catch (error) {
            console.log(error)
        }
    }
    getProductById = ( id ) => {
        try {
            const obj = this.products.find(product => product.id === id)
        return obj ? obj : console.log('Producto no encontrado')
        } catch (error) {
            console.log(error)
        }
    }
}

const aplicacion = new ProductManager()
aplicacion.addProduct('Producto 1','Remera estampada verde', 500, 'thumnbail', '001', 30)
aplicacion.addProduct('Producto 2','Buzo liso gris', 1000, 'thumbnail', '002', 20)
aplicacion.addProduct('Producto 3','Jogger azul', 2000, 'thumbnail', '003', 10)
// console.log('Muestra solo el producto con id solicitado', aplicacion.getProductById(1))
console.log('Listado de productos en stock', aplicacion.getProducts())