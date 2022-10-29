import React, { useState } from 'react';
export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description should not be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    let StyleButton = {
        position: "relative",
        borderRadius: "10px"
    }
    return (
        <div className="container">
            <h4>Give Your Short Description</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Add Your Name</label>
                    <input type="text" placeholder='Name' value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Add Your Address</label>
                    <input type="text" placeholder='Give here your details ' value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success" style={StyleButton}>Click Me</button>
            </form>
        </div>
    )
}

export default AddTodo
