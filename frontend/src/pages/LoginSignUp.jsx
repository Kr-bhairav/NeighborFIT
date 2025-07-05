import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const LoginSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { login, token } = useAuth();
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/login`, {
        email: email.trim(),
        password: password.trim(),
      });
      const { user, token } = res.data;
      login(user, token);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (err) {
      alert(err?.response?.data?.message || 'Login failed');
    }
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/signup`, {
        username: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });
      const { user, token } = res.data;
      login(user, token);
      setName('');
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (err) {
      alert(err?.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f7ff]">
      <div className="flex w-[900px] rounded-xl overflow-hidden shadow-xl">

        <div className="w-1/2 bg-white p-10 space-y-6">
          {isSignIn ? (
            <>
              <h2 className="text-2xl font-semibold">Hello!</h2>
              <p className="text-gray-500 mb-4">Sign in to your account</p>
              <input
                type="email"
                placeholder="E-mail"
                className="input-style"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-style"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-between text-sm text-gray-600">
                <label>
                  <input type="checkbox" className="mr-1" />
                  Remember me
                </label>
                <a href="#" className="text-blue-500">
                  Forgot password?
                </a>
              </div>
              <button className="btn-primary" onClick={handleLogin}>
                SIGN IN
              </button>
              <p className="text-sm text-gray-500">
                Don't have an account?{' '}
                <button className="text-blue-600" onClick={() => setIsSignIn(false)}>
                  Create
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold">Hello, friend!</h2>
              <p className="text-gray-500 mb-4">Create an account</p>
              <input
                type="text"
                placeholder="Name"
                className="input-style"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail"
                className="input-style"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-style"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="text-sm text-gray-600 flex items-center">
                <input type="checkbox" className="mr-2" />
                I read and agree to Terms & Conditions
              </label>
              <button className="btn-primary" onClick={handleRegister}>
                CREATE ACCOUNT
              </button>
              <p className="text-sm text-gray-500">
                Already have an account?{' '}
                <button className="text-blue-600" onClick={() => setIsSignIn(true)}>
                  Sign in
                </button>
              </p>
            </>
          )}
        </div>

        <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600 text-white text-center p-10">
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              {isSignIn ? 'Welcome Back!' : 'Glad to see you!'}
            </h3>
            <p className="text-sm">
              {isSignIn
                ? 'Welcome back to the neighborhood matching app.'
                : 'Create your account to find the perfect place for your lifestyle!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
