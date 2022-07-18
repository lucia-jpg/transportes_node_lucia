var pool = require('./bd'); /*llama a la base de datos */

async function getNovedades(){ /*función para traer las novedades - es asincrónico porque no sabemos cuando lo va a a traer */
    var query = 'select * from novedades'; /*EL PEDIDO DE LO QUE QUIERO - se pide como en MySQL con los comandos */
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj){
    try{
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query,[obj]);
        return rows;

    }catch(error){
        console.log(error);
        throw error;
    }
}

async function deleteNovedadByID(id){
    var query = 'delete from novedades where id= ?';
    var rows = await pool.query(query,[id]);
    return rows;
}

async function getNovedadesByID(id){
var query = 'select * from novedades where id= ?';
var rows = await pool.query(query, [id]);
return rows[0];
}

async function modificarNovedadByID(obj,id){
    try{
        var query = 'update novedades set ? where id=?'
        var rows = await pool.query(query,[obj, id]);
        return rows;

    }catch(error){
        throw error;
    }
}


module.exports = { getNovedades, insertNovedades, deleteNovedadByID, getNovedadesByID, modificarNovedadByID }