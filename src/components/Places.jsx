import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "./Perks";

export default function Places() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

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

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add New Place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div className="">
          <form>
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
              value={title}
              onChange={(e) => setAddress(e.target.value)}
            />

            {preInput("Photos", "More = Better!")}

            <div className="flex gap-2">
              <input
                type="text"
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
                placeholder="Add using a link...jpg"
              />
              <button className="bg-gray-200 px-1 rounded-2xl">
                Add&nbsp;Photo
              </button>
            </div>

            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="flex justify-center gap-2 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload
              </button>
            </div>

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
      )}
    </div>
  );
}
