import React from 'react';
import portrait from '../imgs/portrait1.png';

const styles = {
  skillIcon: {
    maxWidth: 60,
  },

  header: {
    fontSize: 70,
  },

  bio: {
    fontSize: 20,
  }
};

export default function About() {
  return (
    <div>
      <img src={portrait} alt='portrait of me' width='250'></img>
      <h1 style={styles.header} >Nicholas Lo Faso</h1>
      <p style={styles.bio}>
        Hi I am Nicholas Lo Faso! I'm currently living in Salisbury, NC and I am
        a new Full Stack Developer that is graduating from the UNCC Coding
        Bootcamp. My passions in life are coding, food, videogames and cats. I
        am creative, good a problem solving and critical thinking. My goal is to
        become a very proficient programmer and create and work on many amazing
        projects.
      </p>
      <h2>Skills and Technologies I use:</h2>
      <div class='container'>
        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
          alt='JavaScript logo'
          style={styles.skillIcon}
        />

        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
          alt='NodeJs Logo'
          style={styles.skillIcon}
        />

        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
          alt='mySql logo'
          style={styles.skillIcon}
        />

        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
          alt='React logo'
          style={styles.skillIcon}
        />

        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
          alt='html logo'
          style={styles.skillIcon}
        />

        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
          alt='css logo'
          style={styles.skillIcon}
        />

        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg'
          alt='bootstrap logo'
          style={styles.skillIcon}
        />

        <img
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg'
          alt='graphql logo'
          style={styles.skillIcon}
        />
      </div>
    </div>
  );
}
