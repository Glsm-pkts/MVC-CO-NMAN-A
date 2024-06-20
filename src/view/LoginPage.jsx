import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { v4 } from "uuid";
import { schema } from '../schema';

const LoginPage = () => {
  const navigate = useNavigate()
    const formik = useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirm_password: "",
      },
      onSubmit: async (values, actions) => {
        //   console.log(values);
        //   console.log(actions);
        // api similasyonu
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // kullanıcıyı locale gönder
        localStorage.setItem("user", JSON.stringify({ ...values, id: v4() }));
        navigate("/home");
      },
      validationSchema: schema,
  });
  return (
    <div>
      <div className='container'>
        <div className='logo'>
          <img src="/public/c-logo.png" alt=""  width={60}/>
         <h2>Coinmania</h2>
        </div>
        {/**FORM ALANI */}
        <form onSubmit={formik.handleSubmit}>
{inputs.map((data, key)=>(
  <InputField formik = {formik} data={data} key={key}/>))}
<button disabled={formik .isSubmitting} type='submit'>KAYDOL</button>
        </form>
        

      </div>
    </div>
  );
}

export default LoginPage;
const inputs = [
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Yaş",
    name: "age",
    type: "number",
  },
  {
    label: "Şifre",
    name: "password",
    type: "password",
  },
  {
    label: "Şifre Onay",
    name: "confirm_password",
    type: "password",
  },
];

const InputField = ({ data, formik }) => {
  
  const { label, name, type } = data;
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} onChange={formik.handleChange} />

      {formik.touched[name] && formik.errors[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};