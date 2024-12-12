import { Login } from "./Login";
import { LoginLogoSide } from "./LoginLogoSide";

export const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <LoginLogoSide />
      <Login />
    </div>
  );
};
