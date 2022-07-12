import { FormLogin } from '../components/form/formLogin';

export function LoginPage() {
  let template = (
    <>
      <main className="container-main">
        <FormLogin></FormLogin>
      </main>
    </>
  );
  return template;
}
export default LoginPage;
