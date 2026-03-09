import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div>
            {/* <nav>
                <Link to="/login">Login</Link>
                <Link to="/student/survey">Student Survey</Link>
                <Link to="/student/results">Student Results</Link>
                <Link to="/professor/dashboard">Professor Dashboard</Link>
                <Link to="/coordinator/dashboard">Coordinator Dashboard</Link>
            </nav> */}
            <Outlet />
        </div>
    );
}