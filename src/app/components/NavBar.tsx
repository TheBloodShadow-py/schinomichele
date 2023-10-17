import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <header className="sticky top-0 left-0 w-full">
        <div className=" bg-gray-200 py-3 px-4 text-white text-sm hidden md:block ">
          <div className="container my-0 mx-auto transition-all">
            <div className="flex gap-4 items-center text-slate-600">
              <span>Via Napoli 333/C, 70123, Bari</span>
              <span>p.iva 03294700723</span>
              <span>info@schinomichele.it </span>
            </div>
          </div>
        </div>
        <div className=" bg-white  drop-shadow-lg py-5 px-4 ">
          <div className="container my-0 mx-auto transition-all">
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center">
                <h1 className="text-lg font-bold ">Schino Michele & C. S.N.C.</h1>
                <span className="text-gray-600 text-sm">di Girolamo e Stefano Schino</span>
              </div>
              <div>
                <div className="lg:hidden">
                  <FontAwesomeIcon icon={faBars} className="text-xl text-slate-600 cursor-pointer" />
                </div>
                <ul className="hidden lg:flex gap-5 xl:gap-6 items-center text-gray-500 text-md ">
                  <li className="p-2">
                    <Link href="/" className="text-teal-300 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2">
                    <span>MARCHI PRINCIPALI</span>
                    <div className="hidden lg:block translate-y-[0.12em] ">
                      <FontAwesomeIcon icon={faAngleDown} className=" cursor-pointer" />
                    </div>
                  </li>
                  <li className="flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2">
                    <span>PRODOTTI</span>
                    <div className="hidden lg:block translate-y-[0.12em]">
                      <FontAwesomeIcon icon={faAngleDown} className=" cursor-pointer" />
                    </div>
                  </li>
                  <li className="flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2">
                    <Link href="/staff">STAFF</Link>
                  </li>
                  <li className="flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2">
                    <Link href="#">DOCUMENTAZIONE</Link>
                  </li>
                  <li className="flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2">
                    <Link href="#">CONTATTI</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
