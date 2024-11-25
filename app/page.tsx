import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await auth();

  if (!user?.user) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-neutral-content">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100">
        <div className="card-body items-center text-center">
          <h1 className="text-4xl font-bold">
            Welcome,{" "}
            <span className="text-primary-focus">
              {user.user.name || "User"}
            </span>
            !
          </h1>
          <p className="text-lg mt-2">
            <span>Your email: </span>
            <span className="font-medium text-secondary-focus">
              {user.user.email}
            </span>
          </p>
          <div className="mt-6">
            <button className="btn btn-primary btn-wide animate-pulse">
              Explore Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
