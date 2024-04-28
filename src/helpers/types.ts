export type TError = {
  code: number;
  message: string;
};

enum TAppType {
  extractor = "extractor",
  application = "application",
  writer = "writer",
  processor = "processor",
  codePattern = "code-pattern",
  other = "other",
}

type TIcon = {
  [key: string]: string;
};

export type TApplication = {
  id: string;
  vendor: string;
  name: string;
  type: TAppType;
  category: string[];
  shortDescription: string;
  version: string;
  icon: TIcon;
};

export type TApplicationDetail = {
  id: string;
  vendor: string;
  name: string;
  type: TAppType;
  category: string[];
  shortDescription: string;
  longDescription: string;
  version: string;
  icon: TIcon;
};
