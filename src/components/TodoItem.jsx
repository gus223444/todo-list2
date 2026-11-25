import React, { useState } from 'react'
import './TodoItem.css'
import Counter from './Counter'

const toInputDate = (time) => {
    const d = new Date(time)
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')

    return `${d.getFullYear()}-${mm}-${dd} `
}


const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false)
    const [editContent, setEditContent] = useState(content)
    const [editDate, setEditDate] = useState(toInputDate(date))

    const onChangeCheck = () => onUpdate(id, { isDone: !isDone })

    const onClickUpdate = () => {
        if (isEdit) {
            if (!editContent.trim()) return

            onUpdate(id, {
                content: editContent,

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

                </>

            ) : (
                <>
                    <div className="content">{content}</div>
                    <div className="date"><Counter/></div>
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