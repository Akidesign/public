import React, { useState } from "react"; //useStateをimport , stateが状態を保持する変数
import styled from "styled-components";

export const Modal = () => {
  //useStateを定義。showModalが状態を表す変数, setShowModalがshowModalを更新する関数
  const [showModal, setShowModal] = useState(true); //デフォルトでshowModalはtrue(初期値)

  const handleYesClick = () => {
    window.location.href = "https://example.com";
  };

  const handleNoClick = () => {
    setShowModal(false); //No=false
  };

  return (
    /*StyledModalコンポーネントに、showModalというプロパティ(値としてshowModalが渡されている)を渡している*/
    <StyledModal showModal={showModal}>
      <StyledText>リンク先に飛びますか？</StyledText>
      <StyledBottuns>
        <StyledBottun onClick={handleYesClick}>Yes</StyledBottun>
        <StyledBottun onClick={handleNoClick}>No</StyledBottun>
      </StyledBottuns>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  border: 1px solid #b6e1fb;
  border-radius: 10px;
  width: fit-content;
  padding: 0 10px 10px;
  background-color: #b6e1fb;
  color: #292c2d;
  display: ${(
    props //渡されたプロパティをpropsに格納
  ) =>
    //propsが持つshowModalという値 = props.showModal
    //三項演算子でスタイルを分ける
    //showModal=trueならdisplay:block , falseならnone
    //condition ? exprIfTrue : exprIfFalse; conditionは条件文 , conditionがtrueのときはexprIfTrue , falseのときはexprIfFalse が適用
    props.showModal ? "block" : "none"};
`;

const StyledText = styled.p`
  font-weight: 700;
`;

const StyledBottuns = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const StyledBottun = styled.button`
  background-color: white;
  border-radius: 10px;
  &:hover {
    background-color: #dae1e8;
  }
`;
