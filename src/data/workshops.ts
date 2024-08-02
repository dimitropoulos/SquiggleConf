import { SpeakerInfo, speakers } from "./speakers.js";

export interface WorkshopInfo {
	description: string;
	discordChannel: string;
	speakers: SpeakerInfo[];
	tags: string[];
	title: string;
}

export const workshops = [
	{
		discordChannel: "workshop-inngest",
		speakers: [],
		tags: [],
		talkFormat: "Workshop",
	},
	{
		discordChannel: "workshop-max--katerina",
		speakers: [speakers["max-kless"], speakers["katerina-skroumpelou"]],
		tags: ["Editor Extensions"],
		talkFormat: "Workshop",
		title: "build a VS Code extension with the makers of Nx Console",
	},
];
