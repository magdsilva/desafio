//Desafio TON

const fs = require('fs');
csv = fs.readFileSync('consulta.csv')

//Funcção para realizar a leitura do CSV
var array = csv.toString().split('\r\n')
const [header, ...files] = array
const id = [] //Array para armazenar ID´s
const email = [] //Array para aramazenar E-mails



const fixTransactions = () => {
    //For para percorrer todo o CSV e armazenas apenas os ID´s
    for (const i of files) {
        const Ids = i.split(';')
        id.push({
            id: Ids[0],
        })
    }
    //Todos os IDs estão salvos na ARRAY "id"
    console.log('Corrigindo transações dos usuários enviados');
}

const sendEmails = () => {
    //For para percorrer todo o CSV e armazenas apenas os E-mails
    for (const j of files) {
        const Emails = j.split(';')
        email.push({
            email: Emails[1],
        })
    }
    //Todos os Emails estão salvos na ARRAY "email"
console.log('Enviando comunicação para os usuários impactados' )
}    
const main = async () => {

    await fixTransactions()
    await sendEmails()
}

main()
    .then(() => console.log('Transações reprocessadas!', array))
    .catch(err => console.error(err))
