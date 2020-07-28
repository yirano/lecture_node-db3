const db = require('../data/config')

function findPostsByUserId(userId) {
  return db('posts as p')
    // translates to INNER JOIN users AS u ON u.id=p.user_id
    .innerJoin('users as u', 'u.id', 'p.user_id')
    .where("p.user_id", userId)
    .select('p.id', 'p.contents', 'u.username')
}

module.exports = {
  findPostsByUserId,
}