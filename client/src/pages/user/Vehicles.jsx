import { useEffect, useState } from "react";
import api from "../../api";

export default function Vehicles() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ make:"", model:"", year:"", color:"", plate:"" });

  const load = () => api.get("/vehicles/mine").then(r=>setList(r.data));
  useEffect(load, []);

  const add = async e => {
    e.preventDefault();
    await api.post("/vehicles/mine", { ...form, year: Number(form.year) });
    setForm({ make:"", model:"", year:"", color:"", plate:"" });
    load();
  };

  return (
    <div style={{ padding:16, fontFamily:"system-ui" }}>
      <h3>My Vehicles</h3>
      <ul>{list.map(v=> <li key={v._id}>{v.year} {v.make} {v.model} ({v.color}) • {v.plate}</li>)}</ul>
      <h4>Add Vehicle</h4>
      <form onSubmit={add}>
        {["make","model","year","color","plate"].map(k=>(
          <input key={k} placeholder={k} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})}/>
        ))}
        <button>Add</button>
      </form>
      <style>{`input,button{display:block;margin:6px 0;padding:8px}`}</style>
    </div>
  );
}
