"use client";
import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "./chatBubble";

const Bot = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const hideHim = useRef(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
      setShowPopup(false);
    }, 1500);

    return () => clearTimeout(0.5);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchMessage = () => {
    const queryData = { query: userMessage };
    console.log("fetch mssg");

    fetch("http://3.221.139.70:5000/api/shreshta_bot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data["answer"]);
        setMessages((prevMessages) => [
          ...prevMessages,
          { message: data["answer"], sender: "bot" },
        ]);
        console.log([...messages, { message: data["answer"], sender: "bot" }]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
    scrollToBottom();
  };

  const handleUserMessageSubmit = (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: userMessage, sender: "user" },
    ]);
    setUserMessage("");
  };

  const handleIconClick = () => {
    setShowPopup(true);
    hideHim.current = !hideHim.current;
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setShowPopup(false);
    hideHim.current = false;
  };

  return (
    <div className="h-screen w-screen relative flex justify-end">
      <div onClick={handleIconClick} className="cursor-pointer">
        <img
          src="/bot/boticon.png"
          className={`h-40 w-40 transition-all duration-500 hover:scale-110 z-[30] ${
            hideHim.current ? "translate-x-[50px]" : ""
          }`}
          alt=""
          style={{ position: "fixed", bottom: 60, right: -60 }}
        />
        {showMessage && (
          <div className="fixed top-80 z-[30]">
            <img
              src="/bot/text.png"
              className="h-30 w-40 transition-all duration-500 scale-80 mx-10"
              alt=""
              style={{ position: "fixed", bottom: 200, right: 0 }}
            />
          </div>
        )}
        {showPopup && (
          <div
            className={`fixed bottom-4 right-28 bg-[#E9F8E8] sm:w-screen sm:h-screen md:w-1/4 md:h-full rounded-xl shadow z-[100] transition-all duration-500
            }`}
            style={{
              opacity: showPopup ? 1 : 0,
              transition: "opacity 1s, transform 1s",
              height: `${showPopup ? "650px" : "0px"}`,
            }}
          >
            <div className="bg-[#73AAA6]/90 rounded-t-xl">
              <div className="flex justify-between text-xl font-bold p-6 text-white bangers">
                SHRESHTA CHATBOT
                <div className="flex gap-4">
                  <button onClick={handleCloseClick}>
                    <img src="/bot/hide.png" className="w-4"></img>
                  </button>
                </div>
              </div>
            </div>
            <img src="/bot/back.png"></img>
            <div className="flex w-full justify-center absolute bottom-0 h-16 pb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  id=""
                  className="text-xl rounded-lg bg-[#73AAA6]/90 py-4 px-4 text-white focus:outline-none placeholder:text-white dog"
                  placeholder="Type your question here..."
                  required
                />
                <button className="text-sm rounded-lg bg-[#73AAA6]/90 py-2 px-4 text-white">
                  <img src="/bot/arrow.png" alt="" width={15} height={15} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bot;
