import { Link } from "react-router"; // ✅ Correct import
import { useState, useEffect } from "react";

const ProfileCards = () => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <article
      data-testid="test-profile-card"
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-red-500 text-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-3xl mx-auto"
    >
      {/* ✅ Avatar Section */}
      <figure className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <img
          src="https://via.placeholder.com/150"
          alt="User avatar"
          data-testid="test-user-avatar"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white"
        />
        <figcaption className="text-xs sm:text-sm mt-2 opacity-80">
          Profile Photo
        </figcaption>
      </figure>

      {/* ✅ Main Info Section */}
      <section className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 w-full sm:w-2/3">
        <header>
          <h2
            data-testid="test-user-name"
            className="text-xl sm:text-2xl font-bold tracking-wide"
          >
            John Doe
          </h2>
        </header>

        <p data-testid="test-user-bio" className="text-sm sm:text-base leading-relaxed">
          A passionate web developer who loves building modern, accessible, and
          responsive applications.
        </p>

        <p data-testid="test-user-time" className="text-xs sm:text-sm">
          Current time (ms): <span className="font-mono">{time}</span>
        </p>

        {/* ✅ Social Links */}
        <nav
          data-testid="test-user-social-links"
          aria-label="Social links"
          className="w-full flex justify-center sm:justify-start"
        >
          <ul className="flex flex-wrap gap-3 sm:gap-4">
            <li>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="test-user-social-twitter"
                className="hover:border-b-2 hover:border-white transition-all duration-200"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="test-user-social-github"
                className="hover:border-b-2 hover:border-white transition-all duration-200"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="test-user-social-linkedin"
                className="hover:border-b-2 hover:border-white transition-all duration-200"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </nav>

        {/* ✅ Hobbies */}
        <section data-testid="test-user-hobbies" className="w-full">
          <h3 className="text-base sm:text-lg font-semibold mt-4">Hobbies</h3>
          <ul className="list-disc list-inside text-xs sm:text-sm">
            <li>Coding</li>
            <li>Reading tech blogs</li>
            <li>Playing video games</li>
          </ul>
        </section>

        {/* ✅ Dislikes */}
        <section data-testid="test-user-dislikes" className="w-full">
          <h3 className="text-base sm:text-lg font-semibold mt-4">Dislikes</h3>
          <ul className="list-disc list-inside text-xs sm:text-sm">
            <li>Procrastination</li>
            <li>Bugs in production 😅</li>
            <li>Unclear documentation</li>
          </ul>
        </section>
      </section>
    </article>
  );
};

export default ProfileCards;
