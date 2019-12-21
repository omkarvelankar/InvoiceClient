let base_url = 'http://localhost:1337';

export const environment = {
  production: false,
  addNewInvoice: base_url + '/invoice/add',
  getAllInvoice: base_url + '/invoice/read',
  getAllVender: base_url + '/invoice/venders',
  getVenderById: base_url + '/invoice/read',
  updateVenderById:  base_url + '/invoice/update',
  DeleteVenderById: base_url + '/invoice/delete',
  getCommonData: base_url + '/invoice/readcd',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
