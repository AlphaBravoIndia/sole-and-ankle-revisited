import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <>
      <HeaderWrapper>
        <Header>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">
              Shoes
            </Breadcrumbs.Crumb>
          </Breadcrumbs>
          <Title>Running</Title>
        </Header>
        <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
        </Select>
      </HeaderWrapper>
      <ContentWrapper>
        <LeftColumn>
          <ShoeSidebar />
        </LeftColumn>
        <MainColumn>
          <ShoeGrid />
        </MainColumn>
    </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  gap: 32px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: bottom;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 32px;
  gap: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 8px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
