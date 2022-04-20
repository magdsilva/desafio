SELECT DISTINCT tblTra.id AS ID_Transacao, tblUsr.email AS Email_Usuario FROM ton_users AS tblUsr
INNER JOIN ton_transactions AS tblTra
ON tblTra.user_id = tblUsr.id WHERE tblTra.status = 'PROCESSING' ORDER BY tblUsr.email