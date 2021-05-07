import React, { useEffect, useState } from "react";
import './App.css';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'

import {listReacts} from './graphql/queries'
import {updateReact} from './graphql/mutations'

import {Paper, IconButton} from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';

Amplify.configure(awsconfig)

function App(){

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchReact();
  }, []);

  const fetchReact = async () =>{
    try{
      const reactData = await API.graphql(graphqlOperation(listReacts));
      const songList = reactData.data.listReacts.items;
      console.log('songList', songList);
      setSongs(songList);
    }

    catch (error){
      console.log('error on fetching songs', error);
    }
  }

  const addLike = async(idx) => {
    try{
      const song = songs[idx];
      song.like = song.like + 1;
      delete song.createdAt;
      delete song.updatedAt;

      const songData = await API.graphql(graphqlOperation(updateReact, {input: song}));
      const songList = [...songs];
      songList[idx] = songData.data.updateReact;
      setSongs(songList);
    }

    catch (error){
      console.log('error on addLike to song', error);
    }
  }


    return (
      <div className="App">
        <header className="App-header">
          <AmplifySignOut/>
          <h2>My App Content</h2>
        </header>

        <div className="songList">
          {songs.map((song, idx) => {
            return (
              <Paper variant="outlined" elevation={2} key={`song${idx}`}>
                <div className="songCard">
                  <IconButton aria-label="play">
                    <PlayArrowIcon />
                  </IconButton>

                  <div>
                    <div className="songTitle">{song.title}</div>
                    <div className="songOwner">{song.owner}</div>
                  </div>

                  <div>
                    <IconButton aria-label="like" onClick={()=> addLike(idx)}>
                      <FavoriteIcon />
                    </IconButton>
                    {song.like}
                  </div>

                  <div className="songDescription">{song.description}</div>
       
                </div>
              </Paper>
            )
          })}
        </div>
      </div>
    );
  
}

export default withAuthenticator(App);
