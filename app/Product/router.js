const router = require("express").Router();
const multer = require("multer");

const controller = require("./controller");

router.get("/product", controller.listProduct);
router.get("/product/:id", controller.singleProduct);
router.post("/product", multer().none(), controller.createProduct);
router.put("/product/:id", multer().none(), controller.updateProduct);
router.delete("/product/:id", controller.deleteProduct);

module.exports = router;
