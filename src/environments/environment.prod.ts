let base_url = 'http://localhost:1337';

export const environment = {
  production: true,
  addNewProduct: base_url + '/invoice/add',
  getAllProduct: base_url + '/invoice/read',
  getProductById: base_url + '/invoice/read',
  updateProductById: base_url + '/invoice/update',
  deleteProductById: base_url + '/invoice/delete',
};
