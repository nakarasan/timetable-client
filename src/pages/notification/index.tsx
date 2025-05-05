
  import React, { useState,} from "react";
  import {  PlusCircle, Send, X } from "lucide-react";

  
  const Notification: React.FC = () => {

  
  
    const [showCompose, setShowCompose] = useState(false);
    const [newMessage, setNewMessage] = useState<{
      message: string;
      batches: string[];
    }>({
      message: "",
      batches: [],
    });
  
    const allBatches = ["CS-2023", "CS-2022", "SE-2023", "SE-2022", "IT-2023"];
  

  
    const toggleBatchSelection = (batch: string) => {
      setNewMessage((prev) => ({
        ...prev,
        batches: prev.batches.includes(batch)
          ? prev.batches.filter((b) => b !== batch)
          : [...prev.batches, batch],
      }));
    };
    const handleSendMessage = (setShowCompose: any) => {
      if (!newMessage.message.trim()) {
        alert("Please enter a message before sending.");
        return;
      }
      setShowCompose(false);
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-8">
            
  
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowCompose(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <PlusCircle size={18} />
                <span>New Announcement</span>
              </button>
            </div>
          </header>
        </div>
  
        {showCompose && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[700px]  ">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-bold">New Announcement</h2>
                <button onClick={() => setShowCompose(false)}>
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
  
              <textarea
                className="w-full p-2 border rounded mb-4"
                placeholder="Type your message..."
                value={newMessage.message}
                onChange={(e) =>
                  setNewMessage({ ...newMessage, message: e.target.value })
                }
              />
  
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Select Batches:</h3>
                <div className="flex flex-wrap gap-2">
                  {allBatches.map((batch) => (
                    <button
                      key={batch}
                      className={`px-3 py-1 rounded-full border ${
                        newMessage.batches.includes(batch)
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => toggleBatchSelection(batch)}>
                      {batch}
                    </button>
                  ))}
                </div>
              </div>
  
              <button
                onClick={() => handleSendMessage(setShowCompose)} // Add a function to handle sending
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Send size={18} className="inline-block mr-2" /> Send
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Notification;
  