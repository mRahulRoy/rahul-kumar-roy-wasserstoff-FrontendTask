"use client"
import React, { useRef, useState } from 'react'
import Styles from "../../../styles/switch.module.css"
import { Typography } from 'antd'
const Switch = ({handleShowEvents}:{handleShowEvents:(val:string)=>void}) => {
    const [selectType, setSelectType] = useState<string | null>("events");
    const events = useRef<HTMLDivElement>(null);
    const collections = useRef<HTMLDivElement>(null);



    function handleSwitch(selectType: string) {
        switch (selectType) {
            case "events":
                setSelectType("events");
                handleShowEvents("events");
                if (events.current && events.current.style) {
                    events.current.style.backgroundColor = "#484E56";
                }
                if (collections.current && collections.current.style) {
                    collections.current.style.backgroundColor = "#282B30";
                }
                break;
            case "collections":
                setSelectType("collections");
                handleShowEvents("collections");

                if (collections.current && collections.current.style) {
                    collections.current.style.backgroundColor = "#484E56";
                }
                if (events.current && events.current.style) {
                    events.current.style.backgroundColor = "#282B30";
                }
                break;
            default:
                return;
        }
    }
    



    return (
        <div className={Styles.bg}>
            <div className={Styles.switches}>
                <Typography onClick={() => handleSwitch("events")} ref={events} className={Styles.eventBtn}>
                    Events
                </Typography>
                <Typography onClick={() => handleSwitch("collections")} ref={collections} className={Styles.collBtn}>
                    Collections
                </Typography>
            </div>
        </div>
    )
}

export default Switch
