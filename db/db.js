let db_name = "nerdsblog";
let db_host = "localhost:8001";
let db_user = "root";
let db_pass = "";

let conn = new PDO("mysql:dbname=" + db_name + ";host=". db_host, db_user, db_pass);

// Habilitar erros PDO
conn.setAttribute(PDO.ATTR_ERRMODE, PDO.ERRMODE_EXCEPTION);
conn.setAttribute(PDO.ATTR_EMULATE_PREPARES, false);