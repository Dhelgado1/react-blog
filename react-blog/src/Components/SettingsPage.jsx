import "./settingsPage.css"
import Sidebar from "../Components/Sidebar"

export default function SettingsPage() {
  return (
    <div className="settings">
        <div className="SettingsWrapper">
            <div className="SettingsTitle">
                <span className="setttingsUpdateTitle">
                    Update Your Account
                </span>
                <span className="setttingsDeleteTitle">Delete Account</span>
</div>
<form className="settingsForm">
    <label>Profile Picture</label>
    <div className="settingsPP">
        <img src="https://i.pinimg.com/564x/53/de/16/53de166012eb783805fffde724a16347.jpg"
         alt=""/>
<label htmlFor="fileInput">
<i className="settingsPPIcon fa-solid fa-users"></i>
</label>
<input type="file" id="fileInput" style={{display:"none"}}/>
    </div>
    <label>Username</label>
    <input type="text" placeholder="Safak" />
    <label>Email</label>
    <input type="email" placeholder="dhelgado@gmail.com" />
    <label>Password</label>
    <input type="password" />
    <button className="settingsSubmit">Update</button>
</form>
            <Sidebar/>
            </div></div>
  )
}