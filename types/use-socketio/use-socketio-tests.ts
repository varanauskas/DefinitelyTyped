import { useSocket } from "use-socketio";
import "socket.io-client";

// $ExpectType SocketIOClient.Socket
useSocket('event', () => {})