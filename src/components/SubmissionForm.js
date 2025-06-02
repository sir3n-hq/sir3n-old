import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const perpetratorOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "group", label: "Group" },
  { value: "young", label: "Young" },
  { value: "middle-aged", label: "Middle Aged" },
  { value: "old", label: "Old" },
  { value: "tall", label: "Tall" },
  { value: "short", label: "Short" },
];

const eventOptions = [
  { value: "verbal", label: "Verbal Assault" },
  { value: "physical", label: "Physical Assault" },
  { value: "harassment", label: "Harassment" },
  { value: "stalking", label: "Stalking" },
  { value: "spiking", label: "Spiking" },
  { value: "sexual", label: "Sexual Assault" },
  { value: "rape", label: "Rape" },
];

export default function SubmissionForm() {
  const [location, setLocation] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [description, setDescription] = useState("");
  const [perpetratorTags, setPerpetratorTags] = useState([]);
  const [eventTags, setEventTags] = useState([]);
  const [knowsLocation, setKnowsLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleLocationChange = async (e) => {
    const value = e.target.value;
    setLocation(value);
    if (value.length > 2) {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
      );
      setLocationSuggestions(res.data);
    } else {
      setLocationSuggestions([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "submissions"), {
        location,
        description,
        perpetratorTags: perpetratorTags.map((t) => t.value),
        eventTags: eventTags.map((t) => t.value),
        knowsLocation,
        created: Timestamp.now(),
      });
      setMessage("Submitted successfully.");
    } catch (err) {
      console.error("Error adding document: ", err);
      setMessage("Submission failed.");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Submit Your Story</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Where did it happen?</label>
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            className="w-full border p-2 rounded"
            placeholder="Start typing a location..."
          />
          {locationSuggestions.length > 0 && (
            <ul className="border bg-white max-h-40 overflow-y-auto rounded shadow">
              {locationSuggestions.map((loc) => (
                <li
                  key={loc.place_id}
                  className="p-2 hover:bg-purple-100 cursor-pointer"
                  onClick={() => {
                    setLocation(loc.display_name);
                    setLocationSuggestions([]);
                  }}
                >
                  {loc.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label className="block font-semibold">Describe what happened</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
            rows={5}
          />
        </div>

        <div>
          <label className="block font-semibold">Describe the perpetrator</label>
          <Select
            isMulti
            options={perpetratorOptions}
            onChange={setPerpetratorTags}
          />
        </div>

        <div>
          <label className="block font-semibold">Type of event</label>
          <Select isMulti options={eventOptions} onChange={setEventTags} />
        </div>

        <div>
          <label className="block font-semibold">
            Do you know where they live or work?
          </label>
          <input
            type="text"
            value={knowsLocation}
            onChange={(e) => setKnowsLocation(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded">
          Submit
        </button>
        {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
      </form>
    </div>
  );
}