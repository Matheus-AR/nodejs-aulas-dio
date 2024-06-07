const { getFullName, productType } = require('./services/products');
const config = require('./services/configs');
const database = require('./services/database');

async function main() {
    console.log("carrinho compras");

    getFullName("1", "teclado");
    // product.getFullName("408", "mouseproductad");
    // product.getFullName("409", "teclado");
    // product.getProductLabel("mousepad");

    database.connectToDataBase("Mysql");
    database.disconnectDatabase();
}

main();