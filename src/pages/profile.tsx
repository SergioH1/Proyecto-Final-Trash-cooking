import { FormUpdate } from '../components/form/form.update';
import './profile.css';
export function ProfilePage() {
  let template = (
    <>
      <main className="page-content page-content--form">
        <FormUpdate></FormUpdate>
      </main>
      <div className="">
        <h2> Mis Recetas Favoritas </h2>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
  return template;
}
export default ProfilePage;
