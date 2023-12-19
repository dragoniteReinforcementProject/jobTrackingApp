import React from 'react';


const Login = () => {
  
  return (
    <div className="login-container">
      <div className="logo">Job Rolodex!</div>
      <form>
        <input name="username" type="text" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <input class="button" type="submit" value="login" />
        <button class="button" type="button" onClick={
          () => {navigate('/signUp')}
        }>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;