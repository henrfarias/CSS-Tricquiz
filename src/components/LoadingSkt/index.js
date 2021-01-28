import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

const Box = styled.span`
  display: flex;
  flex-direction:column;
  align-items: center;
  opacity: 0.8;
  margin:-10px;
  &:first-child {
    margin-top: 15px;
  }
  &:last-child {
    margin-bottom: 20px;
  }
`;

function LoadingSkt() {
  return (
    <div>
      <SkeletonTheme
        color="#502274"
        highlightColor="#D3C4D1"
      >
        <Skeleton
          count={1}
          width="95%"
          height={150}
          duration={1}
          wrapper={Box}
        />
        <Skeleton
          count={2}
          width="70%"
          height={25}
          wrapper={Box}
          duration={0.9}
        />
        <Skeleton
          count={2}
          width="70%"
          height={25}
          wrapper={Box}
          duration={1}
        />
        <Skeleton
          count={2}
          width="70%"
          height={25}
          duration={1.2}
          wrapper={Box}
        />
        <Skeleton
          count={1}
          width="60%"
          height={40}
          duration={1.1}
          wrapper={Box}
        />
      </SkeletonTheme>
    </div>
  );
}
export default LoadingSkt;
