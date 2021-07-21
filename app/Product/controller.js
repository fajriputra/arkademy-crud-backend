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
          message: "Berhasil membuat produk",
          data: product,
        });
      } else {
        res.send({
          status: "warning",
          message: "Gagal membuat produk",
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
        message: "Produk ditemukan",
        data: products,
      });
    } else {
      res.send({
        status: "success",
        message: "Produk tidak ditemukan",
      });
    }
  },
  singleProduct: async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send({
        status: "success",
        message: "Produk ditemukan",
        data: product,
      });
    } else {
      res.send({
        status: "warning",
        message: "Produk tidak ditemukan",
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
          message: "Produk berhasil diupdate",
          data: result,
        });
      } else {
        res.send({
          status: "warning",
          message: "Produk gagal diupdate",
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
          message: "Produk berhasil dihapus",
          data: result,
        });
      } else {
        res.send({
          status: "warning",
          message: "Produk gagal dihapus",
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
