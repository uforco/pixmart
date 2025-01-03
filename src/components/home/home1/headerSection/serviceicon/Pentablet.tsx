import React from "react";
import ConterDomSvg from "./ConterDomSvg";

const Pentablet = ({iconSize}: {iconSize?: string | number}) => {
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
          transform="translate(1910,87)"
          d="m0 0h38l17 4 13 5 14 8 15 13 11 12 12 19 7 15 6 17 2 16v12l-2 16-6 16-9 17-9 12-13 17-12 13-7 8-9 10-3 4h-2l-2 4-15 16-11 12-14 15-9 10-9 11-9 9-8 10 9 2 26 6 24 10 16 9 16 12 17 17 11 15 9 15 8 16 6 16 3 15 2 20v112l-1 123v966l-1 44-2 25-4 20-7 19-10 17-9 12-9 10-14 14-10 8-16 10-15 7-25 7-17 3-29 2-1613 1h-87l-33-2-25-5-16-6-16-8-12-8-11-9-12-11-7-7-10-13-12-20-8-20-6-20-2-12-2-40-1-68v-93l-1-87v-110l1-7-1-2v-489l1-70 1-221 1-53 2-36 4-17 7-19 8-16 10-16 10-13 14-14 9-8 15-10 16-8 16-6 15-4 13-2 36-2h1336l14-7 14-11 10-9 8-7 13-12 8-7 13-11 15-13 8-7 14-12 13-12 8-7 10-9 8-7 15-13 14-13 8-7 12-11 8-7 13-12 8-7 14-12 14-13h2v-2l8-7 12-11 13-12 7-7 8-7 14-13 14-11 10-7 16-9 17-7zm14 62-12 4-12 6-14 11-10 9-7 6v2l-4 2-18 18-8 7-10 9-1 4 9 9 8 7 32 32 8 7 9 10h2v2l9 6 7-6 14-15 12-13 7-8 7-7 8-10 9-12 7-11 4-11v-9l-4-13-7-14-9-10-9-6-11-5-5-1zm-145 121-6 3-12 11-10 8-14 12-2 1v2l-4 2-17 16-10 9-9 7v2l-4 2-17 16-15 13-10 9-8 7-10 9-11 9-15 13-10 8-10 9-11 9-14 12-16 13-11 9v2l-4 2-12 10-11 9-13 11-12 11-14 11-12 11-8 7-12 9v2l-4 2-12 10-17 13-13 11-13 10-13 11-10 8-13 11-28 22-13 11-10 8-14 11-14 12-17 13-16 12-14 11-12 10-9 7-15 12-19 14-16 13-14 11-15 12-30 18v2l18 11 26 15 22 15 17 12 16 13 24 22 10 11 9 11 7 8 8 11 8 12 12 20 10 18 6 14 7 9 5-3 7-7 6-9 11-13 10-13 16-21 12-15 14-19 10-12 12-16 9-11 10-13 13-17 22-28 13-16 10-12 18-22 11-14 13-16 9-11 11-13 8-10 11-13 18-22 11-13 9-11 10-11 9-11 12-14 18-22 8-10 14-17 12-14 9-11 11-12 8-10 7-7 7-9 9-10 7-8 12-14 9-11 11-12 8-10 10-11 9-11 8-8 9-11 13-13 7-8 12-13 7-8 11-13 8-10 2-5-9-10-14-15-8-8-8-7-27-27-8-10-4-2zm-339 200-30 2h-1100l-142 1-25 2-16 4-14 7-12 9-11 11-10 15-5 11-4 11-2 11-1 12-1 39v1195l2 18 4 18 8 17 9 11 6 7 16 12 14 7 11 4 20 3 40 1h1644l32-1 27-2 17-4 16-7 11-8 10-9 11-14 5-10 5-18 2-11 1-11 1-37v-1199l-1-15-4-16-7-16-8-11-14-14-13-9-10-5-15-5-17-3-37-1-11 1-10 5-19 19-7 8-13 16-10 13-7 9-9 10-7 9v3h50l27 3 15 5 9 6 10 9 10 14 5 11 3 10 1 8v1096l-2 21-3 12-5 10-7 9-11 11-15 9-17 3-18 1-49 1h-1401l-21-1-13-2-10-4-10-8-9-8-10-13-6-15-2-10-1-12-1-34v-936l1-132 4-16 7-13 12-14 9-8 12-7 8-3 9-1 986-2 16-7 12-9 9-8 11-9 13-11 13-10 11-10 10-8 4-3v-2l4-2 13-13v-3zm-216 157-880 2-1 3v1108l1 2h1478l4-2 1-270v-812l-1-27-3-3h-121l-7 7-11 14-13 15-11 12-6 9 8 2 61 3 11 2 8 5 4 6 4 16v122l-2 11-6 8-8 6-9 3h-13l-10-4-6-4-3-4-4-16-1-9v-80l-5-2h-75l-10 3-3 3v2h-2l-7 9-13 16-8 9-6 8-20 25-12 16-11 13-8 10-7 8-8 10-2 4h-2l-8 11-11 14-9 12-12 15-9 11-11 14-10 13-14 19-22 28-10 12-8 11-14 18-11 13-9 10-13 13-18 14-16 10-21 12-25 12-26 11-47 16-26 7-49 11-50 7-10 1h-22l-20-4h-12l-5 3-11 14-17 16-13 13-15 11-10 5-14-7-12-11-6-9-3-7 1-5 15-20 11-12 17-17 5-6 8-7 5-8 1-6-5-21-1-8v-12l3-31 5-35 5-24 11-43 12-36 8-21 11-25 8-16 10-19 15-24 10-13 12-13 9-9 14-11 13-11 13-10 15-12 14-11 17-14 12-9 10-8 39-30 18-14 13-10 11-9 14-12 3-4v-2zm-177 271-3 5-8 17-10 24-12 36-7 24-10 48-6 29-2 17v11l2 11 4 8 7 6 10 4 6 1h14l33-5 36-7 36-9 38-12 28-11 20-9 9-6-2-5-13-24-10-18-10-16-14-19-11-13-12-13-12-12-11-9-12-10-18-12-22-13-19-10-16-7z"
          fill="#056BF8"
        />
        <path
          transform="translate(632,1274)"
          d="m0 0h136l44 1 14 3 8 4 7 10 2 4v13l-4 11-6 10-10 8-199 1-11 2-8 5-8 10-5 11-1 9 3 13 7 9 10 7 15 6 51 14 39 10 36 10 228 61 41 12 21 8 14 8 11 9 8 9 8 13 6 16 2 9v21l-4 15-8 16-9 13-11 11-14 9-15 4-15 2-23 1h-129l-19-1-7-3-6-7-7-14-1-9 4-12 6-9 7-5 7-2 8-1 150-1 16-3 3-2 2-12-2-10-2-4-4-2-25-8-90-24-132-36-36-10-102-27-37-11-18-8-12-8-10-9-8-9-9-14-6-15-4-15v-31l4-18 7-16 7-11 11-13 9-8 13-8 10-5 13-4 13-2z"
          fill="#056BF8"
        />
        <path
          transform="translate(1704,1502)"
          d="m0 0h24l10 3 6 4 4 5 2 7 1 17v104l-2 18-3 8-6 8-3 3-9 2-32 1h-95l-13-1-10-4-5-8-5-14v-11l3-10 6-8 6-4 6-2 30-1 68-1v-88l2-12 4-9 5-5z"
          fill="#066BF8"
        />
        <path
          transform="translate(440,1501)"
          d="m0 0h19l10 3 6 4 5 8 2 7 1 8v67l-1 20 94 1 9 2 9 7 6 9 3 12-2 11-5 10-6 7-6 3-6 1-34 1h-87l-14-1-10-3-5-5-7-14-2-9v-122l2-9 6-10 8-6z"
          fill="#056BF8"
        />
        <path
          transform="translate(451,689)"
          d="m0 0h116l15 1 8 3 7 8 4 8v19l-3 9-6 8-6 4-9 1-20 1-74 1 1 19-1 64-2 16-4 8-8 7-9 3-11 1-9-2-11-6-5-6-4-9-1-4v-124l2-8 5-10 5-6 10-5z"
          fill="#056BF8"
        />
        <path
          transform="translate(162,1057)"
          d="m0 0h15l13 3 8 5 3 5 1 4 1 38v164l-1 18-3 8-8 7-10 4-5 1h-14l-8-3-6-4-5-7-3-9-1-6-1-19v-113l1-70 2-13 6-8 9-4z"
          fill="#066BF8"
        />
        <path
          transform="translate(1487,604)"
          d="m0 0 10 1 12 6 9 8 6 10 1 10-4 11-10 13-12 13-11 12-6 5-3 4h-2l-2 4-13 12-47 47h-2l-2 4-8 7-13 11-14 10-3 2-5-1-14-10-11-10-7-11v-7l10-14 7-8 5-6h2l2-4 13-13 7-8 23-23 7-8 29-29 5-6 8-7 13-13 12-9z"
          fill="#056BF8"
        />
        <path
          transform="translate(2,633)"
          d="m0 0h1l1 326v573l-1 124h-1l-1-37-1-87v-110l1-7-1-2v-489l1-70z"
          fill="#92BFFC"
        />
        <path
          transform="translate(1487,604)"
          d="m0 0 10 1 12 6 9 8 4 7-1 6-3 2-4-2-1 2-2-2v-11l-2-4-8-4-3-2h-9l-4 3-3 9 7 3 2 3 5 3 6 10 1 2h-2v2l5 1-3 1v2l2 1-3 2h-4l-3 3-3-1v-6l-8 1-2 3-5-1 1-4-4 3-5-1-2 1v-2l-4 1-1-3h-7l-5-1-3 3-7 2-1 2-5 4h-3l-2 5-7 4-2 5-6 1-2 5-4 3-3-1 7-8 29-29 5-6 8-7 13-13 12-9z"
          fill="#055DF5"
        />
        <path
          transform="translate(1203,1094)"
          d="m0 0h4l-1 4-6 4-5 3-10 5-10 3-7 2-1 2-7 3-10 2-11 4-9 2-6 4-12 2-9 3-15 2-4 1-5-1-2 1-14 2h-6v2l-7-1-5 2-7 1-7-3 3-3 6 1 5-2 8-4 39-7 38-9 42-13 26-10z"
          fill="#075FF5"
        />
        <path
          transform="translate(1363 1e3)"
          d="m0 0 4 2h4l2 4-3 6-6 3-5 3h-2l-1 5-1 2h-2l-3 9-3 3h-2l-2 10-2 1-1-2-1 4 1 2-2 2-2 3h-2l-2 4-3 3-2-3-3-1 1-4 5-1-1-5-2 4-8 4-6 4h-6l2-5 7-2 2-6 7-5 4-2v-3l5-2 1-7 5-4 2-7 4-2 1-3 1 4 6-5 6 1v-4l-2-1 1-5z"
          fill="#045CF5"
        />
        <path
          transform="translate(1287,1118)"
          d="m0 0h6l-5 5-27 15-23 11-26 11-8 3h-3v-5h2v-5l11-6 16-5 5-3 13-5 18-9 9-2 9-4z"
          fill="#065EF5"
        />
        <path
          transform="translate(1247,410)"
          d="m0 0h66l27 1v3l-4 1-5-1-3 1h-18l-6 1h-6l-4 2-10 1-1 1-10-1v-2l-18 1h-3l-1 3-15-1-4-2-7-1-4-2 5-2h6l3-2 6 2 4 1z"
          fill="#045CF5"
        />
        <path
          transform="translate(1145,790)"
          d="m0 0h5l-1 4-16 13-14 11-13 9-9 5h-3l1-3 2 1 2-6 2-1 3-8 5-6 5-5 8-6 4-2h3v-2l10-2h6z"
          fill="#065EF5"
        />
        <path
          transform="translate(1910,87)"
          d="m0 0h38l9 2v3l-11 4-3 1h-7l-9 2h-8v-2l-8 1h-14l-11 1-8 1v-2l19-8z"
          fill="#055DF5"
        />
        <path
          transform="translate(1555,758)"
          d="m0 0 5 1 3 4v2l3 1-3 2h-3l-2 4-7 3-5 3-3 1v2l-6 2-1 7-2 2-4-1-3-2h2l2-7 9-10 5-7v-3z"
          fill="#045CF5"
        />
        <path
          transform="translate(1707,309)"
          d="m0 0 2 1v2l-8 7-5 6-9 7-3 3h-2l-2 4-3 3-9 5-9 6-4-2 2-6 3-2 7-1 4-3h2l1-3 2-4 3-2 4-11 5 1 9-4 6-4z"
          fill="#045CF5"
        />
        <path
          transform="translate(1417,934)"
          d="m0 0 1 4v3l-4 6-3 1-2 6-4 2-6 12-3 9-5 6h-1l-1-11-2-2 3-3 2-3 1 4 2-6v-3h3l1-2 1 2 4-6-2-2 4-4 3-7z"
          fill="#045CF5"
        />
        <path
          transform="translate(1297,1078)"
          d="m0 0 9 1 2 1 1 5-5 4-5 5-4-3-7 2-6-2 2-2 3-1 4-7z"
          fill="#045CF5"
        />
        <path
          transform="translate(1683,310)"
          d="m0 0h5v3l-3 5-5 4-2 4-8 3-2 9h-2l-1 2-3-4-1-6 4-2 2-3 4-2 1-7 5-3 5-2z"
          fill="#045CF5"
        />
        <path
          transform="translate(1510,456)"
          d="m0 0 5 1-1 2h10l-1 3-9 3-1 3h-8l-7 2v2h-2l-2 4-5 5h-3l1-4 3-3h2v-2l4-4 3-6 5-1z"
          fill="#045CF5"
        />
        <path
          transform="translate(994,1059)"
          d="m0 0h1v8l-2 7h-2v3h-2v5l-4 4-1-1-3 5-2-1-1-8 2-5 5-4 4-9 2-2z"
          fill="#055DF5"
        />
        <path
          transform="translate(2020,490)"
          d="m0 0h2l10 20v4l-5-1-7-6-6-10v-4h6z"
          fill="#075EF5"
        />
        <path
          transform="translate(874,1620)"
          d="m0 0h81l-4 2h-5l-5 1h-54l-5-1-4 1z"
          fill="#045CF5"
        />
        <path
          transform="translate(791,1328)"
          d="m0 0 22 2 3 2 10 2-1 3h-25l-4-3-5-1-1-3z"
          fill="#045CF5"
        />
        <path
          transform="translate(1876,147)"
          d="m0 0h6l-5 5-5 7-5 5-8 11-5 5-2-5 6-9 7-7 3-5 4 1z"
          fill="#045CF5"
        />
        <path
          transform="translate(1572,410)"
          d="m0 0 3 1 2 5-6 1-2 7-2 1-4-1-1 5-3 2-4 4h-2l2-5h2v-8l5-3 3-2 2-5z"
          fill="#045CF5"
        />
        <path
          transform="translate(1473,855)"
          d="m0 0h2l1 10-4 8-3 1-5-1-2-3 5-2 3 1-2-7-3-1v-3z"
          fill="#045CF5"
        />
        <path
          transform="translate(837,1288)"
          d="m0 0 4 4 2 4v13l-1 4h-3l-2-6-1-16z"
          fill="#0760F5"
        />
        <path
          transform="translate(932,1058)"
          d="m0 0 4 1v4l-3 5-1 8 2 1-2 6h-2v5h-2l1-16 2-13z"
          fill="#0E65F5"
        />
        <path
          transform="translate(1804,483)"
          d="m0 0 3 3-9 10-7 1-1-3h2v-2l5-2v-2z"
          fill="#045CF5"
        />
        <path
          transform="translate(1106,855)"
          d="m0 0 4 1 16 9 1 2-11-2-8-4z"
          fill="#0B62F5"
        />
        <path
          transform="translate(1302,1065)"
          d="m0 0h4v2l7 4 1 5h-3v-2l-8-1v-4l-5-1 1-2z"
          fill="#045CF5"
        />
        <path
          transform="translate(1859,160)"
          d="m0 0 2 1-8 10-6 8h-1v-7l2-3 5-2 4-6z"
          fill="#045CF5"
        />
        <path
          transform="translate(1314,568)"
          d="m0 0h3v2h-2v2l-9 1-21-2v-1l10-1 17 1z"
          fill="#045CF5"
        />
        <path
          transform="translate(989,1084)"
          d="m0 0h1v14l-2 8-3-3 2-15z"
          fill="#0B62F5"
        />
        <path
          transform="translate(794,1334)"
          d="m0 0 9 1v1l20 1v1h-31l-3-1v-2z"
          fill="#0769F7"
        />
        <path
          transform="translate(1047,1136)"
          d="m0 0 4 1-9 5h-6l-2-3 5-2z"
          fill="#0D6FF8"
        />
        <path
          transform="translate(932,1058)"
          d="m0 0 4 1v4l-5 8h-1l1-12z"
          fill="#0A62F5"
        />
        <path
          transform="translate(1482,844)"
          d="m0 0h2l-1 4-1 3h3l-1 5-2 2v-2h-2l-1-7z"
          fill="#045CF5"
        />
        <path
          transform="translate(1455,883)"
          d="m0 0 2 4-1 7-3 1-2-5v-3l4 1z"
          fill="#045CF5"
        />
        <path
          transform="translate(1584,417)"
          d="m0 0v3l-3 3-5 3-2 1v-5z"
          fill="#045CF5"
        />
        <path
          transform="translate(1441,902)"
          d="m0 0 2 1-2 6-5 1v-3z"
          fill="#045CF5"
        />
      </svg>
    </ConterDomSvg>
  );
};

export default Pentablet;
