import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: #fff; // Use white or a light red if you prefer for the footer background
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #D32F2F; // Red color for titles

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  color: #000; // Normal text in black

  &:hover,
  &:active,
  &:focus {
    color: #D32F2F; // Red color on hover for links
  }
`;

export const Extra = styled("section")`
  background: #fff; // Matching the footer background
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #000; // Normal text in black
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: #000; // Normal text in black
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;

  &:hover {
    color: #D32F2F; // Red color on hover for links
  }
`;

export const Chat = styled("p")`
  color: #000; // Normal text in black
  max-width: fit-content;
  border-bottom: 1px solid transparent; // Invisible border by default
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    border-bottom: 1px solid #D32F2F; // Red underline on hover
    color: #D32F2F; // Red text on hover
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  a {
    color: #000; // Normal text in black
    transition: color 0.2s ease-in;

    &:hover,
    &:active,
    &:focus {
      color: #D32F2F; // Red color on hover for links
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: #D32F2F; // Red fill on hover for icons
    }
  }
`;

export const Language = styled(Title)`
  // Inherits styles from Title which is already themed
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #D32F2F; // Red color for labels
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
