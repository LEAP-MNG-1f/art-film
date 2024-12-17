import { UserProfile } from "./UserProfile";

export const Header = () => {
  return (
    <div className="fixed w-full py-5 bg-white border border-b-2">
      <div className="">
        <UserProfile />
      </div>
    </div>
  );
};
