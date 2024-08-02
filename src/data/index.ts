import bluesky from "~/assets/bluesky.svg";
import discord from "~/assets/discord.svg";
import github from "~/assets/github.svg";
import linkedin from "~/assets/linkedin.svg";
import mastodon from "~/assets/mastodon.svg";
import inngestBlack from "~/assets/sponsors/inngest-black.svg";
import openjsFoundationColor from "~/assets/sponsors/openjs-foundation-color.svg";
import twitter from "~/assets/twitter.svg";

export const links = {
	scholarship: "https://forms.gle/pnoAmVgijk3p4j5C7",
	tickets: "https://buytickets.at/squiggleconf/1249793/r/website",
	volunteer: "https://forms.gle/YfRvmSPBMpGe3T2g9",
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

const socials = [
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
];

export const locations = [
	...socials,
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
