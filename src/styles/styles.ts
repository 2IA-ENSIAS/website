import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
  @font-face {
      font-family: "Motiva Sans Light";
      src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
      font-style: normal;
  }

  @font-face {
      font-family: "Motiva Sans Bold";
      src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
      font-style: normal;
  }

  body,
  html,
  a {
      font-family: 'Motiva Sans Light', sans-serif;
  }

  body {
      margin:0;
      padding:0;
      border: 0;
      outline: 0;
      background: #fff;
      overflow-x: hidden;
  }

  a:hover {
      color: #D32F2F; /* Red hover effect for links */
  }

  input,
  textarea {
      border-radius: 4px;
      border: 1px solid #ffcdd2; /* Light red border */
      background: #ffebee; /* Very light red background */
      transition: all 0.3s ease-in-out;  
      outline: none;
      width: 100%;  
      padding: 1rem 1.25rem;

      :focus {
          background: #fff;
          box-shadow: 0px 0px 0px 2px #D32F2F; /* Red shadow on focus */
      }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-family: 'Motiva Sans Bold', serif;
      color: #D32F2F; /* Red color for headings */
      font-size: 56px;
      line-height: 1.18;

      @media only screen and (max-width: 890px) {
          font-size: 47px;
      }
      
      @media only screen and (max-width: 414px) {
          font-size: 32px;
      }
  }

  p {
      color: #000; /* Black color for normal text */
      font-size: 21px;        
      line-height: 1.41;
  }

  h1 {
      font-weight: 600;
  }

  a {
      text-decoration: none;
      outline: none;
      color: #D32F2F; /* Red color for links */

      :hover {
          color: #B71C1C; /* Darker red on hover for links */
      }
  }
  
  *:focus {
      outline: none;
  }

  .about-block-image svg {
      text-align: center;
  }

  .ant-drawer-body {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding-top: 1.5rem;
  }

  .ant-drawer-content-wrapper {
      width: 300px !important;
  }
`;
