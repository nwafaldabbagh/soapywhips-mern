import { useEffect, useState } from "react";
import api from "../../api";

export default function Services() {
  const [items, setItems] = useState([]);
  useEffect(() => { api.get("/services").then(r=>setItems(r.data)); }, []);
  return (
    <div style={{ padding:16, fontFamily:"system-ui" }}>
      <h3>Available Services</h3>
      <ul>{items.map(s => <li key={s._id}><b>{s.name}</b> — ${s.priceUSD} — {s.description}</li>)}</ul>
    </div>
  );
}
