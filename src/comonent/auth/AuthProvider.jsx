import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,} from "firebase/auth";
import { auth } from "../../../firebase.config";
import { toast } from "react-toastify";
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user,setUser]=useState([])
  const provider = new GoogleAuthProvider();
const google=()=>{
    setLoading(true)
   return  signInWithPopup(auth, provider)
   
}
const logout=()=>{
    setLoading(true)
   signOut(auth).then(() => {
        toast('sucessfully logOut')
      }).catch((error) => {
        toast(error)
      });
      return 
}
 useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth, async(currentuser) => {
        if (currentuser) {
     setUser(currentuser)
        } else {
 //
        }
        setLoading(false)
      });
return ()=>unsubscribe()
},[user?.displayName])
console.log(user)
  const authinf = { google,user,logout,setUser,loading, setLoading  };
  return (
    <AuthContext.Provider value={authinf}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
