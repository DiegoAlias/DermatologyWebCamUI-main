const UserData = () => {
  return (
    <div>
      <div className="row">
        <div className="card bg-dark text-white p-3 mt-2 mx-3">
          <img
            class="card-img-top rounded-circle"
            src="./img/descarga.jpg"
            alt="Card image cap"
          />
          <div className="card-title font-bold text-center mt-2 ">
            Patient Data
          </div>
          <div className="card-body">
            <div className="card-text">
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
      </div>
    </div>
  );
};

export default UserData;
