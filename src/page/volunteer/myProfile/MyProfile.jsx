import { useContext } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import Logout from "../../../components/shared/Logout";

const MyProfile = () => {
  
    const {user}=useContext(AuthContext);

  return (
    <div className="flex items-center justify-center p-4 shadow2 shadow-accent">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold text-primary mb-1">My Profile</h2>
          <p className="text-gray-500 text-sm mb-4">
            Manage your information and logout securely.
          </p>

          <img
            src={user.photoURL}
            alt="Profile"
            className="w-56 h-56 rounded-full mx-auto border-4 border-primary mb-4"
          />

          <h3 className="text-lg font-bold text-gray-800">{user?.displayName}</h3>

          <div className="flex text-gray-600 items-center justify-center gap-2 text-sm mb-6 mt-1">
            <FaEnvelope />
            <span>{user?.email}</span>
          </div>

          <Logout></Logout>
        </div>
    </div>
  );
};

export default MyProfile;
