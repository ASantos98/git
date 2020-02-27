const admin = require("firebase-admin");

// Certificado
const serviceAccount = require("../../acompanhamento-nutricional.json");

// Inicializando
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://acompanhamento-nutricional.firebaseio.com"
});

// Exportando uma instância do banco
module.exports = admin.firestore()