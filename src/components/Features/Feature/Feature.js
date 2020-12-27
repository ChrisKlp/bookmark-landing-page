import Button from '../../Button/Button';
import styled, { keyframes } from 'styled-components';
import Heading from '../../Heading/Heading';
import { sharedWrapper } from '../../../theme/GlobalStyle';
import BlueBackground from '../../Svg/BlueBackground';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }
`;

const Wrapper = styled.div`
  position: relative;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    min-height: 43.5rem;
  }
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}

  text-align: center;
  animation: ${fadeIn} 0.5s ease both;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: end;
    gap: 4rem;
    text-align: left;
  } ;
`;

const StyledBackground = styled(BlueBackground)`
  display: block;
  position: absolute;
  top: 3.5rem;
  left: -85%;
  right: 15%;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    left: -36rem;
    width: 100rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    top: 8.3rem;
    width: clamp(80rem, 75%, 100rem);
  }
`;

const Illustration = styled.img`
  margin-bottom: 6.9rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: block;
    margin: 0 auto 6.9rem;
    width: auto;
    max-height: 39.3rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin: 0;
  }
`;

const Content = styled.div`
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin: 0 auto;
    max-width: 44.5rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin: 5.7rem 0 0 0;
  } ;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const Feature = ({ illustration, heading, content }) => {
  return (
    <Wrapper>
      <StyledBackground />
      <InnerWrapper key={illustration}>
        <Illustration src={illustration} alt={heading} />
        <Content>
          <Heading h2 as="h2">
            {heading}
          </Heading>
          <Paragraph>{content}</Paragraph>
          <Button>More Info</Button>
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Feature;
