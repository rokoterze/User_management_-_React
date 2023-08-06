const express = require('express');
const router = express.Router();
const schemas = require('../models/schemas')

router.post('/insertUser', async(req, res) => {
    const {id, login, avatar_url, url, name} = req.body
    
    const userData = {id:id, login:login, avatar_url:avatar_url, url:url, name:name}; 

    const newUser = new schemas.Users(userData);

    const saveUser = await newUser.save()

    if(saveUser){
        console.log("User saved to database!");
    }
    res.end()
})

router.get('/users', (req, res) => { //test, kasnije ce get bit iz baze
    const userData = [
        {
            "login": "defunkt",
            "id": 2,
            "node_id": "MDQ6VXNlcjI=",
            "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/defunkt",
            "html_url": "https://github.com/defunkt",
            "followers_url": "https://api.github.com/users/defunkt/followers",
            "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
            "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
            "organizations_url": "https://api.github.com/users/defunkt/orgs",
            "repos_url": "https://api.github.com/users/defunkt/repos",
            "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
            "received_events_url": "https://api.github.com/users/defunkt/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Chris Wanstrath",
            "company": null,
            "blog": "http://chriswanstrath.com/",
            "location": null,
            "email": null,
            "hireable": null,
            "bio": "🍔",
            "twitter_username": null,
            "public_repos": 107,
            "public_gists": 273,
            "followers": 21687,
            "following": 214,
            "created_at": "2007-10-20T05:24:19Z",
            "updated_at": "2023-04-09T21:37:56Z"
        },
        {
            "login": "mojombo",
            "id": 1,
            "node_id": "MDQ6VXNlcjE=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/mojombo",
            "html_url": "https://github.com/mojombo",
            "followers_url": "https://api.github.com/users/mojombo/followers",
            "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
            "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
            "organizations_url": "https://api.github.com/users/mojombo/orgs",
            "repos_url": "https://api.github.com/users/mojombo/repos",
            "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
            "received_events_url": "https://api.github.com/users/mojombo/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Tom Preston-Werner",
            "company": "@chatterbugapp, @redwoodjs, @preston-werner-ventures ",
            "blog": "http://tom.preston-werner.com",
            "location": "San Francisco",
            "email": null,
            "hireable": null,
            "bio": null,
            "twitter_username": "mojombo",
            "public_repos": 65,
            "public_gists": 62,
            "followers": 23546,
            "following": 11,
            "created_at": "2007-10-20T05:24:19Z",
            "updated_at": "2023-03-22T15:06:06Z"
        }
        ,
        {
            "login": "wayneeseguin",
            "id": 18,
            "node_id": "MDQ6VXNlcjE4",
            "avatar_url": "https://avatars.githubusercontent.com/u/18?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/wayneeseguin",
            "html_url": "https://github.com/wayneeseguin",
            "followers_url": "https://api.github.com/users/wayneeseguin/followers",
            "following_url": "https://api.github.com/users/wayneeseguin/following{/other_user}",
            "gists_url": "https://api.github.com/users/wayneeseguin/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/wayneeseguin/subscriptions",
            "organizations_url": "https://api.github.com/users/wayneeseguin/orgs",
            "repos_url": "https://api.github.com/users/wayneeseguin/repos",
            "events_url": "https://api.github.com/users/wayneeseguin/events{/privacy}",
            "received_events_url": "https://api.github.com/users/wayneeseguin/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Wayne E Seguin",
            "company": "FiveTwenty, Inc.",
            "blog": "",
            "location": "Buffalo, NY",
            "email": null,
            "hireable": null,
            "bio": "OSS Creator, Contributor, & Maintainer.",
            "twitter_username": "wayneeseguin",
            "public_repos": 104,
            "public_gists": 95,
            "followers": 725,
            "following": 19,
            "created_at": "2008-01-13T06:02:21Z",
            "updated_at": "2023-07-23T22:44:51Z"
          }
    ];

    res.send(userData);
})

module.exports = router