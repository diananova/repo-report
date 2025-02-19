'use strict';

const Table = require('cli-table');
const symbols = require('../../src/symbols');

const mockRepositoriesData = require('./mockRepositoriesData.json');

const expectedOptions = {
	chars: {
		top: '─',
		'top-mid': '┬',
		'top-left': '┌',
		'top-right': '┐',
		bottom: '─',
		'bottom-mid': '┴',
		'bottom-left': '└',
		'bottom-right': '┘',
		left: '│',
		'left-mid': '├',
		mid: '─',
		'mid-mid': '┼',
		right: '│',
		'right-mid': '┤',
		middle: '│',
	},
	truncate: '…',
	colWidths: [],
	colAligns: [],
	style: {
		'padding-left': 1,
		'padding-right': 1,
		head: ['red'],
		border: ['grey'],
		compact: false,
	},
};

const tableOutput = Object.setPrototypeOf(Object.assign([
	['Stats', '100% (8/8)', '25% (2/8)', '12.5% (1/8)'],
	[
		'name/project-eraser\nname/guidelines-questionnaire\nname/challenges-book\n🔒 name/microservice\nname/responsive-design\nname/media-upload-app',
		symbols.success,
		symbols.error,
		symbols.error,
	],
	[
		'name/tc39-ci',
		symbols.success,
		symbols.success,
		symbols.error,
	],
	[
		'name/ecma262',
		symbols.success,
		symbols.success,
		symbols.success,
	],
], {
	options: {
		...expectedOptions,
		head: ['Repository', 'Access', 'DefBranch', 'SecurityPolicyEnabled'],
	},
}), Table.prototype);

const tableOutputActual = Object.setPrototypeOf(Object.assign([
	[
		'name/project-eraser\nname/guidelines-questionnaire\nname/challenges-book\n🔒 name/microservice\nname/responsive-design',
		'ADMIN',
		'master',
		'false',
	],
	[
		'name/media-upload-app',
		'ADMIN',
		'develop',
		'false',
	],
	[
		'name/tc39-ci',
		'ADMIN',
		'main',
		'false',
	],
	[
		'name/ecma262',
		'ADMIN',
		'main',
		'true',
	],
], {
	options: {
		...expectedOptions,
		head: ['Repository', 'Access', 'DefBranch', 'SecurityPolicyEnabled'],
	},
}), Table.prototype);

const tableOutputActualGoodness = Object.setPrototypeOf(Object.assign([
	[
		'name/project-eraser\nname/guidelines-questionnaire\nname/challenges-book\n🔒 name/microservice\nname/responsive-design',
		`${symbols.success} ADMIN`,
		`${symbols.error} master`,
		`${symbols.error} false`,
	],
	[
		'name/media-upload-app',
		`${symbols.success} ADMIN`,
		`${symbols.error} develop`,
		`${symbols.error} false`,
	],
	[
		'name/tc39-ci',
		`${symbols.success} ADMIN`,
		`${symbols.success} main`,
		`${symbols.error} false`,
	],
	[
		'name/ecma262',
		`${symbols.success} ADMIN`,
		`${symbols.success} main`,
		`${symbols.success} true`,
	],
], {
	options: {
		...expectedOptions,
		head: ['Repository', 'Access', 'DefBranch', 'SecurityPolicyEnabled'],
	},
}), Table.prototype);

const DetailTableColumns = [
	'Repository',
	'Access',
	'IssuesEnabled',
	'ProjectsEnabled',
	'WikiEnabled',
	'Archived',
	'BlankIssuesEnabled',
	'SecurityPolicyEnabled',
	'License',
	'MergeStrategies',
	'DeleteOnMerge',
	'HasStarred',
	'Subscription',
	'DefBranch',
	'AllowsForcePushes',
	'AllowsDeletions',
	'DismissesStaleReviews',
	'ReqApprovingReviewCount',
	'ReqApprovingReviews',
	'ReqCodeOwnerReviews',
	'ReqConversationResolution',
];

const sortedRepositories = require('./sortedRepositories.json');

const tableData = {
	body: [
		['name/challenges-book', 'ADMIN', 'master'],
		['name/guidelines-questionnaire', 'ADMIN', 'master'],
		['name/media-upload-app', 'ADMIN', 'develop'],
		['🔒 name/microservice', 'ADMIN', 'master'],
		['name/project-eraser', 'ADMIN', 'master'],
		['name/responsive-design', 'ADMIN', 'master'],
	],
	head: ['Repository', 'Access', 'DefBranch'],
};

const sortedTableData = {
	body: [
		['name/challenges-book', 'ADMIN', 'master'],
		['name/guidelines-questionnaire', 'ADMIN', 'master'],
		['name/media-upload-app', 'ADMIN', 'develop'],
		['🔒 name/microservice', 'ADMIN', 'master'],
		['name/project-eraser', 'ADMIN', 'master'],
		['name/responsive-design', 'ADMIN', 'master'],
	],
	head: ['Repository', 'Access', 'DefBranch'],
};
module.exports = {
	mockRepositoriesData,
	tableOutput,
	tableOutputActual,
	tableOutputActualGoodness,
	DetailTableColumns,
	sortedRepositories,
	tableData,
	sortedTableData,
};
