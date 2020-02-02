import React from 'react'

export default function TelegramItem(props) {
    const tags = <div>{props.tags.map(o => <span>{o}</span>)}</div>;


    return (
        <>
        <div className={props.important === true ? "imporant" : undefined}>
            <img src={props.img} alt="" />
            <span className={(props.status == true) ? "liked" : undefined}>{props.status}☑</span>
            <div id='name'><h4>{props.name}</h4> </div>
            <div id='msg'><h5>{props.msg}</h5></div>
            {tags}
            <hr />
        </div>
    </>
    )


}
