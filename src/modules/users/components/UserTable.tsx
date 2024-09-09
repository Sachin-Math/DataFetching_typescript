import React from 'react'
import { IUser } from '../models/IUser';

interface IProps{
  items:IUser[];
}
const UserTable :React.FC<IProps>= (props) => {
 const{items}=props;

  return (
    <div><div className="container">
    <div className="row">
      <div className="col">
        <table className='table table-hover table-striped text-center'>
          <thead>
<tr>
  <th>SNO</th>
  <th>Name</th>
  <th>email</th>
  <th>website</th>
  <th>street</th>
  <th>city</th>

</tr>
          </thead>
          <tbody>
            {
              items.map((user,index)=>{
                return(
<tr key={user.id}>
  <td>{user.id}</td>
  <td>{user.name}</td>
  <td>{user.email}</td>
  <td>{user.website}</td>
  <td>{user.address.street}</td>
  <td>{user.address.city}</td>
</tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
   </div></div>
  )
}

export default UserTable