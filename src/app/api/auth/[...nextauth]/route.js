import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from 'bcryptjs';

const handler =  NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials){
        await connect()
        try{
          const user = User.findOne({email: credentials.email})
          if(user){
            // check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if(isPasswordCorrect){
              return user
            }
            else{
              throw new Error('Password is incorrect')
            }
          }
          else{
            throw new Error('User not found')
          }
        }
        catch(err){
          throw new Error(err)
        }
      }
    })
  ],
});

// export default handler;

export { handler as GET, handler as POST };