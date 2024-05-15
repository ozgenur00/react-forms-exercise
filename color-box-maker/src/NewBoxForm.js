import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

function NewBoxForm({ addBox }) {
    const [formData, setFormData] = useState({
        width: '',
        height: '',
        backgroundColor: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({
        ...fData,
        [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = { ...formData, id: uuid() };
        addBox(newBox);
        setFormData({
            width: '',
            height: '',
            backgroundColor: ''
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
            id="width"
            name="width"
            values="formData.width"
            onChange={handleChange}
            />
            <label htmlFor="heigth">Heigth</label>
            <input
            id="heigth"
            name="height"
            values="formData.heigth"
            onChange={handleChange}
            />
            <label htmlFor="backgroundColor">Background Color</label>
            <input
            id="backgroundColor"
            name="backgroundColor"
            values="formData.backgroundColor"
            onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;
