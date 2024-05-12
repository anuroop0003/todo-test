import LoginCoverImage from "./LoginCoverImage";
import LoginForm from "./LoginForm";
export default function Login() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <LoginForm />
      <LoginCoverImage />
    </div>
  );
}
