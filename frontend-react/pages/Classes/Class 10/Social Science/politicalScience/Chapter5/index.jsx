import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter5 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 5: Popular Struggles and Movements</h1>
                    <p>Movements for rights and justice.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores popular struggles and movements as essential components of democracy, highlighting how ordinary people mobilize to influence policies and bring about social and political change. It examines various forms of collective action and their impact on governance.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Popular struggles and movements arise when people organize collectively to demand rights, justice, or policy changes. These can be issue-specific, like environmental protection or women's rights, and often pressure governments to respond. The chapter discusses how movements in democracies differ from those in authoritarian regimes, emphasizing non-violent methods and public participation.</p>
                        <p>Examples include the Narmada Bachao Andolan against large dams, the Chipko Movement for forest conservation, and global movements like the anti-apartheid struggle in South Africa. These movements highlight the role of pressure groups, social movements, and mobilization in shaping policy. In Bolivia, the Water War mobilized people against privatization, leading to government change. <strong>Additional Insights:</strong> Such struggles strengthen democracy by making governments accountable, promoting inclusivity, and addressing inequalities through collective action.</p>
                        <p>Furthermore, the chapter examines the evolution of movements, from local protests to global campaigns, and their reliance on media, leaders, and public support for success.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Pressure Groups:</strong> Organized groups that influence government decisions without seeking political power, like trade unions or environmental NGOs.</li>
                                <li><strong>Social Movements:</strong> Collective efforts by people to bring about social or political change, often addressing broader issues like equality.</li>
                                <li><strong>Mobilization:</strong> Process of organizing and uniting people around a common cause, using protests, campaigns, or alliances.</li>
                                <li><strong>Reform Movements:</strong> Efforts to change specific laws or policies, such as labor rights or anti-corruption drives.</li>
                                <li><strong>Sectional Interest Groups:</strong> Groups representing specific sections like businessmen or farmers.</li>
                                <li><strong>Public Interest Groups:</strong> Advocate for broader societal benefits, like human rights organizations.</li>
                                <li><strong>Single-Issue Movements:</strong> Focused on one specific problem, such as the anti-dam movements.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What are pressure groups and how do they differ from political parties?
                        </div>
                        <div className={styles.solutionBox}>
                            Pressure groups influence policy without contesting elections, unlike parties that seek power; they focus on specific issues.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the role of social movements in a democracy.
                        </div>
                        <div className={styles.solutionBox}>
                            Social movements mobilize people for change, ensuring governments address public demands and promoting accountability.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the Narmada Bachao Andolan and its outcomes.
                        </div>
                        <div className={styles.solutionBox}>
                            It protested against displacement by dams, raising awareness about rehabilitation and influencing policy for affected communities.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Analyze the impact of the Bolivia Water War on democratic processes.
                        </div>
                        <div className={styles.solutionBox}>
                            It demonstrated public power against privatization, leading to policy changes and empowering citizens in decision-making.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Struggles: Mobilize for rights. Movements: Social and environmental. Examples: Narmada, Chipko, Bolivia. <strong>Additional Notes:</strong> Popular movements enhance democracy by ensuring responsive and inclusive governance.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter5;
