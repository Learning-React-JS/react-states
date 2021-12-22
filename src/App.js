import { useState } from "react";

function App() {
  const [name, setName] = useState("Ilkay");
  const [age, setAge] = useState(34);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet"]);
  const [address, setAddress] = useState({ title: "Home", postCode: 34515 });
  console.log(name, age);

  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Polat")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>
      <hr />
      <br />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, key) => (
        <div key={key}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Fatma"])}>
        Add New Friend
      </button>
      <hr />
      <br />
      <br />
      <h2>Address</h2>
      <div>
        {address.title} {address.postCode}
      </div>
      <br />
      <button onClick={() => setAddress({ title: "Work", postCode: 4535 })}>
        Change Adress
      </button>
    </div>
  );
}

export default App;
