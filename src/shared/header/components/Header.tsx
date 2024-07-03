import { FC, lazy, LazyExoticComponent, ReactElement, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IButtonProps } from 'src/shared/shared.interface';

import LoginModal from '../../../features/auth/components/Login';
import RegisterModal from '../../../features/auth/components/Register';
import { IHeader, IHeaderModalProps } from '../interfaces/header.interface';
import HeaderSideBar from './mobile/HeaderSideBar';

const Button: LazyExoticComponent<FC<IButtonProps>> = lazy(() => import('../../button/Button'));

const Header: FC<IHeader> = ({ navClass }): ReactElement => {
  const [showModal, setShowModal] = useState<IHeaderModalProps>({
    login: false,
    register: false,
    forgotPassword: false
  });
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <>
      {showModal.login && (
        <LoginModal
          onClose={() => setShowModal((item: IHeaderModalProps) => ({ ...item, login: false }))}
          onToggle={() => setShowModal((item: IHeaderModalProps) => ({ ...item, login: false, register: true }))}
          onTogglePassword={() => setShowModal((item: IHeaderModalProps) => ({ ...item, login: false, forgotPassword: true }))}
        />
      )}
      {showModal.register && (
        <RegisterModal
          onClose={() => setShowModal((item: IHeaderModalProps) => ({ ...item, register: false }))}
          onToggle={() => setShowModal((item: IHeaderModalProps) => ({ ...item, login: true, register: false }))}
        />
      )}
      {/* {showModal.forgotPassword && (
        <ForgotPasswordModal
          onClose={() => setShowModal((item: IHeaderModalProps) => ({ ...item, forgotPassword: false }))}
          onToggle={() => setShowModal((item: IHeaderModalProps) => ({ ...item, login: true, forgotPassword: false }))}
        />
      )} */}
      {openSidebar && (
        <HeaderSideBar setShowLoginModal={setShowModal} setShowRegisterModal={setShowModal} setOpenSidebar={setOpenSidebar} />
      )}
      <header>
        <nav className={navClass}>
          <div className="m-auto px-6 xl:container md:px-12 lg:px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 md:gap-0 md:py-3 lg:py-5">
              <div className="flex w-full items-center justify-between lg:w-auto">
                <Link to="/" className="relative z-10 cursor-pointer text-3xl font-semibold text-white">
                  FINANCE
                </Link>
                <div className="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden">
                  <Button
                    className="m-auto h-0.5 w-5 rounded transition duration-300"
                    onClick={() => setOpenSidebar(!openSidebar)}
                    label={<>{openSidebar ? <FaTimes className="h-6 w-6 text-sky-500" /> : <FaBars className="h-6 w-6 text-sky-500" />}</>}
                  />
                </div>
              </div>
              <div className="navmenu mb-16 hidden w-full cursor-pointer flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-7/12 lg:space-y-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                <div className="border-primary/10 -ml-1 flex w-full flex-col space-y-2 dark:border-gray-700 sm:flex-row md:w-max lg:space-y-0 lg:border-l">
                  <Link
                    to="/productos"
                    className="relative ml-auto flex h-9 items-center justify-center before:absolute
                          before:inset-0 before:rounded-full before:transition before:duration-300
                          hover:before:scale-105 focus:before:bg-sky-600/10 active:duration-75 active:before:scale-95
                          dark:focus:before:bg-sky-400/10 sm:px-6"
                  >
                    <span className="relative text-sm font-semibold text-gray-600 dark:text-gray-300">PRODUCTOS</span>
                  </Link>
                  <Link
                    to="/tarifas"
                    className="relative ml-auto flex h-9 items-center justify-center before:absolute
                          before:inset-0 before:rounded-full before:transition before:duration-300
                          hover:before:scale-105 focus:before:bg-sky-600/10 active:duration-75 active:before:scale-95
                          dark:focus:before:bg-sky-400/10 sm:px-6"
                  >
                    <span className="relative text-sm font-semibold text-gray-600 dark:text-gray-300">TARIFAS</span>
                  </Link>
                  <Link
                    to="/soluciones"
                    className="relative ml-auto flex h-9 items-center justify-center before:absolute
                          before:inset-0 before:rounded-full before:transition before:duration-300
                          hover:before:scale-105 focus:before:bg-sky-600/10 active:duration-75 active:before:scale-95
                          dark:focus:before:bg-sky-400/10 sm:px-6"
                  >
                    <span className="relative text-sm font-semibold text-gray-600 dark:text-gray-300">SOLUCIONES</span>
                  </Link>
                  <Link
                    to="/soporte"
                    className="relative ml-auto flex h-9 items-center justify-center before:absolute
                          before:inset-0 before:rounded-full before:transition before:duration-300
                          hover:before:scale-105 focus:before:bg-sky-600/10 active:duration-75 active:before:scale-95
                          dark:focus:before:bg-sky-400/10 sm:px-6"
                  >
                    <span className="relative text-sm font-semibold text-gray-600 dark:text-gray-300">SOPORTE</span>
                  </Link>
                  <div
                    onClick={() => setShowModal((item: IHeaderModalProps) => ({ ...item, login: true }))}
                    className="relative ml-auto flex h-9 items-center justify-center rounded-full bg-sky-500
                            text-white font-bold sm:px-6 hover:bg-sky-400"
                  >
                    <span className="relative text-sm font-semibold text-white">Iniciar Session</span>
                  </div>
                  {/* <div
                    onClick={() => setShowModal((item: IHeaderModalProps) => ({ ...item, register: true }))}
                    className="relative ml-auto flex h-9 items-center justify-center rounded-full bg-sky-500
                            text-white font-bold sm:px-6 hover:bg-sky-400"
                  >
                    <span className="relative text-sm font-semibold text-white">REGISTER</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
