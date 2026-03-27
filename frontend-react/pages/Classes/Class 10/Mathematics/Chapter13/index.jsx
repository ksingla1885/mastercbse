import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter13 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 13: Surface Areas and Volumes</h1>
                    <p>Calculating Capacity and Material for 3D Geometric Solids.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter deals with finding the surface areas and volumes of combinations of solids. We tackle problems involving melting and recasting shapes, like converting a sphere into a cylinder, and calculating the volume of frustums of cones.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Important Formulas</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Cube:</strong> Volume = a³, Surface Area = 6a²</p>
                            <p><strong>Cuboid:</strong> Volume = l×b×h, Surface Area = 2(lb + bh + hl)</p>
                            <p><strong>Cylinder:</strong> Volume = πr²h, Surface Area = 2πrh + 2πr²</p>
                            <p><strong>Cone:</strong> Volume = (1/3)πr²h, Surface Area = πrl + πr²</p>
                            <p><strong>Sphere:</strong> Volume = (4/3)πr³, Surface Area = 4πr²</p>
                            <p><strong>Hemisphere:</strong> Volume = (2/3)πr³, Surface Area = 3πr² (Total) or 2πr² (Curved)</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Frustum of a Cone</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Volume of Frustum:</strong> (1/3)πh(r₁² + r₂² + r₁r₂)</p>
                            <p><strong>Curved Surface Area:</strong> π(r₁ + r₂)l where l = √[h² + (r₁ - r₂)²]</p>
                            <p><strong>Total Surface Area:</strong> π(r₁ + r₂)l + πr₁² + πr₂²</p>
                        </div>
                    </section>


                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <div className={styles.practiceQuestion}>
                            Two cubes each of volume 64cm³ are joined end to end. Find the surface area of the resulting cuboid.
                        </div>
                        <div className={styles.solutionBox}>
                            Volume of one cube = a³ = 64 ⇒ a = 4cm.<br />
                            Resulting Cuboid: Dimensions are l = 4+4=8cm, b = 4cm, h = 4cm.<br />
                            TSA = 2(lb + bh + hl) = 2(32 + 16 + 32) = 2(80) = <strong>160 cm²</strong>.
                        </div>

                        <div className={styles.practiceQuestion}>
                            A metallic sphere of radius 4.2cm is melted and recast into the shape of a cylinder of radius 6cm. Find the height of the cylinder.
                        </div>
                        <div className={styles.solutionBox}>
                            Volume of Sphere = Volume of Cylinder.<br />
                            (4/3)πr₁³ = πr₂²h<br />
                            (4/3)(4.2)³ = (6)²h<br />
                            (4/3)(74.088) = 36h<br />
                            <strong>h = 2.744 cm</strong>.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Visualize the combination of solids carefully. When solids are joined base-to-base, the common surface area is internal and not part of the total surface area. Always convert units to be consistent (e.g., cm to m) before calculating.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter13;
