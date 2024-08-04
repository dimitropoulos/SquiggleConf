import youtube from "~/assets/logos/YouTube.svg";
import bluesky from "~/assets/logos/bluesky.svg";
import discord from "~/assets/logos/discord.svg";
import github from "~/assets/logos/github.svg";
import linkedin from "~/assets/logos/linkedin.svg";
import mastodon from "~/assets/logos/mastodon.svg";
import twitter from "~/assets/logos/twitter.svg";
import inngestBlack from "~/assets/sponsors/inngest-black.svg";
import openjsFoundationColor from "~/assets/sponsors/openjs-foundation-color.svg";
import * as notionData from "~/data/notion-data";

export type { Person, TalkFormat, TalkInfo } from "~/data/notion-data";

export const links = {
	scholarship: "https://forms.gle/pnoAmVgijk3p4j5C7",
	tickets: "https://ticket.squiggleconf.com",
	volunteer: "https://volunteer.squiggleconf.com",
};

export const sponsors = [
	{
		href: "https://inngest.com?utm_source=squiggleconf",
		logo: inngestBlack,
		title: "Inngest",
	},
	{
		href: "https://openjsf.org?utm_source=squiggleconf",
		logo: openjsFoundationColor,
		title: "OpenJS Foundation",
	},
];

export const locations = [
	{
		alt: "Bluesky",
		href: "https://bsky.app/profile/squiggleconf.com",
		src: bluesky,
	},
	{
		alt: "LinkedIn",
		href: "https://www.linkedin.com/company/squiggleconf",
		src: linkedin,
	},
	{
		alt: "Mastodon",
		href: "https://fosstodon.org/@SquiggleConf",
		src: mastodon,
	},
	{
		alt: "Twitter",
		href: "https://twitter.com/SquiggleConf",
		src: twitter,
	},
	{
		alt: "YouTube",
		href: "https://www.youtube.com/@SquiggleConf",
		src: youtube,
	},
	{
		alt: "GitHub",
		href: "https://www.github.com/SquiggleTools/SquiggleConf",
		src: github,
	},
	{
		alt: "Discord",
		href: "https://discord.squiggleconf.com",
		src: discord,
	},
].sort((a, b) => a.alt.localeCompare(b.alt));

type TalkSlug = keyof typeof notionData.talksBySlug;

const talksToExclude: TalkSlug[] = [
	// "workshop-katerina-and-max",
	// "workshop-sylwia-vargas",
];

const sortOrder: TalkSlug[] = [
	"talk-aakansha-doshi",
	"talk-chris-griffing",
	"talk-corina-murg",
	"talk-dan-vanderkam",
	"talk-don-isaac",
	"talk-jess-lin",
	"talk-laurynas-keturakis",
	"talk-loris-cro",
	"talk-rachel-nabors",
	"talk-rick-viscomi",
	"talk-rizel-scarlett",
	"talk-robby-russell",
	"talk-titian-cernicova-dragomir",
	"talk-yagiz-nizipli",
	"workshop-katerina-and-max",
	"workshop-sylwia-vargas",
];

// sorty by sortOrder
export const talks = Object.values(notionData.talksBySlug)
	.filter((t) => !talksToExclude.includes(t.slug as TalkSlug))
	.sort((a, b) => {
		const aIndex = sortOrder.indexOf(a.slug as TalkSlug);
		const bIndex = sortOrder.indexOf(b.slug as TalkSlug);
		return aIndex - bIndex;
	});
