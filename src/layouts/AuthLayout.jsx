import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-gradient-to-br from-primary to-blue-600">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-extrabold text-light mb-2">
            Welcome!
          </h1>
          <p className="text-lg text-light/80 font-medium">
            Snipr: Built to Shorten. Designed to Perform.
          </p>
        </div>
        <div className="mt-8 bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export const AuthRedirect = () => {
  return <Navigate to="/auth/signin" replace />;
};

export default AuthLayout;
