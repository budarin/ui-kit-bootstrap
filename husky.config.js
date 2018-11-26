module.exports = {
    hooks: {
        // 'prepare-commit-msg': './config/git/git-commit-message.sh',
        'pre-commit': 'pretty-quick --staged',
        // 'pre-push': './config/git/preventPushToMaster.sh && npm test',
        'post-checkout': 'check-dependencies --install',
        'post-merge': 'check-dependencies --install',
    },
};
