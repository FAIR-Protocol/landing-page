/*
 * Fair Protocol - Landing Page
 * Copyright (C) 2023 Fair Protocol
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 */

import React, { useState } from 'react';
import '../scss/universal-styles-arbitrum.scss';

// icons
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const exampleMessages = [
  {
    sender: `chat example hello chat example hello chat example hellochat example hellovchat example hellochat example hellochat example hellochat example.

Example with paragraph!!
Hellochat example hellochat example hellochat example hellochat example hello`,
    timestamp: new Date(),
  },
  { receiver: 'This is a test. Thank you.', timestamp: new Date() },
  { receiver: 'This is a test 2. Thank you.', timestamp: new Date() },
  { receiver: 'This is a test 3. Thank you.', timestamp: new Date() },
  { receiver: 'This is a test 4. Thank you.', timestamp: new Date() },
  { receiver: 'This is a test 5. Thank you.', timestamp: new Date() },
  { receiver: 'This is a test 6. Thank you.', timestamp: new Date() },
  { receiver: 'This is a test 7. Thank you.', timestamp: new Date() },
  { receiver: 'This is a test 8. Thank you.', timestamp: new Date() },
  { receiver: 'This is a test 9. Thank you.', timestamp: new Date() },
  { receiver: 'This is a test 10. Thank you.', timestamp: new Date() },
];

const ArbitrumChat = () => {
  const [exampleMessagesNew, addMessage] = useState(exampleMessages);

  const sendMessage = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    console.log(formData.get(''));

    addMessage([...exampleMessagesNew, { sender: 'asd', timestamp: new Date() }]);

    // setTimeout(() => {
    //   scrollToBottom();
    // }, 50);
  };

  const scrollToBottom = () => {
    addMessage([...exampleMessagesNew, { sender: 'yes', timestamp: new Date() }]);
    const chatDiv = document.getElementById('chat-content-scrollable-div');
    if (chatDiv) {
      chatDiv.scrollBy({ top: chatDiv.scrollHeight });
    }
  };

  return (
    <section className='w-full'>
      <div className='bg-slate-700 h-[100vh] w-[100vw] absolute top-0 left-0 z-0'></div>

      <div className='w-[100vw] flex justify-center items-center max-h-[100vh]'>
        <div className='w-full max-w-[800px] h-[100vh] md:h-auto p-1 md:p-3 mt-0 md:mt-5 flex justify-between items-center flex-col rounded-lg bg-white z-20'>
          <div className='w-full flex items-center justify-between px-0 md:px-4 gap-4'>
            <a
              href='https://arbitrum.io/'
              className='w-full max-w-[200px] transition-all p-2 rounded-lg hover:bg-neutral-100'
            >
              <img
                src='./logos/arbitrum-logo.png'
                alt='FairAI Logo'
                className='w-full object-contain'
              />
            </a>
            <a
              href='https://getfair.ai'
              className='w-full max-w-[180px] transition-all p-2 rounded-lg hover:bg-neutral-100'
            >
              <img
                src='./fair-ai-outline.svg'
                alt='FairAI Logo'
                className='w-full object-contain'
              />
            </a>
          </div>

          <div className='w-full flex flex-col justify-end items-end mt-1 md:mt-4 max-h-[90vh]'>
            <div
              id='chat-content-scrollable-div'
              className='w-full py-2 px-1 md:px-7 flex flex-col items-end gap-6 min-h-[20vh] overflow-y-auto max-h-[800px]'
            >
              {exampleMessagesNew.map((messageObject, index) => {
                if (messageObject.sender) {
                  return (
                    <div key={'message-nr-' + index.toString()} className='w-full'>
                      <div className='flex w-full gap-4 justify-end flex-wrap md:flex-nowrap items-end'>
                        <div className='bg-neutral-200 hover:bg-neutral-300 transition-all rounded-lg py-2 px-4 w-fit min-w-[30%] max-w-full md:max-w-[80%] whitespace-pre-wrap'>
                          {messageObject.sender}
                          <div className='flex justify-end w-full opacity-30 text-xs'>
                            {messageObject.timestamp.toLocaleString(undefined, {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            })}
                          </div>
                        </div>
                        <img
                          src='./fair-protocol-face.svg'
                          className='object-contain w-full max-w-[35px] md:max-w-[50px] mb-1 md:mb-2 flex-0 invert'
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={'message-nr-' + index.toString()} className='w-full'>
                      <div className='flex w-full gap-4 justify-start flex-wrap-reverse md:flex-nowrap items-end'>
                        <img
                          src='./logos/arbitrum_logo_monochrome.svg'
                          className='object-contain w-full max-w-[25px] md:max-w-[35px] mb-1 md:mb-2 flex-0 invert'
                        />
                        <div className='bg-neutral-200 hover:bg-neutral-300 transition-all rounded-lg py-2 px-4 w-fit min-w-[30%] max-w-full md:max-w-[80%] whitespace-pre-wrap'>
                          {messageObject.receiver}
                          <div className='flex justify-start w-full opacity-30 text-xs'>
                            {messageObject.timestamp.toLocaleString(undefined, {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <form
              onSubmit={sendMessage}
              className='mt-6 py-4 px-1 md:px-5 w-full flex flex-wrap items-center justify-end gap-4'
            >
              <div className='border-2 rounded-lg border-neutral-700 p-1 flex-1 min-w-full sm:min-w-fit'>
                <textarea
                  rows={1}
                  className='w-full px-2 py-1'
                  placeholder='Write something...'
                  name='messageTextArea'
                ></textarea>
              </div>
              <button className='button-arbitrum flex-0' type='submit'>
                Send <SendRoundedIcon style={{ width: '18px', opacity: 0.9 }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArbitrumChat;
