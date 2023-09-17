import './sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebarItem">
              <span className="sidebarTitle">ABOUT ME</span>
              <img className='sidebarImg'
              src="https://i.ibb.co/JR2ZxKB/20220525-161716.jpg"
              alt=""
              />
             <p className='sidebarP'>Lorem, ipsum dolor sit amet consectetur adipisicing Lorem 
             ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloribus modi ea molestiae 
             voluptatibus possimus consectetur neque, optio laborum magni porro quidem cumque veritatis 
             unde labore nihil quo velit quos.
  </p>
  <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>
              <li className="sidebarListItem">Sport</li>
            </ul>
            </div>

            <div className="sidebarItem">
              <span className="sidebarTitle">FOLLOW US</span>
              <div className="siderbarSocials">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
              
            </div>

</div>
</div>
  
              </div>
           
            
            
  )
}

export default Sidebar