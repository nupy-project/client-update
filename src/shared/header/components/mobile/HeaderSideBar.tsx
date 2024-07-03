/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, MouseEvent, ReactElement, useState } from 'react';
import { saveToLocalStorage } from 'src/shared/utils/utils.service';

import { IHeaderModalProps, IHeaderSideBarProps } from '../../interfaces/header.interface';

const HeaderSideBar: FC<IHeaderSideBarProps> = ({ setShowRegisterModal, setShowLoginModal, setOpenSidebar }): ReactElement => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const show = true;

  const toggleDropdown = (event: MouseEvent): void => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={'fixed left-0 top-0 z-40 h-screen w-full bg-black/40 transition-all duration-500 flex'}
      onClick={() => {
        if (setShowRegisterModal && setShowLoginModal && setOpenSidebar) {
          setShowRegisterModal((item: IHeaderModalProps) => ({ ...item, register: false }));
          setShowRegisterModal((item: IHeaderModalProps) => ({ ...item, login: false }));
          setOpenSidebar(false);
        }
      }}
    >
      <div
        className={`absolute top-0 z-20 flex h-screen w-[250px] flex-col items-start justify-start gap-4 bg-white p-6 ${
          show ? 'left-0' : '-left-[100vw]'
        }`}
      >
        <div className="z-2 sticky top-0 flex w-full flex-col items-start justify-start gap-6 bg-white">
          <div
            onClick={(event: MouseEvent) => {
              event.stopPropagation();
              if (setShowRegisterModal && setShowLoginModal && setOpenSidebar) {
                setShowRegisterModal((item: IHeaderModalProps) => ({ ...item, register: true }));
                setShowRegisterModal((item: IHeaderModalProps) => ({ ...item, login: false }));
                setOpenSidebar(false);
              }
            }}
            className="bg-sky-500 border-sky-500 cursor-pointer rounded border px-6 py-3 text-base font-semibold text-white transition-all duration-300"
          >
            Registrase Nupay
          </div>
          <div
            onClick={(event: MouseEvent) => {
              event.stopPropagation();
              if (setShowRegisterModal && setShowLoginModal && setOpenSidebar) {
                setOpenSidebar(false);
                setShowRegisterModal((item: IHeaderModalProps) => ({ ...item, register: true }));
                setShowRegisterModal((item: IHeaderModalProps) => ({ ...item, login: false }));
                saveToLocalStorage('user', JSON.stringify(true));
              }
            }}
            className="cursor-pointer text-base font-medium text-gray-400"
          >
            Contacta un asesor
          </div>
          <div
            onClick={(event: MouseEvent) => {
              event.stopPropagation();
              if (setShowRegisterModal && setShowLoginModal && setOpenSidebar) {
                setShowRegisterModal((item: IHeaderModalProps) => ({ ...item, register: false }));
                setShowRegisterModal((item: IHeaderModalProps) => ({ ...item, login: true }));
                setOpenSidebar(false);
              }
            }}
            className="cursor-pointer text-base font-medium text-gray-400"
          >
            Ingresar
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSideBar;
