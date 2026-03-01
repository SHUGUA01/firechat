//Imports React Router
import { Navigate, Outlet } from "react-router";

//Imports ReactFire
import { useSigninCheck } from "reactfire";

const AuthLayout = () => {
  //Hook React Fire
  const {status, data: signInCheckResult, hasEmitted} = useSigninCheck();

  //Print Console
  console.log({status, signInCheckResult, hasEmitted});

  //Paso #1 Mostrar un Loading mientras se verifica la sesión.
  if(status === "loading" || !hasEmitted)
     return (<div>Loading...</div>);

  //Paso #2 Redirigir a una pagina si el usuario no esta autenticado.
  if(status === "success" && signInCheckResult.signedIn) {
    return (<Navigate to="/admin/dashboard"></Navigate>);
  }

  return (
    <div><Outlet></Outlet></div>
  )
}

export default AuthLayout;