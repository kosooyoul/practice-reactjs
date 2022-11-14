const UserApis = {
  fetchUserLite: async (uuid) => {
    // Mock
    const result = {
      'name': 'cookie',
      'uuid': uuid,
    }

    return new Promise(resolve => setTimeout(() => resolve(result), 300)) // Test async
  },
  fetchUserProfile: async (uuid) => {
    // Mock
    const result = {
      "name": "cookie",
      "uuid": uuid,
      "followers": 0,
      "followings": 2,
    }

    return new Promise(resolve => setTimeout(() => resolve(result), 300)) // Test async
  }
}

export default UserApis
