import { useEffect, useState } from "react";
import api from "../../api";

export default function BookingsAdmin() {
  const [list, setList] = useState([]);
  const load = () => api.get("/bookings").then(r=>setList(r.data));
  const update = async (id, patch) => { await api.put(`/bookings/${id}`, patch); load(); };
  const del = async (id) => { await api.delete(`/bookings/${id}`); load(); };
  useEffect(load, []);

  return (
    <div style={{ padding:16, fontFamily:"system-ui" }}>
      <h3>Admin: Bookings</h3>
      <ul>
        {list.map(b=>(
          <li key={b._id}>
            {new Date(b.date).toLocaleString()} • {b.service?.name} • {b.vehicle?.make} {b.vehicle?.model} — {b.status}
            <button onClick={()=>update(b._id, { status: "completed" })}>Mark Completed</button>
            <button onClick={()=>del(b._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <style>{`button{margin-left:8px}`}</style>
    </div>
  );
}
