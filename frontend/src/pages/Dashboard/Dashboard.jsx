import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducer/userreducer';
import EditForm from '../../components/Form/Form';
import Account from "../../components/Account/Account";


 
function Dashboard() {
 
  const { userName, firstName, lastName } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(true);

  const handleEditClick = () => {
    setIsEditing(false);
  };

  const handleSaveName = (editedValues) => {
    const { userName } = editedValues;
    dispatch(setUser({ userName, firstName, lastName }));
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(true);
  };
 
  return (
    <main className="main bg-dark">
      <div className="header">
      <h1>Welcome back<br />{userName}</h1>
        {isEditing ? (
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        ) : <EditForm initialValues={{userName, firstName, lastName}} onSave={handleSaveName} onCancel={handleCancelEdit} />
        }
      </div>
      <section className='account-content'>
      <h2 className="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                text="Available Balance"
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                text="Available Balance"
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                text="Current Balance"
            />
      </section>
    </main>
  );
}

export default Dashboard;