import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./profileItems.css";

const ProfileItems = ({ profile,deleteToItem }) => {
  
  return (
    <li className="profileItem">
      <div className="content">
        <img 
        src='https://i.pravatar.cc/200
        '/>
        <span>{profile.profileName}</span>
      </div>
      
        <button className="deleteBtn" onClick={() => deleteToItem(profile)}>
          <AiFillDelete size='1.5rem' color="red" className="deleteIcon" />
        </button>
      
    </li>
  );
};

export default ProfileItems;
