import { useEffect, useState } from "react";
import AutoFilterListDropdown from "./AutoFilterListDropdown";

export default function AutoFilterListDropdownPage() {
  const [userData, setUserData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const countries = [
    { name: "USA" },
    { name: "Canada" },
    { name: "France" },
    { name: "Spain" },
    { name: "England" },
    { name: "Germany" },
    { name: "Mexico" },
    { name: "Morocco" },
    { name: "Argentina" },
    { name: "Australia" },
    { name: "Italy" }

  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div>
      <h2>AutoFilter List Dropdown Page</h2>
      <div>
        <h3>Select an User</h3>
        <AutoFilterListDropdown
          data={userData}
          filterKey="name"
          valueChange={(selectedUser) => {
            setSelectedUser(selectedUser);
          }}
          placeHolder="Enter user name"
        />
        {selectedUser && <span>Selected User : {selectedUser.name}</span>}
      </div>

      <br />
      <div>
        <h3>Select a country</h3>
        <AutoFilterListDropdown
          data={countries}
          filterKey="name"
          valueChange={(selectedCountry) => {
            setSelectedCountry(selectedCountry);
          }}
          placeHolder="Enter country name"
        />
        {selectedCountry && <span> Selected Country: {selectedCountry.name}</span>}
      </div>
    </div>
  );
}
