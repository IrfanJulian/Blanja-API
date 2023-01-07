const pool = require('../configs/db')

const getData = () =>{
    return pool.query(`SELECT * FROM users`)
}

const findByEmail = (email) =>{
    return pool.query(`SELECT * FROM users WHERE email='${email}'`)
}

const getDataById = (id) => {
    return pool.query(`SELECT * FROM users WHERE id='${id}'`)
}

const insertData = (data) =>{
    const { id, name, email, password, store_name, phone_number, role} = data
    return pool.query(`INSERT INTO users(id, name, email, password, store_name, phone_number, role)VALUES('${id}', '${name}', '${email}', '${password}', '${store_name}', '${phone_number}', '${role}')`)
}

const updateData = (id, data) =>{
    const { name, email, birth, phone_number, photo, store_description, store_name } = data
    return pool.query(`UPDATE users SET name='${name}', email='${email}', birth='${birth}', phone_number='${phone_number}', photo='${photo}', store_description='${store_description}', store_name='${store_name}' WHERE id='${id}'`)
}

const deleteData = (id) =>{
    return pool.query(`DELETE FROM users WHERE id='${id}'`)
}

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData,
    findByEmail,
    getDataById
}