import * as mysql from "mysql";

const loginInfo = {
    'host' : 'localhost',
    'port': 3306,
    'user' : 'root',
    'password' : 'REDACTED',
    'database' : 'portfolio-website' 
}

const db = mysql.createConnection({
    host:  loginInfo['host'],
    port: loginInfo['port'],
    user:  loginInfo['user'],
    password: loginInfo['password'] ,
    database: loginInfo['database'] 
});

db.connect((err:mysql.MysqlError) => {
    if (err) throw err;
});

const insertNewBlog = function(title:string, content:string) {
    return db.query(`INSERT INTO blogs (title, content) VALUES ('${title}', '${content}')`, 
    (err:mysql.MysqlError) => {
        if (err) throw err;
    });
}

const getAllBlogs = function (callback:Function) {
    db.query("SELECT * FROM blogs", (err:mysql.MysqlError, result:any) => {
        if (err) throw err;
        callback(result);
    });
}

const getAllProjects = function (callback:Function) {
    db.query("SELECT * FROM projects", (err:mysql.MysqlError, result:any) => {
        if (err) throw err;
        callback(result);
    });
}

const getSpecificBlog = function (id, callback:Function) {
    db.query(`SELECT * FROM blogs WHERE id=${id}`, (err:mysql.MysqlError, result) => {
        callback(result)
    });
}

const customQuery = function (query:string) {
    return db.query(query, (err:mysql.MysqlError, results:any) => {
        if (err) throw err;
        return results;
    });
}

export { insertNewBlog, getAllBlogs, customQuery, getSpecificBlog, getAllProjects };














