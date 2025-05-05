import React, { useState, useEffect, useRef } from "react";
import { Bell, BellDot, PlusCircle, Send, X } from "lucide-react";
import Notification from "pages/notification";

const StaffDashboard: React.FC = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 2,
      sender: "Tharmmendra",
      message:
        "ITPM viva is scheduled today at 5.30pm -8.30pm. You are expected to arrive with formal dress code.",
      read: false,
      time: "11.43 am",
    },
    {
      id: 1,
      sender: "ADMIN",
      message:
        "Dear Students We kindly request that you refrain from using the front door in the reception area to enter / exit the campus, as well as the fire staircase door to access the canteen. Instead, we would appreciate it if you could please use the door in front of the library for entry and exit purposes. Thank you for your cooperation in helping us maintain a smooth environment for everyone. ADMINISTRATION",
      read: true,
      time: "Yesterday",
    },
    {
      id: 3,
      sender: "Library",
      message: "Your requested book is now available for pickup",
      read: true,
      time: "2 days ago",
    },
  ]);

  const user = {
    name: "KAMAL VIAMAL",
    role: "Senior Lecturer",
    department: "Information Technology",
  };

  const [showNotifications, setShowNotifications] = useState(false);
  const [showCompose, setShowCompose] = useState(false);
  const [newMessage, setNewMessage] = useState<{
    message: string;
    batches: string[];
  }>({
    message: "",
    batches: [],
  });

  const allBatches = ["CS-2023", "CS-2022", "SE-2023", "SE-2022", "IT-2023"];
  const unreadCount = notifications.filter((n) => !n.read).length;
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Typing the event parameter to MouseEvent
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <div>
            <h1 className="text-3xl font-bold text-indigo-900">
              Welcome Mr. {user.name}
            </h1>
            <p className="text-indigo-700">
              {user.role} | {user.department} Department
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowCompose(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <PlusCircle size={18} />
              <span>New Announcement</span>
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors relative">
                {unreadCount > 0 ? (
                  <>
                    <BellDot className="w-6 h-6 text-indigo-600" />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  </>
                ) : (
                  <Bell className="w-6 h-6 text-indigo-600" />
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl z-10 border border-gray-200">
                  <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-300 to-indigo-400 text-white rounded-t-lg">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition-colors ${
                            !notification.read ? "bg-blue-50" : ""
                          }`}>
                          {!notification.read && (
                            <div className="inline-block mb-2 px-2 py-1 bg-green-200 text-green-900 text-xs rounded-full">
                              New
                            </div>
                          )}
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-bold text-indigo-800">
                                {notification.sender}
                              </p>
                              <p className="text-gray-700 mt-1">
                                {notification.message}
                              </p>
                            </div>
                            <span className="text-xs text-gray-500">
                              {notification.time}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No notifications
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
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

      <section className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6 bg-gradient-to-r from-blue-300 to-indigo-400 text-white">
          <h2 className="text-2xl font-semibold">Your Timetable</h2>
        </div>
        
      </section>
    </div>
  );
};

export default StaffDashboard;
