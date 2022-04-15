import { useState } from "react";
import { ReactElement } from "react";
import styled from "styled-components";

export default function Dots(props: any): ReactElement {
  const [isModalOpened, setIsModalOpened] = useState(false);
  // Modal close listener
  document.addEventListener('click',()=>{
    setIsModalOpened(false)
  });
  
  const handleOpen = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	  e.stopPropagation();
    if (isModalOpened) {
      setIsModalOpened(false);
    } else {
      setIsModalOpened(true);
    }
  };


  const handleEdit = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	e.stopPropagation();
    props.onEdit();
	setIsModalOpened(false)
	
  };
  const handleRemove = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    props.onRemove();
	  setIsModalOpened(false);
  };

  return (
    <>
      <DotsWrapper onClick={handleOpen}/>
      {isModalOpened && (
        <ModalOptions >
          <ModalOption onClick={handleEdit}> Edit </ModalOption>
          <ModalOption onClick={(handleRemove)}> Remove </ModalOption>
        </ModalOptions>
      )}
    </>
  );
};

const ModalOption = styled.div`
  width: 146px;
  height: 40px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #222a41;
  box-sizing: border-box;
  padding: 10px;
  &:hover {
    color: #ee2032;
    background: #fde8ea;
    border-radius: 4px;
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 16px;
  height: 100%;
  align-items: center;
  margin: auto 15px;
  right: 0;
  background-image: url(./icons/dots.png);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  z-index:100;
  &:hover{
    opacity: 50%;
  }
`;

const ModalOptions = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 92px;
  right: 7px;
  top: 40px;
  ont-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  background: #ffffff;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-shadow: 0px 4px 16px rgba(24, 32, 51, 0.12);
  border-radius: 4px;
`;
