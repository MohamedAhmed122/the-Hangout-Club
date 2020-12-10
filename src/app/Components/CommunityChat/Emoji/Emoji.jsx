import React, { useState } from 'react';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
 
const Emoji = () => {
  const [emojiPickerState, SetEmojiPicker] = useState(false);
  const [message, SetMessage] = useState("");

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
      theme='dark'
        // title="Pick your emoji…"
        // emoji="point_up"
        onSelect={emoji => SetMessage(message + emoji.native)}
      />
    );
  }
  function triggerPicker(event) {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }


  
  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh'}}>
          <div class="w-100 sans-serif bg-white">
          <form
            class="pa4 black-80"
            style={{ maxWidth: "500px", margin: "0 auto" }}
          >
            <div class="measure">
              <label for="name" class="f6 b db mb2">
                Your message for us
              </label>
              <input
                id="name"
                class="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                aria-describedby="name-desc"
                value={message}
                onChange={event => SetMessage(event.target.value)}
              />
              {emojiPicker}
              <button
                class="ma4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                onClick={triggerPicker}
              >
                Add an Emoji!
                <span role="img" aria-label="">
                  😁
                </span>
              </button>

              <div class="measure">
                <label for="name" class="f6 b db mb2">
                  Your Inserted text
                </label>
                <input
                  class="f4 fw7 dib pa2 no-underline ba b--black-20 w-100"
                  value={message}
                  disabled
                />
              </div>

              <button
                class="ma4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
              >
                Send your message
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}
export default Emoji