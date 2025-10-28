import { useEffect, useState } from "react";
import api from "../../api";

export default function VehiclesAdmin() {
  const [list, setList] = useState([]);
  const load = () => api.get("/vehicles").then(r=>setList(r.data));
  const del = async (id) => { await api.delete(`/vehicles/${id}`); load(); };
  useEffect(load, []);

  return (
    <div style={{ padding:16, fontFamily:"system-ui" }}>
      <h3>Admin: Vehicles</h3>
      <ul>
        {list.map(v=>(
          <li key={v._id}>
            {v.year} {v.make} {v.model} ({v.color}) • owner: {v.customer?.fullName || "N/A"}
            <button onClick={()=>del(v._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <style>{`button{margin-left:8px}`}</style>
    </div>
  );
}
