import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../style.css";

export default function Dashboard() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "submissions"));
      setSubmissions(snapshot.docs.map(doc => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Moderation Dashboard</h2>
      {submissions.map((entry, idx) => (
        <div key={idx} className="card">
          <p><strong>Story:</strong> {entry.story}</p>
          <p><strong>Location:</strong> {entry.location}</p>
          <p><strong>Tags:</strong> {entry.tags}</p>
          <p><strong>Perpetrator:</strong> {entry.perpetrator}</p>
          <p><strong>Knows Where:</strong> {entry.knowsWhere}</p>
        </div>
      ))}
    </div>
  );
}
