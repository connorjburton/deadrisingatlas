import style from './style.css';

const Footer = () => (
    <footer className={style.footer}>
        <div className={style.footerLeft}>
            <span>Developed by <a href="https://github.com/connorjburton">Connor</a> &amp; <a href="https://github.com/james-salloway">James</a></span>
        </div>
        <div className={style.footerCenter}>Card &amp; game assets &copy;CAPCOM CO., LTD.</div>
        <div className={style.footerRight}>
            <a href="https://github.com/connorjburton/dr2combos">
                <img src="../../assets/github.svg" height="32" width="32" alt="Github Repo" />
            </a>
        </div>
	</footer>
);

export default Footer;
