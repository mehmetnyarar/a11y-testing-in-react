export interface MuppetLink {
  url: string;
  text?: string;
  description?: string;
}

export interface MuppetInfo {
  id: string;
  text: string;
}

export interface MuppetMessage {
  id: string;
  text: string;
  isUser?: boolean;
}

export interface MuppetChat {
  initialMessage: MuppetMessage;
  responses: MuppetMessage[];
}

export interface Muppet {
  id: string;
  name: string;
  slug: string;
  img: MuppetLink;
  info: MuppetInfo[];
  more?: MuppetLink;
  chat?: MuppetChat;
}
