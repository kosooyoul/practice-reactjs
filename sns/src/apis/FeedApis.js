const UserApis = {
  fetchFeeds: async (authorUuid) => {
    console.log(authorUuid)
    // Mock
    const result = [
      { 'id': '636e286b55fc3ad25a8745bb', 'authorUuid': authorUuid, 'text': 'text', 'link': 'https://www.asd.com', 'image': 'https://www.asd.com/test.png', 'video': 'https://www.asd.com/test.mp4', 'readable': 'PUBLIC', 'updatedAt': '2022-11-11T10:48:11.368Z', 'createdAt': '2022-11-11T10:48:11.368Z' },
      { 'id': '636e2818bcc5b15bf97a04c5', 'authorUuid': authorUuid, 'text': 'text', 'link': 'https://www.asd.com', 'image': 'https://www.asd.com/test.png', 'video': 'https://www.asd.com/test.mp4', 'readable': 'PUBLIC', 'updatedAt': '2022-11-11T10:46:48.019Z', 'createdAt': '2022-11-11T10:46:48.019Z' },
      { 'id': '636e252fad5039d7eca148cf', 'authorUuid': authorUuid, 'text': 'text', 'link': 'https://www.asd.com', 'image': 'https://www.asd.com/test.png', 'video': 'https://www.asd.com/test.mp4', 'readable': 'PUBLIC', 'updatedAt': '2022-11-11T10:34:23.844Z', 'createdAt': '2022-11-11T10:34:23.844Z' },
      { 'id': '636e0d094ff500de0323ae71', 'authorUuid': authorUuid, 'text': 'Good What?', 'link': 'https://campus.twosun.com', 'image': null, 'video': null, 'readable': 'PUBLIC', 'updatedAt': '2022-11-11T08:51:21.541Z', 'createdAt': '2022-11-11T08:51:21.541Z' },
      { 'id': '636ddaa309c258127646728f', 'authorUuid': authorUuid, 'text': 'Good Afternoon~~~', 'link': 'https://campus.twosun.com', 'image': null, 'video': null, 'readable': 'PUBLIC', 'updatedAt': '2022-11-11T05:16:19.902Z', 'createdAt': '2022-11-11T05:16:19.902Z' },
      { 'id': '636da00fb93fb5fc13239377', 'authorUuid': authorUuid, 'text': 'Good Morning!!!!', 'link': 'https://campus.twosun.com', 'image': null, 'video': null, 'readable': 'PUBLIC', 'updatedAt': '2022-11-11T01:06:23.096Z', 'createdAt': '2022-11-11T01:06:23.096Z' },
      { 'id': '636ce7ad44c5b1300028ab36', 'authorUuid': authorUuid, 'text': 'Happ New Year!!!???', 'link': null, 'image': null, 'video': null, 'readable': 'PUBLIC', 'updatedAt': '2022-11-11T07:16:48.275Z', 'createdAt': '2022-11-10T11:59:41.562Z' },
      { 'id': '636ce7680899b03ed3b48179', 'authorUuid': authorUuid, 'text': 'Happ New Year!!!???', 'link': null, 'image': null, 'video': null, 'readable': 'PUBLIC', 'updatedAt': '2022-11-11T07:17:12.877Z', 'createdAt': '2022-11-10T11:58:32.488Z' },
    ]

    return new Promise(resolve => setTimeout(() => resolve(result), 300)) // Test async
  }
}

export default UserApis
