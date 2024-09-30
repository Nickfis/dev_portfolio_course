type SanityWorkExperience = {
  _id: string;
  _type: "devExperience";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate?: string;
};

type SanityProject = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  company: string;
  slug: string;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  dateAccomplished: string;
  content: Array<RawTextContent | RawImageContent>;
  stack: Array<string>;
};

interface RawTextContent {
  children: Array<{
    marks?: Array<string>;
    text: string;
    _type: "span";
    _key: string;
  }>;
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
}

interface RawImageContent {
  asset: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  _type: "image";
  _key: string;
}

interface ProcessedProject {
  name: string;
  company: string;
  dateAccomplished: string;
  stack: string[];
  projectImageUrl: string;
  slug: string;
  content: Array<ProcessedTextContent | ProcessedImageContent>;
}

interface ProcessedTextContent {
  type: "text";
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  textToRender: string;
}

interface ProcessedImageContent {
  type: "image";
  url: string;
}
