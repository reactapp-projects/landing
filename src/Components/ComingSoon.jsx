import React from "react";
import style from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={style.body}>
      <p className={style.first_text}>Coming Soon!</p>
      <p className={style.second_text}>Join the Waitlist</p>
      <div className={style.grid}>
        <div className={style.image}></div>
        <div>
          <p className={style.title1}>Subscribe for Exclusive Access</p>
          <p className={style.description}>
            Be the first to know when our app launches on iOS and Android!
            Subscribe now to receive exclusive updates, sneak peeks, and insider
            news straight to your inbox
          </p>
          <div style={{ backgroundColor: "#736D6D", height: "1px" }}></div>
          <p className={style.title}>Get Early Access:</p>
          <p className={style.description}>
            Want to be among the first to experience our revolutionary app?
            Subscribe today and gain early access privileges, including beta
            testing opportunities and special promotions reserved just for our
            subscribers.
          </p>
          <div style={{ backgroundColor: "#736D6D", height: "1px" }}></div>
          <p className={style.title}>Stay in the Loop:</p>
          <p className={style.description}>
            Don't miss out on the excitement! By subscribing, you'll stay in the
            loop with regular progress updates, feature announcements, and
            release dates. Join our community of early adopters and be part of
            shaping the future of our app!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
