import icon from "../../assets/images/logo.svg";

const AdminNav = () => {
  return (
    <nav className="sticky top-0 left-0 flex justify-between items-center px-4">
      <div>
        <img className="w-[80px]" src={icon} alt="" />
      </div>
      <div>
        <input
          type="text"
          className="rounded-xl py-2 px-5 outline-none"
          placeholder="Search..."
        />
      </div>
    </nav>
  );
};

export default AdminNav;
