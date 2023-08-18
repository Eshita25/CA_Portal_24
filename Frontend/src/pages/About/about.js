import styles from './about.module.css';

function About() {
    return(
        <div className={styles.main}>
            <h1>ABOUT US</h1>
            <div className={styles.box}>
            <p className={styles.para}>Kshitij, IIT Kharagpur is Asia’s largest Techno-Management Festival. Since 
                its inception in 2004, Kshitij has always strived to bring students closer to the fields of Technology and
                 Management. The Campus Ambassador Program brings an opportunity for all the students across the country to be
                  a part of team Kshitij, IIT Kharagpur. The Campus Ambassadors act as the backbone of the fest by bridging 
                  between Kshitij and the students of their respective colleges.  </p><br/>
                  <p className={styles.para}>The Campus Ambassador Program is one of the biggest platforms for students 
                  to engage in serious networking and gain knowledge of marketing and social media. More than 70 thousand
                   students from 2000+ colleges will be under their management. The Campus Ambassador Program is structured 
                   to help Campus Ambassadors develop their corporate personalities and soft skills. The Campus Ambassadors' 
                   involvement will be essential to the success of Kshitij 2023, the 20th edition of Kshitij.
                </p>
            </div>
        </div>
    );
}

export default About