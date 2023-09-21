import bcrypt from "bcrypt"



//hashing my password
export const hashPassword =async(password)=>{
    const saltRounds=10;
    const hashedPassword=await bcrypt.hash(password,saltRounds)
    return hashedPassword
}

//comparing hashed password with palin password

export const comparePasssword=async(password,hashedPassword)=>{
        return await bcrypt.compare(password,hashedPassword);

}



/*it holds two functions
one will convert your plain text password to hashed password

second will compared the  password with hashed password at the time of login 
 */