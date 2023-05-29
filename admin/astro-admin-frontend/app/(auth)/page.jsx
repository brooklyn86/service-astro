"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Social from "@/components/partials/auth/social";
import LoginForm from "@/components/partials/auth//login-form";
import useDarkMode from "@/hooks/useDarkMode";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login3 = () => {
  const [isDark] = useDarkMode();
  const { data:session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if(session)
      router.push('/dashboard')
  }, session);
  return (
    <>
      <div
        className="loginwrapper bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(/assets/images/all-img/page-bg.png)`,
        }}
      >
        <div className="lg-inner-column">
          <div className="left-columns lg:w-1/2 lg:block hidden">
            <div className="logo-box-3">
              <Link href="/" className="">
                <img src="/assets/images/logo/logo-white.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
            <div className="auth-box-3">
              <div className="mobile-logo text-center mb-6 lg:hidden block">
                <Link href="/">
                  <img
                    src={
                      isDark
                        ? "/assets/images/logo/logo-white.svg"
                        : "/assets/images/logo/logo.svg"
                    }
                    alt=""
                    className="mx-auto"
                  />
                </Link>
              </div>
              <div className="text-center 2xl:mb-10 mb-5">
                <h4 className="font-medium">Entrar</h4>
                <div className="text-slate-500 dark:text-slate-400 text-base">
                  Entre na sua conta para começar a usar o Astro Admin
                </div>
              </div>
              <LoginForm />
              <div className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                <div className=" absolute inline-block  bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal ">
                  Ou continuar com
                </div>
              </div>
              <div className="max-w-[242px] mx-auto mt-8 w-full">
                <Social />
              </div>
            </div>
          </div>
          <div className="auth-footer3 text-white py-5 px-5 text-xl w-full">
            Unlock your Project performance
          </div>
        </div>
      </div>
    </>
  );
};

export default Login3;
