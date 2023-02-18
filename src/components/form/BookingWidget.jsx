export default function BookingWidget({ place }) {
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
              <input type="date" />
            </div>
            <div className="py-3 px-4 border-l ">
              <label>
                <b>Check out: </b>
              </label>
              <input type="date" />
            </div>
          </div>

          <div className="py-3 px-4 border-t ">
            <label>
              <b>Number of Guests: </b>
            </label>
            <input type="number" value={1} />
          </div>
        </div>
        <button className="primary mt-2">Book this Place</button>
      </div>
    </div>
  );
}
