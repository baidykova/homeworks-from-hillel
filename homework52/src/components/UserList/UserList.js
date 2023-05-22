import React, { useState, useEffect } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const fetchAlbums = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  };

  const fetchPhotos = (albumId) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  };

  return (
    <div className="user-list">
      <h1>User List</h1>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <button onClick={() => fetchAlbums(user.id)}>Albums</button>
          {albums.map(album => (
            <div key={album.id} className="album-card">
              <h3>{album.title}</h3>
              <button onClick={() => fetchPhotos(album.id)}>Photos</button>
              {photos.map(photo => (
                <div key={photo.id} className="photo-card">
                  <img src={photo.url} alt={photo.title} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserList;

