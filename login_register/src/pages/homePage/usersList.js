import React from 'react';
import User from './User';
import { useSelector } from 'react-redux';

function UsersList() {

    const usersStore = useSelector(store => store.userStore);

    return usersStore.users ?
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
                                        usersStore.users.map(user => <User user={user} key={user._id} />)
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