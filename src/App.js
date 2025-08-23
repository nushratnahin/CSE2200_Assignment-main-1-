import React, { useState } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ArticlesPage from "./pages/ArticlesPage";
import photo from "./assets/nazrul.gif";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 8,
    color: "#222",
    background: isActive ? "#f3f4f5ff" : "transparent",
    fontWeight: isActive ? 600 : 400,
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: collapsed ? "72px 1fr" : "200px 1fr",
        minHeight: "100vh",
      }}
    >
      <aside style={{ borderRight: "1px solid #eee", padding: 16 }}>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setCollapsed((c) => !c)}
        >
          {collapsed ? "»" : "«"} {collapsed ? "" : ""}
        </button>
      <div
        style={{display: "flex", alignItems: "center", gap: 10,marginTop: 16,padding: "8px 6px",
          justifyContent: collapsed ? "center" : "flex-start",
        }}
      >
        <img
          src={photo}
          alt="profile"
          style={{ width: 36,  height: 36, borderRadius: "50%", objectFit: "cover",
          }}
        />
        {!collapsed && (
          <span style={{ fontWeight: 600, fontSize: 14 }}>Akif Farhan</span>
        )}
      </div>

      <nav style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 8 }}>
                <NavLink to="/profile" style={linkStyle}>
                  {collapsed ? "👤" : "👤 Profile"}
                </NavLink>
                <NavLink to="/articles" style={linkStyle}>
                  {collapsed ? "📝" : "📝 My Articles"}
                </NavLink>
              </nav>
            </aside>


      <main style={{ padding: 24 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}
