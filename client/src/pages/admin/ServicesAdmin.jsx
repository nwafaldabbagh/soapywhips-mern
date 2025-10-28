import { useEffect, useState } from "react";
import api from "../../api";

export default function ServicesAdmin() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ name:"", priceUSD:"", description:"" });

  const load = () => api.get("/services").then(r=>setList(r.data));
  useEffect(load, []);

  const create = async e => {
    e.preventDefault();
    await api.post("/services", { ...form, priceUSD: Number(form.priceUSD) });
    setForm({ name:"", priceUSD:"", description:"" });
    load();
  };
  const update = async (id, patch) => { await api.put(`/services/${id}`, patch); load(); };
  const del = async (id) => { await api.delete(`/services/${id}`); load(); };

  return (
    <div style={{ padding:16, fontFamily:"system-ui" }}>
      <h3>Admin: Services</h3>
      <ul>
        {list.map(s=>(
          <li key={s._id}>
            <b>{s.name}</b> — ${s.priceUSD} — {s.description}
            <button onClick={()=>update(s._id, { priceUSD: s.priceUSD + 5 })}>+ $5</button>
            <button onClick={()=>del(s._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h4>Add Service</h4>
      <form onSubmit={create}>
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/>
        <input placeholder="Price USD" value={form.priceUSD} onChange={e=>setForm({...form,priceUSD:e.target.value})} required/>
        <input placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/>
        <button>Add</button>
      </form>
      <style>{`input,button{display:inline-block;margin:6px;padding:8px}`}</style>
    </div>
  );
}
