const Product = require("../Product/model");

module.exports = {
  createProduct: async (req, res, next) => {
    const { name, price, description, stock, status } = req.body;
    try {
      const product = await Product.create({
        name: name,
        description: description,
        price: price,
        stock: stock,
        status: status,
      });
      if (product) {
        res.send({
          status: "success",
          message: "tambah product success",
          data: product,
        });
      } else {
        res.send({
          status: "warning",
          message: "tambah product gagal",
        });
      }
    } catch (error) {
      res.send({
        status: "error",
        message: error.message,
      });
    }
  },
  listProduct: async (req, res, next) => {
    const products = await Product.find();
    if (products.length > 0) {
      res.send({
        status: "success",
        message: "list products ditemukan",
        data: products,
      });
    } else {
      res.send({
        status: "success",
        message: "list products tidak ditemukan",
      });
    }
  },
  singleProduct: async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send({
        status: "success",
        message: "single product ditemukan",
        data: product,
      });
    } else {
      res.send({
        status: "warning",
        message: "single product tidak ditemukan",
      });
    }
  },
  updateProduct: async (req, res, next) => {
    const { name, description, price, stock, status } = req.body;
    try {
      const result = await Product.updateOne(
        { _id: req.params.id },
        {
          name: name,
          description: description,
          price: price,
          stock: stock,
          status: status,
        },
        { runValidators: true }
      );
      if (result.ok == 1) {
        res.send({
          status: "success",
          message: "update product success",
          data: result,
        });
      } else {
        res.send({
          status: "warning",
          message: "update product gagal",
          data: result,
        });
      }
    } catch (error) {
      res.send({
        status: "error",
        message: error.message,
      });
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      const result = await Product.deleteOne({ _id: req.params.id });
      if (result.deletedCount == 1) {
        res.send({
          status: "success",
          message: "delete product success",
          data: result,
        });
      } else {
        res.send({
          status: "warning",
          message: "delete product gagal",
          data: result,
        });
      }
    } catch (error) {
      res.send({
        status: "error",
        message: error.message,
      });
    }
  },
};
