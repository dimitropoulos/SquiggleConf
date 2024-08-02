import { ImageMetadata } from "astro";

import aakanshaDoshi from "~/assets/avatars/aakansha-doshi.jpg";
import chrisGriffing from "~/assets/avatars/chris-griffing.jpg";
import corinaMurg from "~/assets/avatars/corina-murg.jpg";
import danVanderkam from "~/assets/avatars/dan-vanderkam.jpg";
import donIsaac from "~/assets/avatars/don-isaac.jpg";
import jessLin from "~/assets/avatars/jess-lin.png";
import katerinaSkroumpelou from "~/assets/avatars/katerina-skroumpelou.jpg";
import laurynasKeturakis from "~/assets/avatars/laurynas-keturakis.jpg";
import lorisCro from "~/assets/avatars/loris-cro.jpg";
import maxKless from "~/assets/avatars/max-kless.jpg";
import rachelNabors from "~/assets/avatars/rachel-nabors.jpg";
import rickViscomi from "~/assets/avatars/rick-viscomi.png";
import rizelScarlett from "~/assets/avatars/rizel-scarlett.png";
import robbyRussell from "~/assets/avatars/robby-russell.jpg";
import titianCernicovaDragomir from "~/assets/avatars/titian-cernicova-dragomir.png";
import yagizNizipli from "~/assets/avatars/yagiz-nizipli.jpg";

export interface SpeakerLinks {
	bluesky?: string;
	discord?: string;
	github?: string;
	linkedin?: string;
	mastodon?: string;
	twitch?: string;
	twitter?: string;
	website?: string;
	youtube?: string;
}

export interface SpeakerInfo {
	avatar: ImageMetadata;
	links: SpeakerLinks;
	name: string;
	qualification?: string;
	role?: string;
}

export const speakers = {
	"aakansha-doshi": {
		avatar: aakanshaDoshi,
		links: {
			github: "https://github.com/ad1992",
			twitter: "https://x.com/aakansha1216",
		},
		name: "Aakansha Doshi",
		qualification: "Excalidraw Maintainer",
	},
	"chris-griffing": {
		avatar: chrisGriffing,
		links: {
			github: "https://github.com/cmgriffing",
			twitch: "https://twitch.tv/cmgriffing",
			twitter: "https://x.com/cmgriffing",
			website: "https://chrisgriffing.com",
			youtube: "https://youtube.com/@cmgriffing",
		},
		name: "Chris Griffing",
		qualification: "Extism Author",
		role: "Axosoft (GitKraken)",
	},
	"corina-murg": {
		avatar: corinaMurg,
		links: {
			github: "https://github.com/CorinaMurg",
			linkedin: "https://www.linkedin.com/in/corinamurg",
			twitter: "https://x.com/CorinaMurg",
			website: "https://webforeveryone.us",
		},
		name: "Corina Murg",
		qualification: "Accessibility Engineer",
		role: "Founder, Web for Everyone",
	},
	"dan-vanderkam": {
		avatar: danVanderkam,
		links: {
			twitter: " https://twitter.com/danvdk",
		},
		name: "Dan Vanderkam",
		qualification: "TypeScript Compiler Contributor",
		role: "Effective TypeScript",
	},
	"don-isaac": {
		avatar: donIsaac,
		links: {
			discord: "_epichunter",
			github: "https://github.com/DonIsaac",
			linkedin: "https://www.linkedin.com/in/donaldisaac",
			twitter: "https://x.com/Don_dev_",
		},
		name: "Don Isaac",
		qualification: "Oxc Maintainer",
	},
	"jess-lin": {
		avatar: jessLin,
		links: {
			github: "https://github.com/jssln",
			linkedin: "https://www.linkedin.com/in/jessica-lin-17b0771b",
			twitter: "https://x.com/jesstyping",

			website: "https://www.jssln.com",
		},
		name: "Jess Lin",
		qualification: "Software Engineer & Technical Writer",
		role: "DevRel, Render",
	},
	"katerina-skroumpelou": {
		avatar: katerinaSkroumpelou,
		links: {
			github: "https://github.com/mandarini",
			twitter: "https://x.com/psybercity",
		},
		name: "Katerina Skroumpelou",
	},
	"laurynas-keturakis": {
		avatar: laurynasKeturakis,
		links: {
			bluesky: "https://bsky.app/profile/laurynas.cc",
			discord: "laurynas_",
			github: "https://github.com/keturiosakys",
			mastodon: "https://hachyderm.io/@laurynas",
			website: "https://laurynas.cc",
		},
		name: "Laurynas Keturakis",
		qualification: "Autometics Maintainer",
		role: "Developer, Fiberplane",
	},
	"loris-cro": {
		avatar: lorisCro,
		links: {
			github: "https://github.com/kristoff-it",
			mastodon: "https://hachyderm.io/@kristoff",
			twitch: "https://www.twitch.tv/kristoff_it",
			twitter: "https://x.com/croloris",
			website: "https://kristoff.it",
			youtube: "https://www.youtube.com/@ZigSHOWTIME",
		},
		name: "Loris Cro",
		qualification: "Zig Livecoder",
		role: "VP Community, Zig Software Foundation",
	},
	"max-kless": {
		avatar: maxKless,
		links: {
			github: "https://github.com/MaxKless",
			linkedin: "https://www.linkedin.com/in/max-kless-398530216",
			twitter: "https://x.com/MaxKless",
		},
		name: "Max Kless",
	},
	"rachel-nabors": {
		avatar: rachelNabors,
		links: {
			github: "https://github.com/rachelnabors",
			twitter: "https://twitter.com/rachelnabors",
		},
		name: "Rachel Nabors",
		qualification: "Author, Artist, and DevRel Extraordinaire",
	},
	"rick-viscomi": {
		avatar: rickViscomi,
		links: {
			discord: "rick_viscomi",
			github: "https://github.com/rviscomi",
			twitter: "https://x.com/rick_viscomi",
			website: "https://rviscomi.dev",
			youtube: "https://www.youtube.com/@RickViscomi",
		},
		name: "Rick Viscomi",
		qualification: "Web Performance Lead for GDE",
		role: "Chrome Team, Google",
	},
	"rizel-scarlett": {
		avatar: rizelScarlett,
		links: {
			github: "https://github.com/blackgirlbytes",
			twitter: "https://twitter.com/blackgirlbytes",
		},
		name: "Rizel Scarlett",
		role: "Staff Developer Advocate, TBD",
	},
	"robby-russell": {
		avatar: robbyRussell,
		links: {
			github: "https://github.com/robbyrussell",
			twitter: "https://x.com/robbyrussell",
		},
		name: "Robby Russell",
		qualification: "Oh My Zsh Creator",
		role: "CEO, Planet Argon",
	},
	"titian-cernicova-dragomir": {
		avatar: titianCernicovaDragomir,
		links: {
			github: "https://github.com/dragomirtitian",
			twitter: "https://twitter.com/TitianCernicova",
		},
		name: "Titian Cernicova-Dragomir",
		qualification: "TypeScript Compiler Contributor",
		role: "Software Engineer, Bloomberg",
	},
	"yagiz-nizipli": {
		avatar: yagizNizipli,
		links: {
			discord: "anonrig",
			github: "https://github.com/anonrig",
			twitter: "https://x.com/yagiznizipli",
		},
		name: "Yagiz Nizipli",
		qualification: "Node.JS TSC Member",
		role: "Principal Systems Engineer, Cloudflare",
	},
} satisfies Record<string, SpeakerInfo>;
