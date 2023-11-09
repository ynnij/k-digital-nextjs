import style from './Lotto.module.css'
//const LottoNums = ({nums}) => { //오브젝트로 받는 방법.
const LottoNums = (props) => {
    //console.log("LottoNums",nums); //오브젝트로 받으면 그대로 사용가능
    console.log("LottoNums", props.nums);

    const numsTag = props.nums.map((item, idx) => {
        let n = Math.floor(item / 10);
        
        let tag = <div key={'nums' + idx} className={style[`lottonum${n + 1}`]}>{item}</div>
        if(idx==6) 
            return(<>+{tag}</>)
        else return tag; 

    }); // =>{} 쓰면 return 필수


    return (
        <div className={style.lottobox}>
            {numsTag}
        </div>
    );
}

export default LottoNums;
