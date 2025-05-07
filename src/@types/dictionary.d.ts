export type TSidebar = {
  title: string;
  input: string;
  filters: {
    all: string;
    unread: string;
    archived: string;
    starred: string;
    groups: string;
  };
};

export type TMenu = {
  chats: string;
  calls: string;
  status: string;
  ia: string;
  favorites: string;
  archived: string;
  settings: string;
  profile: string;
};

export type TMessage = {
  type_here: string;
  send: string;
};

export type TDictionary = {
  name: string;
  description: string;
  drawer: TMenu;
  sidebar: TSidebar;
  // welcome: string;
  // start_chat: string;
  // search: string;
  // menu: TMenu;
  // message: TMessage;
};
