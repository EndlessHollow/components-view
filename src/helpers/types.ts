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
    shortDescription: string;
    version: string;
    icon: TIcon;
};
