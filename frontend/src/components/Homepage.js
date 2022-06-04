import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  let navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    (async function () {
      await fetch(`http://localhost:8082/api/user/search?input=${""}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setProfiles(data);
        });
    })();
  }, []);

  // prosledjuje se text sa forme i svaki put kada se unese
  // novi karakter poziva mi se fecth da bi se dobili najnoviji rezultati
  const filter = async (input) => {
    await fetch(`http://localhost:8082/api/user/search?input=${input}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProfiles(data);
      });
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">DISLINKT </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            filter(e.target.value);
          }}
        />
        {profiles.map((profile) => (
          <div onClick={() => navigate(`/user?username=${profile.username}`)}>
            {profile.username}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Homepage;
