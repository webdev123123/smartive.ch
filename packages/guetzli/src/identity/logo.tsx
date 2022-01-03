import React, { FC } from 'react';

export type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export const Logo: FC<LogoProps> = ({ inverted, className = '' }) => (
  <svg
    className={className}
    width="360"
    height="63"
    viewBox="0 0 360 63"
    xmlns="http://www.w3.org/2000/svg"
    fill={inverted ? '#ffffff' : '#252525'}
  >
    <path d="M333.429 20.1962H337.085V30.0561H339.581V20.1962H343.236V18.1145H333.429V20.1962Z" />
    <path d="M344.865 18.1145V30.0561H347.314V22.2545H347.413L350.503 29.9976H352.171L355.261 22.2836H355.36V30.0561H357.809V18.1145H354.696L351.407 26.1379H351.267L347.979 18.1145H344.865Z" />
    <path d="M36.8575 29.7408C35.4256 22.2954 29.4693 17.5416 19.1602 17.5416C8.56501 17.5416 1.34856 22.7535 1.37729 30.886C1.34856 37.3007 5.30023 41.5387 13.7482 43.2856L21.2506 44.8606C25.2885 45.7483 27.1785 47.3806 27.1785 49.872C27.1785 52.8788 23.914 55.141 18.9884 55.141C14.2349 55.141 11.1422 53.0793 10.2545 49.1273L0.145813 50.1012C1.43442 58.1763 8.22123 62.9585 19.0172 62.9585C30.0132 62.9585 37.7739 57.2602 37.8023 48.9268C37.7739 42.6555 33.7361 38.8185 25.4315 37.0143L17.929 35.4107C13.4618 34.4084 11.6861 32.8622 11.7149 30.3134C11.6861 27.3353 14.9793 25.2736 19.3035 25.2736C24.0857 25.2736 26.6058 27.8795 27.4076 30.7714L36.8575 29.7408Z" />
    <path d="M45.3401 62.0995H55.7064V35.3536C55.7064 29.9412 59.3146 26.2759 63.7818 26.2759C68.1632 26.2759 71.17 29.2253 71.17 33.7499V62.0995H81.3359V34.666C81.3359 29.712 84.2856 26.2759 89.2967 26.2759C93.4776 26.2759 96.7995 28.7385 96.7995 34.1792V62.0995H107.194V32.5756C107.194 22.7535 101.525 17.5416 93.4492 17.5416C87.0633 17.5416 82.1952 20.6918 80.2477 25.5883H79.7897C78.1002 20.6056 73.8334 17.5416 67.9056 17.5416C62.0065 17.5416 57.5967 20.5772 55.7639 25.5883H55.2484V18.1142H45.3401V62.0995Z" />
    <path d="M130.396 62.9872C137.297 62.9872 141.421 59.7515 143.311 56.0574H143.654V62.0995H153.62V32.6618C153.62 21.0352 144.141 17.5416 135.751 17.5416C126.501 17.5416 119.399 21.6653 117.109 29.6833L126.787 31.0581C127.818 28.0512 130.739 25.474 135.808 25.474C140.619 25.474 143.253 27.9366 143.253 32.2608V32.4326C143.253 35.4107 140.132 35.5537 132.371 36.3842C123.838 37.3007 115.677 39.8491 115.677 49.7574C115.677 58.4055 122.005 62.9872 130.396 62.9872ZM133.087 55.3702C128.763 55.3702 125.671 53.394 125.671 49.5857C125.671 45.6053 129.136 43.9441 133.775 43.2856C136.495 42.9135 141.936 42.2262 143.282 41.1377V46.3209C143.282 51.2177 139.33 55.3702 133.087 55.3702Z" />
    <path d="M164.066 62.1126H174.432V36.2543C174.432 30.6702 178.642 26.7182 184.341 26.7182C186.088 26.7182 188.264 27.0333 189.152 27.3196V17.7839C188.206 17.6121 186.574 17.4975 185.429 17.4975C180.389 17.4975 176.179 20.3611 174.576 25.4584H174.118V18.1273H164.066V62.1126Z" />
    <path d="M219.761 18.1197H211.084V7.58167H200.718V18.1197H194.475V26.138H200.718V50.5934C200.66 58.8693 206.674 62.9356 214.463 62.7064C217.412 62.6205 219.446 62.0479 220.563 61.6753L218.816 53.5715C218.243 53.7145 217.069 53.9724 215.78 53.9724C213.174 53.9724 211.084 53.056 211.084 48.8752V26.138H219.761V18.1197Z" />
    <path d="M228.44 62.1004H238.806V18.1151H228.44V62.1004ZM233.651 11.8725C236.944 11.8725 239.636 9.35244 239.636 6.25973C239.636 3.13861 236.944 0.61853 233.651 0.61853C230.33 0.61853 227.638 3.13861 227.638 6.25973C227.638 9.35244 230.33 11.8725 233.651 11.8725Z" />
    <path d="M288.754 18.1145H277.729L267.591 50.7887H267.133L257.025 18.1145H245.971L261.635 62.0998H273.09L288.754 18.1145Z" />
    <path d="M312.176 62.9585C322.427 62.9585 329.472 57.9474 331.305 50.3016L321.625 49.2132C320.222 52.936 316.786 54.8834 312.319 54.8834C305.618 54.8834 301.179 50.4734 301.093 42.9419H331.734V39.7633C331.734 24.3284 322.456 17.5416 311.631 17.5416C299.032 17.5416 290.813 26.791 290.813 40.3647C290.813 54.1675 298.917 62.9585 312.176 62.9585ZM301.122 35.9546C301.437 30.3421 305.589 25.617 311.775 25.617C317.731 25.617 321.74 29.9699 321.797 35.9546H301.122Z" />
  </svg>
);
