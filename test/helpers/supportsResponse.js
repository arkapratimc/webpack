module.exports = function supportsResponse() {
	try {
		// eslint-disable-next-line n/no-unsupported-features/node-builtins
		return typeof Response !== "undefined";
	} catch (_err) {
		return false;
	}
};
