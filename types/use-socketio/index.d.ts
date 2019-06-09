// Type definitions for use-socketio 1.0
// Project: https://github.com/mfrachet/use-socketio
// Definitions by: Tadas Varanauskas <https://github.com/varanauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "../react";

/**
 * Socket.io context provider
 */
export const ClientSocket: React.ComponentType<{ url: string, children: React.ReactNode }>;
/**
 * Socket.io hook
 * @param eventKey The event that we're listening for
 * @param callback The function to call when we get the event. Parameters depend on the
 * event in question
 */
export function useSocket(eventKey: string, callback: Function): SocketIOClient.Socket;
