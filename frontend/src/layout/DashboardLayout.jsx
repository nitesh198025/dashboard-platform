import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={styles.container}>
      
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>My Dashboard</h2>

        <nav style={styles.nav}>
          <Link style={styles.link} to="/analytics">📊 Analytics</Link>
          <Link style={styles.link} to="/ai-advisor">🤖 AI Advisor</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <Outlet />
      </main>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif"
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#1e293b",
    color: "#fff",
    padding: "1rem"
  },
  logo: {
    marginBottom: "2rem"
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "16px"
  },
  main: {
    flex: 1,
    padding: "1.5rem",
    backgroundColor: "#f8fafc"
  }
};
