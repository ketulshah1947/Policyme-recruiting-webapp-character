import React, { useState } from "react";
import { Attributes, Class } from "../types";
import { CLASS_LIST } from "../consts";
import ClassInfo from "./ClassInfo";




const ClassView = (props: { attributes: Attributes }) => {

    const [selectedClass, setSelectedClass] = useState<Class | null>(null);

    const showClassInfo = (characterClass: Class) => {
        if (characterClass === selectedClass) {
            setSelectedClass(null);
        } else {
            setSelectedClass(characterClass);
        }

    }

    const isEligible = (attr: Attributes, minimumRequired: Attributes): boolean => {
        return Object.keys(attr).every(
            key => attr[key as keyof Attributes] >= minimumRequired[key as keyof Attributes]
        );
    }

    return (
        <>
            <div style={{ margin: '20px', width: '300px', height: '250px', border: "1px solid white" }}>
                <h2 style={{ textAlign: 'center' }}>Classes</h2>
                {Object.keys(CLASS_LIST).map((key) => {
                    const characterClass = key as Class;
                    return (
                        <h4
                            onClick={() => showClassInfo(characterClass)}
                            style={{ color: isEligible(props.attributes, CLASS_LIST[characterClass]) ? "red" : "white" }} >
                            {characterClass}
                        </h4>
                    );
                })}
            </div>
            {selectedClass && <ClassInfo attributes={CLASS_LIST[selectedClass]} />}
        </>
    )
};

export default ClassView;