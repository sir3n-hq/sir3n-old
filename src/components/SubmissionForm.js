import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Select from "react-select";
import LocationAutocomplete from "./LocationAutocomplete";

const eventOptions = [
  { value: "verbal assault", label: "Verbal Assault" },
  { value: "physical assault", label: "Physical Assault" },
  { value: "harassment", label: "Harassment" },
  { value: "stalking", label: "Stalking" },
  { value: "spiking", label: "Spiking" },
  { value: "sexual assault", label: "Sexual Assault" },
  { value: "rape", label: "Rape" },
];

const perpetratorOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "tall", label: "Tall" },
  { value: "short", label: "Short" },
  { value: "old", label: "Old" },
  { value: "young", label: "Young" },
  { value: "middle-aged", label: "Middle Aged" },
  { value: "group", label: "Group" },
];

const SubmissionForm = () => {
  const [eventType, setEventType] = useState([]);
  const [perpetratorTags, setPerpetratorTags] = useState([]);
  const [location, setLocation] = useState({ address: "", lat: null, lng: null });
  const [details, setDetails] = useState("");
  const [knowLocation, setKnowLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "submissions"), {
        eventType: eventType.map((opt) => opt.value),
        perpetratorTags: perpetratorTags.map((opt) => opt.value),
        location,
        details,
        knowLocation,
        timestamp: Timestamp.now(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  if (submitted) {
    return <p className="text-green-600 text-center mt-8">Thank you for your submission.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Share Your Story</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Type of Event</label>
          <Select
            isMulti
            options={eventOptions}
            value={eventType}
            onChange={setEventType}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Location of Event</label>
          <LocationAutocomplete onSelect={(loc) => setLocation(loc)} />
        </div>

        <div>
          <label className="block text-sm font-medium">Describe the Perpetrator</label>
          <Select
            isMulti
            options={perpetratorOptions}
            value={perpetratorTags}
            onChange={setPerpetratorTags}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">What Happened?</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Do you know where they live or work?</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="2"
            value={knowLocation}
            onChange={(e) => setKnowLocation(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white rounded hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;