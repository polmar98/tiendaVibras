const {pool} = require("../database.js");

const getUser = async(user, password) => {
    if(!user || !password) throw Error("Datos Incompletos");
    let query1 = 'SELECT * FROM gnr_usuarioweb where usu_nombre=? and usu_clave=? ';
    const [result] = await pool.query(query1, [user, password]);
    if(result.length >0){
       return {id: result[0].id,
               name: result[0].usu_nombre,
               mayorista: result[0].usu_mayorista,
               admin: result[0].usu_admin, 
               bloqueado: result[0].usu_bloqueado}; 
    };
    return {id: 0, name: "", mayorista: 0, admin: 0, bloqueado: 0};
};

const getUserAuth0 = async(usuario, email) => {
    if(!usuario || !email) throw Error("Datos Incompletos");
    let query1 = 'SELECT * FROM gnr_usuarioweb where usu_nombre=? and usu_email=?';
    const [result] = await pool.query(query1, [usuario, email]);
    if(result.length >0){
       return {id: result[0].id,
               name: result[0].usu_nombre,
               mayorista: result[0].usu_mayorista,
               admin: result[0].usu_admin, 
               bloqueado: result[0].usu_bloqueado};
    } else {  //no existe creamos el nuevo usuario en la BD
         let query1 = "INSERT INTO gnr_usuarioweb (usu_nombre, usu_email, usu_clave) values(?,?,?)";
         const [result] = await pool.query(query1, [usuario, email, '1234']);
         return {id: result.id,
                 name: result.usu_nombre,
                 mayorista: result.usu_mayorista,
                 admin: result.usu_admin,
                 bloqueado: result.usu_bloqueado}; 
    };

    return {id: 0, name: "Publico", mayorista: 0, admin: 0, bloqueado: 0};
};


module.exports = {getUser, getUserAuth0};