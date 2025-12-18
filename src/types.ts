import type { customizationOptions } from "./data/customizationOptions";

export type AboutInfo = {
    h2: string,
    h3: string,
    description: string,
    img: string
}

export type Project = {
    readonly projectName: string;
    readonly projectImg: string;
    readonly techUsed: string[];
    readonly projectDescription: string;
    readonly links: [string, string];
}

export type CustomizationValue = string[] | "toggle";

export interface ICustomOptions {
    [key: string]: CustomizationValue;
}

export type CustomizationState = {
    [K in keyof typeof customizationOptions]:
        typeof customizationOptions[K] extends string[] ? string : boolean;
}