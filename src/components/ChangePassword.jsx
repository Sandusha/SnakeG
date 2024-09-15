import React, { useState } from 'react';
import axios from 'axios';
import "../modalStyles.css"; // Ensure consistency with the modal styles

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [touchedOldPassword, setTouchedOldPassword] = useState(false);
  const [touchedNewPassword, setTouchedNewPassword] = useState(false);
  const [touchedConfirmPassword, setTouchedConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);  // Add state for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Field validation
    if (oldPassword.trim() === '') {
      setError('Old Password field cannot be empty');
      return;
    }
    if (newPassword.trim() === '') {
      setError('New Password field cannot be empty');
      return;
    }
    if (newPassword.length < 6) {
      setError('New Password must be at least 6 characters long');
      return;
    }
    if (confirmPassword.trim() === '') {
      setError('Confirm Password field cannot be empty');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New Password and Confirm Password do not match');
      return;
    }

    // API call
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
      setError('');  // Clear error
      setOldPassword('');  // Clear inputs
      setNewPassword('');
      setConfirmPassword('');
      
      // Reset touched states to prevent error messages after successful change
      setTouchedOldPassword(false);
      setTouchedNewPassword(false);
      setTouchedConfirmPassword(false);

      // Optional: Set a success message if needed
      setMessage({ type: 'success', text: response.data.message });

    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center">
      <div className="bg-black-200 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-300">Change Password</h2>
        <form onSubmit={handleSubmit} className="ModalForm">
          <div className="InputWrapper">
            <input 
              type="password" 
              value={oldPassword} 
              onChange={(e) => setOldPassword(e.target.value)} 
              onBlur={() => setTouchedOldPassword(true)}
              placeholder="Old Password" 
              required 
              className={touchedOldPassword && oldPassword.trim() === "" ? "error" : ""}
            />
            {touchedOldPassword && oldPassword.trim() === "" && (
              <p className="ErrorText">Old Password field cannot be empty</p>
            )}
          </div>
          <div className="InputWrapper">
            <input 
              type="password" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              onBlur={() => setTouchedNewPassword(true)}
              placeholder="New Password" 
              required 
              className={touchedNewPassword && (newPassword.trim() === "" || newPassword.length < 6) ? "error" : ""}
            />
            {touchedNewPassword && newPassword.trim() === "" && (
              <p className="ErrorText">New Password field cannot be empty</p>
            )}
            {touchedNewPassword && newPassword.trim() !== "" && newPassword.length < 6 && (
              <p className="ErrorText">New Password must be at least 6 characters long</p>
            )}
          </div>
          <div className="InputWrapper">
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              onBlur={() => setTouchedConfirmPassword(true)}
              placeholder="Confirm Password" 
              required 
              className={touchedConfirmPassword && confirmPassword.trim() === "" ? "error" : ""}
            />
            {touchedConfirmPassword && confirmPassword.trim() === "" && (
              <p className="ErrorText">Confirm Password field cannot be empty</p>
            )}
          </div>
          <button 
            type="submit" 
            disabled={loading} 
            className={`w-full py-2 px-4 rounded-md text-white ${loading ? 'bg-gray-600' : 'bg-purple-600 hover:bg-purple-700'} transition-colors`}
          >
            {loading ? 'Changing...' : 'Change Password'}
          </button>
          {error && <div className="mt-4 p-2 text-sm text-red-400">{error}</div>}
          {message && <div className={`mt-4 p-2 text-sm text-green-400`}>{message.text}</div>}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
