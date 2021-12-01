const exec = require('child_process').exec;
const os = require("os");

async function g_msg(Language) {
  var sdn = 'RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi' + '\n'
  exec('sed -n 3p /root/Queen-Jesi/queenjesi/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    user: {
      name: '',
      username: '',
      repos: '',
      gists: '',
      following: '',
      follower: '',
      id: '',
      last_update: '',
      created_at: '',
      biography: '',
      location: '',
      hireable: '',
      blog: '',
      twitter: '',
      company: '',
      mail: ''
    },
    repo: {
      username: '',
      repo_id: '',
      repo_name: '',
      repo_desc: '',
      fork: '',
      created_at: '',
      updated_at: '',
      size: '',
      star: '',
      watcher: '',
      language: '',
      forks: '',
      issues: '',
      has_lisance: '',
      lisance_name: '',
      lisance_key: '',
      branch: '',
      subscribers: ''
    },
    not_found_user: '',
    not_found_repo: '',
    can_rent: '',
    cant_rent: '',
  }

  if (Language == 'EN') {

    // For User Check
    data.user.name = '*Name:* '
    data.user.username = '*Username:* '
    data.user.repos = '*Number of Open Repository:* '
    data.user.gists = '*Number of Open Gists:* '
    data.user.following = '*Number of Followed:* '
    data.user.follower = '*Number of Followers:* '
    data.user.id = '*User ID:* '
    data.user.last_update = '*Last Activity:* '
    data.user.created_at = '*Creation Date:* '
    data.user.biography = '*Biography:* '
    data.user.location = '*Location:* '
    data.user.hireable = '*Can it be rented?:* '
    data.user.blog = '*Blog:* '
    data.user.twitter = '*Twitter:* '
    data.user.company = '*Company:* '
    data.user.mail = '*E-Mail:* '

    // For Repository Check
    data.repo.username = '*Username:* '
    data.repo.repo_id = '*Repository ID:* '
    data.repo.repo_name = '*Repository Name:* '
    data.repo.repo_desc = '*Repository Description:* '
    data.repo.fork = '*Is it cloned?:* '
    data.repo.created_at = '*Creation Date:* '
    data.repo.updated_at = '*Last Activity:* '
    data.repo.size = '*Repository Size:* '
    data.repo.star = '*Number of Stars:* '
    data.repo.watcher = '*Viewers:* '
    data.repo.language = '*Repository Language:* '
    data.repo.forks = '*Number of Clones:* '
    data.repo.issues = '*Open Issues:* '
    data.repo.has_lisance = '*Is it Licensed?:* '
    data.repo.lisance_name = '*License Name:* '
    data.repo.lisance_key = '*License Key:* '
    data.repo.branch = '*Main Branch:* '
    data.repo.subscribers = '*Number of Subscribers:* '

    // Additional Content
    data.not_found_user = '*User Not Found!*'
    data.not_found_repo = '*Repository Not Found!*'
    data.can_rent = '*✅ Rentable.*'
    data.cant_rent = '*⛔ Not Rentable.*'
  }
  else {
    // For User Check
    data.user.name = '*Name:* '
    data.user.username = '*Username:* '
    data.user.repos = '*Number of Open Repository:* '
    data.user.gists = '*Number of Open Gists:* '
    data.user.following = '*Number of Followed:* '
    data.user.follower = '*Number of Followers:* '
    data.user.id = '*User ID:* '
    data.user.last_update = '*Last Activity:* '
    data.user.created_at = '*Creation Date:* '
    data.user.biography = '*Biography:* '
    data.user.location = '*Location:* '
    data.user.hireable = '*Can it be rented?:* '
    data.user.blog = '*Blog:* '
    data.user.twitter = '*Twitter:* '
    data.user.company = '*Company:* '
    data.user.mail = '*E-Mail:* '

    // For Repository Check
    data.repo.username = '*Username:* '
    data.repo.repo_id = '*Repository ID:* '
    data.repo.repo_name = '*Repository Name:* '
    data.repo.repo_desc = '*Repository Description:* '
    data.repo.fork = '*Is it cloned?:* '
    data.repo.created_at = '*Creation Date:* '
    data.repo.updated_at = '*Last Activity:* '
    data.repo.size = '*Repository Size:* '
    data.repo.star = '*Number of Stars:* '
    data.repo.watcher = '*Viewers:* '
    data.repo.language = '*Repository Language:* '
    data.repo.forks = '*Number of Clones:* '
    data.repo.issues = '*Open Issues:* '
    data.repo.has_lisance = '*Is it Licensed?:* '
    data.repo.lisance_name = '*License Name:* '
    data.repo.lisance_key = '*License Key:* '
    data.repo.branch = '*Main Branch:* '
    data.repo.subscribers = '*Number of Subscribers:* '

    // Additional Content
    data.not_found_user = '*User Not Found!*'
    data.not_found_repo = '*Repository Not Found!*'
    data.can_rent = '*✅ Rentable.*'
    data.cant_rent = '*⛔ Not Rentable.*'
  } 
  return data;
}
module.exports = g_msg
