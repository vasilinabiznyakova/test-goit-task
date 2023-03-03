import styled from "styled-components";
import img from "../../img/bgImg.svg";
import { ReactComponent as Boy } from "../../img/Boy.svg";

export const Wrapper = styled.div`
  width: 380px;
  height: 460px;
  margin: 0 auto;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 172px;
  padding-left: 20px;
  background-position: 36px 28px;
  background-image: url(${img});
  background-size: "contain";
  background-repeat: no-repeat;
  background-size: 308px 168px;
`;

export const BorderEl = styled.div`
  position: relative;
  height: 8px;
  margin-bottom: 62px;
  background: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06),
    inset 0px -2px 4px #ae7be3, inset 0px 4px 2px #fbf8ff;
`;

export const UserLogo = styled(Boy)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const TweetInfo = styled.p`
  margin-bottom: 16px;
  font-family: "Montserrat500";
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
`;

export const FollowersInfo = styled.p`
  margin-bottom: 24px;
  font-family: "Montserrat500";
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
`;
