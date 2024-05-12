import { useNavigate } from "react-router-dom";
import logo from "../../assets/login/logo.svg";
import logout_icon from "../../assets/logo_out.svg";

export default function Header() {
  const navigate = useNavigate();
  function handleLogOut() {
    navigate("/");
    sessionStorage.removeItem("token");
  }
  return (
    <div className="flex h-10 items-center justify-between border-b border-border_color pb-5">
      <span className="flex items-center gap-2">
        <img src={logo} />
        <span className="text-lg font-bold">DoDo</span>
      </span>
      <img
        className="cursor-pointer"
        title="LogOut"
        onClick={handleLogOut}
        src={logout_icon}
      />
    </div>
  );
}
