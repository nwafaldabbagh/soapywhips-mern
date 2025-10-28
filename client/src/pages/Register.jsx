import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      nav("/login");
    } catch (e) {
      setErr(e.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "60px auto", fontFamily: "system-ui" }}>
      <h2>Create Account</h2>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      <form onSubmit={onSubmit}>
        <input placeholder="Username" value={form.username}
          onChange={e=>setForm({...form, username:e.target.value})} required/>
        <input placeholder="Password" type="password" value={form.password}
          onChange={e=>setForm({...form, password:e.target.value})} required/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
