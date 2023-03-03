import { ReactComponent as Logo } from "../../img/Logo.svg";
import { Button } from "../FollowBtn/FollowBtn";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import {
  Wrapper,
  Header,
  BorderEl,
  UserLogo,
  TweetInfo,
  FollowersInfo,
} from "./UserCard.styled";

export const UserCard = () => {
  const [value, setValue] = useLocalStorage("value", 100500);


  const formatedValue = new Intl.NumberFormat("en").format(value);

  return (
    <article>
      <Wrapper>
        <Header>
          <a href="/">
            <Logo />
          </a>
        </Header>
        <BorderEl>
          <UserLogo />
        </BorderEl>

        <TweetInfo>777 tweets</TweetInfo>
        <FollowersInfo>
        {formatedValue} Followers
        </FollowersInfo>
        <Button value={value} setValue={setValue} />
      </Wrapper>
    </article>
  );
};
