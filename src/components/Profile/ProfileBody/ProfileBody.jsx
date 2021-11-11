import React from "react";
import classes from "../Profile.module.scss";
import ProfileList from "./ProfileList";

const ProfileBody = ({ data }) => {
  const date = new Date(data.created_at).toLocaleDateString();

  return (
    <div className={classes.profile__body}>
      <div className={classes.profile__top}>
        <a
          href={data.html_url}
          rel="noreferrer"
          target="_blank"
          className={classes.profile__name}
        >
          {data.name} ({data.login})
        </a>
        <span className={classes.profile__created}>{date}</span>
      </div>
      <div className={classes.profile__content}>
        <div className={classes.profile__info}>
          <h5 className={classes.profile__info_title}>Bio: </h5>
          <p className={classes.profile__info_text}>{data.bio}</p>
        </div>
        <ProfileList data={data} />
      </div>
    </div>
  );
};

export default ProfileBody;
