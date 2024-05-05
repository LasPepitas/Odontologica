import React from "react";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            {/* URL link con imagen */}
            <img
              className="h-12"
              src="https://seeklogo.com/images/F/family-dental-healt-logo-CF68B43664-seeklogo.com.png"
              alt="Family Dental Health Logo"
            />
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-black transition hover:text-[#0c8fae]"
                    href="#"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-[#0c8fae]"
                    href="#"
                  >
                    {" "}
                    Doctores{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-[#0c8fae]"
                    href="#"
                  >
                    {" "}
                    Servicios{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-[#0c8fae]"
                    href="#"
                  >
                    {" "}
                    Contacto{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-[#0c8fae] px-5 py-2.5 text-sm font-medium text-white shadow"
                href="#"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
