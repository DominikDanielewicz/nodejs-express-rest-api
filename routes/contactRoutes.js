const express = require("express");
const contactController = require("../controllers/contactController");
const router = express.Router();
const { protect } = require("./../controllers/authController");

router.param("contactId", contactController.checkID);
router
  .route("/")
  .get(protect, contactController.get)
  .post(protect, contactController.create);

router
  .route("/:contactId")
  .get(protect, contactController.getById)
  .put(protect, contactController.update)
  .delete(protect, contactController.remove);

router
  .route("/:contactId/favorite")
  .patch(protect, contactController.updateStatus);

module.exports = router;
