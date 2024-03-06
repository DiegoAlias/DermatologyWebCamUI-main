const UserData = () => {
  return (
    <div>
      <img
        className="rounded-full h-32 w-32 mx-auto my-2 border border-white"
        src="./img/descarga.jpg"
        alt="Card image cap"
      />
      <div className="bg-userdata">
        <div className="font-bold text-center mt-2 mb-2">Patient Data</div>
        <div className="">
          <ul className="">
            <li>Name: Gabriel</li>
            <li>Last Name: Alias</li>
            <li>Age: 38</li>
            <li>Birthday: 28/12/1985</li>
            <li>DNI: 31949910</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserData;
