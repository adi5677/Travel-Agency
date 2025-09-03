// @ts-nocheck

import  { Sidebar, SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { Link, NavLink } from 'react-router'
import NavItems from './navItems'

const MobileSidebar = () => {

    let sidebar: SidebarComponent;

    const toggleSidebar = () => {
        sidebar.toggle();
    }

  return (
    <div className="mobile-sidebar wrapper">
        <header>
            <Link to="/">

                <img 
                src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />

                <h1>Travel Tour</h1>
            </Link>

            {/* @ts-ignore */}
            <button onClick={toggleSidebar}>
                 <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
            </button>
        </header>
        <SidebarComponent 
            width={270}

            ref={(Sidebar) => sidebar = Sidebar }
            created={() => sidebar.hide()}

            closeOnDocumentClick={true}
            showBackdrop={true}
            type='Over'
            // position='Left'

            >
                <NavItems handleClick={toggleSidebar} />


            </SidebarComponent>

    </div>
  )
}

export default MobileSidebar