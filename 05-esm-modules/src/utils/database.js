const dataBaseType = {
    userType: "admin",
    typeDatabase: "datalocal",
}

async function connectToDatabase(dataName) {

    console.log("conectado ao banco " + dataName);
}

async function disconnectDatabase() {
    console.log("desconectando banco de dados");
}

export {connectToDatabase, disconnectDatabase, dataBaseType };

// module.exports = {
//     connectToDatabase,
//     disconnectDatabase
// };