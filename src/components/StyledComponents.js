import styled from 'styled-components';


// Create a StyledName component that'll render an <h1> tag with some styles
export const StyledMainTitle = styled.h1`
color: ${props => props.bg};
font-size: 4rem;
margin-bottom: 2rem;
// text-transform: uppercase;
padding-top: 3rem;
text-align:center;
`;

// Create a StyledParagraph component that'll render an <p> tag with some styles
export const StyledIntroParag = styled.p`
  color: ${props => props.bg};
  text-align: center;
  margin: 5px;
  font-size: 1.5rem;
  padding: 1.5rem;
  margin-bottom:30px;
`;

// Create a StyledImage component that'll render an <img> tag with some styles
export const StyledImage = styled.img`
  width:150px;
  height:150px;
  cursor:pointer;
  margin-bottom:30px;
  // display:fluid;
`;
// Create a StyledName component that'll render an <h5> tag with some styles
export const StyledItemTitle = styled.h5`
color: ${props => props.bg};
margin-top: 1.5rem;
display:flex;
cursor:pointer;
margin-left: 50px;
margin-top:6px;
`;
// Create a StyledExpanSign component that'll render an <span> tag with some styles
export const StyledratingSpan = styled.span`
display:flex;
`;
