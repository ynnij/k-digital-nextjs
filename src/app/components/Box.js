"use client"

import { useState, useEffect } from "react";
const Box = () => {
    //let boxlist = [];
    const [boxlist, setBoxlist] = useState(); //안에 아무것도 초기값 주지 않으면 undefined
    const [listTag, setListTag] = useState();
    const [detailTag, setDetailTag] = useState();

    //컴포넌트 생성 시 한 번 실행
    //fetch는 한 번만 실행하면 됨
    useEffect(() => {
        let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230918";
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setBoxlist(data.boxOfficeResult.dailyBoxOfficeList);
            })
            .catch((err) => console.log(err));
    }, []) //처음에 한번만 실행하도록 하려면 뒤에 ,[]

    //state 변수가 변경될 때마다 실행 
    useEffect(() => {
        console.log(boxlist);
        if (boxlist) { //boxlist에 값이 있으면
            setListTag(boxlist.map((item, idx) =>
                <tr key={'mv' + idx} onClick={() => handleClick(item)}>
                    <td className="border border-slate-300">{item.rank}</td>
                    <td className="border border-slate-300">{item.movieNm}</td>
                    <td className="border border-slate-300">{parseInt(item.salesAcc).toLocaleString()}</td>
                    <td className="border border-slate-300"> 
                        {
                            item.rankInten == 0
                                ? "-"
                                : parseInt(item.rankInten) > 0
                                    ? "🔺 " + item.rankInten
                                    : "🔽 " + Math.abs(item.rankInten)
                        }
                    </td>
                </tr>
            ))
        }
    }, [boxlist]);
    console.log(boxlist);

    const handleClick = (item) => {
        console.log(item);
        setDetailTag(() =>
            <div>
                <h3 className="text-lg font-semibold">{item.movieNm}</h3>
                <h4>개봉일 : {item.openDt}</h4>
                <p>랭킹 : 
                    {
                        item.rankOldAndNew == "NEW" ? "⭐" + (item.rankOldAndNew) + "⭐" : ""
                    }
                     {item.rank}위</p>
                <p>누적 매출액 : {parseInt(item.salesAcc).toLocaleString()}원
                    (+{parseInt(item.salesAmt).toLocaleString()})</p>
                <p>누적 관객수 : {parseInt(item.audiAcc).toLocaleString()}명
                    (+{parseInt(item.audiCnt).toLocaleString()})</p>
            </div>

        );
    }

    return (
        <main>
            <article>
                <header><h1 className="text-2xl mb-2 font-bold">박스오피스</h1></header>
                
                {listTag && <table className="mb-5 border-collapse border border-slate-400">
                    <thead>
                        <tr>
                            <th>순위</th><th>영화명</th><th>매출액</th><th>증감</th>
                        </tr>

                    </thead>
                    <tbody className="text-center">
                        {listTag}
                    </tbody>
                </table>}
                <footer>
                    <div>
                        {detailTag}
                    </div>
                </footer>
            </article>

        </main>
    );
}
export default Box;