var config = require('./dbconfig');

const sql = require('mssql');

async function getCategoria(){
    try{
        let pool = await sql.connect(config);
        let categoria = await pool.request().query("SELECT * FROM dbo.categoria");
        return categoria.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getCategoria_x_id(cat_id){
    try{
        let pool = await sql.connect(config);
        let categoria = await pool.request()
        .input('input_parameter',sql.Int,cat_id)
        .query("SELECT * FROM dbo.categoria WHERE id=@input_parameter");
        return categoria.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function insertCategoria(categoria){
    try{
        let pool = await sql.connect(config);
        let insetcategorias = await pool.request()
        .input('cat_nombre',sql.VarChar,categoria.cat_nombre)
        .input('cat_obser',sql.VarChar,categoria.cat_obser)
        .execute("SP_I_Categoria");
        return insetcategorias.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function updateCategoria(categoria){
    try{
        let pool = await sql.connect(config);
        let updatecategorias = await pool.request()
        .input('cat_id',sql.Int,categoria.cat_id)
        .input('cat_nombre',sql.VarChar,categoria.cat_nombre)
        .input('cat_obser',sql.VarChar,categoria.cat_obser)
        .execute("SP_U_Categoria");
        return updatectegorias.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

module.exports ={
    getCategoria : getCategoria, 
    getCategoria_x_id : getCategoria_x_id,
    insertCategoria : insertCategoria,
    updateCategoria:updateCategoria
}