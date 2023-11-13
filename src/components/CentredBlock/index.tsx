// CentredBlockWithSections.tsx
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import {
  CentredBlockContainer,
  CentredBlockRow,
  CentredBlockCol,
  CentredBlockContentWrapper,
  CentredBlockContent,
  BlockSectionContainer,
  BlockSectionTitle,
  BlockSectionIcon,
  BlockSectionContent,
} from "./styles";

interface SectionProps {
  title: string;
  content: string;
  icon: string;
}

interface BlockProps {
  title: string;
  content: string;
  sections: SectionProps[];
  t: TFunction;
  id: string;
}

const BlockSection = ({ title, content, icon }: SectionProps) => {
  return (
    <CentredBlockCol xs={24} sm={12} md={12} lg={6}>
      <BlockSectionContainer>
        <BlockSectionTitle>
          {title}
          <BlockSectionIcon src={`${process.env.PUBLIC_URL}/img/svg/${icon}`} alt="Icon" />
        </BlockSectionTitle>
        <BlockSectionContent>{content}</BlockSectionContent>
      </BlockSectionContainer>
    </CentredBlockCol>
  );
};

const CentredBlock = ({ title, content, sections, t }: BlockProps) => {  
  return (
    <CentredBlockContainer>
      <Fade direction="up" triggerOnce>
      <h6>{t(title)}</h6>
      <CentredBlockContentWrapper>
        <CentredBlockContent>{t(content)}</CentredBlockContent>
      </CentredBlockContentWrapper>
      <CentredBlockRow gutter={0}>
        {sections.map((section, index) => (
          <BlockSection key={index} title={section.title} content={section.content} icon={section.icon} />
        ))}
      </CentredBlockRow>
      </Fade>
    </CentredBlockContainer>
  );
};

export default withTranslation()(CentredBlock);
