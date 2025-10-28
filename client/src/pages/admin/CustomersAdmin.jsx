import { useEffect, useState } from "react";
import api from "../../api";

export default function CustomersAdmin() {
  const [list, setList] = useState([]);
  const load = () => api.get("/customers").then(r=>setList(r.data));
  useEffect(load, []);

  return (
    <div style={{ padding:16, fontFamily:"system-ui" }}>
      <h3>Admin: Customers</h3>
      <ul>
        {list.map(c=>(
          <li key={c._id}>
            <b>{c.fullName}</b> — {c.phone || "no phone"} — user: {c.user?.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
