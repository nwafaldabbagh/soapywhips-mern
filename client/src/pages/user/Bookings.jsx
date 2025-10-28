import { useEffect, useState } from "react";
import api from "../../api";

export default function Bookings() {
  const [mine, setMine] = useState([]);
  const [services, setServices] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({ vehicleId:"", serviceId:"", date:"", notes:"" });

  const load = () => Promise.all([
    api.get("/bookings/mine").then(r=>setMine(r.data)),
    api.get("/services").then(r=>setServices(r.data)),
    api.get("/vehicles/mine").then(r=>setVehicles(r.data))
  ]);

  useEffect(() => { load(); }, []);

  const create = async e => {
    e.preventDefault();
    await api.post("/bookings/mine", form);
    setForm({ vehicleId:"", serviceId:"", date:"", notes:"" });
    load();
  };

  return (
    <div style={{ padding:16, fontFamily:"system-ui" }}>
      <h3>My Bookings</h3>
      <ul>
        {mine.map(b=>(
          <li key={b._id}>
            {new Date(b.date).toLocaleString()} • {b.service?.name} • {b.vehicle?.make} {b.vehicle?.model} — {b.status}
          </li>
        ))}
      </ul>

      <h4>New Booking</h4>
      <form onSubmit={create}>
        <select value={form.vehicleId} onChange={e=>setForm({...form,vehicleId:e.target.value})} required>
          <option value="">Select Vehicle</option>
          {vehicles.map(v=><option key={v._id} value={v._id}>{v.year} {v.make} {v.model}</option>)}
        </select>
        <select value={form.serviceId} onChange={e=>setForm({...form,serviceId:e.target.value})} required>
          <option value="">Select Service</option>
          {services.map(s=><option key={s._id} value={s._id}>{s.name} (${s.priceUSD})</option>)}
        </select>
        <input type="datetime-local" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} required/>
        <input placeholder="Notes (optional)" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})}/>
        <button>Create Booking</button>
      </form>
      <style>{`select,input,button{display:block;margin:6px 0;padding:8px}`}</style>
    </div>
  );
}
