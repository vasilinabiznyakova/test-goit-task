import { FollowBtn } from "./FollowBtn.styled";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Button = ({ value, setValue }) => {
  const [follower, setFollow] = useLocalStorage("follower", false);

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
    <FollowBtn type="button" follower={follower} onClick={onBtnClick}>
      {!follower ? "Follow" : "Following"}
    </FollowBtn>
  );
};
