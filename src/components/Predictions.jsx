import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../modalStyles.css"; // Import the same CSS file for consistency

const Predictions = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:5000/account/predictions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPredictions(response.data.recent_predictions || []);
      } catch (error) {
        console.error('Error fetching predictions:', error);
      }
    };

    fetchPredictions();
  }, []);

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center">
      <div className="bg-dark-gray shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-300">Recent Predictions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-dark-gray border border-gray-600">
            <thead>
              <tr>
                <th className="py-3 px-5 text-left bg-gray-700 text-gray-300 font-semibold uppercase tracking-wider">
                  Snake
                </th>
                <th className="py-3 px-5 text-left bg-gray-700 text-gray-300 font-semibold uppercase tracking-wider">
                  Accuracy
                </th>
                <th className="py-3 px-5 text-left bg-gray-700 text-gray-300 font-semibold uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {predictions.length > 0 ? (
                predictions.map((prediction, index) => (
                  <tr key={index} className="border-t border-gray-600">
                    <td className="py-4 px-5 text-gray-200">{prediction.snake}</td>
                    <td className="py-4 px-5 text-gray-200">{prediction.accuracy}%</td>
                    <td className="py-4 px-5 text-gray-400">
                      {new Date(prediction.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-4 px-5 text-center text-gray-400">
                    No predictions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Predictions;
