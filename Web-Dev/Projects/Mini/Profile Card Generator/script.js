//! 1.Select the target Element
const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");

//! 2. Create new html Elements (document.createElement())
function createProfileCard() {
  //Create the profile card container
  const profilecard = document.createElement("div");
  profilecard.className = "profile-card";
  //create an image element for profile card

  const profileImg = document.createElement("img");
  //add image to created img element
  profileImg.src =
    "https://cdn.pixabay.com/photo/2024/12/07/17/47/autumn-9251331_640.jpg";

  //Create Headin Element

  const profileName = document.createElement("h3");
  profileName.textContent = "Shrenik Dubal";

  //create a  paragraph element for description
  const profileDesc = document.createElement("p");
  profileDesc.textContent =
    "As a Passionate Web Developer with experience in Js and Recat.";
  //create my name
  const title = document.createElement("h4");
  title.className = "site-title";
  title.textContent = "BuildWithNik";

  //! 3. Add Contenet to element created (innerhtml/textcontent)
  //! 4. Add Classes or ids if needed // ass any attributes

  //! 5. Append the element to build the structure
  //append all the element to profile card

  profilecard.appendChild(profileImg);
  profilecard.appendChild(profileName);
  profilecard.appendChild(profileDesc);
  profilecard.appendChild(title);

  //! 6. Append to the Dom

  //Appemd the profilecard to to the div container
  appContainer.appendChild(profilecard);
  console.log(profilecard);
}

//add EventListner

generateBtn.addEventListener("click", createProfileCard);
