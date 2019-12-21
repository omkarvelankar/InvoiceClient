let base_url = 'http://localhost:1337';

export const environment = {
  production: true,
  addNewInvoice: base_url + '/invoice/add',
  getAllInvoice: base_url + '/invoice/read',
  getAllVender: base_url + '/invoice/venders',
  getVenderById: base_url + '/invoice/read',
  updateVenderById:  base_url + '/invoice/update',
  DeleteVenderById: base_url + '/invoice/delete',
  getCommonData: base_url + '/invoice/readcd',
};
