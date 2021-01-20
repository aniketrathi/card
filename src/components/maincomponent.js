import React, { useEffect, useState } from 'react';
import {Card, CardImg} from 'reactstrap';
import {Data} from '../data';

export default function Main(props){
    const [Cards] = useState(Data);
    const [Images,setImages] = useState([]);
    const [Clicked,setClicked] = useState([]);
    const [Score,setScore] = useState(0);
    const [Highscore,setHighscore] = useState(0);

    const randomimg  = () =>{
        const arr = [];
        const n = Cards.length;
        while(arr.length < 3){
            var x = Math.floor(Math.random() * n);
            if(arr.indexOf(x)===-1)
                arr.push(x);
        }
        const img = [];
        for(var j=0; j<3; j++){
            img.push(Cards[arr[j]]);
        }
        setImages(img);
    }

    const randomclick = (event) =>{
        const y = event.target.id;
        if(Clicked.indexOf(y) === -1){
            setClicked([...Clicked,y]);
            randomimg();
            setScore(Score+1);
        }
        else{
            alert("Believe it! Your score is :" + Score);
            // window.location.reload();
            if(Highscore<Score)
                setHighscore(Score);
            setScore(0);
            setClicked([]);
        }
    }

    useEffect(() => {
        randomimg();
    },[Cards]);

    const list = Images.map((imgs) => {
        return(
            <div key={imgs.id} className="col-4">
                <Card>
                    <CardImg id={imgs.id} onClick={(event) => randomclick(event)} src={`/card/${imgs.image}`} className="look"></CardImg>
                </Card>
            </div>
        );
    });
    return(
        <div className="container">
            <div className="row">
                <h2>Score: {Score}</h2>
                <h2>Highscore: {Highscore}</h2>
            </div><br/><br/>
            <div className="row">
                {list}
            </div>
        </div>
    );
}