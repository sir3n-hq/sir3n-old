import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import "../style.css";

export default function SubmissionForm() {
  const [formData, setFormData] = useState({
    story: "",
    location: "",
    tags: "",
    perpetrator: "",
    knowsWhere: "",
    verificationToken: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "submissions"), {
        ...formData,
        created: Timestamp.now()
      });
      setSuccess(true);
      setFormData({
        story: "",
        location: "",
        tags: "",
        perpetrator: "",
        knowsWhere: "",
        verificationToken: ""
      });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <img src="/logo.png" alt="SIR3N logo" className="logo" />
      <h2>Send your story</h2>
      {success && <p className="success">Submission received. Thank you.</p>}
      <form onSubmit={handleSubmit}>
        <textarea name="story" required placeholder="Your story..." value={formData.story} onChange={handleChange} />
        <input name="location" required placeholder="Where did it happen?" value={formData.location} onChange={handleChange} />
        <input name="perpetrator" placeholder="Describe the perpetrator" value={formData.perpetrator} onChange={handleChange} />
        <input name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} />
        <input name="knowsWhere" placeholder="Do you know where he lives/works?" value={formData.knowsWhere} onChange={handleChange} />
        <input name="verificationToken" placeholder="Verification token (if any)" value={formData.verificationToken} onChange={handleChange} />
        <button type="submit">Submit Anonymously</button>
      </form>
    </div>
  );
}
