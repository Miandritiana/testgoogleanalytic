import Button from "./Button";
import ImageBe from "./ImageBe";
import ImageKely from "./ImageKely";
import React, { useState,useEffect } from "react";

function Item(props) {

  // Change nbr stock
  const [nbrStock,setNbrStock] = useState();
  
  useEffect(() => {
    setNbrStock(props.stock);
  }, [props.stock]);
  
  const stock = () => {
    if (nbrStock > 0) {
      setNbrStock(nbrStock-1);
    }else{
      alert("Lany ooo!");
    }
  }
  
  // Change SaryBe
  const [saryBe,setSaryBe] = useState();

  useEffect(() => {
    setSaryBe(props.imgBe);
  }, [props.imgBe]);

  const manovaSary = (imgSoloina) => {
    setSaryBe(imgSoloina);
  }

    // const Card = () => {
    //   console.log("mandeha ve????");
    //   useEffect(() => {
    //     setNbrStock(nbrStock - 1);
    //   }, [nbrStock]); // Add nbrStock as a dependency to useEffect
    // };

    return (
        <div style={{
          borderRadius: "10px",
          padding: "12px",
          borderColor: "white",
          height: "100%",
          width: "200px",
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        }}>
          <ImageBe imgBe={saryBe}></ImageBe>
          <div className="allImgKely">
            <ImageKely className="imgKely1" imgKely={props.imgKely1} onClick={() => manovaSary(props.imgKely1)}></ImageKely>
            <ImageKely className="imgKely2" imgKely={props.imgKely2} onClick={() => manovaSary(props.imgKely2)}></ImageKely>
            <ImageKely className="imgKely3" imgKely={props.imgKely3} onClick={() => manovaSary(props.imgKely3)}></ImageKely>
          </div>
          <p>Prix : {props.prix}</p>
          <p>Stock : {nbrStock}</p>
          <Button name={props.button} click={stock}></Button>
        </div>
    );
  }
  
  export default Item;