/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id='close' />
          <VisuallyHidden>Close menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
        
      </Content>
    </Dialog>
  );
};

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;

  @media ${QUERIES.phoneAndSmaller} {
    right: 0px;
  }
`;

const Dialog = styled(DialogOverlay)`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220, 5%, 40%, 0.8);
  width: 100%;
`;

const Content = styled(DialogContent)`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: white;
  width: 300px;
  height: 100vh;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 26px 16px 32px 32px;
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-transform: uppercase;
  font-size: calc(18 / 16)rem;
  line-height: calc(21 / 16)rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
  text-decoration: none;

  & a:first-child {
    color: ${COLORS.secondary};
  }
`;

const Link = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  color: ${COLORS.gray[700]};
  font-size: calc(14 / 16)rem;
  line-height: 1rem;
`;


export default MobileMenu;
