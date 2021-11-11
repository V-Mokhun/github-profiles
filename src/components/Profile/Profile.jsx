import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../../API/index";
import ThemeContext from "../../context/ThemeContext";
import classes from "./Profile.module.scss";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileBody from "./ProfileBody/ProfileBody";

const Profile = ({ query }) => {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      setProfile(JSON.parse(localStorage.getItem("profile")));
    }
  }, []);

  useEffect(() => {
    if (query) {
      axios
        .get(`${API_URL}${query}`)
        .then((res) => res.data)
        .then((data) => {
          setProfile(data);
          localStorage.setItem("profile", JSON.stringify(data));
          setError("");
        })
        .catch(() => {
          setError("User not found! Please try again");
        });
    }
  }, [query]);

  return (
    <div>
      {error && <h3 className={classes.profile__error}>{error}</h3>}
      {profile.login && (
        <div
          className={`${classes.profile} ${
            theme === "dark" ? classes.dark : ""
          }`}
        >
          <ProfileAvatar
            name={profile.name}
            avatar={profile.avatar_url}
            url={profile.html_url}
          />
          <ProfileBody data={profile} />
        </div>
      )}
    </div>
  );
};

export default Profile;
