import React from 'react'

const Register = () => {
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
    <div className="text-center lg:text-left">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h3 className='text-xl font-semibold'>Create an account</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input type="text" placeholder="confirm password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-4">
          <button className="btn  btn-accent">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register