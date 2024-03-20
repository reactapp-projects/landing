import React from "react";
import style from "./AboutUs.module.css";

const AboutUS = () => {
  return (
    <div className={style.body}>
      <p className={style.first_text}>About Us</p>
      <div className={style.image}></div>
      <p className={style.second_text}>Our Story</p>
      <p className={style.story}>
        Be the first to know when our app launches on iOS and Android! Subscribe
        now to receive exclusive updates, sneak peeks, and insider news straight
        to your inbox Be the first to know when our app launches on iOS and
        Android! Subscribe now to receive exclusive updates, sneak peeks, and
        insider news straight to your inboxBe the first to know when our app
        launches on iOS and Android! Subscribe now to receive exclusive updates,
        sneak peeks, and insider news straight to your inbox
      </p>
      <p className={style.third_text}>Partners</p>
      <div className={style.grid}>
        <svg
          width="50"
          height="52"
          viewBox="0 0 66 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_29_233)">
            <path
              d="M33 70C51.2254 70 66 54.33 66 35C66 15.67 51.2254 0 33 0C14.7746 0 0 15.67 0 35C0 54.33 14.7746 70 33 70Z"
              fill="white"
            />
            <path
              d="M33 0C14.7753 0 0 15.6708 0 35C0 49.8354 8.69136 62.5103 20.9679 67.609C20.6691 64.8436 20.4247 60.5802 21.0765 57.5556C21.6741 54.8189 24.9333 40.1564 24.9333 40.1564C24.9333 40.1564 23.9556 38.0535 23.9556 34.9712C23.9556 30.1029 26.6173 26.4733 29.9309 26.4733C32.7556 26.4733 34.1136 28.7202 34.1136 31.3992C34.1136 34.3951 32.321 38.8889 31.3704 43.0658C30.5827 46.5514 33.0272 49.4033 36.2593 49.4033C42.1259 49.4033 46.6346 42.8354 46.6346 33.3868C46.6346 25.0041 40.958 19.1564 32.837 19.1564C23.4395 19.1564 17.9259 26.6173 17.9259 34.3374C17.9259 37.3333 19.0123 40.5597 20.3704 42.3169C20.642 42.6625 20.6691 42.9794 20.5877 43.3251C20.3432 44.4198 19.7728 46.8107 19.6642 47.3004C19.5284 47.9342 19.1753 48.0782 18.5506 47.7613C14.4222 45.716 11.842 39.3498 11.842 34.1934C11.842 23.1605 19.3926 13.0206 33.6519 13.0206C45.0864 13.0206 53.9951 21.6626 53.9951 33.2428C53.9951 45.3128 46.8247 55.0206 36.884 55.0206C33.5432 55.0206 30.3926 53.177 29.3333 50.9877C29.3333 50.9877 27.6765 57.6708 27.2691 59.3128C26.5358 62.3662 24.5259 66.1687 23.1679 68.5021C26.2642 69.5103 29.5235 70.0576 32.9457 70.0576C51.1704 70.0576 65.9457 54.3868 65.9457 35.0576C66 15.6708 51.2247 0 33 0Z"
              fill="#E60019"
            />
          </g>
          <defs>
            <clipPath id="clip0_29_233">
              <rect width="66" height="70" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="50"
          height="52"
          viewBox="0 0 72 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7166 30.0152C18.669 33.0854 19.8219 35.9652 21.075 38.743C23.2305 43.7183 24.6842 46.35 26.6938 49.6152C29.15 53.5139 31.8614 57.9531 36.3226 60.8285C39.5809 62.924 43.5454 63.9962 47.355 63.9962C52.7231 63.9962 57.3348 61.7057 60.2968 59.0209C63.2042 56.3892 66.9682 51.3164 66.9682 41.419C66.9682 38.0076 68.5221 35.0791 69.675 32.7398C69.675 32.6911 69.7252 32.5936 69.8254 32.3987C70.2766 31.424 70.828 30.1569 70.828 28.8899C70.828 27.9639 70.5773 26.8917 69.9257 25.9658C68.9231 24.3088 67.1186 23.724 65.4599 23.724C61.6001 23.724 58.9388 26.3557 57.5854 29.0405L57.1343 29.9177C56.5829 29.138 56.0315 28.3095 55.5804 27.5785C54.1768 25.1905 53.3748 23.5823 52.673 21.531C52.1216 19.9228 51.6705 18.0709 51.3697 16.5557C50.5176 11.7753 49.114 10.2158 46.8036 9.63099C45.0993 9.19238 43.0943 9.53352 41.6361 10.4595C40.6381 8.26643 38.9338 7.29175 36.6735 7.29175C33.4654 7.29175 30.5535 9.33858 30.5535 12.8031C30.5535 13.2417 30.6037 13.6804 30.6538 14.2164C30.2528 14.119 29.8016 14.0702 29.3505 14.0702C25.8918 14.0702 23.3307 16.4095 23.3307 19.5816C23.3307 20.3126 23.431 21.1411 23.6816 22.1158C23.3809 22.0671 23.0801 22.0671 22.7793 22.0671C21.075 22.1645 19.5211 22.7981 18.4138 24.1139C17.3155 25.381 16.8644 27.3304 17.7166 30.0152Z"
            fill="#1F1F1F"
          />
          <path
            d="M20.5737 29.1379C20.1226 27.7246 20.1727 26.6524 20.7241 25.9702C21.2755 25.3366 22.0274 25.0442 22.9297 24.9955C24.4836 24.9467 25.0851 26.0189 25.9874 28.7967C26.5388 30.5512 27.6416 33.0898 28.2932 34.5031C29.1454 36.2088 30.3484 38.4993 30.8998 39.2834C31.351 39.9657 31.752 40.1607 32.2031 40.1607C33.0051 40.1607 33.6067 39.7221 33.6067 38.9423C33.6067 38.5037 33.1555 37.7727 32.9049 37.3341C32.4537 36.5056 31.5013 34.8486 30.8497 33.4353C30.1479 31.8758 29.3459 29.9265 28.6943 28.1676C28.2932 27.1442 27.8421 25.6822 27.391 24.2202C26.6892 21.9784 26.3383 20.6138 26.3383 19.586C26.3383 18.0265 27.5413 17.0031 29.3459 17.0031C30.6492 17.0031 31.5013 17.6366 32.0527 19.9271C32.5039 22.0227 33.3059 25.4385 34.4588 28.1189C35.2107 29.8733 36.3135 32.217 36.9651 33.3866C37.3662 34.0689 37.8173 34.6537 37.8173 34.8974C37.8173 35.2385 37.1656 35.7746 36.6143 36.5056C36.2634 36.9442 36.113 37.2366 36.113 37.5777C36.113 37.8702 36.3135 38.1626 36.6143 38.5524C36.915 38.9423 37.2158 39.3322 37.5667 39.3322C37.8173 39.3322 37.9677 39.2347 38.118 39.0398C39.672 37.1391 41.3763 35.8233 43.3358 34.7467C45.6416 33.4796 48.0021 32.8461 49.8568 32.4562C50.7591 32.2613 51.0097 32.0664 51.0097 31.579C51.0097 30.9942 50.5586 30.6531 49.957 30.6043C49.5059 30.5556 49.1049 30.6043 48.4031 30.6531C47.9018 30.7018 47.6512 30.4581 47.3505 29.8246C46.4482 27.9727 44.6937 24.8493 43.6411 20.8531C43.1899 19.1474 42.7889 17.3442 42.5383 15.0005C42.3879 13.9284 42.5884 13.5385 43.1398 13.0512C43.8416 12.4664 45.0948 12.2227 46.0472 12.4664C47.2001 12.7588 47.8016 13.636 48.4031 17.0518C48.7039 18.66 49.2051 20.7069 49.8067 22.4657C50.5586 24.7075 51.511 26.5638 52.9646 29.0493C53.7667 30.4138 54.7692 31.8271 55.8218 33.1961C55.6213 33.7809 55.2705 34.1708 54.1175 35.0967C52.9646 36.0227 51.8117 36.9974 50.7591 38.8005C50.0072 40.1164 49.6563 41.5784 49.6563 42.5531C49.6563 43.479 49.8568 43.674 50.4583 43.674C51.511 43.674 52.3631 43.479 52.4132 43.0404C52.6639 41.286 52.9646 40.1651 53.9672 38.8448C54.5687 38.1138 55.6213 37.1879 56.4735 36.4569C58.0775 35.1898 58.6289 34.4588 59.1803 32.6556C59.431 31.8271 59.7317 31.0474 60.1327 30.3164C61.0851 28.6107 62.7894 26.6613 65.4507 26.6613C66.3029 26.6613 67.0046 26.905 67.4558 27.5872C67.7064 27.9771 67.8067 28.5132 67.8067 28.9031C67.8067 29.7803 67.155 30.9986 66.8543 31.5834C65.7515 33.874 63.9469 37.3872 63.9469 41.4322C63.9469 50.2575 60.7388 54.648 58.2279 56.8898C55.7717 59.1315 51.9074 61.0853 47.3459 61.0853C44.0877 61.0853 40.7246 60.1594 37.9677 58.405C34.1079 55.9195 31.6973 52.0164 29.2411 48.1176C27.2861 44.9499 25.9327 42.46 23.8229 37.6353C22.6335 34.8398 21.5262 32.1107 20.5737 29.1379Z"
            fill="#FFE450"
          />
          <path
            d="M33.4653 12.8031C33.4653 10.9512 35.2197 10.2202 36.6734 10.2202C38.2273 10.2202 38.7787 10.9512 39.1797 12.5107C39.5306 13.7778 39.681 14.9474 39.8313 16.312C40.0319 17.6765 40.7336 20.8 40.9341 21.5797C41.686 24.2601 43.1898 27.4322 44.9944 31.2335C43.9417 31.5746 42.5382 32.1595 41.5858 32.6468C40.3827 33.2803 40.1321 33.2803 39.6308 32.3544C38.5782 30.4538 37.8263 29.0405 37.1746 27.3791C36.6232 26.0145 36.0719 24.455 35.6207 22.6474C34.8688 19.5772 34.7686 18.7 34.167 17.2822C33.8162 15.8246 33.4653 14.0215 33.4653 12.8031Z"
            fill="#FFE450"
          />
          <path
            d="M15.5108 45.4461C14.4491 46.084 8.82121 48.9505 7.54982 49.4068C6.64299 49.7347 5.65868 49.6549 5.07995 47.9891C4.36906 45.929 5.36704 45.4416 6.78881 44.9056C8.04653 44.4315 13.2643 42.5973 14.4764 42.2783C15.3286 42.0568 15.921 42.3359 16.3311 43.3328C16.7822 44.4271 16.4724 44.8657 15.5108 45.4461Z"
            fill="#1F1F1F"
          />
          <path
            d="M10.8718 33.8341C9.35891 33.874 3.07486 33.6126 1.63942 33.4753C0.39081 33.3557 -0.115013 32.8196 0.021696 31.0607C0.167519 29.1734 0.923975 29.0582 2.1498 29.1734C3.57157 29.3063 10.1564 30.3474 11.2045 30.662C12.289 30.9898 12.4394 31.4683 12.3073 32.3898C12.1387 33.586 11.5827 33.812 10.8718 33.8341Z"
            fill="#1F1F1F"
          />
          <path
            d="M11.6511 21.4646C9.91947 20.933 4.77921 17.907 3.43947 17.1273C2.22731 16.4184 2.07238 15.7805 2.91542 14.2254C3.66276 12.852 4.49212 12.6127 5.7225 13.233C7.14883 13.9551 12.1843 17.7653 13.1458 18.5184C14.0754 19.245 13.9478 19.6216 13.4602 20.5564C12.9726 21.4912 12.5169 21.7305 11.6511 21.4646Z"
            fill="#1F1F1F"
          />
        </svg>
        <svg
          width="50"
          height="52"
          viewBox="0 0 72 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_29_244)">
            <path
              d="M0 30.24C0 15.9847 0 8.85709 5.06119 4.42855C10.1224 0 18.2682 0 34.56 0H37.44C53.7318 0 61.8776 0 66.9389 4.42855C72 8.85709 72 15.9847 72 30.24V32.76C72 47.0153 72 54.1429 66.9389 58.5715C61.8776 63 53.7318 63 37.44 63H34.56C18.2682 63 10.1224 63 5.06119 58.5715C0 54.1429 0 47.0153 0 32.76V30.24Z"
              fill="#0077FF"
            />
            <path
              d="M38.31 45.3863C21.9 45.3863 12.5401 35.5426 12.1501 19.1626H20.3701C20.6401 31.1851 26.7 36.2776 31.5 37.3276V19.1626H39.2403V29.5313C43.9803 29.0851 48.9597 24.3601 50.6397 19.1626H58.3798C57.0898 25.5676 51.6898 30.2926 47.8498 32.2351C51.6898 33.8101 57.8401 37.9314 60.1801 45.3863H51.6598C49.8298 40.3988 45.2703 36.5401 39.2403 36.0151V45.3863H38.31Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_29_244">
              <rect width="72" height="63" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AboutUS;