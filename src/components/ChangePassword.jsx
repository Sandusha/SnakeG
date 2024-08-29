import React, { useState } from 'react';
import axios from 'axios';
import "../modalStyles.css"; // Ensure consistency with the modal styles

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'New password and confirm password do not match.' });
      return;
    }

    const token = localStorage.getItem('token');
    setLoading(true);
    try {
      const response = await axios.put('http://127.0.0.1:5000/account/changepassword', 
        { old_password: oldPassword, new_password: newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      setMessage({ type: 'success', text: response.data.message });
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.error || 'An error occurred' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center">
      <div className="bg-black-200 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-300">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-300">Old Password</label>
            <input 
              id="oldPassword" 
              type="password" 
              value={oldPassword} 
              onChange={(e) => setOldPassword(e.target.value)} 
              placeholder="Old Password" 
              required 
              className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 bg-gray-700 text-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300">New Password</label>
            <input 
              id="newPassword" 
              type="password" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              placeholder="New Password" 
              required 
              className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 bg-gray-700 text-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">Confirm Password</label>
            <input 
              id="confirmPassword" 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder="Confirm Password" 
              required 
              className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 bg-gray-700 text-gray-300"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading} 
            className={`w-full py-2 px-4 rounded-md text-white ${loading ? 'bg-gray-600' : 'bg-purple-600 hover:bg-purple-700'} transition-colors`}
          >
            {loading ? 'Changing...' : 'Change Password'}
          </button>
          {message && (
            <div className={`mt-4 p-2 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
