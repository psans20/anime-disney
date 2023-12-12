// Chat.js
// Chat.js
import React from 'react';

export default function Chat({ navSection }) {
  let content;

  switch (navSection) {
    case 'Chat':
      content = (
        <div className='text-white flex justify-start items-center gap-4 md:ml-[480px]'>
          <button className='px-2 py-1.5 font-bold text-sm border border-white'>Chat</button>
          <button className='px-2 py-1.5 text-sm border border-white'>Delete</button>

          <form
            className="form bottom-16 fixed w-10/12 flex"
            style={{ alignItems: 'stretch', paddingRight: '600px' }}
          >
            <textarea
              name="message"
              type="text"
              rows="5"
              style={{
                width: '100%',
                margin: '0px',
                background: 'none',
                border: '2px solid rgb(255, 255, 255)',
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                cursor: 'pointer',
                color: 'white',
                padding: '18px 24px',
                background: 'none',
                borderWidth: '2px 2px 2px 0px',
                borderStyle: 'solid',
                borderTopColor: 'rgb(255, 255, 255)',
                borderRightColor: 'rgb(255, 255, 255)',
                borderBottomColor: 'rgb(255, 255, 255)',
                borderLeftColor: 'initial',
                borderImage: 'initial',
                userSelect: 'text',
                overflow: 'hidden',
              }}
            >
              Send
            </button>
          </form>
        </div>
      );
      break;
    case 'Gif':
      content = <div className='text-white flex justify-start items-center gap-4 md:ml-[480px]'>
<h2>Public</h2>
<h2>Private</h2>
<h2>Upload</h2>
<h2>Delete</h2>
        </div>
      break;
      case 'Picture':
        content = <div className='text-white flex justify-start items-center gap-4 md:ml-[480px]'>
  <h2>Public</h2>
  <h2>Private</h2>
  <h2>Upload</h2>
  <h2>Delete</h2>
          </div>
        break;
        case 'Video':
      content = <div className='text-white flex justify-start items-center gap-4 md:ml-[480px]'>
<h2>Public</h2>
<h2>Private</h2>
<h2>Upload</h2>
<h2>Delete</h2>
        </div>
      break;
      case 'Music':
      content = <div className='text-white flex justify-start items-center gap-4 md:ml-[480px]'>
<h2>Public</h2>
<h2>Private</h2>
<h2>Upload</h2>
<h2>Delete</h2>
        </div>
      break;
      case "User":
        content = 
        <div className='flex justify-center p-4 items-center text-white'>
<div className='flex flex-row gap-8'>
<h2>Login</h2>
<h2>Register</h2>
<h2>Recovery</h2>
</div>
        </div>
        break;
    default:
      content = null; // Render nothing by default
  }

  return <div>{content}</div>;
}
