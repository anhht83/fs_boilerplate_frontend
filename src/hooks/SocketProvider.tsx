import React, { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import storage from "@/utils/storage";

interface ISocketContext {
  socketOn(name?: string): void;

  socketOnUpdateBid(cb?: any): void;

  children?: any;
}

const defaultValue: ISocketContext = {
  socketOn: () => void (0),
  socketOnUpdateBid: () => void (0)
};

const SocketContext = createContext<ISocketContext>(defaultValue);

const SocketProvider: React.FC<any> = ({ children }) => {
  const user = storage.getItem("user");
  const socketRef = useRef<any>();
  const initSocket = () => {
    const url = process.env.NEXT_PUBLIC_SOCKET_API || "";
    socketRef.current = io(url, {
      reconnectionDelayMax: 10000,
      auth: {
        token: user ? user.token.accessToken : ""
      }
    });
  };
  const socketOn = (eventName: string, options?: any) => {
    if (!socketRef.current) initSocket();

    socketRef.current.on(eventName, (data: any) => {
      if (options && options.cb) options.cb(data);
    });
  };

  const socketOnUpdateBid = (cb: any) => {
    socketOn("update_bid", { cb });
  };

  useEffect(() => {
  }, [user]);


  return (
    <SocketContext.Provider value={{ socketOn, socketOnUpdateBid }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);

export default SocketProvider;