// Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/home", icon: HomeIcon },
    { label: "Search", path: "/search", icon: SearchIcon },
    { label: "Explore", path: "/explore", icon: ExploreIcon },
    { label: "Reels", path: "/reels", icon: ReelsIcon },
    { label: "Messages", path: "/messages", icon: MessageIcon },
    { label: "Notifications", path: "/notifications", icon: NotificationIcon },
    { label: "Create", path: "/create", icon: CreateIcon },
    { label: "Profile", path: "/profile", icon: ProfileIcon },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[245px] border-r border-zinc-800 bg-black flex flex-col justify-between px-3 py-4">
      {/* Logo */}
      <div>
        <div className="px-3 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#833ab4] bg-clip-text text-transparent select-none">
            Instagram
          </h1>
        </div>

        {/* Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm cursor-pointer transition
                  ${active ? "bg-zinc-900 text-white" : "text-zinc-300 hover:bg-zinc-900 hover:text-white"}
                `}
              >
                <Icon filled={active} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile / More */}
      <div className="px-3 pb-2 space-y-2">
        <button className="flex items-center gap-3 w-full px-2 py-2 rounded-xl text-sm text-zinc-300 hover:bg-zinc-900 hover:text-white transition">
          <MoreIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

// Icons (SVG-based, simple props.filled support)

const HomeIcon = ({ filled }) => (
  <svg
    aria-label="Home"
    role="img"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill={filled ? "white" : "none"}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5.5a.5.5 0 0 1-.5-.5V15h-4v6.5a.5.5 0 0 1-.5.5H4a1 1 0 0 1-1-1Z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    aria-label="Search"
    role="img"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="6"></circle>
    <line x1="16.5" y1="16.5" x2="21" y2="21"></line>
  </svg>
);

const ExploreIcon = () => (
  <svg
    aria-label="Explore"
    role="img"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="9"></circle>
    <polygon points="10 10 16 8 14 14 8 16 10 10"></polygon>
  </svg>
);

const ReelsIcon = () => (
  <svg
    aria-label="Reels"
    role="img"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="16" rx="3"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="4" x2="13" y2="9"></line>
    <line x1="3" y1="4" x2="7" y2="9"></line>
    <line x1="15" y1="4" x2="19" y2="9"></line>
  </svg>
);

const MessageIcon = () => (
  <svg
    aria-label="Direct"
    role="img"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="22 3 2 12 9 15 12 22 22 3"></polygon>
  </svg>
);

const NotificationIcon = () => (
  <svg
    aria-label="Activity Feed"
    role="img"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22a2.1 2.1 0 0 0 2.09-2H9.91A2.1 2.1 0 0 0 12 22ZM18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8Z"></path>
  </svg>
);

const CreateIcon = () => (
  <svg
    aria-label="New post"
    role="img"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const ProfileIcon = () => (
  <svg
    aria-label="Profile"
    role="img"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="4"></circle>
    <path d="M4 20a8 8 0 0 1 16 0"></path>
  </svg>
);

const MoreIcon = () => (
  <svg
    aria-label="More"
    role="img"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="5" cy="12" r="1.5"></circle>
    <circle cx="12" cy="12" r="1.5"></circle>
    <circle cx="19" cy="12" r="1.5"></circle>
  </svg>
);

export default Sidebar;
