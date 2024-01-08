import {addExtension, Packr} from "msgpackr";

export class NovelAIDocument {
  sections: Map<number, DocumentSection>;
  order: number[];
  history: DocumentHistory;
  dirtySections: Map<any, any>;
  step: number;
  constructor() {
    this.sections = new Map;
    this.order = [];
    this.history = {
      current: 0,
      nodes: new Map<number, any>(),
      root: 0,
    };
    this.dirtySections = new Map;
    this.step = 0;
  }
}

export class DocumentSection {
  // TODO: I think this is always 1 but if it's not... gotta figure that out.
  type!: number;
  text!: string;
  // TODO: Figure out this type
  meta!: Map<any, any>;
  source!: any;
}

export class DocumentNode {
  id!: number;
  parent!: number;
  children: Set<number> = new Set();
  route: any;
  changes: Map<number, DocumentDiff | DocumentChange> = new Map();
  date!: Date;
  genPosition?: {
    sectionId: number;
    offset: number;
  };

  constructor() {
    // this.id = e.id;
    // this.parent = e.parent;
    // this.children = e.children;
    // this.route = e.route;
    // this.changes = e.changes;
    // this.date = e.date;
    // this.genPosition = e.genPosition;
  }
}

export class DocumentDiff {
  type: number = 1;
  diff!: DocumentDiffContents[];
}

export class DocumentChange {
  type: number = 0;
  section!: any;
  after!: number;
}

export class DocumentHistory {
  root!: number;
  current!: number;
  nodes: Map<number, DocumentNode> = new Map;

  constructor() {

    // TODO: Somehow call this code
    // this.root = e.root;
    // this.current = e.current;
    // this.nodes = e.nodes;
    // this.nodes.set(t.id, t)
  }
}

export class DocumentDiffContents {
  parts!: {
    from: number;
    insert: string;
    delete: string;
  }[];
  metas!: Map<number, {}[]>;
  source!: number;
}
export class AlsoDocumentDiffContents {
  parts!: {
    from: number;
    insert: string;
    delete: string;
  }[];
  metas!: Map<number, {}[]>;
  source!: number;}

addExtension({
  Class: NovelAIDocument,
  type: 20,
  write(instance) {
    // TODO: Make this actually work
    return Buffer.from([instance.myData]);
  },
  read(buffer) {
    const document = new NovelAIDocument;
    // TODO: Dejankify this
    Object.assign(document, buffer);
    return document;
  }
});

addExtension({
  Class: DocumentNode,
  type: 31,
  write(instance) {
    // TODO: Make this actually work
    return Buffer.from([instance.myData]);
  },
  read(buffer) {
    const documentNode = new DocumentNode;
    // TODO: Dejankify this
    Object.assign(documentNode, buffer);
    return documentNode;
  }
});

addExtension({
  Class: DocumentHistory,
  type: 30,
  write(instance) {
    // TODO: Make this actually work
    return instance;
  },
  read(buffer) {
    const documentHistory = new DocumentHistory;
    // TODO: Dejankify this
    Object.assign(documentHistory, buffer);
    return documentHistory;
  }
});

addExtension({
  Class: DocumentHistory,
  type: 40, // register your own extension code (a type code from 1-100)
  write(instance) {
    // TODO: Make this actually work
    return instance; // return a buffer
  },
  read(buffer) {
    const documentDiffContents = new DocumentDiffContents;
    // TODO: Dejankify this
    Object.assign(documentDiffContents, buffer);
    return documentDiffContents;
  }
});

addExtension({
  Class: DocumentHistory,
  type: 41, // register your own extension code (a type code from 1-100)
  write(instance) {
    // TODO: Make this actually work
    return instance; // return a buffer
  },
  read(buffer) {
    // TODO: Figure out how these 2 classes differ from each other
    const alsoDocumentDiffContents = new AlsoDocumentDiffContents();
    // TODO: Dejankify this
    Object.assign(alsoDocumentDiffContents, buffer);
    return alsoDocumentDiffContents;
  }
});

export function decodeDocument(document: string): NovelAIDocument {
  const msgUnpacker = new Packr({
    bundleStrings: true,
    moreTypes: true,
    structuredClone: false,
  });

  try {
    const buf = new Uint8Array(
      Buffer.from(document, "base64")
    );

    return msgUnpacker.unpack(buf) as NovelAIDocument;
  } catch (n) {
    console.error('NovelAI MessagePack Deserialization error', n);
    throw n;
  }
}
