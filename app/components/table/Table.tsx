"use client";

import { useState } from "react";
import Button from "../button/Button";
import "./table.scss";
import clsx from "clsx";

interface TableProps {
  numberHome: number;
}

const entrances = [1, 2, 3, 4, 5, 6];
const rooms = [1, 2, 3, 4, 5, 6];

export default function Table({ numberHome }: TableProps) {
  const [showEntrance, setShowEntrance] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  const [activeEntranceIndex, setActiveEntranceIndex] = useState(-1);
  const [activeRoomIndex, setActiveRoomIndex] = useState(-1);

  interface ChangeItemProp {
    entrance: null | number;
    room: null | number;
  }
  const [changeItem, setChangeItem] = useState<ChangeItemProp>({
    entrance: null,
    room: null,
  });

  const [stateTable, setStateTable] = useState<object[]>([]);

  function handleClickActiveEntrance(index: number) {
    setActiveEntranceIndex(index);
  }

  function handleClickActiveRoom(index: number) {
    setActiveRoomIndex(index);
  }

  function handleClickTrashButton() {
    setStateTable([]);
  }

  function handleClickAddButton() {
    setShowEntrance(true);
  }

  function handleClickHeaderEntranceButton() {
    setActiveEntranceIndex(-1);
    setActiveRoomIndex(-1);
    setShowEntrance(false);
    if (showRooms) {
      setShowRooms(false);
    } else false;
  }

  function handleClickEntranceItem(index: number, itemEntrance: number) {
    setShowRooms(true);
    handleClickActiveEntrance(index);
    setChangeItem({ ...changeItem, entrance: itemEntrance });
  }

  function handleClickHeaderRoomButton() {
    setShowRooms(false);
  }

  function handleClickRoomItem(index: number, itemRoom: number) {
    handleClickActiveRoom(index);
    setChangeItem({ ...changeItem, room: itemRoom });
  }

  function handleClickButtonAdded() {
    if (changeItem.entrance === null || changeItem.room === null) {
      false;
    } else {
      setStateTable([...stateTable, changeItem]);
      handleClickHeaderEntranceButton();
    }
  }

  function listRow() {
    let lengthArray = 5;
    if (stateTable.length === 0) {
      lengthArray = 5;
    } else if (stateTable.length === 1) {
      lengthArray = 4;
    } else if (stateTable.length === 2) {
      lengthArray = 3;
    } else if (stateTable.length === 3) {
      lengthArray = 2;
    } else if (stateTable.length === 4) {
      lengthArray = 1;
    } else {
      lengthArray = 0;
    }
    return (
      <>
        {Array.from({ length: lengthArray }).map((item, index) => (
          <div key={index} className="column__row"></div>
        ))}
      </>
    );
  }

  return (
    <div className="table">
      <div className="table__header">
        <div className="header__title">Дом {numberHome}</div>
        <div className="header__btns">
          <div
            className="btns__btn btns__btn--del"
            onClick={handleClickTrashButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
            >
              <rect width={28} height={28} rx={6} fill="#4587ED" />
              <g clipPath="url(#clip0_4203_3739)">
                <path
                  d="M20.8747 8.375L7.12469 8.37501"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.125 12.125V17.125"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.875 12.125V17.125"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.6247 8.375V20.25C19.6247 20.4158 19.5588 20.5747 19.4416 20.6919C19.3244 20.8092 19.1655 20.875 18.9997 20.875H8.99969C8.83393 20.875 8.67496 20.8092 8.55775 20.6919C8.44054 20.5747 8.37469 20.4158 8.37469 20.25V8.375"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.125 8.375V7.125C17.125 6.79348 16.9933 6.47554 16.7589 6.24112C16.5245 6.0067 16.2065 5.875 15.875 5.875H12.125C11.7935 5.875 11.4755 6.0067 11.2411 6.24112C11.0067 6.47554 10.875 6.79348 10.875 7.125V8.375"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_4203_3739">
                  <rect
                    width={20}
                    height={20}
                    fill="white"
                    transform="translate(4 4)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            className="btns__btn btns__btn--plus"
            onClick={handleClickAddButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
            >
              <rect width={28} height={28} rx={6} fill="#4587ED" />
              <g clipPath="url(#clip0_4203_3726)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.9979 14.6269C21.3293 14.6282 21.599 14.3606 21.6003 14.0292C21.6016 13.6979 21.334 13.4282 21.0026 13.4269L14.6024 13.4019L14.6274 7.00174C14.6287 6.67037 14.3611 6.4007 14.0297 6.39941C13.6984 6.39811 13.4287 6.66569 13.4274 6.99706L13.4024 13.3973L7.00223 13.3723C6.67086 13.371 6.40119 13.6386 6.39989 13.9699C6.3986 14.3013 6.66618 14.571 6.99755 14.5723L13.3977 14.5972L13.3728 20.9974C13.3715 21.3288 13.6391 21.5985 13.9704 21.5998C14.3018 21.6011 14.5715 21.3335 14.5728 21.0021L14.5977 14.6019L20.9979 14.6269Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4203_3726">
                  <rect
                    width={20}
                    height={20}
                    fill="white"
                    transform="translate(4 4)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="table__content">
        <div className="content__column">
          <div className="column__title">Номер подъезда</div>
          {stateTable?.map((item: { entrance?: number }, index) => (
            <div key={index} className="column__row">
              {item.entrance}
            </div>
          ))}
          {listRow()}
        </div>
        <div className="content__column">
          <div className="column__title">Номер квартиры</div>
          {stateTable?.map((item: { room?: number }, index) => (
            <div key={index} className="column__row">
              {item.room}
            </div>
          ))}
          {listRow()}
        </div>
      </div>

      <div
        className={clsx(
          "table__list-entrance",
          showEntrance && "table__list-entrance--active"
        )}
      >
        <div className="list-entrance__header">
          <div className="header__title">Номер подъезда</div>
          <div
            className="header__btn"
            onClick={handleClickHeaderEntranceButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.5 5.5L5.5 14.5"
                stroke="#B8C1CC"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 14.5L5.5 5.5"
                stroke="#B8C1CC"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="list-entrance__content">
          {entrances.map((entrance, index) => (
            <div
              key={entrance}
              className={clsx(
                "content__item",
                activeEntranceIndex === index && "content__item--active"
              )}
              onClick={() => handleClickEntranceItem(index, entrance)}
            >
              Подъезд {entrance}
            </div>
          ))}
        </div>
      </div>

      <div
        className={clsx(
          "table__list-room",
          showRooms && "table__list-room--active"
        )}
      >
        <div className="list-room__header">
          <div className="header__title">Номер квартиры</div>
          <div className="header__btn" onClick={handleClickHeaderRoomButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.5 5.5L5.5 14.5"
                stroke="#B8C1CC"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 14.5L5.5 5.5"
                stroke="#B8C1CC"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="list-room__content">
          {rooms.map((room, index) => (
            <div
              key={room}
              className={clsx(
                "content__item",
                activeRoomIndex === index && "content__item--active"
              )}
              onClick={() => handleClickRoomItem(index, room)}
            >
              Квартира {room}
            </div>
          ))}
          <Button onClick={handleClickButtonAdded} />
        </div>
      </div>
    </div>
  );
}
