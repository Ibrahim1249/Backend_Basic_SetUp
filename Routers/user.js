const express = require("express");
const router = express.Router();


const { handleAllUserDB, handleGetSingleUser, handleUpdateSingleUser, handleDeleteSingleUser, handleCreateUser } = require("../Controllers/user");

router.route("/").get(handleAllUserDB).post(handleCreateUser)

router.route("/:id").get(handleGetSingleUser).patch(handleUpdateSingleUser).delete(handleDeleteSingleUser)


module.exports = router;