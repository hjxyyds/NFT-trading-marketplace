var mysql = require('mysql')
var deal = new Object()
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    port: '3306',
    database: 'student'
});

connection.connect();

deal.find = function (callback) {
    connection.query(
        'select *from images',
        function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message)
                return callback(err)
            }
            callback(null, result)
        }
    )
}