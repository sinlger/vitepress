import axios from 'axios';
async function submitUrlBatch(apiKey, siteUrl, urlList) {
    const url = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${apiKey}`;

    // 分批提交，避免超过 Bing API 限制（建议每次不超过 50 个 URL）
    const batchSize = 50;
    for (let i = 0; i < urlList.length; i += batchSize) {
        const batch = urlList.slice(i, i + batchSize);
        try {
            const response = await axios.post(url, {
                siteUrl: siteUrl,
                urlList: batch
            }, {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Host': 'ssl.bing.com'
                }
            });
            console.log(`Submitted batch starting at ${i}, response:`, response.data);
        } catch (error) {
            console.error(`Error submitting batch starting at ${i}:`, error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Status code:', error.response.status);
            }
        }
    }
}

// 示例调用
const apiKey = '45aa1987c128495cb01fac89d3b3a4bc';
const siteUrl = 'https://unitconver.com/';
const urlList = [];

submitUrlBatch(apiKey, siteUrl, urlList)
    .then(response => {
        if (response !== null) {
            console.log('Response:', response);
        }
    });