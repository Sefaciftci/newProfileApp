import React from 'react'
import './profileList.css'
import ProfileItems from '../ProfileItems/ProfileItems'



const ProfileList = ({profiles,setProfiles}) => {

  const  deleteToItem = (item) => {
    // profile id si tıklanan id yi eşitse alma geri kalanları al
    setProfiles(profiles.filter((profile) => profile.id !== item.id));
    console.log(item)
  }
  

  return (
    <div className='profileListContainer'> 
      <ul >
          {profiles.map((profile)=> {
           return <ProfileItems deleteToItem={deleteToItem} profile={profile} key={profile.id} />
          })}
      </ul>
    </div>
  )
}

export default ProfileList
