import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './404.scss'

const FourOhFour = (props) => {
  console.log(props)
  
  const messages = [
    `'${props.location.pathname}' page not found`,
    "I'm still coding that page.",
    "Under construction.",
    "Are you lost?"
  ]

  return (
    <div className="container">
      <p className="nycda-description">
        Original Design Showcase: 404 page designed & coded for NYCDA.com Coding School 2016
      </p>
      <div id="playground">
        <p className="tab">
          404.html 
          <strong>&nbsp; &nbsp; &nbsp; &nbsp; x</strong>
        </p>
        <div id="snippit">
          <div className="bg_white text-center" id="display">
            <h1 className="dodger">404</h1>
            <h4 id="message-display">
              <ReactTypingEffect
                text={messages} //text=["Hello.", "World!"]
              />
            </h4>
            <a href="/">
              <button>GO TO HOME PAGE</button>
            </a>
            <p>
              Or if you are really feeling lost, contact me at 
              <a className="dodger" href="mailto:mr.morrison.key@gmail.com"> mr.morrison.key@gmail.com </a>
            </p>
          </div>
          <h3 className="white">
            <span className="gray">1 &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;</span>
            <span className="red">body</span>
            <span className="yellow">&nbsp; style=</span>
            <span className="green">"text-align: center; background: url('empty-room.jpg')"</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">2 &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;</span>
            <span className="red">h1</span>
            <span className="yellow">&nbsp; style=</span>
            <span className="green">"color: blue"</span>
            <span className="light-gray">&gt;</span>
            &nbsp;404&nbsp; 
            <span className="light-gray">&lt;/</span>
            <span className="red">h1</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">3 &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;</span>
            <span className="red">h4</span>
            <span className="light-gray">&gt; &nbsp;</span>
            <span id="message-snippit">
              <ReactTypingEffect
                text={messages}
              />
            </span>
            <span className="light-gray">&nbsp; &lt;/</span>
            <span className="red">h4</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">4 &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;</span>
            <span className="red">a &nbsp;</span>
            <span className="yellow">href=</span>
            <span className="green">"/"</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;</span>
            <span className="red">button</span>
            <span className="yellow">&nbsp; style=</span>
            <span className="green">"color: blue"</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
            GO TO HOME PAGE
          </h3>
          <h3 className="white">
            <span className="gray">7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;/</span>
            <span className="red">button</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">8 &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;/</span>
            <span className="red">a</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">9 &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;/</span>
            <span className="red">p</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">10 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span>Or if you are really feeling lost, contact me at</span>
          </h3>
          <h3 className="white">
            <span className="gray">11&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;</span>
            <span className="red">a &nbsp;</span>
            <span className="yellow">href=</span>
            <span className="green">"mailto:mr.morrison.key@gmail.com"</span>
            <span className="yellow">&nbsp; style=</span>
            <span className="green">"color: blue"</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">12 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
            mr.morrison.key@gmail.com 
          </h3>
          <h3 className="white">
            <span className="gray">13 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;/</span>
            <span className="red">a</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">14 &nbsp; &nbsp; &nbsp;</span>
            <span className="light-gray">&lt;/</span>
            <span className="red">p</span>
            <span className="light-gray">&gt;</span>
          </h3>
          <h3 className="white">
            <span className="gray">15 &nbsp;</span>
            <span className="light-gray">&lt;/</span>
            <span className="red">body</span>
            <span className="light-gray">&gt;</span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default FourOhFour;
