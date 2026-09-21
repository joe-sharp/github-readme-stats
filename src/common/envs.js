// @ts-check

const whitelist = process.env.WHITELIST
  ? process.env.WHITELIST.split(",")
  : undefined;

const gistWhitelist = process.env.GIST_WHITELIST
  ? process.env.GIST_WHITELIST.split(",")
  : undefined;

const excludeRepositories = process.env.EXCLUDE_REPO
  ? process.env.EXCLUDE_REPO.split(",")
  : [];

// Manual offsets for contributions the GitHub API can't see for this token
// (e.g. an org whose private repos this instance's token isn't authorized
// to read), added on top of the fetched totals. Each defaults to 0.
const extraCommits = parseInt(process.env.EXTRA_COMMITS || "0", 10) || 0;
const extraPRs = parseInt(process.env.EXTRA_PRS || "0", 10) || 0;
const extraPRsMerged = parseInt(process.env.EXTRA_PRS_MERGED || "0", 10) || 0;
const extraReviews = parseInt(process.env.EXTRA_REVIEWS || "0", 10) || 0;
const extraIssues = parseInt(process.env.EXTRA_ISSUES || "0", 10) || 0;

export {
  whitelist,
  gistWhitelist,
  excludeRepositories,
  extraCommits,
  extraPRs,
  extraPRsMerged,
  extraReviews,
  extraIssues,
};
