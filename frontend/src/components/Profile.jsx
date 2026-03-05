import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {

const [profile,setProfile] = useState({});
const [editMode,setEditMode] = useState(false);
const [darkMode,setDarkMode] = useState(false);

useEffect(()=>{
axios.get("http://localhost:5001/profile")
.then(res => setProfile(res.data))
},[])

const updateProfile = () => {

axios.put("http://localhost:5001/profile",profile)
.then(()=>{
alert("Profile Updated")
setEditMode(false)
})

}

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};

return (
  <div className={`container ${darkMode ? "dark" : ""}`}>
    <div className="profile-card">

      {editMode ? (

        <div className="edit-form">

          <input
            placeholder="Name"
            value={profile.name || ""}
            onChange={(e)=>setProfile({...profile,name:e.target.value})}
          />

          <textarea
            placeholder="Bio"
            value={profile.bio || ""}
            onChange={(e)=>setProfile({...profile,bio:e.target.value})}
          />
          

          <input
            placeholder="Skills"
            value={profile.skills || ""}
            onChange={(e)=>setProfile({...profile,skills:e.target.value})}
          />

          <button onClick={updateProfile}>Save</button>

        </div>

      ) : (

        <div>

          <img
            className="profile-img"
            src="https://i.pravatar.cc/150"
            alt="profile"
          />

          <h2>{profile.name}</h2>

          <p className="bio">{profile.bio}</p>

          <p className="skills">
            <strong>Skills:</strong> {profile.skills}
          </p>

          <div className="links">
            <a href={profile.linkedin} target="_blank">LinkedIn</a>
            <a href={profile.github} target="_blank">GitHub</a>
          </div>

          <button onClick={()=>setEditMode(true)}>
            Edit Profile
          </button>

          <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

        </div>

      )}

    </div>
  </div>
)
}

export default Profile;