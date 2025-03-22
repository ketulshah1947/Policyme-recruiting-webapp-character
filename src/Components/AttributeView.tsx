import React from "react";
import { Attributes } from "../types.js";


const AttributeView = (props: { attributes: Attributes, attributesUpdated: (attributes: Attributes) => void }) => {

    const updateAttribute = (attribute: keyof Attributes, change: number) => {
        const newVal = props.attributes[attribute] + change;
        if (newVal > 70) {
            alert("An Attribute can have max 70 value.");
        } else if (newVal < 0) {
            alert("An Attribute can not have negative value.");
        }
        else {
            const newValue = Math.max(0, Math.min(70, newVal));
            props.attributesUpdated({ ...props.attributes, [attribute]: newValue });
        }
    };

    const getAbilityModifier = (value: number): number => {
        return Math.floor((value - 10) / 2);
    };

    return (
        <div style={{ margin: '20px', width: '300px', height: '250px', border: "1px solid white" }}>
            <h2 style={{ textAlign: 'center' }}>Attributes</h2>
            {Object.keys(props.attributes).map((attribute) => {
                const attr = attribute as keyof Attributes;
                return (
                    <div key={attr}>
                        <span>{attr}: {props.attributes[attr]}</span> {' '}
                        <button onClick={() => updateAttribute(attr, 1)}>+</button> {' '}
                        <button onClick={() => updateAttribute(attr, -1)}>-</button>{' '}
                        <span> Modifier: {getAbilityModifier(props.attributes[attr])}</span>
                    </div>
                );
            })}
        </div>
    )
};

export default AttributeView;