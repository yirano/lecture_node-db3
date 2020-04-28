const express = require("express")
const postModel = require("./post-model")

const router = express.Router({
	// this allows url parameters to pass down from the parent router
	mergeParams: true,
})

router.get("/", async (req, res, next) => {
	try {
		res.json(await postModel.findByUserId(req.params.id))
	} catch (err) {
		next(err)
	}
})

module.exports = router