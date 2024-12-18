const home = () => '/';

const aboutUs = () => '/about';

const store= () => '/store';

const spa = () => '/spa';

const forgotPassword = () => '/forgot-password';

const UserManagement = () => '/User-management';
const invoices = () => '/invoices';
const invoice = (id: string) => invoices() + `/${id}`;
const settings = () => '/settings';
const publicInvoice = (invoiceId: string) => '/p' + invoice(invoiceId);

const routes = {
  home,
  aboutUs,
  store,
  spa,
  forgotPassword,
  UserManagement,
 
};

export default routes;
