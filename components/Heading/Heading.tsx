import FC from "react";
import s from "./Heading.module.scss";
import Image from "next/image";

const Heading = () => {
  return (
    <>
      <div className={`${s.container}`}>
        <div className={`${s.maindiv}`}>
          <h1>
            The Token Sale is
            <span className={`${s.live}`}> Live</span>!
          </h1>
          <div className={`${s.imagesec}`}>
            <Image
              src="/images/group_14.png"
              alt="logo"
              height={321}
              width={237}
            />
          </div>

          <div className="buttons">
            <button className={`${s.btn}`}>read whitepaper</button>
            <button className={`${s.btnread}`}>see how it works</button>
          </div>
        </div>

        <div className={`${s.content}`}>
          <div className={`${s.inner}`}>
            <h3>Token Sale Ends In:</h3>
            <div className={`${s.rectangle}`}>
              <div className={`${s.box} ${s.colon}`}>
                <div className={`${s.number}`}>15</div>
                <div className={`${s.days}`}>Days</div>
              </div>
              <div className={`${s.box} ${s.colon}`}>
                <div className={`${s.number}`}>07</div>
                <div className={`${s.days}`}>Hours</div>
              </div>
              <div className={`${s.box} ${s.colon}`}>
                <div className={`${s.number} `}>15</div>
                <div className={`${s.days}`}>Minutes</div>
              </div>
              <div className={`${s.box} ${s.colon1}`}>
                <div className={`${s.number}`}>15</div>
                <div className={`${s.days}`}>Seconds</div>
              </div>
            </div>
            <p>TOKEN SALE ENDS SEPTEMBER 12,2022</p>

            <div className={`${s.fund}`}>
              <span className={`${s.fundperc}`}>
                FUNDED : 68% = $38 000 000
              </span>
              <div className={`${s.overlap}`}>
                <Image
                  src="/images/Rectangle_21.png"
                  alt="rectangle"
                  height={35}
                  width={35}
                />
              </div>
            </div>

            <div className={`${s.mainback}`}>
              <div className={`${s.rect}`}>
                <div className={`${s.indiv}`}></div>
              </div>
            </div>

            <div className={`${s.SoftContent}`}>
              <div className={`${s.Soft}`}>
                <p>Total Allocated Tokens:</p>
                <p>Min.Transaction Amount:</p>
              </div>
              <div className={`${s.softusd}`}>
                <p>50,000,000</p>
                <p>500 USD</p>
              </div>
            </div>

            <div className={`${s.join}`}>JOIN TOKEN SALE</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
