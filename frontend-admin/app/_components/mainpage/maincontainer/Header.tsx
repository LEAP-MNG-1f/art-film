import { UserProfile } from "./UserProfile";

export const Header = () => {
  return (
    <div className="fixed w-full py-5 bg-white">
      <div className="">
        <UserProfile />
      </div>
    </div>
  );
};
