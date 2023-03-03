import { FollowBtn } from "./FollowBtn.styled";

export const Button = ({ value, follower, setFollow, setValue }) => {
  const onBtnClick = (event) => {
    setFollow(!follower);
    if (!follower) {
      setValue(value + 1);
    }
    if (follower) {
      setValue(value - 1);
    }
  };

  return (
    <FollowBtn type="button" follower = {follower} onClick={onBtnClick}>
      {!follower ? "Follow": "Following"}
    </FollowBtn>
  );
};
