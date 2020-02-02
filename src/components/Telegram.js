import React from 'react'
import TelegramItem from './TelegramItem'

export default function Telegram() {
    const items = [
        {id: 1, img: "https://i.pravatar.cc/150?img=9", important: true, name: 'Anna Karenina', msg:'Привет!,', tags:['#friend', '#funny'], status: true},
        {id: 2, img: "https://i.pravatar.cc/150?img=10", important: false, name: 'Tanya Volchuk', msg:'Hello, every body.', tags:['#friend', '#funny'], status:false},
        {id: 2, img: "https://i.pravatar.cc/150?img=11", important: false, name: 'Pavel Shapkin', msg:'Салют всем!,', tags:['#friend', '#funny'], status:true},
    ]
    return (
        <div className="important">  
            Telegram
        <hr />
            {items.map(o => <TelegramItem  img={o.img} important={o.important} name={o.name} msg={o.msg} tags={o.tags} status={o.status}/>)}
        
        </div>
    )

    
}
