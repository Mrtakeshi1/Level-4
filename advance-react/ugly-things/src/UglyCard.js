import uglyThingsData from "./UglyThingsData";
import { useContext, useState } from "react";
import './App.css'

function UglyCard(props) {
    const uglyContext = useContext(uglyThingsData);
    const [isEditMode, setEditMode] = useState(false);
    const [editPost, setEditPost] = useState({
        title: props.data.title,
        description: props.data.description
    });

    function changeEditMode() {
        setEditMode(prevMode => !prevMode);
    }

    function editInputListener(e) {
        const { name, value } = e.target;
        setEditPost(prevPost => ({
            ...prevPost,
            [name]: value
        }));
    }

    function handleUpdate() {
        setEditMode(false);
        uglyContext.editUgly(props.data._id, editPost);
    }

    return (
        <div className="ugly-card-container">
            <h1 className="ugly-card-title">{props.data.title}</h1>
            <img src={props.data.imgUrl} alt={props.data.title} />
            <h3 className="ugly-card-description">{props.data.description}</h3>
            <div>
                <button className="deleteButton" onClick={() => uglyContext.deleteUgly(props.data._id)}>Delete</button>

                {!isEditMode && <button
                    className="editButton"
                    onClick={changeEditMode}
                >Edit</button>}
                {isEditMode && <button
                    className="editButton"
                    onClick={handleUpdate}
                >Update</button>}
            </div>
            {isEditMode && <div>
                <input
                    name="title"
                    value={editPost.title}
                    onChange={editInputListener}
                />
                <input
                    name="description"
                    value={editPost.description}
                    onChange={editInputListener}
                />
            </div>}
        </div>
    );
}

export default UglyCard;
