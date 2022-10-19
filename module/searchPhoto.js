const request = require('request');
const cheerio = require('cheerio');
const tag = require('./tag');
const responseData = require('./response');

async function search(kw, page) {
    return await getPhoto(kw, page);
}

function getPhoto(kw, page) {
    console.log('🚀 > getPhoto > page', tag.referer + kw + 'page=' + page);
    return new Promise((resolve, reject) => {
        try {
            // 爬取关键词图集
            request(
                {
                    url: encodeURI(tag.referer + kw + '&page=' + page),
                    method: 'GET',
                    headers: {
                        cookie: 'uid=' + tag.uid,
                        'user-agent':
                            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
                    }
                },
                async function (error, response, body) {
                    console.log('🚀 > body', body);
                    if (!error && response.statusCode == 200) {
                        const $ = cheerio.load(body);
                        if (body.indexOf('没有登录') != -1) {
                            console.log('🚀 > 登陆态失效，请更新。');
                            resolve(responseData.error('登陆态失效，请更新。'));
                        } else {
                            let list = $('div.hezi>ul>li');
                            if (list.length > 0) {
                                let photoArr = [];
                                list.map(async function () {
                                    let num = $(this)
                                        .find('span.shuliang')
                                        .text()
                                        .trim()
                                        .split('P')[0];
                                    let tags = $(this).find('p:not(.biaoti)').text();
                                    let titleNode = $(this).find('p.biaoti > a');
                                    let id = titleNode.attr('href').split('id=')[1];
                                    let title = titleNode.text().trim();
                                    let imgSrc = $(this).find('a>img').attr('src');
                                    photoArr.push({ title, num, id, tags, imgSrc });
                                });
                                resolve(responseData.success(photoArr));
                            } else {
                                resolve(responseData.success([], '没有更多了'));
                            }
                        }
                    } else {
                        resolve(responseData.error(JSON.stringify(error)));
                    }
                }
            );
        } catch (error) {
            reject(error);
        }
    });
}
module.exports = search;
