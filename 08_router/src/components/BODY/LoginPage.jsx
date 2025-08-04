import React from 'react'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="logo">your <span>logo</span></h1>
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>
      </div>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .login-container {
          width: 100%;
          max-width: 400px;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(255, 165, 0, 0.2);
          background-color: #ffffff;
        }

        .logo {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #333;
        }

        .logo span {
          color: #ff6600;
        }

        .login-title {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .login-form {
          display: flex;
          flex-direction: column;
        }

        .login-form label {
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #333;
        }

        .login-form input {
          padding: 0.75rem;
          margin-bottom: 1.25rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
        }

        .login-form button {
          padding: 0.75rem;
          background-color: #ff6600;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-form button:hover {
          background-color: #e65c00;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
