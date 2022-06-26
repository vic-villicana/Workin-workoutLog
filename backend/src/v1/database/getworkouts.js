const db = require("../../../db")

const getWorkouts = async () => {
    const response = await db.query('SELECT * FROM routines')

    return response
}

module.exports = {getWorkouts}