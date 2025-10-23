import { Link } from "react-router";
import { useState, useEffect } from "react";

const ProfileCard = () => {
     // Current time in milliseconds
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(Date.now());
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    
    
    return (
        <article 
            data-testid="test-profile-card" 
            className="flex flex-col md:flex-row items-center justify-center w-full bg-blue-400 rounded-xl text-white gap-6 p-6 md:p-10 mx-auto max-w-3xl">
            
            {/* Avatar */}
            <figure className="flex flex-col text-center items-center">
                <img 
                    src="/avatar.jpg"
                    alt="user-avatar"
                    data-testid="test-user-avatar"
                    className="size-32 rounded-full "/>
                <figcaption className="text-xs opacity-80 mt-2">Profile Photo</figcaption>
            </figure>

            <section className="flex flex-col items-center text-center space-y-4">
                <header>
                    <h2 
                    data-testid="test-user-name"
                    className="text-2xl font-bold tracking-wide">
                        John Doe
                    </h2>
                </header>

                <p 
                data-testid="test-user-bio"
                className="max-w-md">A passionate web developer who loves building modern, scalable and responsive applications.</p>

                <p
                data-testid="test-user-time"
                className="text-sm">Current time (ms): <span className="font-mono">{time}</span>  
                </p>

                {/* Social Links */}
                <nav 
                data-testid="test-user-social-links"
                aria-label="Social links">
                    <ul className="flex gap-4">
                        <li>
                            <Link 
                            to="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="test-user-social-twitter"
                            className=" ">
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="test-user-social-linkedin"
                            className=" ">
                                LinkedIn
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="test-user-social-github"
                            className=" ">
                                Github
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* hobbies */}
                <section data-testid="test-user-hobbies">
                    <h3 className="font-semibold text-lg mt-4">Hobbies</h3>
                    <ul className="list-disc text-sm list-inside">
                        <li>Coding</li>
                        <li>Playing video games</li>
                        <li>Reading tech blogs</li>
                    </ul>
                </section>

                {/* dislikes */}
                <section data-testid="test-user-dislikes">
                    <h3 className="font-semibold text-lg mt-4">Dislikes</h3>
                    <ul className="list-disc text-sm list-inside">
                        <li>Unclear documentation</li>
                        <li>Procastination</li>
                        <li>Bugs while coding</li>
                    </ul>
                </section>
            </section>


             
                
        </article>
    )
}

export default ProfileCard