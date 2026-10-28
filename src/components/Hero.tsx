import {h1, hero, p, terminalLine, prompt, cursor} from "./Hero.css.ts";

export default function Hero() {
  return (
    <section className={hero}>
      <div className={terminalLine}>
        <span className={prompt}>&gt;&nbsp;</span>
        <h1 className={h1} style={{fontSize: '2.5rem'}}>Abdullah Mohammad Aref</h1>
        <span className={cursor}></span>
      </div>
      <p className={p}>
        Software &amp; Machine Learning Engineer<br />
        Data Science &middot; Intelligent Applications &middot; Cloud &amp; DevOps
      </p>
    </section>
  )
}