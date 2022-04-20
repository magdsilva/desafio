const fs = require('fs');
csv = fs.readFileSync('consulta.csv')

var array = csv.toString().split('\r\n')
const [header, ...files] = array
const id = []
const email = []

const fixTransactions = () =>  {
  for (const i of files){
    const Ids = i.split(';')
      id.push({
        id:Ids[0],
      })
  }
}
console.log('Corrigindo transações dos usuários enviados');
const sendEmails = () => {
  for (const j of files){
    const Emails = j.split(';')
      email.push({
        email:Emails[1],
      })
  }
  console.log('Enviando comunicação para os usuários impactados');

}
const main = async () => {

  await fixTransactions()
  await sendEmails()

}

main()

  .then(() => console.log('Transações reprocessadas!', array))
  .catch(err => console.error(err))
