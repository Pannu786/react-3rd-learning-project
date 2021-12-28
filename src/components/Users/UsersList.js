import Card from '../UI/Card';
import sex from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card sx={sex.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} this many yr's old )
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
