import styled from "styled-components";

export const FollowBtn = styled.button`
  display: block;
  margin: 0 auto;
  width: 196px;
  height: 50px;
  cursor: pointer;
  background: ${(props) => (props.follower ? "#5CD3A8" : "#EBD8FF")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  font-family: "Montserrat600";
  font-size: 18px;
  line-height: 1.1;
  text-transform: uppercase;
  color: #373737;
`;
