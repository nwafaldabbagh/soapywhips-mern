import { useState } from "react";
import api from "../api";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", form);
      login(data);
      nav("/");
    } catch (e) {
      setErr(e.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "60px auto", fontFamily: "system-ui" }}>
      <h2>Soapy Whips — Login</h2>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      <form onSubmit={onSubmit}>
        <input placeholder="Username" value={form.username}
               onChange={e=>setForm({...form, username:e.target.value})} required/>
        <input placeholder="Password" type="password" value={form.password}
               onChange={e=>setForm({...form, password:e.target.value})} required/>
        <button type="submit">Login</button>
      </form>
      <p>New here? <Link to="/register">Create an account</Link></p>
      <style>{`
        input, button { display:block; width:100%; padding:10px; margin:8px 0; }
        button { cursor:pointer }
      `}</style>
    </div>
  );
}
