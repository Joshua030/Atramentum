import { useParams } from "react-router-dom";

export const User = () => {
  const { userId } = useParams();
  console.log(userId);
  
  return (
    <div>User</div>
  )
}
