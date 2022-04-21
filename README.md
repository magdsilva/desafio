# desafio

Um incidente iniciado às 16:18 do dia 2 de fevereiro de 2022 fez com que diversos clientes não recebessem o valor de suas transações em suas carteiras.
A correção para esse incidente foi aplicada às 17:30, do mesmo dia. A normalização das demais transações foi instantânea após a aplicação da correção, mas as que foram impactadas ainda não foram reprocessadas e os clientes não foram informados da falha.
O time de operações identificou que todas as transações que soferam do problema tinham o valor 'PROCESSING' no campo 'status' dentro do banco de dados.

Com base nessas informações:

Liste todos os ids e emails de clientes que foram impactados durante o incidente (utilize a plataforma db-recruiter)
O arquivo reprocessamento.js contém um script para fazer a correção dessas transações e também disparar uma comunicação para os clientes impactados
A função fixTransactions deve receber um array com os ids dos usuários impactados
A função sendEmails deve receber um array com os emails dos usuários impactados
Adeque a função main do arquivo reprocessamento.js para adicionar as informações que faltam no script

Requisitos

Salve os IDs dos usuários impactados e seus respectivos emails e um arquivo csv
Utilize um repositório do git (Github, Bitbucket, ou o que preferir) para salvar o arquivo csv e o reprocessamento.js com as alterações feitas
