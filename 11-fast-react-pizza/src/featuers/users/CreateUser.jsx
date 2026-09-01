import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateUserName } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const name = username.trim();
    if (!name) return;

    dispatch(updateUserName(name));
    navigate('/menu');
  }

  return (
    <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
      <p className="mb-4 font-semibold text-stone-700">👋 Welcome! Please start by telling us your name:</p>

      <input
        className="input"
        type="text"
        name="username"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoFocus
      />

      {username.trim() !== '' && (
        <div className="mt-5">
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
