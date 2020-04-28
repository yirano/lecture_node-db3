const db = require("../data/config")

function findByUserId(userId) {
	return db("posts as p") // FROM posts AS p
		.leftJoin("users as u", "u.id", "p.user_id") // LEFT JOIN users AS u ON u.id = p.user_id
		.where("user_id", userId) // WHERE user_id = ?
		.select("p.id", "p.contents", "u.username") // SELECT p.id, p.contents, u.username
}

module.exports = {
	findByUserId,
}
