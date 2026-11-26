import React, { useState } from 'react'
import './TodoItem.css'



const TodoItem = ({ id, isDone, content, number, onUpdate, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false)
    const [editContent, setEditContent] = useState(content)
    const [editcount, setEditCount] = useState(0)

    const onChangeCheck = () => onUpdate(id, { isDone: !isDone })

    const onClickUpdate = () => {
        if (isEdit) {
            if (!editContent.trim()) return

            onUpdate(id, {
                content: editContent,
                number: {editcount}
            })
        }
        setIsEdit(!isEdit)
    }

    const onClickDeleteButton = () => {
        onDelete(id)
    }

    return (
        <div className={`TodoItem ${isDone ? " isDone" : ""}`}>
            <input type="checkbox" checked={isDone} onChange={onChangeCheck} />

            {isEdit ? (
                <>
                    <input
                        type="text"
                        className='content'
                        onChange={(e) => setEditContent(e.target.value)}
                        value={editContent} />
                    <input
                        type="number"
                        className='number'
                        value={editcount}
                        onChange={(e) => setEditCount(e.target.value)}
                    />

                </>

            ) : (
                <>
                    <div className="content">{content}</div>
                    <div className="date">0</div>
                </>
            )}


            <div className="btn-wrap">

                <button className="updateBtn" onClick={onClickUpdate}>
                    {isEdit ? '저장' : '수정'}
                </button>
                <button className="deleteBtn" onClick={onClickDeleteButton}>삭제</button>
            </div>

        </div>
    )
}

export default TodoItem