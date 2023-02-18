import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import AccountNav from "../accountNav/AccountNav";
import Perks from "./Perks";
import PhotosUploader from "./PhotosUploader";

export default function PlacesForm() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);
  const [addedPhotos, setAddedPhotos] = useState([]);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}: </h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addNewPlace(e) {
    e.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    };
    console.log(placeData);
    await axios.post("/places", placeData);
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div className="">
      <AccountNav />
      <form onSubmit={addNewPlace}>
        {preInput(
          "Title",
          "The Title for your place should be short and catchy as in advertisements."
        )}
        <input
          type="text"
          placeholder="Title, for example: My lovely apt"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {preInput("Address", "Add an Address to this place")}

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {preInput("Photos", "More = Better!")}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        {preInput("Description", "Describe this place.")}

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {preInput("Perks", "Select all the perks of your place.")}
        <Perks selected={perks} onChange={setPerks} />

        {preInput("Extra Informations", "Place rules, etc...")}
        <textarea
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
        ></textarea>

        {preInput(
          "Check In & Check Out Times",
          "Add check in & check out times. Remember to have some time window for cleaning the room between guests."
        )}

        <div className="grid gap-2 sm:grid-cols-3">
          <div>
            <h3 className="mt-2 -mb-1">Check In Time:</h3>
            <input
              type="text"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              placeholder="14:00"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check Out Time:</h3>
            <input
              type="text"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              placeholder="11:00"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Maximum number of Guests:</h3>
            <input
              type="number"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
              placeholder="1"
            />
          </div>
        </div>
        <div>
          <button className="primary my-6">Save</button>
        </div>
      </form>
    </div>
  );
}
