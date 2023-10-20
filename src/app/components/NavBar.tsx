"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

export default function NavBar() {
  const pathname = usePathname().slice(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CacheProvider>
        <ChakraProvider>
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
                      <Button onClick={onOpen}>
                        <FontAwesomeIcon icon={faBars} className="text-xl text-slate-600 cursor-pointer" />
                      </Button>
                    </div>
                    <ul className="hidden lg:flex gap-4 xl:gap-6 items-center text-gray-500 text-md ">
                      <li
                        className={`'flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2 cursor-pointer' ${
                          pathname === "" ? "text-teal-300" : ""
                        }`}
                      >
                        <Link href="/">Home</Link>
                      </li>
                      <li className=" p-2  ">
                        <Popover>
                          <PopoverTrigger>
                            <div className="flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 cursor-pointer">
                              <span>MARCHI PRINCIPALI</span>
                              <div className="hidden lg:block translate-y-[0.12em] ">
                                <FontAwesomeIcon icon={faAngleDown} className=" cursor-pointer" />
                              </div>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverBody>
                              <ul className="flex flex-col gap-4">
                                <li className="hover:text-teal-400 transition-colors duration-300"><Link href="#">Molykote</Link></li>
                                <li className="hover:text-teal-400 transition-colors duration-300"><Link href="#">PetroCanada</Link></li>
                                <li className="hover:text-teal-400 transition-colors duration-300"><Link href="#">Condat</Link></li>
                                <li className="hover:text-teal-400 transition-colors duration-300"><Link href="#">Araldite</Link></li>
                                <li className="hover:text-teal-400 transition-colors duration-300"><Link href="#">Superbond</Link></li>
                                <li className="hover:text-teal-400 transition-colors duration-300"><Link href="#">Electrolube</Link></li>
                                <li className="hover:text-teal-400 transition-colors duration-300"><Link href="#">Dowsil</Link></li>
                              </ul>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </li>
                      <li className=" p-2  ">
                        <Popover>
                          <PopoverTrigger>
                            <div className="flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 cursor-pointer">
                              <span>PRODOTTI</span>
                              <div className="hidden lg:block translate-y-[0.12em] ">
                                <FontAwesomeIcon icon={faAngleDown} className=" cursor-pointer" />
                              </div>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverBody>
                              <ul className="flex flex-col gap-4">
                                <li className="hover:text-teal-400 transition-colors duration-300"><Link href="#">Molykote</Link></li>
                                <li className="hover:text-teal-400 transition-colors duration-300"><Link href="#">PetroCanada</Link></li>
                                <li className="hover:text-teal-400 transition-colors duration-300"><Link href="#">Altri prodotti...</Link></li>
                              </ul>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </li>
                      <li
                        className={`'flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2 cursor-pointer' ${
                          pathname === "staff" ? "text-teal-300" : ""
                        }`}
                      >
                        <Link href="/staff"> STAFF</Link>
                      </li>
                      <li
                        className={`'flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2 cursor-pointer' ${
                          pathname === "documentation" ? "text-teal-300" : ""
                        }`}
                      >
                        <Link href="/documentazione">DOCUMENTAZIONE</Link>
                      </li>
                      <li className="flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2">
                        <Link
                          href="/contatti"
                          className={`'flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2 cursor-pointer' ${
                            pathname === "contacts" ? "text-teal-300" : ""
                          }`}
                        >
                          CONTATTI
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Drawer isOpen={isOpen} onClose={onClose} size={"full"}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Navigation Menù</DrawerHeader>

              <DrawerBody>
                <ul>
                  <ul className=":flex flex-col gap-4 xl:gap-6 items-center text-gray-500 text-md ">
                    <li
                      className={`'flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2 cursor-pointer' ${
                        pathname === "" ? "text-teal-300" : ""
                      }`}
                    >
                      <Link href="/">Home</Link>
                    </li>
                    <li className="flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2 cursor-pointer">
                      <span>MARCHI PRINCIPALI</span>
                      <div className="translate-y-[0.12em] ">
                        <FontAwesomeIcon icon={faAngleDown} className=" cursor-pointer" />
                      </div>
                    </li>
                    <li className="flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2 cursor-pointer">
                      <span>PRODOTTI</span>
                      <div className="translate-y-[0.12em]">
                        <FontAwesomeIcon icon={faAngleDown} className=" cursor-pointer" />
                      </div>
                    </li>
                    <li
                      className={`'flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2 cursor-pointer' ${
                        pathname === "staff" ? "text-teal-300" : ""
                      }`}
                    >
                      <Link href="/staff"> STAFF</Link>
                    </li>
                    <li
                      className={`'flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2 cursor-pointer' ${
                        pathname === "documentation" ? "text-teal-300" : ""
                      }`}
                    >
                      <Link href="/documentation">DOCUMENTAZIONE</Link>
                    </li>
                    <li
                      className={`'flex gap-2 items-center hover:text-teal-300 transition-colors duration-300 p-2 cursor-pointer' ${
                        pathname === "contacts" ? "text-teal-300" : ""
                      }`}
                    >
                      <Link href="/contacts">CONTATTI</Link>
                    </li>
                  </ul>
                </ul>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
