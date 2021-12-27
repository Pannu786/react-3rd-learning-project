import Card from "../UI/Card";
import style from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card style={style.users} >
    <ul>
      {props.users.map((user) => (
        <li>
          {user.name} ({user.age} this many yr's old )
        </li>
      ))}
      </ul>
    </Card>
  );
};

export default UsersList;
