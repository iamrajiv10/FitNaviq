import react from "react";
import "./Home.css";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
    const handleNotify = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;

        toast.success("Thanks! We'll keep you updated.", {
            position: "top-right",
        });
    };
    return (
        <main className="main-content">
            <h1>FitNaviq — Coming Soon</h1>
            <p className="motto">Train Smart. Live Strong.</p>
            <p className="description">
                Your all-in-one platform for workouts, nutrition, trainers, events &
                calorie tracking.
            </p>

            <section className="features">
                <div className="feature-card">
                    <h3>👤 User Platform</h3>
                    <p>Workouts, nutrition, progress tracking, and trainer booking.</p>
                </div>
                <div className="feature-card">
                    <h3>🏋️ Personal Trainer Platform</h3>
                    <p>Manage clients, sessions, and grow your brand with FitNaviq.</p>
                </div>
                <div className="feature-card">
                    <h3>🏢 Gym & Fitness Center Module</h3>
                    <p>
                        Digitize admissions, manage classes, track members, and promote
                        events.
                    </p>
                </div>
                <div className="feature-card">
                    <h3>⚙️ AI Core Features</h3>
                    <p>
                        Smart meal planning, calorie scanning, workout libraries, and
                        community events.
                    </p>
                </div>
            </section>

            <section className="notify">
                <h2>Be the first to know!</h2>
                <form onSubmit={handleNotify}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                    />
                    <button type="submit">Notify Me</button>
                </form>
            </section>
        </main>
    )
}

export default Home;