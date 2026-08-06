import useUser from "../hooks/useUser";

function UserInfo() {
  const user = useUser();

  return (
    <div className="userinfo">
      <h2>Customer Details</h2>
      <hr />

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Location:</strong> {user.location}
      </p>
    </div>
  );
}

export default UserInfo;