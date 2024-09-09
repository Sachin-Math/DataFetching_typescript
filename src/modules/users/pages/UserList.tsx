import {useEffect,useState}from 'react'
import { IUser } from '../models/IUser';
import LayoutHeading from '../../../layout/LayoutHeading';
import { UserService } from '../services/UserService';
import UserTable from '../components/UserTable';

const UserList:React.FC = () => {
  const [users,setUsers]=useState<IUser[]>([] as IUser[]);
  useEffect(() => {
   
  UserService.getAllUsers().then((response)=>{
setUsers(response.data);


  }).catch((error)=>{
    console.log(error);

  })
    
  }, [])
  
  return (
    <>
    <LayoutHeading heading="userList"/>
    {
users && users.length>0 &&
<UserTable items={users}/>
    }
    
    </>
  )
}

export default UserList 