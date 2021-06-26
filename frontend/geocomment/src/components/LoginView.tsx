import { useUserContext } from "../contexts/UserContext";

function LoginView() {
  const { userCredentials, setUserCredentials } = useUserContext();

  return (
    <div>
      <h1>LoginView</h1>
      <h3>email: {userCredentials.email}</h3>
      <h3>token: {userCredentials.token}</h3>
      <button
        onClick={() =>
          setUserCredentials({
            email: "max.mustermann@gmail.com",
            token: "2dg638d3928h9283hd",
          })
        }
      >
        login
      </button>
    </div>
  );
}

export default LoginView;
