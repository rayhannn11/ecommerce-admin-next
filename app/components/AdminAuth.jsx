'use client';

import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';
import { BsGithub, BsGoogle } from 'react-icons/bs';

const AdminAuth = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/admin/products');
    }
  }, [session?.status, router]);

  // HandleSubmit
  function loginAdmin(ev) {
    ev.preventDefault();

    signIn('google', {
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        toast.error('Invalid Credentials');
      }

      if (callback?.ok && !callback?.error) {
        toast.success('Logged In!');
      }
    });
  }

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white text-black border  px-4 py-8  sm:rounded-lg sm:px-10'>
        <form className='space-y-2 flex flex-col' onSubmit={loginAdmin}>
          <div>
            <button
              type='submit'
              className='mt-4 p-3 w-full font-bold rounded-md text-white bg-[#FE6A16] flex justify-center items-center gap-4'
            >
              <BsGoogle /> Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAuth;
