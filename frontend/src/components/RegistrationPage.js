import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationPage = ({ setLoggedIn, setUsernameProp }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  const [biography, setBiography] = useState();
  const [experience, setExperience] = useState();
  const [education, setEducation] = useState();
  const [skills, setSkills] = useState();
  const [interests, setInterests] = useState();
  const [isPublic, setIsPublic] = useState();

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        name: name,
        surname: surname,
        password: password,
        phoneNumber: phone,
        gender: gender.toUpperCase(),
        dateOfBirth: birthday,
        biography: biography,
        workExperience: experience,
        education: education,
        skills: skills,
        interests: interests,
        public: isPublic,
      }),
    };

    console.log(requestOptions.body);

    await fetch("http://localhost:8082/api/customer", requestOptions)
      .then((response) => {
        if (response.ok) {
          setLoggedIn(true);
          navigate("/profile");
        }
        return response.json();
      })
      .then((data) => setUsernameProp(data.username));
  }

  return (
    <div>
      <h2 className="d-flex justify-content-center m-3">
        Registracija na sistem
      </h2>

      <div className="d-flex justify-content-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row m-3">
            <div className="col-6">
              <label>Korisničko ime:</label>
            </div>
            <div className="col-6">
              <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="row m-3">
            <div className="col-6">
              {" "}
              <label>E-mail:</label>
            </div>
            <div className="col-6">
              <input
                className="form-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="row m-3">
            <div className="col-6">
              <label>Ime:</label>
            </div>
            <div className="col-6">
              <input
                className="form-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="row m-3">
            <div className="col-6">
              <label>Prezime:</label>
            </div>
            <div className="col-6">
              <input
                className="form-input"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
          </div>

          <div className="row m-3">
            <div className="col-6">
              <label>Lozinka: </label>
            </div>
            <div className="col-6">
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="row m-3">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>

          <div className="row m-3">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>

          <div>
            <label>Broj telefona:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <label>Pol: </label>
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value={"male"}
            onChange={(e) => {
              setGender(e.target.value);
              console.log(e.target.value);
            }}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            {" "}
            M{" "}
          </label>

          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value={"female"}
            onChange={(e) => {
              setGender(e.target.value);
              console.log(e.target.value);
            }}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            {" "}
            Ž{" "}
          </label>

          <div>
            <label>Datum rodjenja:</label>
            <input
              type="text"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>

          <div>
            <label>Biografija:</label>
            <input
              type="text"
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
            />
          </div>

          <div>
            <label>Radno iskustvo:</label>
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>

          <div>
            <label>Obrazovanje:</label>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>

          <div>
            <label>Veštine:</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>

          <div>
            <label>Interesovanja:</label>
            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </div>

          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            {" "}
            Javni nalog
          </label>

          <div>
            <button type="submit" className="btn btn-warning">
              Registruj se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegistrationPage;
