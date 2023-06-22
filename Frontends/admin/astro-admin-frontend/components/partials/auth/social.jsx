import { signIn } from "next-auth/react";
const Social = () => {
  return (
    <>
      <ul className="flex">
        <li className="flex-1">
          <a
            href="#"
            className="inline-flex h-10 w-full bg-[#EA4335] text-white text-2xl flex-row items-center justify-center rounded-full"
            onClick={(e) => {
              e.preventDefault();
              signIn("google");
            }}
          >
            <img className="inline-flex p-2" src="/assets/images/icon/gp.svg" alt="" />
            <span className="inline-flex text-xs pr-3">Continue com o google</span>
          </a>
        </li>
      </ul>
      <ul className="flex">
        <li className="flex-1">
            <a
              href="#"
              className="inline-flex h-10 w-full bg-[#000000] text-white text-2xl flex-row items-center justify-center rounded-full"
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              <img className="inline-flex p-2" src="/assets/images/icon/gp.svg" alt="" />
              <span className="inline-flex text-xs pr-3">Continue com o GitHub</span>
            </a>
          </li>
      </ul>
    </>
  );
};

export default Social;
