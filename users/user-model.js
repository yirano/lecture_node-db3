const db = require("../data/config")

function findPostsByUserID(userId) {
	return db("posts as p")
		// translates to `INNER JOIN users AS u ON u.id = p.user_id`
		.innerJoin("users as u", "u.id", "p.user_id")
		.where("p.user_id", userId)
		.select("p.id", "p.contents", "u.username")
}

function findPostByID(userId, postId) {
	return db("posts as p")
		.innerJoin("users as u", "u.id", "p.user_id")
		.where("p.user_id", userId)
		.where("p.id", postId)
		.first("p.id", "p.contents", "u.username")
}

module.exports = {
	findPostsByUserID,
	findPostByID,
}
