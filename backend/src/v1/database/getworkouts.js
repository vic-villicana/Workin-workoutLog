const db = require("../../../db")

const getWorkouts = async () => {
    const response = await db.query('SELECT * FROM exercises')

    return response
}

module.exports = {getWorkouts}