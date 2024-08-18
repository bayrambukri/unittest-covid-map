import { FaVirusCovid } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import { TbVaccine } from "react-icons/tb";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki veriyi al
    const text = e.target[0].value;

    //kullanıcyı detay sayfasına yönlendir
    navigate(`detail?q=${text}`);
  };

  return (
    <header className="flex bg-white-500 text-black p-5 md:px-20 justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <FaVirusCovid className="text-red-500 text-2xl" />
        <h1>COVID İstatistikleri</h1>
      </Link>

      <Form handleSubmit={handleSubmit} />

      <div className="flex items-center gap-3 max-md:hidden">
        <p className="flex flex-col text-sm">
          <span>Günlük Aşılanan Sayısı</span>
          <span className="text-,">(47,000)</span>
        </p>

        <TbVaccine className="text-2xl text-red-600" />
      </div>
    </header>
  );
};

export default Header;
