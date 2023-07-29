const express = require("express");
const router = express.Router();
// user-repository
// const {UserRepo} = require("../../database/repository/user");
// const UR = new UserRepo();
// console.log(UR)

// user-service
const { UserService } = require("../../services/user");
const US = new UserService();

// /user -> TO GET ALL USERS
router.get("/", async (req, res) => {
  try {
    // success: {success: true, data: {}}
    // Failure: {success: false, data: e}
    const data = await US.GetAllUsers();
    console.log(data);
    if (data.success) {
      return res.status(200).json(data.data);
    }
    return res.status(500).json(data.data);
  } catch (e) {
    console.log("Error while handling get all users", e);
    return res.status(500).json({ success: false, data: e });
  }
});

module.exports = router;
