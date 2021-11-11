import React from "react";
import FollowersIcon from "../../../assets/img/person-icon.png";
import classes from "../Profile.module.scss";

const ProfileList = ({ data }) => (
  <ul className={classes.profile__list}>
    <li className={classes.profile__item}>
      <span className={classes.profile__followers}>
        Followers:
        <img aria-hidden="true" src={FollowersIcon} alt="" />
        {data.followers}
      </span>
    </li>
    {data.location && (
      <li className={classes.profile__item}>Location: {data.location}</li>
    )}
    {data.blog && (
      <li className={classes.profile__item}>
        <a href={data.blog} rel="noreferrer" target="_blank">
          Blog
        </a>
      </li>
    )}
    <li className={classes.profile__item}>
      Hireable: {data.hireable ? "Yes" : "No"}
    </li>
    {data.email && (
      <li className={classes.profile__item}>
        Email: <a href={`mailto:${data.email}`}>{data.email}</a>
      </li>
    )}
  </ul>
);

export default ProfileList;
