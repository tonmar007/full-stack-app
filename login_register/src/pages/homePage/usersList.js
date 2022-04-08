import React, { useEffect } from 'react';
import User from './User';
import { useSelector } from 'react-redux';

function UsersList() {

    //const [users, setUsers] = useState({});
    const homePageStore = useSelector(store => store.homePageStore);
    console.log("HOME PAGE STORE FROM USER LIST ", homePageStore);
    // useEffect(() => {
    //     const allUsers = homePageStore.users?.map(user => {
    //         return (
    //             <User user={user} key={user._id} />
    //         )
    //     })
    // }, []);

    return homePageStore.users ?
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">Users</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        homePageStore.users.map(user => <User user={user} key={user._id} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div> : null
}

export default UsersList;