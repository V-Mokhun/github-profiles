import React from "react";
import classes from "../Profile.module.scss";

const ProfileAvatar = ({ name, avatar, url }) => (
  <a
    href={url}
    className={classes.profile__avatar}
    target="_blank"
    rel="noreferrer"
  >
    <img className={classes.profile__img} src={avatar} alt={name} />
  </a>
);

export default ProfileAvatar;
