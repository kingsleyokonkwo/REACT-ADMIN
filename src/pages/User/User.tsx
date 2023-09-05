import SinglePage from "../../components/SinglePage/SinglePage"
import { singleUser } from "../../data"
import "./User.scss"

const User = () => {
  return (
    <div className="user">
      <SinglePage {...singleUser}/>
    </div>
  )
}

export default User