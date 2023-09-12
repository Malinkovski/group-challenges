import { useState, useEffect, ChangeEvent } from "react";

interface UserProps {
  id: number;
  name: string;
  email: string;
}

const API_URL: string = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserProps[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((userData: UserProps[]) => {
        setUsers(userData);
        setFilteredUsers(userData);
      });
  }, []);

  //Search function
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearch(searchValue);

    //Filtering
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchValue)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <input
        type="text"
        className="form-control"
        placeholder="search..."
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.map(({ id, name, email }) => (
          <li key={id}>
            {name} - <a href={`mailto:${email}`}>Email me</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
