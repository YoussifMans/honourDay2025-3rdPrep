import { faBrain, faCircleCheck, faHandshake, faHandsPraying, faLandmark, faLightbulb, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Traits from './components/traits/traits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
    const skills = [
        ['Problem Solving', faLightbulb],
        ['Critical Thinking', faBrain],
        ['Cooperation', faHandshake],
        ['Responsibility', faCircleCheck],
        ['Respect', faHandsPraying],
        ['Citizenship', faLandmark],
    ];

    return (
        <>
            <div className="title">
                <h1>ELS Honour Day</h1>
                <h3>2025 - 3rd Prep</h3>
                <img className='logo' src="https://placehold.co/256" alt="Honour Day Logo" />
            </div>

            <p>
                ELS is a panel of greatness because it supplies its students
                with the skills and requirements that are needed to be one of
                the greats of the 21st Century and to be respected and loved by
                the people. It teaches them valuable skills and traits such as:
            </p>
            <ul className="skillsMarquee">
                {skills.map((skill, index) => (
                    <li
                        className='skill'
                        key={skill[0] as string}
                        style={{animationDelay: `${index}s`}}
                    >
                        <FontAwesomeIcon icon={skill[1] as IconDefinition} />
                        {skill[0] as string}
                    </li>
                ))}
            </ul>
            <p>
                We at ELS call them “The 6 Keys of Success.” Equipped with these
                valuable and important skills, the students are ready to go out
                and become successful in the 21st Century and become one of the
                greats.
            </p>
            <Traits></Traits>
        </>
    );
}

export default App;
