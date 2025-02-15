import React from 'react';

import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const LogoLink = styled(Link)`
  text-decoration: none;
  font-family: 'itim';
  font-size: 2rem;
  color: #64d4ab;
`;
const LogoContainer = styled.div`
  height: 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export default function Logo() {
  return (
    <LogoLink to="/main">
      <LogoContainer>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="29" viewBox="0 0 19 29" fill="none">
          <path
            d="M16.5114 6.77895C14.9269 4.0851 12.6774 1.84634 9.97991 0.278529L9.5 0L9.02009 0.278529C6.27668 1.86725 3.99865 4.15298 2.4152 6.90575C0.831754 9.65851 -0.00125094 12.7812 1.41001e-06 15.9596C1.41001e-06 16.1667 0.00359547 16.377 0.0106037 16.5847C0.105963 19.401 1.1793 21.7708 3.11458 23.4378C4.59552 24.7136 6.49516 25.4924 8.54185 25.6781V29H10.4586V13.613H8.54161V23.7424C5.30323 23.366 2.08012 21.0704 1.92612 16.5193C1.91977 16.3333 1.91653 16.145 1.91653 15.9596C1.92224 13.2152 2.62073 10.5169 3.94684 8.1166C5.27294 5.71632 7.18343 3.69227 9.5 2.23334C11.8165 3.6923 13.727 5.71636 15.053 8.11664C16.3791 10.5169 17.0775 13.2152 17.0832 15.9596C17.0832 16.145 17.08 16.3333 17.0736 16.5194C16.9505 20.1601 14.8629 22.3572 12.3749 23.2834V25.319C13.666 24.9518 14.8633 24.3102 15.8854 23.4377C17.8207 21.7707 18.894 19.4009 18.9894 16.5846C18.9964 16.3769 19 16.1666 19 15.9595C19.0017 12.7313 18.1424 9.56149 16.5114 6.77895Z"
            fill="#64D4AB"
          />
        </svg>
        <span>Planting</span>
      </LogoContainer>
    </LogoLink>
  );
}
