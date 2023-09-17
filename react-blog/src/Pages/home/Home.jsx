import React from 'react';
import Header from '../../Components/Header';
import Post from '../../Components/Post';
import Sidebar from '../../Components/Sidebar';
import Topbar from '../../Components/Topbar';
import Posts from  '../../Components/Posts'


function Home() {
  return (
    <div>
        {/* Topbar */}
        <Topbar/>
        {/* Header */}
        <Header/>

        {/* Sidebar */}
        <Sidebar/>
               {/* Posts */}
        <Posts/>
        {/* Post */}
        <Post/>
        </div>
  )
}
export default Home