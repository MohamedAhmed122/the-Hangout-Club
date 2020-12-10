import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import './styleMessageSender.css'

export default function MessageSender({input, setInput, handleSubmitForm}) {
    const [emojiPickerState, SetEmojiPicker] = useState(false);
    const handleSelect = (emoji) =>{
        SetEmojiPicker(false)
        setInput(input + emoji.native)
    }
    let emojiPicker = (
        <div className='emoji'>
             <Icon 
             className='icon' 
             size='big' 
             name='smile' 
             onClick={()=>SetEmojiPicker(!emojiPickerState)} />
  
          { emojiPickerState &&
           <Picker
           style={{marginTop: 1000 }}
            className='emoji_picker'
            theme='dark'
            onSelect={emoji => handleSelect(emoji)}
            />}
        </div>
    );
  

    return (
        <div className='messageSender'>
            {/* <Icon className='icon' size='big'  name='photo' /> */}
                {emojiPicker}
            <form onSubmit={(e) =>handleSubmitForm(e)} className='form'>
                <input 
                className='messageSender_input' 
                placeholder='Type your message here'
                value={input}
                onChange={(e) => setInput(e.target.value)} />
                <button type='submit'  />
            </form>
            <div>

            </div>
            <Icon className='icon' size='big' name='time' />
        </div>
    )
}
