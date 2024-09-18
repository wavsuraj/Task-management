import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../components/hooks/useLogout';
import { toast } from 'react-toastify';
import AxiosService from '../../components/utils/ApiService';
import Spinner from '../../components/utils/Spinners';

function Register() {
  let logout = useLogout();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [inpval, setINP] = useState({
    name: '',
    email: '',
    status: 'Active',
    mobile: '',
    password: '',
    add: '',
    desc: '',
    role: '',
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => ({
      ...preval,
      [name]: name === 'status' ? e.target.value : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { password } = inpval;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, and one digit.'
      );
      setLoading(false);
      return;
    }

    try {
      let res = await AxiosService.post(
        '/user/registeruser',
        inpval
      );
      const data = res.data;

      if (res.status === 201) {
        toast.success(res.data.message);
        navigate('/home');
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-2">
      <form className="bg-light p-4 rounded">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
              className="form-control"
              id="name"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={inpval.email}
              onChange={setdata}
              name="email"
              className="form-control"
              id="email"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="status" className="form-label">
              Select Your Status
            </label>
            <select
              className="form-select"
              id="status"
              name="status"
              value={inpval.status}
              onChange={setdata}
            >
              <option value="Active">Active</option>
              <option value="InActive">Inactive</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
              type="number"
              value={inpval.mobile}
              onChange={setdata}
              name="mobile"
              className="form-control"
              id="mobile"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={inpval.password}
              onChange={setdata}
              name="password"
              className="form-control"
              id="password"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <input
              type="text"
              value={inpval.role}
              onChange={setdata}
              name="role"
              className="form-control"
              id="role"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="add" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={inpval.add}
              onChange={setdata}
              name="add"
              className="form-control"
              id="add"
              required
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <textarea
              name="desc"
              value={inpval.desc}
              onChange={setdata}
              className="form-control"
              id="desc"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="col-12">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? <Spinner /> : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
