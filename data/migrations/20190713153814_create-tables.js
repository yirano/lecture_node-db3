exports.up = async function(knex) {
	await knex.schema.createTable("users", (tbl) => {
		tbl.increments()
		tbl.text("username", 128)
			.unique()
			.notNullable()
	})
	
	await knex.schema.createTable("posts", (tbl) => {
		tbl.increments()
		tbl.text("contents")
		tbl.integer("user_id")
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("users")
			.onUpdate("CASCADE")
			.onDelete("CASCADE")
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("posts")
	await knex.schema.dropTableIfExists("users")
}
