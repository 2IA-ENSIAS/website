// styles.ts

import styled from "styled-components";
import { Row, Col } from "antd";

export const CentredBlockContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const CentredBlockRow = styled(Row)`
  justify-content: center;
  margin: -8px; /* Negative margin to eliminate gutter */
`;

export const CentredBlockCol = styled(Col)`
  padding: 8px; /* Gutter size to separate columns */
`;

export const CentredBlockContentWrapper = styled.div`
  // max-width: 540px;
`;

export const CentredBlockTitle = styled.h6`
  font-size: 24px;
  margin-bottom: 16px;
  color: #000;
  position: relative;
`;

export const CentredBlockIcon = styled.img`
  position: absolute;
  bottom: -24px; /* Adjust this value as needed */
  left: 50%;
  transform: translateX(-50%);
`;

export const CentredBlockContent = styled.p`
  margin-bottom: 100px;
  font-size: 18px;
`;

export const CentredBlockButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const BlockSectionContainer = styled.div`
  padding: 16px;
  width: 100%;
`;

export const BlockSectionTitle = styled.h6`
  font-size: 18px;
  margin-bottom: 8px;
  margin-top: 100px;
  color: #000;
  position: relative;
`;

export const BlockSectionIcon = styled.img`
  position: absolute;
  bottom: 30px; /* Adjust this value as needed */
  left: 50%;
  transform: translateX(-50%);
`;

export const BlockSectionContent = styled.p`
  font-size: 14px;
`;
