import { FormLogin } from '../components/form/formLogin';

export function LoginPage() {
    let template = (
        <>
            <main className="page-content page-content--form">
                <FormLogin></FormLogin>
            </main>
        </>
    );
    return template;
}
export default LoginPage;
