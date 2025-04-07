import React from "react";

export default function Lives({ livesLeft }) {
  return (
    <>
      <div className="hangman-container">
        <div className="balloons">
          <div className={`balloon-1 ${livesLeft < 6 ? "display-none" : ""}`}>
            <svg
              className="balloon-shape"
              width="70"
              height="85"
              viewBox="0 0 70 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2492 58.0717L31.8839 77.4554C41.2808 86.7323 57.2059 82.2025 60.3136 69.3688L66.6508 43.199C72.666 18.3587 49.0411 -3.41864 24.7717 4.59501C1.92412 12.1392 -4.87344 41.1679 12.2492 58.0717Z"
                fill="white"
                stroke="black"
                stroke-width="4"
              />
            </svg>
            <svg
              className="balloon-string"
              width="62"
              height="138"
              viewBox="0 0 62 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.9147 136.36L2.31766 2"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className={`balloon-2 ${livesLeft < 5 ? "display-none" : ""}`}>
            <svg
              className="balloon-shape"
              width="70"
              height="85"
              viewBox="0 0 70 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.92162 53.7345L25.618 75.6998C33.6088 86.2122 50.0143 83.9798 54.9056 71.7145L64.8796 46.7038C74.3469 22.9636 54.0388 -1.93554 28.8801 2.5658C5.19528 6.80341 -5.63875 34.5793 8.92162 53.7345Z"
                fill="white"
                stroke="black"
                stroke-width="4"
              />
            </svg>
            <svg
              className="balloon-string"
              width="32"
              height="133"
              viewBox="0 0 32 133"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.4356 130.76L2.00095 2"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className={`balloon-3 ${livesLeft < 4 ? "display-none" : ""}`}>
            <svg
              className="balloon-shape"
              width="70"
              height="86"
              viewBox="0 0 70 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.80258 51.1471L20.8953 74.8671C27.64 86.2193 44.1929 85.8652 50.446 74.2351L63.197 50.5195C75.3002 28.0087 57.9525 0.963466 32.4452 2.57729C8.43235 4.09657 -5.48724 30.4617 6.80258 51.1471Z"
                fill="white"
                stroke="black"
                stroke-width="4"
              />
            </svg>
            <svg
              className="balloon-string"
              width="7"
              height="143"
              viewBox="0 0 7 143"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79111 141.15L2 2"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className={`balloon-4 ${livesLeft < 3 ? "display-none" : ""}`}>
            <svg
              className="balloon-shape"
              width="70"
              height="86"
              viewBox="0 0 70 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.76447 49.0133L17.7836 73.8485C23.5359 85.7344 40.0588 86.7928 47.2806 75.7381L62.0071 53.196C75.9854 31.799 61.0066 3.37325 35.4546 2.80655C11.3997 2.27305 -4.71703 27.3554 5.76447 49.0133Z"
                fill="white"
                stroke="black"
                stroke-width="4"
              />
            </svg>
            <svg
              className="balloon-string"
              width="22"
              height="135"
              viewBox="0 0 22 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.91948 132.583L19.8035 2"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className={`balloon-5 ${livesLeft < 2 ? "display-none" : ""}`}>
            <svg
              className="balloon-shape"
              width="70"
              height="85"
              viewBox="0 0 70 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.57443 41.6344L9.182 68.6493C11.8657 81.5783 27.6331 86.6296 37.3302 77.6671L57.1041 59.3912C75.8734 42.0436 68.27 10.8254 43.6257 4.05164C20.4253 -2.32531 -1.31574 18.0757 3.57443 41.6344Z"
                fill="white"
                stroke="black"
                stroke-width="4"
              />
            </svg>
            <svg
              className="balloon-string"
              width="51"
              height="148"
              viewBox="0 0 51 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.99999 146L48.8035 2"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className={`balloon-6 ${livesLeft < 1 ? "display-none" : ""}`}>
            <svg
              className="balloon-shape"
              width="70"
              height="84"
              viewBox="0 0 70 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.9211 38.1236L5.47548 65.5958C6.69798 78.7437 21.8023 85.525 32.44 77.7019L54.1319 61.7495C74.7218 46.6075 70.6536 14.7353 46.9204 5.25064C24.5776 -3.67833 0.693516 14.1661 2.9211 38.1236Z"
                fill="white"
                stroke="black"
                stroke-width="4"
              />
            </svg>
            <svg
              className="balloon-string"
              width="81"
              height="138"
              viewBox="0 0 81 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 136L78.8533 1.68825"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="floating-man">
          <svg
            className="head"
            width="83"
            height="90"
            viewBox="0 0 83 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.5835 54.3279C71.5251 76.9383 50.2247 90.3346 30.4338 85.0316C10.6429 79.7287 -1.10565 57.477 4.95279 34.8665C11.0112 12.2561 32.3116 -1.14013 52.1025 4.16283C71.8934 9.46578 83.6419 31.7175 77.5835 54.3279Z"
              fill="white"
              stroke="black"
              stroke-width="6"
            />
          </svg>
          <svg
            className="arm-left"
            width="133"
            height="116"
            viewBox="0 0 133 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66.8475 59.284L65.1425 61.7929L62.6526 60.0601L29.6782 37.1124C22.0212 31.7836 11.4781 33.8078 6.33885 41.5932C1.48376 48.9482 3.22139 58.8151 10.297 64.069L73.6155 111.085L126.813 28.0711C131.942 20.0673 129.018 9.38393 120.528 5.10762C113.341 1.4876 104.584 3.75769 100.061 10.4134L66.8475 59.284Z"
              fill="white"
              stroke="black"
              stroke-width="6"
            />
          </svg>
          <svg
            className="body"
            width="121"
            height="170"
            viewBox="0 0 121 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.3029 3.89347L85.3584 7.72773C106.122 10.7832 120.477 30.092 117.421 50.8552L105.175 134.071C102.12 154.835 82.8109 169.19 62.0477 166.134L35.9922 162.3C15.229 159.244 0.874022 139.936 3.92948 119.172L16.1754 35.9562C19.2308 15.193 38.5397 0.838011 59.3029 3.89347Z"
              fill="white"
              stroke="black"
              stroke-width="6"
            />
          </svg>
          <svg
            className="arm-right"
            width="53"
            height="168"
            viewBox="0 0 53 168"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.6221 15.5352L49.5108 148.499C50.5513 156.232 45.1253 163.345 37.3915 164.386C29.6577 165.426 22.5447 160 21.5042 152.267L3.61548 19.3031C2.57499 11.5693 8.00099 4.45634 15.7348 3.41584C23.4686 2.37534 30.5816 7.80135 31.6221 15.5352Z"
              fill="white"
              stroke="black"
              stroke-width="6"
            />
          </svg>
          <svg
            className="leg-left"
            width="43"
            height="206"
            viewBox="0 0 43 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.9445 20.3763L37.3479 186.21C37.2006 195.616 29.4575 203.084 20.0531 202.892C10.6488 202.7 3.14441 194.92 3.29168 185.515L5.88825 19.6807C6.03551 10.2755 13.7786 2.80683 23.183 2.99893C32.5874 3.19102 40.0917 10.9711 39.9445 20.3763Z"
              fill="white"
              stroke="black"
              stroke-width="6"
            />
          </svg>
          <svg
            className="leg-right"
            width="44"
            height="207"
            viewBox="0 0 44 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.0085 20.8575L37.4119 186.691C37.2647 196.097 29.5215 203.565 20.1172 203.373C10.7128 203.181 3.20844 195.401 3.3557 185.996L5.95227 20.1618C6.09954 10.7567 13.8427 3.28797 23.247 3.48007C32.6514 3.67216 40.1557 11.4523 40.0085 20.8575Z"
              fill="white"
              stroke="black"
              stroke-width="6"
            />
          </svg>
        </div>
      </div>
      <div className="lives">
        <p>Lives Left: {livesLeft}</p>
      </div>
    </>
  );
}
