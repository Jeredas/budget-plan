import { useEffect, useState } from "react";
import { ReactElement } from "react";
import { DotsWrapper, ModalOptions, ModalOption } from "./style";

export default function Dots(props: {
  onEdit: () => void;
  onRemove: () => void;
}): ReactElement {
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    // Modal close listener
    document.addEventListener("click", () => {
      setIsModalOpened(false);
    });

    return () => {
      document.removeEventListener("click", () => {
        setIsModalOpened(false);
      });
    };
  }, []);

  const handleOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (isModalOpened) {
      setIsModalOpened(false);
    } else {
      setIsModalOpened(true);
    }
  };

  const handleEdit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    props.onEdit();
    setIsModalOpened(false);
  };
  const handleRemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    props.onRemove();
    setIsModalOpened(false);
  };

  return (
    <>
      <DotsWrapper onClick={handleOpen} />
      {isModalOpened && (
        <ModalOptions>
          <ModalOption onClick={handleEdit}> Edit </ModalOption>
          <ModalOption onClick={handleRemove}> Remove </ModalOption>
        </ModalOptions>
      )}
    </>
  );
};
