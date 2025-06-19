import './App.css';

function App() {
    const skills = [
        'Problem Solving',
        'Critical Thinking',
        'Cooperation',
        'Responsibility',
        'Respect',
        'Citizenship',
    ];

    return (
        <>
            <div className="title">
                <h1>ELS Honour Day</h1>
                <h3>2025 - 3rd Prep</h3>
                <img src="http://placehold.co/256" alt="Honour Day Logo" />
            </div>

            <p>
                ELS is a panel of greatness because it supplies its students
                with the skills and requirements that are needed to be one of
                the greats of the 21st Century and to be respected and loved by
                the people. It teaches them valuable skills and traits such as:
            </p>
            {skills.map((skill, index) => {
                <li
                    key={skill}
                    style={{animationDelay: `${index}`}}
                >
                    {skill}
                </li>
            })}
            <p>
                We at ELS call them “The 6 Keys of Success.” Equipped with these
                valuable and important skills, the students are ready to go out
                and become successful in the 21st Century and become one of the
                greats.
            </p>
        </>
    );
}

export default App;
