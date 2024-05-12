import Cover_Image from "../../assets/login/login_cover.svg";

export default function LoginCoverImage() {
  return (
    <div className="h-screen p-5 hidden md:block">
      <img
        className="h-full w-full object-cover rounded-3xl"
        src={Cover_Image}
      />
    </div>
  );
}
