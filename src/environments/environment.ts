let base_url = 'http://localhost:1337';

export const environment = {
  production: false,
  addNewProduct: base_url + '/invoice/add',
  getAllProduct: base_url + '/invoice/read',
  getProductById: base_url + '/invoice/read',
  updateProductById: base_url + '/invoice/update',
  deleteProductById: base_url + '/invoice/delete',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
