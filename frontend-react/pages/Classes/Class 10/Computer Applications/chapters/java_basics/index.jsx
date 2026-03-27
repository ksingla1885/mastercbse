import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const JavaBasicsChapter = () => {
    const [showFactorial, setShowFactorial] = useState(false);
    const [showPrime, setShowPrime] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: 'Platform Independent', desc: 'Write once, run anywhere (WORA)' },
        { title: 'Object-Oriented', desc: 'Follows OOP concepts' },
        { title: 'Simple', desc: 'Easy to learn and understand' },
        { title: 'Secure', desc: 'Built-in security features' },
        { title: 'Multithreaded', desc: 'Can perform multiple tasks simultaneously' }
    ];

    const syntaxCards = [
        {
            icon: 'fas fa-code',
            title: 'Variables',
            code: `// Variable Declaration
int age = 20;
double price = 19.99;
String name = "John";
boolean isJavaFun = true;`
        },
        {
            icon: 'fas fa-sitemap',
            title: 'Control Structures',
            code: `// If-else statement
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

// For loop
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`
        },
        {
            icon: 'fas fa-cube',
            title: 'Methods',
            code: `// Method definition
public static int addNumbers(int a, int b) {
    return a + b;
}

// Method call
int sum = addNumbers(5, 3);
System.out.println("Sum: " + sum);`
        }
    ];

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <main className={styles.mainContent}>
                <section className={styles.chapterHero}>
                    <div className={styles.container}>
                        <h1>Java Basics</h1>
                        <p>Learn the fundamentals of Java programming language with practical examples.</p>
                    </div>
                </section>

                <section id="introduction" className={styles.chapterSection}>
                    <div className={styles.container}>
                        <h2>Introduction to Java</h2>
                        <div className={styles.contentBox}>
                            <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is widely used for developing desktop, web, and mobile applications.</p>

                            <h3>Key Features:</h3>
                            <ul className={styles.featureList}>
                                {features.map((f, i) => (
                                    <li key={i}><strong>{f.title}:</strong> {f.desc}</li>
                                ))}
                            </ul>

                            <div className={styles.codeExample}>
                                <h4>Simple Java Program:</h4>
                                <pre><code>{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}</code></pre>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="syntax" className={`${styles.chapterSection} ${styles.bgLight}`}>
                    <div className={styles.container}>
                        <h2>Java Syntax Basics</h2>
                        <div className={styles.syntaxGrid}>
                            {syntaxCards.map((card, i) => (
                                <div key={i} className={styles.syntaxCard}>
                                    <i className={card.icon}></i>
                                    <h3>{card.title}</h3>
                                    <pre><code>{card.code}</code></pre>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="programs" className={styles.chapterSection}>
                    <div className={styles.container}>
                        <h2>Practice Programs</h2>
                        <div className={styles.programsGrid}>
                            <div className={styles.programCard}>
                                <h3>1. Calculate Factorial</h3>
                                <p>Write a program to calculate the factorial of a number.</p>
                                <button
                                    className={styles.btnShowCode}
                                    onClick={() => setShowFactorial(!showFactorial)}
                                >
                                    {showFactorial ? 'Hide Code' : 'Show Code'}
                                </button>
                                <div className={`${styles.codeContainer} ${showFactorial ? styles.show : ''}`}>
                                    <pre><code>{`public class Factorial {
    public static void main(String[] args) {
        int num = 5;
        long factorial = 1;
        
        for(int i = 1; i <= num; ++i) {
            factorial *= i;
        }
        
        System.out.println("Factorial of " + num + " = " + factorial);
    }
}`}</code></pre>
                                </div>
                            </div>

                            <div className={styles.programCard}>
                                <h3>2. Check Prime Number</h3>
                                <p>Write a program to check if a number is prime.</p>
                                <button
                                    className={styles.btnShowCode}
                                    onClick={() => setShowPrime(!showPrime)}
                                >
                                    {showPrime ? 'Hide Code' : 'Show Code'}
                                </button>
                                <div className={`${styles.codeContainer} ${showPrime ? styles.show : ''}`}>
                                    <pre><code>{`public class PrimeNumber {
    public static void main(String[] args) {
        int num = 29;
        boolean isPrime = true;
        
        for(int i = 2; i <= num/2; ++i) {
            if(num % i == 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime)
            System.out.println(num + " is a prime number.");
        else
            System.out.println(num + " is not a prime number.");
    }
}`}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default JavaBasicsChapter;
