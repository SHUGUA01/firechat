import { useAuth, useUser } from "reactfire";

const DashboardPage = () => {
  //Hook React Fire
  const auth = useAuth();
  const user = useUser(); 

  return (
    <div>
       <h1>Dashboard</h1>
       <p>Welcome, {user.data?.displayName || "Guest"}</p>
       <p>Email, {user.data?.email || "Not Provided"}</p>
       <hr />
       <button onClick={() => auth.signOut()}>Cerrar Sesion</button>
    </div>
  )
}

export default DashboardPage;