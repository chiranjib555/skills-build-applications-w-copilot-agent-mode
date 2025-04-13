import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://animated-rotary-phone-7vp76qj7rx57cxvj-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Activities</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Activity Name</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity._id}>
              <td>{activity.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;