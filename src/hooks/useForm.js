import { useState } from "react";

/* export const UseForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChange = (event) => {
        const { value, name } = event.target;

        setForm({ ...form, [name]: value });
    };

    const clear = () => {
        setForm(initialState);
    };

    return [form, onChange, clear];
};
 */

export const UseForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
    };

    const clear = () => {
        setForm(initialState);
    };

    return [form, handleInputChange, clear];
};
