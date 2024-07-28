import { useLocation } from "react-router-dom";
function CandidateSorted(){
    let dataWrap = [];
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const data = JSON.parse(decodeURIComponent(queryParams.get('data'))); 
    data.forEach(element => {
        dataWrap.push(element);
    });
    console.log(dataWrap)
    return(
        <>
            <h1>Here is the Rank list of Candidates</h1>
            {dataWrap.map((item,index)=>{
                <div key={index}>
                    <p>Rank: {index}</p>
                    <p>id:{item.id}</p>
                    <p>score:{item.score}</p>
                </div>
            })}
        </>
    )
}
export default CandidateSorted;