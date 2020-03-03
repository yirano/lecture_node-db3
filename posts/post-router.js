const express = require("express")
const postModel = require("./post-model")

const router = express.Router({
	// this allows url parameters to pass down from the parent router
	mergeParams: true,
})

router.get("/", async (req, res, next) => {
	try {
		const { id } = req.params
		const posts = await postModel.findByUserId(id)

		res.json(posts)
	} catch(err) {
		next(err)
	}
})

module.exports = router
