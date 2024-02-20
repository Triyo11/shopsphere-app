import CategoryEtalase from "../components/macro/CategoryEtalase";
import GeneralEtalase from "../components/macro/GeneralEtalase";
import LinkCategoryProduct from "../components/micro/LinkCategoryProduct";
import Header from "../components/macro/Header";
import Footer from "../components/macro/Footer";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const category = [
    "Electronics",
    "Fashion",
    "Grocery",
    "Home",
    "Beauty",
    "Tools",
    "Toys",
  ];

  const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;

  if (isMediumScreen) {
    return (
      <>
        <Header />
        <div className="bg-color-light flex flex-col items-center w-full max-h-max pt-3 pb-24">
          <div className="menu-category">
            {category.map((category, index) => (
              <LinkCategoryProduct key={index} category={category} />
            ))}
          </div>
          <GeneralEtalase />
          {category.map((category, index) => (
            <CategoryEtalase key={index} categoryName={category} />
          ))}
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className="bg-color-light flex flex-col items-center w-full max-h-max pt-3">
          <Menu as="div" className="relative inline-block text-center">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Categories
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-full rounded-md bg-color-light shadow-lg ring-1 ring-black focus:outline-none">
                <div className="py-1">
                  {
                    category.map((category, index) => (
                      <Menu.Item key={index}>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {category}
                        </a>
                      )}
                    </Menu.Item>
                    ))
                  }
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <GeneralEtalase />
          {category.map((category, index) => (
            <CategoryEtalase key={index} categoryName={category} />
          ))}
        </div>
        <Footer />
      </>
    );
  }
};

export default Home;
