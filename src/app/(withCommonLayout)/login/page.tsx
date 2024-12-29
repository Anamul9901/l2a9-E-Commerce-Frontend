"use client";
import Loading from "@/src/components/UI/loading";
import { useLoginMutation } from "@/src/redux/features/auth/authApi";
import { setUser } from "@/src/redux/features/auth/authSlice";
import { useAppDispatch } from "@/src/redux/hooks";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [errorShow, setErrorShow] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loginUser, { isLoading, error }] = useLoginMutation();

  useEffect(() => {
    if (error) {
      setErrorShow(true);
    }
  }, [error]);

  useEffect(() => {
    if (errorShow && (error as any)?.data) {
      toast.error((error as any)?.data?.message);
    }
  }, [errorShow, error]);

  const handleCredentialSet = (email: string, password: string) => {
    setCredentials({ email, password });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const res = await loginUser(credentials).unwrap();
    if (res?.data) {
      toast.success(`${res?.message}`);
      const { email, name, id, role } = res?.data?.data;
      const finalUserData = { email, name, id, role };
      dispatch(setUser({ user: finalUserData, token: res?.data?.accessToken }));
      router?.push("/");
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {isLoading && <Loading />}

      <div className="bg-default-100 shadow-lg rounded-lg w-full max-w-md p-8 mx-4">
        <h3 className="text-3xl font-bold text-center text-default-700">
          Login to CookUp
        </h3>
        <p className="text-center text-default-800 mb-6">
          Welcome back! Let’s get started.
        </p>
        <div className="pb-4">
          <div className="flex items-center justify-between gap-1">
            <p
              onClick={() => handleCredentialSet("testuser@gmail.com", "Test@User")}
              className="bg-default-300 text-sm rounded-lg px-1 hover:cursor-pointer"
            >
              User credential
            </p>
            <p
              onClick={() =>
                handleCredentialSet("testvendor@gmail.com", "Test@Vendor")
              }
              className="bg-default-300 text-sm rounded-lg px-1 hover:cursor-pointer"
            >
              Vendor credential
            </p>
            <p
              onClick={() => handleCredentialSet("testadmin@gmail.com", "Test@Admin")}
              className="bg-default-300 text-sm rounded-lg px-1 hover:cursor-pointer"
            >
              Admin credential
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-default-800 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-default-800 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>
          <Button
            className="w-full rounded-md bg-gradient-to-r from-teal-400 to-purple-500 text-default-800 font-semibold py-2"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-default-500">
            Don’t have an account?{" "}
            <Link href={"/register"} className="text-teal-500 font-semibold">
              Register
            </Link>
          </p>
          <p className="text-sm text-teal-500 mt-2">
            <Link href={"/forget-password"}>Forgot password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
