if (typeof global.g !== "undefined")
	throw new Error("headless-akashic/polyfill: `global.g` is already defined.");
Object.defineProperty(global, "g", {
	value: require("./drivers/akashic-engine.altered"),
	writable: false
});
