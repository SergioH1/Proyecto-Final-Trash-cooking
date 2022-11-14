import { FormRegister } from '../components/form/form.register';

export function RegisterPage() {
  let template = (
    <>
      <main className="page-content page-content--form">
        <FormRegister></FormRegister>
      </main>
    </>
  );
  return template;
}
export default RegisterPage;
