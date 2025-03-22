import { Attributes } from "../types";

const ClassInfo = (props: { attributes: Attributes }) => {
    return (
        <div style={{ margin: '20px', width: '300px', height: '250px', border: "1px solid white" }}>
            <h2 style={{ textAlign: 'center' }}>Class Information</h2>
            {Object.keys(props.attributes).map((attribute) => {
                const attr = attribute as keyof Attributes;
                return (
                    <div key={attr}>
                        <span>{attr}: {props.attributes[attr]}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default ClassInfo;