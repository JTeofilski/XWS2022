import React, { useState, useEffect } from "react";

const UpdatePage = ({ usernameProp }) => {
  const [username, setUsername] = useState(usernameProp);
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

  useEffect(() => {
    (async function () {
      await fetch(`http://localhost:8082/api/user/${usernameProp}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          setEmail(data.email);
          setName(data.name);
          setSurname(data.surname);
          setPassword(data.password);
          setPhone(data.phoneNumber);
          setGender(data.gender.toLowerCase());
          setBirthday(data.dateOfBirth);
          setBiography(data.biography);
          setExperience(data.workExperience);
          setEducation(data.education);
          setSkills(data.skills);
          setInterests(data.interests);
          setIsPublic(data.public);
        });
    })();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: "PUT",
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

    const response = await fetch(
      "http://localhost:8082/api/customer",
      requestOptions
    );
    const data = await response.json();

    console.log(data);
  }

  return (
    <div>
      <h1 className="d-flex justify-content-center">Izmena podataka</h1>

      <div className="d-flex justify-content-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Korisničko ime:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled
            />
          </div>

          <div>
            <label>E-mail:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
          </div>

          <div>
            <label>Ime:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Prezime:</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>

          <div>
            <label>Lozinka: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled
            />
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
            checked={gender === "male" ? true : false}
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
            checked={gender === "female" ? true : false}
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
            onChange={(e) => {
              setIsPublic(e.target.checked);
              console.log(e.target.checked);
            }}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            {" "}
            Javni nalog
          </label>

          <div>
            <button type="submit" className="btn btn-warning">
              Izmeni podatke
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdatePage;
