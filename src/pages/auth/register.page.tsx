import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "reactfire";

const RegisterPage = () => {
  //Hook React Fire
  const auth = useAuth();

  //Evento(s)
  const handleClickGoogle = async() => {
     try {
       const provider = new GoogleAuthProvider();
       await signInWithPopup(auth, provider);
       console.log("User Signed in Succesfully");
     } catch(error) {
       console.log("Error: SignIn in with Google", error);
     }
  } 

  return (
    <div>
       <h1>Register</h1>
       <button onClick={handleClickGoogle}>Sign in Google</button>
    </div>
  )
}
export default RegisterPage;