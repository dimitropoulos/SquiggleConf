export interface SpeakerLinks {
	bluesky: null | string;
	github: null | string;
	linkedin: null | string;
	mastodon: null | string;
	twitch: null | string;
	twitter: null | string;
	website: null | string;
	youtube: null | string;
}

export interface SpeakerInfo {
	bio: null | string;
	links: SpeakerLinks;
	name: string;
	qualification: null | string;
	role: null | string;
	slug: string;
}

type Speakers = Record<string, SpeakerInfo>;

export const speakers = {
	"aakansha-doshi": {
		bio: "",
		links: {
			bluesky: null,
			github: "https://github.com/ad1992",
			linkedin: null,
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/aakansha1216",
			website: null,
			youtube: null,
		},
		name: "Aakansha Doshi",
		qualification: "Core [Excalidraw](https://excalidraw.com/) Maintainer",
		role: "Open Source Maintainer",
		slug: "aakansha-doshi",
	},
	"chris-griffing": {
		bio: "",
		links: {
			bluesky: null,
			github: "https://github.com/cmgriffing",
			linkedin: null,
			mastodon: null,
			twitch: "https://twitch.tv/cmgriffing",
			twitter: "https://x.com/cmgriffing",
			website: "https://chrisgriffing.com",
			youtube: "https://youtube.com/@cmgriffing",
		},
		name: "Chris Griffing",
		qualification: "Extism Author",
		role: "[Axosoft](https://www.axosoft.com/) \\( [GitKraken](https://www.gitkraken.com/), [GitLens](https://www.gitkraken.com/gitlens) \\)",
		slug: "chris-griffing",
	},
	"corina-murg": {
		bio: "",
		links: {
			bluesky: null,
			github: "https://github.com/CorinaMurg",
			linkedin: "https://www.linkedin.com/in/corinamurg",
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/CorinaMurg",
			website: "https://webforeveryone.us",
			youtube: null,
		},
		name: "Corina Murg",
		qualification: "Accessibility Engineer",
		role: "Founder, [Web for Everyone](https://webforeveryone.us/)",
		slug: "corina-murg",
	},
	"dan-vanderkam": {
		bio: "",
		links: {
			bluesky: null,
			github: "https://github.com/danvk",
			linkedin: "https://www.linkedin.com/in/danvk",
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/danvdk",
			website: null,
			youtube: null,
		},
		name: "Dan Vanderkam",
		qualification: "TypeScript Compiler Contributor",
		role: "[Effective TypeScript](https://effectivetypescript.com/) Author",
		slug: "dan-vanderkam",
	},
	"don-isaac": {
		bio: "My name is Don, and I work on next-gen tooling for finding incorrect code both statically and dynamically. I currently work on both Oxc and an autonomous UI testing agent, and have been writing code for over 10 years.",
		links: {
			bluesky: null,
			github: "https://github.com/DonIsaac",
			linkedin: "https://www.linkedin.com/in/donaldisaac",
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/Don_dev_",
			website: null,
			youtube: null,
		},
		name: "Don Isaac",
		qualification:
			"[JavaScript Oxidation Compiler](https://oxc.rs/) Maintainer",
		role: "",
		slug: "don-isaac",
	},
	"jess-lin": {
		bio: 'I\'ve been a software engineer for a decade. I first worked on an open source IDE at Facebook in 2013; then moved to ads at Pinterest, collaboration tools at Stripe, and absolutely everything at Instabase when it was only 5 people. In recent years, I\'ve enjoyed roles that bring me close to users, first as a deployed engineer at Retool and now as a devrel at Render.On software teams, I\'ve always found myself helping colleagues communicate their technical ideas. With my background, I can help engineers efficiently and with a lot of empathy. I’ve produced, written, and ghostwritten successful tech blog posts that have hit the front page of Hacker News and been featured in prominent newsletters.This talk came out of a colleague at Render asking me to explain all the edits I made to his posts \\( he could see the "what" but not the "why" \\)—and SquiggleConf is the perfect excuse to sit down and explain!',
		links: {
			bluesky: null,
			github: "https://github.com/jssln",
			linkedin: "https://www.linkedin.com/in/jessica-lin-17b0771b",
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/jesstyping",
			website: "https://www.jssln.com",
			youtube: null,
		},
		name: "Jess Lin",
		qualification: "Software Engineer & Technical Writer",
		role: "DevRel, [Render](https://render.com/)",
		slug: "jess-lin",
	},
	"katerina-skroumpelou": {
		bio: "",
		links: {
			bluesky: null,
			github: "https://github.com/mandarini",
			linkedin: null,
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/psybercity",
			website: null,
			youtube: null,
		},
		name: "Katerina Skroumpelou",
		qualification: "",
		role: "",
		slug: "katerina-skroumpelou",
	},
	"laurynas-keturakis": {
		bio: "",
		links: {
			bluesky: "https://bsky.app/profile/laurynas.cc",
			github: "https://github.com/keturiosakys",
			linkedin: "https://www.linkedin.com/in/lketurakis",
			mastodon: "https://hachyderm.io/@laurynas",
			twitch: null,
			twitter: "https://x.com/_laurynas",
			website: "https://laurynas.cc",
			youtube: null,
		},
		name: "Laurynas Keturakis",
		qualification: "[Autometics](https://autometrics.dev/) Maintainer",
		role: "Developer, [Fiberplane](https://fiberplane.com/)",
		slug: "laurynas-keturakis",
	},
	"loris-cro": {
		bio: "",
		links: {
			bluesky: null,
			github: "https://github.com/kristoff-it",
			linkedin: null,
			mastodon: "https://hachyderm.io/@kristoff",
			twitch: "https://www.twitch.tv/kristoff_it",
			twitter: "https://x.com/croloris",
			website: "https://kristoff.it",
			youtube: "https://www.youtube.com/@ZigSHOWTIME",
		},
		name: "Loris Cro",
		qualification: "Zig Livecoder",
		role: "VP Community, [Zig Software Foundation](https://ziglang.org/zsf/)",
		slug: "loris-cro",
	},
	"max-kless": {
		bio: "",
		links: {
			bluesky: null,
			github: "https://github.com/MaxKless",
			linkedin: "https://www.linkedin.com/in/max-kless-398530216",
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/MaxKless",
			website: null,
			youtube: null,
		},
		name: "Max Kless",
		qualification: "",
		role: "",
		slug: "max-kless",
	},
	"rachel-nabors": {
		bio: "Rachel Lee Nabors has led developer education at FAANG companies and startups. They've participated in browser development, web animation standards and open source with Mozilla, W3C, and Microsoft and wrote “Animation at Work.” Most recently, they built award-winning React and React Native dev portals at Meta. Currently, they live in London, writing a book on how to survive your tech career.",
		links: {
			bluesky: null,
			github: "https://github.com/rachelnabors",
			linkedin: "https://linkedin.com/in/rachelnabors",
			mastodon: "https://toot.cafe/@rachelnabors",
			twitch: "https://www.twitch.tv/nearestnabors",
			twitter: "https://x.com/rachelnabors",
			website: null,
			youtube: null,
		},
		name: "Rachel Nabors",
		qualification: "Author, Cartoonist, and DevRel Extraordinaire",
		role: "",
		slug: "rachel-nabors",
	},
	"rick-viscomi": {
		bio: "I'm a web performance engineer working on the Chrome Web DevRel team at Google, where my mission is to make the web faster. My role is to promote web performance best practices to help developers succeed with Core Web Vitals, and a major part of that is giving developers the right tools to measure and debug slow user experiences. I'm currently working closely with the Chrome DevTools team on the next generation Performance panel, and since 2017 I've been working on the Chrome UX Report, a public dataset of real-world performance data from millions of websites. I've also built several tools including the Core Web Vitals Technology Report and the CrUX Dashboard to help developers track performance and discover opportunities for improvement, and I co-wrote Using WebPageTest, a book about the web performance testing tool.",
		links: {
			bluesky: null,
			github: "https://github.com/rviscomi",
			linkedin: null,
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/rick_viscomi",
			website: "https://rviscomi.dev",
			youtube: "https://www.youtube.com/@RickViscomi",
		},
		name: "Rick Viscomi",
		qualification: "[Chrome](https://www.google.com/chrome/) Team, Google",
		role: "Web Performance DevRel",
		slug: "rick-viscomi",
	},
	"rizel-scarlett": {
		bio: "I am a Staff Developer Advocate at TBD, Block's newest business unit. At TBD, we're shifting the paradigm by converting open standards into open source SDKs that make cross border payments and data ownership more accessible for users. I'm responsible for helping people understand how to use the SDKs through documentation, content creation, conference talks, and practical code examples. With a diverse background spanning GitHub, startups, and non-profit organizations, I have cultivated a passion for utilizing emerging technologies to champion equity within the tech industry. I moonlight as an Advisor at G{Code} House, an organization aimed at teaching women of color and non-binary people of color to code. I believe in leveraging vulnerability, honesty, and kindness as means to educate early-career developers.",
		links: {
			bluesky: null,
			github: "https://github.com/blackgirlbytes",
			linkedin: "https://linkedin.com/in/rizel-bobb-semple",
			mastodon: "https://hachyderm.io/@blackgirlbytes",
			twitch: null,
			twitter: "https://x.com/blackgirlbytes",
			website: null,
			youtube: null,
		},
		name: "Rizèl Scarlett",
		qualification: "",
		role: "Staff Developer Advocate, [TBD](https://developer.tbd.website/)",
		slug: "rizel-scarlett",
	},
	"robby-russell": {
		bio: "Hi, I'm Robby Russell, the creator of Oh My Zsh, one of the most popular open-source projects on GitHub with nearly 2,400 contributors. As I reflect on the 15th anniversary of its release, I remember creating Oh My Zsh to scratch a selfish itch within my small team, never anticipating its widespread adoption. By attending my talk, you'll gain a deeper understanding of why it became successful, learn from the unexpected journey, and discover valuable lessons that can help you in your own projects.",
		links: {
			bluesky: null,
			github: "https://github.com/robbyrussell",
			linkedin: "http://www.linkedin.com/in/robbyrussell",
			mastodon: "https://ruby.social/@robbyrussell",
			twitch: null,
			twitter: "https://x.com/robbyrussell",
			website: null,
			youtube: null,
		},
		name: "Robby Russell",
		qualification: "[Oh My Zsh](https://ohmyz.sh/) Creator",
		role: "CEO, [Planet Argon](https://www.planetargon.com/)",
		slug: "robby-russell",
	},
	"sylwia-vargas": {
		bio: "",
		links: {
			bluesky: null,
			github: null,
			linkedin: null,
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/SylwiaVargas",
			website: null,
			youtube: null,
		},
		name: "Sylwia Vargas",
		qualification: "",
		role: "",
		slug: "sylwia-vargas",
	},
	"titian-cernicova-dragomir": {
		bio: "",
		links: {
			bluesky: null,
			github: "https://github.com/dragomirtitian",
			linkedin: "https://uk.linkedin.com/in/titian-cernicova-dragomir-2b37457a",
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/TitianCernicova",
			website: null,
			youtube: null,
		},
		name: "Titian Cernicova-Dragomir",
		qualification: "TypeScript Compiler Contributor",
		role: "Software Engineer, [Bloomberg](https://www.bloomberg.com/)",
		slug: "titian-cernicova-dragomir",
	},
	"yagiz-nizipli": {
		bio: "I’m Yagiz Nizipli. I’m a Node.js Technical Steering committee member, and a Principal Systems Engineer at Cloudflare. With a deep passion for performance optimization, I’ve made significant improvements to Node.js performance by having more than 250+ contributions. I’ve written several tools such as “node —run” and “node —env-file”. I’m also the author of Ada URL Parser, the implementation used by Node.js and Cloudflare workers.",
		links: {
			bluesky: null,
			github: "https://github.com/anonrig",
			linkedin: null,
			mastodon: null,
			twitch: null,
			twitter: "https://x.com/yagiznizipli",
			website: "yagiz.co",
			youtube: null,
		},
		name: "Yagiz Nizipli",
		qualification: "[Node.JS TSC](https://github.com/nodejs/TSC) Member",
		role: "Principal Systems Engineer, [Cloudflare](https://www.cloudflare.com/)",
		slug: "yagiz-nizipli",
	},
} satisfies Speakers;

export type TalkFormat = "Full" | "Lightning" | "Workshop";

export interface TalkInfo {
	description: string;
	slug: string;
	speakers: SpeakerInfo[];
	tags: string[];
	talkFormat: TalkFormat;
	title: string;
}

export const talks = {
	"talk-aakansha-doshi": {
		description:
			"How do we manipulate pixels in a DOM-oriented world? HTML canvas! I recently built Excalidraw’s ‘labeled arrows’ feature, which heavily utilizes all sorts of Canvas element JavaScript APIs for rich graphics and media display in web browsers. Let’s dig in to see how Canvas and Excalidraw work under the hood!\n\nI’ll cover with demos:\n- Why labeled arrows were built: including the ‘how’ and ‘why’ of design decisions\n- The architecture of how elements are structured and how text is tied to the arrow\n- Rendering arrows in canvas, including multi-point arrows and transparency effects\n- How Canvas and SVG compare & contrast with mask attributes, clipping, and clearRect\n- Performance optimizations such as caching labeled repeat computational and graphics work\n\nThe audience will come away understanding how Canvas APIs work together - along with how labeled arrows were implemented in Excalidraw.",
		slug: "talk-aakansha-doshi",
		speakers: [speakers["aakansha-doshi"]],
		tags: ["Canvas", "SVG", "Performance"],
		talkFormat: "Full",
		title: "Excalidraw: Canvas All The Way Down",
	},

	"talk-chris-griffing": {
		description:
			"How awesome would it be if anyone could write plugins in any language that interop with your application regardless of your stack? Introducing Extism: a powerful plugin system that allows you to integrate WASM code into your servers, the edge, CLIs, IoT, browsers and everything in between.\n\nThe talk will start out with a history of WASM and it's predecessor \\( asm.js \\). We will even point out Gary Bernhardt's ‘Birth and Death of JavaScript’ presentation and how it seems to have predicted where WASM could go. After understanding WASM and its history, we will outline what Extism is, how it can be used, as well as some real-world examples of its usage.",
		slug: "talk-chris-griffing",
		speakers: [speakers["chris-griffing"]],
		tags: ["WebAssembly", "Language Soup", "Cross-Language", "Open Source"],
		talkFormat: "Lightning",
		title: "Creating a WASM-Powered Plugin System For Your App",
	},

	"talk-corina-murg": {
		description:
			"Accessibility is a core component of the web -- yet many web development teams treat it as an afterthought. Building with accessibility in mind involves understanding the rules of accessibility and how to use web dev tools to your advantage in designing and debugging it.\n\nLet’s go through the Accessibility Tree: a hidden gem for understanding how a webpage will be presented through various accessibility lenses. We’ll explore how to access and use the accessibility tree through DevTools and discuss the slight differences in how different browsers render the tree. From there, we’ll delve into the structure of the tree and explore its relationship to the DOM. \n\nBy understanding and utilizing the Accessibility Tree, we can build digital products and services that are more inclusive and compliant.",
		slug: "talk-corina-murg",
		speakers: [speakers["corina-murg"]],
		tags: [
			"Accessibility Tree",
			"Debugging",
			"Chrome DevTools",
			"Inclusive Design",
		],
		talkFormat: "Lightning",
		title: "Harnessing the Accessibility Tree: Debugging with this Hidden Gem",
	},

	"talk-dan-vanderkam": {
		description:
			"There’s nothing more devtool-y than how you store your code.  Over the past 50 years, computers have grown dramatically more powerful, user interfaces have grown increasingly complex, and computer programs have grown orders of magnitude larger. But despite all this change, we still represent computer code the same way we did in 1970: as plain text files. Why is plain text so ubiquitous, and why do attempts to replace it always fail?\n\nThis talk will explore the different attempts and strategies at making something “better” than plain text  for source formats — including defining what “better” might be in the first place. We’ll cover richer text formats, AST-oriented storage, and more explorations in the future.\n\nBenefits of this talk will include a renewed appreciation for how to share, store, and generally work with your computer code sources.",
		slug: "talk-dan-vanderkam",
		speakers: [speakers["dan-vanderkam"]],
		tags: ["ASTs", "Parsing", "Source Code"],
		talkFormat: "Full",
		title: "The Future of Source Code: ASTs and Beyond",
	},

	"talk-don-isaac": {
		description:
			"The Oxc Project is a collection of high-performance JavaScript/TypeScript tools written in Rust. It comes with a parser, a linter, and other build-time libraries and utilities. But didn’t these already exist? Why did we need to rewrite them in another language?\n\nGreat question! This talk will walk through the incredible performance and interoperability opportunities of moving shared web dev tooling to a native-speed language like Rust. You’ll see both how to use these wonderfully fast new tools in your project to unlock speedy and reliable builds immediately.\n\nEven better, you’ll also get an insider’s view of how these projects are built. There’s all sorts of fantastic engineering at play, ranging from re-using test suites from Babel and TypeScript themselves to community-oriented integration tests to ensure compatibility. The end result is a rich set of community tooling for the Rust ecosystem that is a joy to work with.",
		slug: "talk-don-isaac",
		speakers: [speakers["don-isaac"]],
		tags: ["Rust", "CLIs", "Performance", "TypeScript"],
		talkFormat: "Full",
		title: "Oxc: Pluggable Next-Gen Tooling At Rust Speed",
	},

	"talk-jess-lin": {
		description:
			"Writing a technical blog post may sound like a solo task, but in reality it’s just like good software—best with a writer and reviewer/editor. But what does that process look like, and what’s the role of the editor?\n\nIn this talk, I’ll first show elements of a good versus great blog post, with examples. A good post gets the information across in an orderly fashion. A great blog post starts from great source material, and manages to be a page turner. Sometimes, good is all you need, but it’s useful to recognize when you have the potential for great.\n\nNext, I’ll show real examples of specific edits to blog posts I consider good and great. In general, you need to first edit at the macro level \\( e.g. throwing out an entire first draft and choosing a completely different angle \\) and then the micro level \\( e.g. restructuring sentences for clarity \\). The title and opening deserve special attention, and I’ll share tactics you can use to write and refine them.\n\nMarketing your software isn’t just for marketers. These techniques will help you in everything from pull request descriptions to release announcements. I’ll use real material from a series of blog posts we published in spring 2024 at Render to show how much of a difference applying editing craft to communications can make.",
		slug: "talk-jess-lin",
		speakers: [speakers["jess-lin"]],
		tags: [
			"Docs",
			"Launching Software Products",
			"Community Building",
			"Technical Writing",
		],
		talkFormat: "Full",
		title: "How To Write About Software",
	},

	"talk-laurynas-keturakis": {
		description:
			"Traces showing function-by-function \\( span-by-span \\) execution are incredibly useful for production code debugging work. Yet, many organizations adopt traces late in the development cycle. Code already running in production tends to settle and be harder to change based on late-breaking findings.\n\nThis talk will take you from tracing trepidation to total tracing glory. We’ll cover the benefits of tracing, some of the challenges of integrating it into new or existing apps, and the lovely visibility benefits you get from a well-traced applications.",
		slug: "talk-laurynas-keturakis",
		speakers: [speakers["laurynas-keturakis"]],
		tags: ["Tracing", "Debugging", "Open Telemetry"],
		talkFormat: "Lightning",
		title: "Tricking Yourself Into Tracing",
	},

	"talk-loris-cro": {
		description:
			"Have you ever started a simple project, wanted something to exist, and ended up spending all your time building it yourself? I recently went from building static sites, to building my own static site generator, to writing a new HTML parser and then language server from scratch.\n\nThis talk will guide you through that process of how my yak-shaving stack evolved over time, staring with using TreeSitter as a parser, and culminating in the [Zine]\\( https://zine-ssg.io \\) static site generator and [SuperHTML]\\( https://github.com/kristoff-it/superhtml \\) language server. We’ll cover both why those things are useful and how they actually work under the hood.\n\nBy the end of this talk, you will have concluded I’m a maniac, or you will have developed your own appreciation for occasionally building things from scratch. Likely both.",
		slug: "talk-loris-cro",
		speakers: [speakers["loris-cro"]],
		tags: ["Zig", "Language Server Protocol", "TreeSitter", "Parsing"],
		talkFormat: "Full",
		title: "Building LSP Server from Scratch in Zig",
	},

	"talk-rachel-nabors": {
		description:
			"Did you know web animations have their own dedicated browser dev tools? Come learn how to debug timeline based animations in the browser and share animation specs across teams!\n\nOften design happens in Figma and development happens in components. During that hand-off, motion and interaction design can fall through the cracks. But there are great tools and techniques that marry development and design, bringing life and personality to your UI.\n\nWe’ll start with the basics needed to add some visual interest to any project and escalate all the way to integrating complex, orchestrated animations from a motion design team into your workflow.  We’ll also cover CSS animation utility libraries, easing tools for creating custom eases and springs, using the web animations API to react to and chain animation events.",
		slug: "talk-rachel-nabors",
		speakers: [speakers["rachel-nabors"]],
		tags: [
			"Web Animations API",
			"Debugging Tools",
			"Design",
			"CSS Animations Panel",
		],
		talkFormat: "Lightning",
		title: "Web Animations: Tools and Techniques",
	},

	"talk-rick-viscomi": {
		description:
			"Excellent tools are at the heart of every performance optimization workflow. From synthetic testing, auditing, and diagnosing performance issues to collecting and analyzing performance data from real-world user experiences. A good performance workflow utilizes both real-world AND synthetic tooling to help you understand how fast your site is and how to make it faster.\n\nIn this talk, we'll explore Google's recommended web performance tooling workflow for fast Core Web Vitals. We'll focus on Chrome DevTools and the powerful Performance panel to get a better understanding of what's happening under the hood. We'll also look at a typical data pipeline for collecting and analyzing real-user data to get a better understanding of the top performance issues and opportunities. And finally, we'll look at a few techniques to significantly improve some of the most common and impactful issues with loading performance and interaction responsiveness.",
		slug: "talk-rick-viscomi",
		speakers: [speakers["rick-viscomi"]],
		tags: ["Chrome DevTools", "Performance", "Core Web Vitals"],
		talkFormat: "Full",
		title: "Diving Into The Chrome DevTools Performance Panel",
	},

	"talk-rizel-scarlett": {
		description:
			"Sigh, your docs are broken and outdated. But here's the good news: they don’t have to be!\n\nDocumentation is a reflection of the quality of your dev tooling, so if it's broken and outdated that sets the tone for your product's reputation. I empathize with you: as your tooling constantly evolves, keeping documentation up-to-date is challenging, especially when managing multiple programming languages. You already have so much going on. Docs are important, and your time is too.\n\nJoin Rizèl for a session on working smarter \\( and not harder \\) with practical techniques for integrating documentation into your development workflows. Rizèl will share how to efficiently treat your developer docs as code to ensure your documentation remains reliable and current.",
		slug: "talk-rizel-scarlett",
		speakers: [speakers["rizel-scarlett"]],
		tags: ["Developer Relations", "Community Building", "Documentation"],
		talkFormat: "Full",
		title: "Escaping the Curse of Outdated Docs",
	},

	"talk-robby-russell": {
		description:
			"Join Robby Russell, the creator of Oh My Zsh, as he reflects on the remarkable journey of this CLI framework on its 15th anniversary. Robby will share his candid experiences and insights into how a project that started without a clear plan managed to gain widespread adoption across the software industry. \n\nWe’ll travel through the origins of Oh My Zsh, its surprising growth, and the valuable lessons he learned along the way. Robby will highlight the significance of creating user-friendly and practical tools, especially for new developers. He'll delve into the art of engaging with an open-source community and his mission to bring enjoyment to the command line. Robby's advice on developing a successful open-source project will resonate with web developers eager to improve their tools and contribute to community-driven innovation.\n\nThis talk aims to show that anyone can launch a successful software project with the right mindset and motivation. Robby's story demonstrates the power of solving problems for yourself and your peers. He will discuss building and sharing useful tools, showing that even small efforts can have a significant impact. Attend this talk to gain a deeper understanding of the power of collaboration and how these principles can be applied to your work in and around developer tooling.",
		slug: "talk-robby-russell",
		speakers: [speakers["robby-russell"]],
		tags: [
			"CLIs",
			"Community Building",
			"Launching Software Products",
			"Open Source",
		],
		talkFormat: "Full",
		title: "Oh My Zsh: Learnings Over 15 years of CLI Innovation",
	},

	"talk-titian-cernicova-dragomir": {
		description:
			"More code, more problems. TypeScript is wonderful for adding type safety but if you’re not careful, can bog down your builds and code complexity as your project grows. Titian works at Bloomberg on the shared JavaScript & TypeScript infrastructure used by thousands of developers — and has seen it all.\n\nThis talk will cover many of the strategies and tips for being effective at scale with TypeScript and related tooling. We’ll cover both the architectural needs - type features to use or avoid, common build tools, the new TypeScript Isolated Declarations as contributed by Titian and team, as well as how to work with distributed teams in isolated or shared TypeScript projects.\n\nAttendees will leave with practical knowledge on scaling TypeScript projects from hundreds to thousands of files, ensuring type safety and efficiency.",
		slug: "talk-titian-cernicova-dragomir",
		speakers: [speakers["titian-cernicova-dragomir"]],
		tags: ["TypeScript", "Monorepo Tooling", "Debugging", "Build Optimization"],
		talkFormat: "Full",
		title: "TypeScript at Scale: Tools and Techniques",
	},

	"talk-yagiz-nizipli": {
		description:
			"Performance is important! So important, that performance engineers tend to have an “occupational hazard” of optimizing everything. Join Yagiz in diving into real-world examples of how a performance engineer optimizes Node.js core code — with techniques that’ll be useful to you for all your applications. Yagiz Nizipli will share technical and funny details about the dark side of optimizations and how to prioritize optimizing what needs it most.",
		slug: "talk-yagiz-nizipli",
		speakers: [speakers["yagiz-nizipli"]],
		tags: ["Node.js", "Performance", "C++", "JavaScript"],
		talkFormat: "Lightning",
		title: "Node.js Core Performance Optimizations, Revealed",
	},

	"workshop-katerina-and-max": {
		description: "",
		slug: "workshop-katerina-and-max",
		speakers: [speakers["katerina-skroumpelou"], speakers["max-kless"]],
		tags: ["Editor Extensions", "TypeScript", "Language Server Protocol"],
		talkFormat: "Workshop",
		title: "build a VS Code extension with the makers of Nx Console",
	},

	"workshop-sylwia-vargas": {
		description: "",
		slug: "workshop-sylwia-vargas",
		speakers: [speakers["sylwia-vargas"]],
		tags: [],
		talkFormat: "Workshop",
		title: "Inngest",
	},
} satisfies Record<string, TalkInfo>;
