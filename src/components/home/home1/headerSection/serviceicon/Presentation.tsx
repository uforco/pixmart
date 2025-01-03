import React from "react";
import ConterDomSvg from "./ConterDomSvg";

const Presentation = ({iconSize}: {iconSize?: string | number}) => {
  return (
    <ConterDomSvg>
      <svg
        version="1.1"
        viewBox="0 0 2048 2048"
        width={iconSize? iconSize : "128"}
        height={iconSize? iconSize : "128"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          transform="translate(69,26)"
          d="m0 0h1904l23 1 16 4 9 6 11 11 10 14 6 6v200l-10 11-7 9-9 9-12 6-23 4-34 3h-4v1097l-1 65-1 18-3 16-6 14-9 13-9 10-9 7-13 6-14 4-15 2-15 1-35 1-134 1h-93l8 28 15 55 4 20v16l-3 5-3 3-24 7h-12l-5-3-4-4-8-19-9-30-13-47-6-28-1-2h-28l-68 1 4 13 15 55 10 36 11 43 13 48 8 29 12 47 13 49 10 35 8 19 6 8 9 6 11 4 10 2 13-2 12-5 12-9 4-5 3-7 1-5v-21l-5-25-13-48-5-25-1-15 3-5 12-7 15-6 9-1 7 3 6 7 5 11 11 35 13 47 5 24 1 10v11l-2 14-5 16-6 12-7 10-7 9-10 11-12 9-15 8-18 5-13 2h-24l-18-3-15-5-11-6-13-10-9-9-10-14-10-21-7-20-15-53-11-41-16-60-11-41-12-45-28-108-3-16v-3l-83 1h-238l-1 75v32l1 17 21 9 13 8 12 10 9 11 8 11 6 10 6 14 4 17 1 11v17l-2 14-5 14-9 17-10 15-11 12-13 10-16 8-11 4-14 3-7 1h-29l-20-4-17-7-13-9-12-11-9-10-10-16-6-12-6-20-1-6v-29l3-16 6-15 7-13 9-12 15-15 21-13 17-7 1-1 1-125-320 1-2 11-6 24-9 32-11 43-6 21-10 38-13 48-10 38-14 52-10 39-11 36-10 21-8 12-12 14-11 9-15 8-20 6-12 2h-25l-17-3-18-6-11-6-16-13-10-12-9-15-8-17-3-11-1-7v-21l5-29 8-32 8-30 10-37 15-56 12-45 13-49 12-45 6-21h-256l-25-1-14-2-13-5-11-7-12-11-7-7-10-16-5-15-2-13-1-13-1-169v-147l1-376 3-9 6-5 12-3h11l16 4 7 4 3 5 1 18 1 683 3 16 1 4 10 3 10 1 27 1h680l507-1h462l18-2 7-3 2-5 2-17 1-31 1-1132-118 1h-1521l-92 1-1 289-1 52-1 11-4 6-5 3-20 4-9-1-12-6-6-7-1-5-1-36-1-315-32-1-20-3-16-6-6-5-12-17-9-10-1-1v-199l11-15 6-8 12-11 11-5 10-2zm-3 59-7 1v164l1 1 82-3 152-1h1458l164 1 58 3h10l2-5 1-80v-80l-1-1zm485 1480-33 1-4 2-6 25-11 41-14 54-13 49-22 81-12 44-8 29-4 20v13l4 13 7 10 11 7 10 5 11 3h11l12-4 12-8v-2h2l6-9 6-16 15-56 12-45 25-94 17-63 19-69 6-25v-6zm475 180-15 2-13 5-8 6-5 5-6 7-6 12-1 5v18l4 13 4 7 10 11 10 6 14 5 15 1 8-2 14-7 10-9 7-9 4-10 1-5v-18l-3-13-4-8-5-7-12-9-13-5z"
          fill="#0269F7"
        />
        <path
          transform="translate(596,362)"
          d="m0 0h12l53 6 25 4 20 6 28 10 30 15 16 10 15 10 16 12 10 9 11 9 19 19 9 11 10 12 11 16 12 20 9 16 9 20 9 23 5 17 9 41 4 17 1 10v25l-5 30-7 36-6 26-8 24-11 26-14 26-12 19-9 12-13 16-9 11-21 21-10 8-11 9-11 8-15 10-24 13-17 8-26 10-19 6-27 6-23 4-21 2h-49l-24-3-31-6-27-8-24-10-23-11-14-8-21-14-14-11-14-12-7-7-8-7-12-13-12-14-12-16-10-15-14-24-12-26-9-24-8-28-5-25-4-33v-37l4-31 5-26 7-25 12-31 8-17 12-21 12-19 14-19 11-13 14-15 11-11 11-9 12-10 24-16 24-14 27-13 24-9 21-6 26-5 46-6zm-33 63-32 8-30 10-25 11-26 15-11 8-18 14-24 24-18 22-13 20-11 20-9 21-8 21-4 13-4 21-3 22-1 16v16l2 27 4 24 6 23 12 31 8 16 10 18 10 14 10 13 16 17 9 9 8 7 16 13 20 13 16 9 16 8 25 10 20 6 26 5 25 2h28l25-2 28-5 27-8 19-8 17-8 23-14 21-16 11-9 10-9 8-8 9-11 12-15 11-17 13-24 13-33 5-15 6-24 1-10-3-2-6-1-41-1h-178l-46-1-12-2-6-5-7-11-5-15-1-13v-260zm72 3-1 14v224h224l8-3v-9l-5-26-5-16-10-24-10-21-10-17-12-17-11-13-11-12-12-12-14-11-12-9-19-11-23-12-29-11-40-13z"
          fill="#0269F8"
        />
        <path
          transform="translate(1128,924)"
          d="m0 0h49l18 2 13 4 9 5 9 8 11 16 5 12 1 7 1 49-1 353-2 15-4 10-7 11-8 9-13 9-13 3-19 2-22 1h-25l-28-2-15-4-13-9-9-10-7-11-3-8-2-9-1-10-1-22v-60l1-306 1-13 4-13 8-13 9-10 9-6 10-5 14-3zm17 59-27 1-7 1 1 6v389l1 1 37 1h23l9-2 2-4 1-327v-58l-1-7-1-1z"
          fill="#0269F7"
        />
        <path
          transform="translate(1379,995)"
          d="m0 0h54l17 3 16 8 10 8 8 10 5 10 3 11 1 6 1 50v231l-1 47-2 15-7 16-8 11-12 10-9 4-17 3-11 1-27 1h-17l-30-2-13-3-11-6-11-9-9-12-5-11-2-10-1-10v-284l1-48 4-11 6-12 10-11 12-8 14-5 14-2zm-15 59-3 2v278l1 47 1 1h61l8-1 1-1 1-262v-62l-6-1-21-1z"
          fill="#0269F8"
        />
        <path
          transform="translate(1648,1117)"
          d="m0 0 35 1 16 2 10 3 11 7 10 9 9 12 3 9 1 12v187l-1 29-2 17-7 11-15 15-8 5-10 2-31 2h-56l-19-2-13-4-9-6-8-8-9-14-3-8-2-19v-99l1-90 1-25 4-13 7-11 7-8 14-9 13-4 21-2zm-25 63-8 1-2 2v184l1 10 2 1h60l4-1 1-136v-55l-2-4-4-1-17-1z"
          fill="#0268F7"
        />
        <path
          transform="translate(1054,611)"
          d="m0 0h696l15 2 8 4 2 3v39l-2 7-3 2-9 1-65 1-338 1h-308l-18-1-5-3-3-3-8-17-1-10 4-10 6-9 7-5 6-1z"
          fill="#0269F8"
        />
        <path
          transform="translate(1108,475)"
          d="m0 0h619l36 2 8 2 4 5 1 5v37l-4 4-7 2-10 1-92 1h-600l-31-1-6-3-7-8-4-12v-12l7-13 5-6 4-2 9-1z"
          fill="#0269F8"
        />
        <path
          transform="translate(441,1176)"
          d="m0 0h477l35 1 17 3 6 4 3 6 2 11-1 14-4 13-3 3-9 3-8 1-32 1h-616l-22-1-11-4-5-8-3-9-1-9 3-12 5-9 8-5 9-2z"
          fill="#0269F8"
        />
        <path
          transform="translate(1059,747)"
          d="m0 0h324l17 1 15 3 6 4 3 7 1 5v16l-2 12-4 5-10 4-3 1-28 1h-322l-22-1-10-5-4-4-5-14v-11l6-11 8-9 9-3z"
          fill="#0269F8"
        />
        <path
          transform="translate(443,1312)"
          d="m0 0h55l127 1 14 2 8 5 5 8v21l-2 9-6 8-6 4-4 1-54 1h-286l-12-2-6-4-5-6-3-9v-14l4-13 6-7 3-2 5-1 59-1z"
          fill="#0269F7"
        />
        <path
          transform="translate(1393,1503)"
          d="m0 0h200l59 2v1l-45 1-48 1h-345l-249 1-11-1h-26l-49-1-37-1v-1l47-1z"
          fill="#0355E1"
        />
        <path
          transform="translate(155,826)"
          d="m0 0h1l1 276v374l-2-2-2-5-1-23v-355l1-246z"
          fill="#0353DE"
        />
        <path
          transform="translate(360,1504)"
          d="m0 0h415v1l-28 1h-12l-26 1-28 1h-268l-85-1h-50l-16-1v-1z"
          fill="#0353DE"
        />
        <path
          transform="translate(443,1312)"
          d="m0 0h55l127 1 8 2v1l-34 1-9 1h-54l-20-1h-26l-44-1h-77l-45-1v-1l21-1z"
          fill="#0555E0"
        />
        <path
          transform="translate(1185,1006)"
          d="m0 0h1l1 175v134l-1 58-2 4v-328z"
          fill="#0353DF"
        />
        <path
          transform="translate(1226,668)"
          d="m0 0h168l83 1v1l-119 1h-209l-27-1v-1z"
          fill="#0354DF"
        />
        <path
          transform="translate(536,1367)"
          d="m0 0 9 1 7-1 3 1 7-1 27 1 6 1 13 1v1l-28 1h-110v-1l29-2h22l14-1z"
          fill="#0555DF"
        />
        <path
          transform="translate(155,560)"
          d="m0 0h1v96l-1 11-2 1-1-16v-27l1-41z"
          fill="#0353DE"
        />
        <path
          transform="translate(99,780)"
          d="m0 0 2 2-1 52-1 151h-1v-203z"
          fill="#0452DD"
        />
        <path
          transform="translate(1052,1583)"
          d="m0 0h1v57l-1 35-3-4-1-11 2-26 1-36z"
          fill="#0355E1"
        />
        <path
          transform="translate(99,780)"
          d="m0 0 2 2-1 48-2 2v-50z"
          fill="#0452DD"
        />
        <path
          transform="translate(646,367)"
          d="m0 0h8l18 3v1l-16 1-10-4z"
          fill="#0355E0"
        />
        <path
          transform="translate(1631,1775)"
          d="m0 0 8 1 1 2-12 1-9 1 1-2z"
          fill="#0354E0"
        />
        <path
          transform="translate(863,637)"
          d="m0 0 2 3 4 12-1 4-2 1-3-15z"
          fill="#0353DE"
        />
        <path
          transform="translate(99,780)"
          d="m0 0 2 2v8l-2 5h-1v-13z"
          fill="#0B5FE7"
        />
      </svg>
    </ConterDomSvg>
  );
};

export default Presentation;
