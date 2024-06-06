// todas as funções que lidam com produto

async function getFullName(codeId, productName) {
    console.log("\n");
    console.log("product:" + codeId + "--" + productName);
}

module.exports = {
    getFullName,
}