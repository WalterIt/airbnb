import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { differenceInCalendarDays } from "date-fns";
import { UserContext } from "../../UserContext";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberGuests, setNumberGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberNights = 0;

  if (checkIn && checkOut) {
    numberNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function bookThisPlace(e) {
    e.preventDefault();
    const formData = {
      place: place._id,
      checkIn,
      checkOut,
      numberGuests,
      name,
      phone,
      price: numberNights * place.price,
    };
    const response = await axios.post("/bookings", formData);
    const bookingId = response.data._id;
    // console.log(bookingId);
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="">
      <div className="bg-white shadow p-4 rounded-2xl">
        <p className="text-xl text-center">
          <b>Price: $ {place.price}</b> per Night
        </p>
        <div className="border rounded-2xl mt-4">
          <div className="flex">
            <div className="py-3 px-4 ">
              <label>
                <b> Check in: </b>
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="py-3 px-4 border-l ">
              <label>
                <b>Check out: </b>
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>

          <div className="py-3 px-4 border-t ">
            <label>
              <b>Number of Guests: </b>
            </label>
            <input
              type="number"
              value={numberGuests}
              onChange={(e) => setNumberGuests(e.target.value)}
            />
          </div>
          {numberNights > 0 && (
            <div className="py-3 px-4 border-t ">
              <label>
                <b>Your Full Name: </b>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>
                <b>Your Phone Number: </b>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}
        </div>
        <button onClick={bookThisPlace} className="primary mt-2">
          Book this Place
          {checkIn && checkOut && (
            <span className=""> - $ {numberNights * place.price}</span>
          )}
        </button>
      </div>
    </div>
  );
}
