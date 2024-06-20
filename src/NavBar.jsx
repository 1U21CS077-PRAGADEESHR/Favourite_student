import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className=" flex  justify-evenly bg-pink-400 py-4 ">
      <Link className="underline text-2xl" to="/student">Student List</Link>
      <Link className="underline text-2xl" to="/addstd">Favourite Students</Link>
    </nav>
  );
}
