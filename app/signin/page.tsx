import SignIn from "@/components/sign-in";
import { auth } from "../lib/auth";
import SignOut from "@/components/SignOut";

const SignInPage = async () => {
  const user = await auth();

  return <div>{!user?.user ? <SignIn /> : <SignOut />}</div>;
};

export default SignInPage;
