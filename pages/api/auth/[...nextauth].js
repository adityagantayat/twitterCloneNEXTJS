import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0',
    }),
    // ...add more providers here
  ],
})
//63M1fe4KVPZLRkETkOIfZf9EK
//SPBTNnZMFys90u59UezqLb80Sh0SgyKnoVOE1o6z3AU3cDxKdO
// AAAAAAAAAAAAAAAAAAAAAI5icwEAAAAA1lOcRggTg2go5u%2FlBFta9p6Q4LY%3D7Xzol5DfW6bJxwyah1fXWFOZTSyWFNSpLqugBtdRPOE6XJG7KJ
