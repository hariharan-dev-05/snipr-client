import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../api";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await signUp(formData);
    setIsLoading(false);
    if (res.status === 201) {
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <h2 className="text-3xl font-bold text-primary text-center">
        Create Account
      </h2>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="mt-2 block w-full px-4 py-3 bg-light border border-primary/40 rounded-lg shadow-sm placeholder-primary/50 text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="mt-2 block w-full px-4 py-3 bg-light border border-primary/40 rounded-lg shadow-sm placeholder-primary/50 text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-primary"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="mt-2 block w-full px-4 py-3 bg-light border border-primary/40 rounded-lg shadow-sm placeholder-primary/50 text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 px-4 bg-primary text-light font-semibold rounded-lg shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
      >
        {isLoading ? "Signing Up..." : "Sign Up"}
      </button>

      {/* Link */}
      <p className="text-sm text-primary text-center mt-4">
        Already have an account?{" "}
        <Link to="/auth/signin" className="font-medium hover:underline">
          Sign in here
        </Link>
      </p>
    </form>
  );
};

export default Signup;