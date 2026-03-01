//Imports Methods Firebase
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//Imports Provider Firebase
import { AuthProvider, FirestoreProvider, StorageProvider, useFirebaseApp } from "reactfire";

//Props
interface Props {
  children: React.ReactNode;
}

//Services Config
const FirebaseServices = ({children} : Props) => {
  //Hook_Firebase_Services_App
  const app = useFirebaseApp();

  //Get_Authentication
  const auth = getAuth(app);

  //Get_Firebase_DataBase
  const firestore = getFirestore(app);

  //Get_Firebase_Storage
  const store = getStorage(app);
  
  return (
     <AuthProvider sdk={auth}>
       <FirestoreProvider sdk={firestore}>
          <StorageProvider sdk={store}>
            {children}
          </StorageProvider> 
       </FirestoreProvider>
     </AuthProvider>
  )
}

export default FirebaseServices;