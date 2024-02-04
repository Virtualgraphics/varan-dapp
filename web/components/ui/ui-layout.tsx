'use client';

import { WalletButton } from '../solana/solana-provider';
import * as React from 'react';
import { ReactNode, Suspense, useEffect, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AccountChecker } from '../account/account-ui';
import {
  ClusterChecker,
  ClusterUiSelect,
  ExplorerLink,
} from '../cluster/cluster-ui';
import toast, { Toaster } from 'react-hot-toast';

const pages: { label: string; path: string }[] = [
  
  { label: 'TREASURE HUNT', path: '/treasure' },
  { label: 'GAME', path: '/game' },
  { label: 'WEBTOON', path: '/webtoon' },
  { label: 'NFT', path: '/nft' },
  { label: 'ACCOUNT', path: '/account' },
  
];

export function UiLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="h-svh flex flex-col bg-gradient-to-b from-lime-800 to-lime-400">
      <div className="navbar bg-blue-900 text-neutral-content flex-col  md:flex-row space-y-8 md:space-y-0 p-4 font-Acme ">
        <div className="flex-1 ">
          <Link className="text-2xl" href="/">
          <Image
              className=""
              src="/varan_logo_500.png"
              alt="Logo"
              width={300}
              height={100}
            /></Link>
          <ul className="menu menu-horizontal px-1 space-x-2 ">
            {pages.map(({ label, path }) => (
              <li key={path}>
                <Link
                  className={pathname.startsWith(path) ? 'active' : ''}
                  href={path}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none space-x-2">
          <WalletButton />
          <ClusterUiSelect />
        </div>
      </div>
      <ClusterChecker>
        <AccountChecker />
      </ClusterChecker>
      <div className="flex-grow mx-4 lg:mx-auto">
        <Suspense
          fallback={
            <div className="text-center my-32">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          }
        >
          {children}
        </Suspense>
        <Toaster position="bottom-right" />
      </div>


      <footer className="footer footer-center p-4 bg-lime-800 text-base-content ">
        <aside>

        <h1 className='text-center text-yellow-200 text-lg font-lg my-4'>The Varandapp is powered by:</h1>
       
        <div className="w-full flex justify-center m-auto py-4 sm:text-center sm:mx-auto ">


          <div className='grid grid-cols-3 gap-16'>
         
         <div className='w-20 justify-items-end'>
   <Image
          className="justify-items-end"
          src="/vg_logoNEW_round.png"
          alt="Virtual Graphics"
          width={500}
          height={500}
          
        />
        </div>

        <div className='flex items-center w-40 justify-items-center'>
   <Image
          className=""
          src="/solana-logo.png"
          alt="Solana"
          width={2000}
          height={2000}
          
        />
        </div>

        <div className='flex items-center w-32'>
   <Image
          className=""
          src="/enDAPP_logo.svg"
          alt="dnDAPP"
          width={500}
          height={500}
          
        />
        </div>

          </div></div>
          <p className="text-white">
            All art and content © 2024 {' '}
            <a
              className="link hover:text-blue-300"
              href="https://www.virtual-graphics.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Virtual Graphics
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export function AppModal({
  children,
  title,
  hide,
  show,
  submit,
  submitDisabled,
  submitLabel,
}: {
  children: ReactNode;
  title: string;
  hide: () => void;
  show: boolean;
  submit?: () => void;
  submitDisabled?: boolean;
  submitLabel?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [show, dialogRef]);

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-box space-y-5">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <div className="modal-action">
          <div className="join space-x-2">
            {submit ? (
              <button
                className="btn btn-xs lg:btn-md btn-primary"
                onClick={submit}
                disabled={submitDisabled}
              >
                {submitLabel || 'Save'}
              </button>
            ) : null}
            <button onClick={hide} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function AppHero({
  children,
  title,
  subtitle,
}: {
  children?: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
}) {
  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          {typeof title === 'string' ? (
            <h1 className="text-5xl font-bold">{title}</h1>
          ) : (
            title
          )}
          {typeof subtitle === 'string' ? (
            <p className="py-6">{subtitle}</p>
          ) : (
            subtitle
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export function ellipsify(str = '', len = 4) {
  if (str.length > 30) {
    return (
      str.substring(0, len) + '..' + str.substring(str.length - len, str.length)
    );
  }
  return str;
}

export function useTransactionToast() {
  return (signature: string) => {
    toast.success(
      <div className={'text-center'}>
        <div className="text-lg">Transaction sent</div>
        <ExplorerLink
          path={`tx/${signature}`}
          label={'View Transaction'}
          className="btn btn-xs btn-primary"
        />
      </div>
    );
  };
}
