import { useCookies } from "react-cookie";

const checkLoggedIn = ():boolean => {
  const [cookie, setCookie] = useCookies();
  return false;
}

export { checkLoggedIn };
