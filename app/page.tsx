import Image from 'next/image';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Image src="/logo.svg" alt="Logo" width={60} height={60} />
        </LogoContainer>
        <Nav>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#track-order">Track Order</NavLink>
          <NavLink href="#cook-help">Cook Help</NavLink>
          <NavLink href="#start-here">Start Here</NavLink>
          <NavLink href="#menu" className="menu">Menu</NavLink>
        </Nav>
      </Header>

      <MainContent>
        <Title>
          Explore World Flavors<br />
          Through Taste - No Passport,<br />
          No Flight, Just Stories.
        </Title>
        <Description>
          Having established a successful industry in Japan's food business valley, the feasibility of growing tea in the entire
          country was proven. Since then, Japan has been one of the world's major producers of green tea. In the Edo
          Period, Nagatani Soen created Sencha bitter and fresh. After this creation of the present marketing history in the first
          half of the 19th century, green tea became popular among the general public. In 1859, the export of Japanese green
          tea to the U.S. gradually starting. By the late 1930s of tea were opened and production reached to 5 million pounds. In order
          to harmonize the problems the industry was facing deficits and low and costs issues, communication, the need to
          establish a national organization was recognized. In 1954, the Japan Tea Cooperative purchased the Japan Tea
          Association of Southern India (UPASI) was formed to face. In 1955, UPASI reported in a letter of tea. By 1975, that
          figure had increased to 5,200 tons and by 1991, it was 14,789 tons. Today, India is one of the world's largest producers
          of green tea, with production concentrated in the southern states of Tamil Nadu and Kerala.
        </Description>
        <CTASection>
          <JourneyText>Click, explore : Your Journey</JourneyText>
          <BeginsText>Begins Here.</BeginsText>
          <ExploreButton>Explore</ExploreButton>
        </CTASection>
      </MainContent>

      <Footer>
        <FooterLinks>
          <FooterLink href="/about">About us</FooterLink>
          <FooterLink href="/help">Help</FooterLink>
          <FooterLink href="/instagram">Instagram</FooterLink>
          <FooterLink href="/policy">Policy</FooterLink>
        </FooterLinks>
        <ContactInfo>Contact us: worldfood@gmail.com</ContactInfo>
      </Footer>
    </Container>
  );
};

export default HomePage; 