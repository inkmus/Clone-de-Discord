import React from "react";

function CanalEnSidebar({ nombre, id }) {
  return (
    <div className="sidebar__Channel">
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {nombre}
      </h4>
    </div>
  );
}

export default CanalEnSidebar;