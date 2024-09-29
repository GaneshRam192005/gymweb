import React, { useState, useEffect, useRef } from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const storedProfileImage = localStorage.getItem("profileImage");

    if (!storedUserData) {
      console.error("User data not found in local storage");
      return;
    }

    try {
      const userData = JSON.parse(storedUserData);
      const userId = userData.user_id;

      if (!userId) {
        console.error("User ID not found in stored user data");
        return;
      }

      fetch(
        `https://gym-management-2.onrender.com/accounts/user_register?id=${userId}`
      )
        .then((response) => response.json())
        .then((data) => {
          setUserDetails(data);
          setProfileImage(storedProfileImage || "profile.png");
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    } catch (error) {
      console.error("Error parsing stored user data:", error);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setProfileImage(base64String);
        localStorage.setItem("profileImage", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Header />
      <ProfileSection
        userDetails={userDetails}
        profileImage={profileImage}
        handleImageChange={handleImageChange}
      />
      <InfoSection userDetails={userDetails} />
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src="logo2.png" alt="My Image" />
      </div>
      <nav className={menuOpen ? "nav-open" : ""}>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <a href="#">Plans</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

const ProfileSection = ({ userDetails, profileImage, handleImageChange }) => {
  const fileInputRef = useRef(null);

  const handleEditProfilePicture = () => {
    fileInputRef.current.click();
  };

  return (
    <section className="profile-section">
      <div className="profile-picture">
        <img
          src={profileImage || "profile.png"}
          alt="Profile"
          className="profile-img"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <button className="edit-profile-btn" onClick={handleEditProfilePicture}>
        Edit Profile Picture
      </button>
      <div className="profile-info">
        <h3>
          {userDetails.first_name} {userDetails.last_name}
        </h3>
        <p>{userDetails.email}</p>
      </div>
    </section>
  );
};

const InfoSection = ({ userDetails }) => (
  <section className="info-section">
    <InfoBox title="USER INFORMATION" fields={userFields(userDetails)} />
  </section>
);

const InfoBox = ({ title, fields }) => (
  <div className="info-box">
    <h2>{title} :</h2>
    <div className="info-grid">
      {fields.map(
        (
          {
            label,
            placeholder,
            type,
            maxLength,
            minLength,
            readOnly,
            nullable,
            enumValues,
          },
          index
        ) => (
          <div className="info-item" key={index}>
            <label>{label}</label>
            {enumValues ? (
              <select>
                {enumValues.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                value={placeholder}
                maxLength={maxLength}
                minLength={minLength}
                readOnly={readOnly}
                required={!nullable}
              />
            )}
          </div>
        )
      )}
    </div>
  </div>
);

const userFields = (userDetails) => [
  {
    label: "Username",
    placeholder: userDetails.username,
    type: "text",
    readOnly: true,
  },
  {
    label: "First Name",
    placeholder: userDetails.first_name,
    type: "text",
    maxLength: 50,
    minLength: 1,
  },
  {
    label: "Last Name",
    placeholder: userDetails.last_name,
    type: "text",
    maxLength: 50,
    minLength: 1,
  },
  {
    label: "Email",
    placeholder: userDetails.email,
    type: "email",
    maxLength: 100,
    minLength: 5,
  },
  {
    label: "Phone Number",
    placeholder: userDetails.phone_number,
    type: "text",
    maxLength: 15,
    minLength: 10,
  },
  {
    label: "Country",
    placeholder: userDetails.country,
    type: "text",
    maxLength: 50,
  },
  // {
  //   label: "Gym Name",
  //   placeholder: userDetails.gym_name,
  //   type: "text",
  //   nullable: true,
  // },
  // {
  //   label: "Gym Address",
  //   placeholder: userDetails.gym_address,
  //   type: "text",
  //   nullable: true,
  // },
  // {
  //   label: "Gym Phone Number",
  //   placeholder: userDetails.gym_phone_number,
  //   type: "text",
  //   nullable: true,
  // },
];

export default ProfilePage;
