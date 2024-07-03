import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const contacts = [
  { id: 1, name: "John Doe", lastMessage: "Hey, how are you?", avatar: "https://placehold.co/40x40" },
  { id: 2, name: "Jane Smith", lastMessage: "Let's catch up later.", avatar: "https://placehold.co/40x40" },
  // Add more contacts as needed
];

const messages = [
  { id: 1, sender: "John Doe", content: "Hey, how are you?", timestamp: "10:00 AM" },
  { id: 2, sender: "You", content: "I'm good, thanks!", timestamp: "10:01 AM" },
  // Add more messages as needed
];

const Index = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    // Logic to send message (to be implemented later)
    console.log("Message sent:", messageInput);
    setMessageInput("");
  };

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 border-r">
        <div className="p-4">
          <Input placeholder="Search contacts..." />
        </div>
        <ScrollArea className="h-full">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center p-4 cursor-pointer ${selectedContact.id === contact.id ? "bg-gray-200" : ""}`}
              onClick={() => setSelectedContact(contact)}
            >
              <Avatar src={contact.avatar} alt={contact.name} />
              <div className="ml-4">
                <div className="font-semibold">{contact.name}</div>
                <div className="text-sm text-gray-600">{contact.lastMessage}</div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="flex items-center p-4 border-b">
          <Avatar src={selectedContact.avatar} alt={selectedContact.name} />
          <div className="ml-4">
            <div className="font-semibold">{selectedContact.name}</div>
          </div>
        </header>
        <ScrollArea className="flex-1 p-4">
          {messages.map((message) => (
            <Card key={message.id} className="mb-4">
              <CardContent>
                <div className="flex justify-between">
                  <div className="font-semibold">{message.sender}</div>
                  <div className="text-sm text-gray-600">{message.timestamp}</div>
                </div>
                <div>{message.content}</div>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
        <footer className="p-4 border-t flex items-center">
          <Input
            className="flex-1 mr-4"
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </footer>
      </main>
    </div>
  );
};

export default Index;