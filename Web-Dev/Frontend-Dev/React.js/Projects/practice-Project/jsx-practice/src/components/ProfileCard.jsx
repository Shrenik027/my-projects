const ProfileCard = () => {
  const name = "Shrenik";

  const language = "Javascript";

  const bio = "I Love building web apps with React and exploring new tech!";

  const imageUrl =
    "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png";

  const hobbies = ["Coading", "Gaming", "Reading", "Fucking"];
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome to {name} 's Profile </h1>

      <img
        style={{
          borderRadius: "50%",
          width: "150px",
          marginBottom: "1rem",
          width: "200px",
          height: "200px",
        }}
        src={imageUrl}
        alt="profilephoto"
      />

      <p>
        <strong>Favourite Language: {language}</strong>
      </p>

      <p>Bio: {bio}</p>

      <h1>Hobbies</h1>

      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}> {hobby}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProfileCard;
