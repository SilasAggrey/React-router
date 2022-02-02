import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const users = ["Jamil- 0234812943", "Henry- 0213234432", "Kelvin- 0532323332", "Tony- 0203132013"];

  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact</h1>
      {users.map((user, index) => {
        return <h1 onClick={() => navigate(`/details/${index}`)}>{user}</h1>;
      })}
    </div>
  );
}
