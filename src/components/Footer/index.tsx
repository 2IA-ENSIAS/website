import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { SvgIcon } from '../../common/SvgIcon';
import Container from '../../common/Container';

import i18n from 'i18next';
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  FooterContainer,
  Language as LanguageTitle,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from './styles';

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" key={src} aria-label={src}>
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" align="top">
            <Col lg={8} md={8} sm={24} xs={24}>
              <LanguageTitle>{t('Contact')}</LanguageTitle>
              <Large to="/">{t('Tell us everything')}</Large>
              <Para>{t('Do you have any question? Feel free to reach out.')}</Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t('Let\'s Chat')}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
              <LanguageTitle>{t('Address')}</LanguageTitle>
              <Para>Avenue Mohamed Ben Abdellah</Para>
              <Para>Av. Regragui</Para>
              <Para>Rabat, Morocco</Para>
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
              <Label htmlFor="select-lang">{t('Language')}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange('en')}>
                  <SvgIcon src="united-states.svg" aria-label="homepage" width="30px" height="30px" />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange('fr')}>
                  <SvgIcon src="french.svg" aria-label="homepage" width="30px" height="30px" />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row justify="space-between" align="middle" style={{ paddingTop: '3rem' }}>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon src="logo.svg" aria-label="homepage" width="101px" height="64px" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink href="https://github.com/Adrinlol/create-react-app-adrinlol" src="github.svg" />
              <SocialLink href="https://twitter.com/Adrinlolx" src="twitter.svg" />
              <SocialLink href="https://www.linkedin.com/in/lasha-kakabadze/" src="linkedin.svg" />
            
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
