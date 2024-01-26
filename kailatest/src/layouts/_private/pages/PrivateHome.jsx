
import { getUsers } from '../axios'
import { useQuery } from "@tanstack/react-query"
import { Card1, Card2 } from './shared/UserCard'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/authContext'
import { useContext } from 'react'


export function PrivateHome() {

  const { currentUser, login } = useContext(AuthContext);

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  })

  return (<>
    <div className='bg-indigo-200'>
      Home {data?.length} - {JSON.stringify(currentUser)}
      {data?.map(d => <div key={d.id}>
        <Card2 d={d} />
        {/* <UserCard d={d} /> */}
      </div>)}
    </div>
  </>

  )
}
